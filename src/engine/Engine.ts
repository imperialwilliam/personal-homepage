import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { propagate, gstime, eciToGeodetic } from 'satellite.js'
import { GROUPS } from './groups'
import { sunDirectionECI } from './sun'
import {
  satPointVertex,
  satPointFragment,
  nightVertex,
  nightFragment,
  atmosphereVertex,
  atmosphereFragment,
} from './shaders'
import { TimeController } from './time'
import {
  loadTLEData,
  fetchGroupsMap,
  fetchLiveTLE,
  parseTLEChunked,
  parseTleEpochMs,
  writeCachedTLE,
  STALE_AFTER_MS,
  type SatRecord,
  type GroupBucket,
  type DataStatus,
} from './data'
import { matchFeatured, getFeatured, relatedNote } from './featured'

const EARTH_RADIUS_KM = 6371
const INV_EARTH_RADIUS = 1 / EARTH_RADIUS_KM
const ISS_NORAD = '25544'
const ORBIT_SAMPLES = 220
const COV_SEGMENTS = 96

export interface LabelPos {
  x: number
  y: number
  visible: boolean
}

export interface SatInfo {
  norad: string
  name: string
  groupKey: string
  altKm: number
  velKmS: number
  lat: number
  lon: number
  periodMin: number
  inclDeg: number
  tleEpochMs: number
}

export interface SearchResult {
  norad: string
  name: string
  groupKey: string
  /** Badge for canonical targets (ISS / CSS / HST) */
  featuredBadge?: string
  /** Dim note for modules & debris, e.g. "舱段 / 相关目标" */
  note?: string
}

export interface GroupVisibility {
  [key: string]: boolean
}

export interface EngineCallbacks {
  onProgress?: (p: number, status: string) => void
  onReady?: () => void
  onDataStatus?: (s: DataStatus) => void
  onSelect?: (info: SatInfo | null) => void
  onGroupVisibilityChange?: (v: GroupVisibility) => void
  onLabels?: (labels: { iss: LabelPos | null; sel: LabelPos | null }) => void
  onTick?: () => void
}

interface EciVec {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  vz: number
}

function propagateSat(satrec: any, date: Date): EciVec | null {
  const r = propagate(satrec, date)
  const pos = r?.position
  const vel = r?.velocity
  if (typeof pos === 'boolean' || typeof vel === 'boolean') return null
  if (!pos || !vel) return null
  return {
    x: pos.x,
    y: pos.y,
    z: pos.z,
    vx: vel.x,
    vy: vel.y,
    vz: vel.z,
  }
}

function eciToThree(
  eci: { x: number; y: number; z: number },
  gmst: number,
): [number, number, number] {
  const cosG = Math.cos(gmst)
  const sinG = Math.sin(gmst)
  const ecefX = cosG * eci.x + sinG * eci.y
  const ecefY = -sinG * eci.x + cosG * eci.y
  const ecefZ = eci.z
  const tx = ecefX * INV_EARTH_RADIUS
  const ty = ecefZ * INV_EARTH_RADIUS
  const tz = -ecefY * INV_EARTH_RADIUS
  return [tx, ty, tz]
}

export class Engine {
  public time: TimeController

  private canvas: HTMLCanvasElement
  private labelHost: HTMLElement
  private callbacks: EngineCallbacks
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private renderer: THREE.WebGLRenderer
  private controls: OrbitControls

  private dataStatus: DataStatus = 'loading'
  private tleEpochMs: number = Date.now()
  private selectedSatRecord: SatRecord | null = null
  private selected: SatRecord | null = null
  private selectedInfo: SatInfo | null = null
  private groupVisibility: GroupVisibility = {}
  private groupCounts: Record<string, number> = {}
  private cursor: number = 0
  private ready: boolean = false
  private rafId: number = 0
  private lastInteract: number = 0
  private orbitDirty: boolean = false
  private lastOrbitBuild: number = 0
  private disposed: boolean = false

  private sats: SatRecord[] = []
  private groups: GroupBucket[] = []
  private groupsMap: Record<string, string> = {}

  private sunLight!: THREE.DirectionalLight
  private nightMat!: THREE.ShaderMaterial
  private clouds!: THREE.Mesh
  private satPoints: THREE.Points[] = []
  /** Per-group target positions (one Float32Array per group, same layout as the
   *  position attribute). Propagation writes here; the render loop eases each
   *  point toward its target so the 1/6-per-frame fan-out is invisible —
   *  no positional jumps, no twinkle. */
  private targetPos: Float32Array[] = []
  private orbitLine!: THREE.Line
  private covLoop!: THREE.Line
  private covFan!: THREE.Mesh
  private selSprite!: THREE.Sprite

  private disposables: { dispose: () => void }[] = []

  private pointerDown: { x: number; y: number } | null = null

  constructor(
    canvas: HTMLCanvasElement,
    labelHost: HTMLElement,
    callbacks: EngineCallbacks = {},
  ) {
    this.canvas = canvas
    this.labelHost = labelHost
    this.callbacks = callbacks
    this.time = new TimeController()

    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x04060b)

    this.camera = new THREE.PerspectiveCamera(45, 1, 0.01, 3000)

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.12
    this.renderer.outputColorSpace = THREE.SRGBColorSpace

    this.controls = new OrbitControls(this.camera, canvas)
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.08
    this.controls.rotateSpeed = 0.55
    this.controls.minDistance = 1.14
    this.controls.maxDistance = 40
    this.controls.autoRotate = true
    this.controls.autoRotateSpeed = -0.28
    this.controls.enablePan = false
    this.controls.addEventListener('start', () => {
      this.controls.autoRotate = false
      this.lastInteract = performance.now()
    })

    for (const g of GROUPS) {
      this.groupVisibility[g.key] = true
      this.groupCounts[g.key] = 0
    }

    this.onResize()
  }

  async init(): Promise<void> {
    const cb = this.callbacks
    cb.onProgress?.(0.02, '正在初始化地球场景…')

    // Build the scene first — the globe + stars render behind the loading
    // overlay while satellite data streams in, so the app never feels frozen.
    this.buildScene()
    this.rafId = requestAnimationFrame(this.animate)

    cb.onProgress?.(0.06, '正在加载卫星轨道数据…')
    const [source, groupsMap] = await Promise.all([
      loadTLEData((p, msg) => cb.onProgress?.(0.06 + p * 0.52, msg)),
      fetchGroupsMap(),
    ])
    if (this.disposed) return
    this.groupsMap = groupsMap

    cb.onProgress?.(0.6, '解析轨道根数…')
    const { sats, groups, avgEpochMs } = await parseTLEChunked(
      source.tleText,
      groupsMap,
      (p, msg) => cb.onProgress?.(0.6 + p * 0.34, msg),
    )
    if (this.disposed) return
    this.sats = sats
    this.groups = groups
    this.tleEpochMs = avgEpochMs
    for (const g of groups) {
      this.groupCounts[g.def.key] = g.sats.length
      this.groupVisibility[g.def.key] = true
    }

    cb.onProgress?.(0.96, `构建 ${sats.length.toLocaleString()} 颗卫星渲染模型…`)
    // Initial positions are hidden; the animate loop fills them within ~6 frames.
    this.buildSatPoints()

    this.dataStatus = source.status
    cb.onDataStatus?.(source.status)
    cb.onProgress?.(1, '即将进入轨道…')

    this.ready = true
    cb.onReady?.()
    const params = new URLSearchParams(window.location.search)
    const sel = params.get('sel')
    if (sel) this.select(sel)

    // Background refresh when data is stale (snapshot, or cache older than 2h)
    const needsRefresh =
      source.status === 'snapshot' ||
      (source.status === 'cached' && Date.now() - source.fetchedAt > STALE_AFTER_MS)
    if (needsRefresh) void this.backgroundSyncLive()
  }

  /** Fetch live TLE from CelesTrak and hot-swap the scene data. */
  async refreshLive(): Promise<boolean> {
    const text = await fetchLiveTLE()
    if (!text || this.disposed) return false
    try {
      const { sats, groups, avgEpochMs } = await parseTLEChunked(text, this.groupsMap)
      if (this.disposed) return false
      this.sats = sats
      this.groups = groups
      for (const g of groups) {
        this.groupCounts[g.def.key] = g.sats.length
      }
      this.rebuildSatPoints()
      this.tleEpochMs = avgEpochMs
      this.dataStatus = 'live'
      this.callbacks.onDataStatus?.('live')
      void writeCachedTLE(text)
      // Re-anchor the selected satellite onto its fresh satrec
      if (this.selectedSatRecord) {
        const sel = this.sats.find((s) => s.norad === this.selectedSatRecord!.norad)
        if (sel) {
          this.selectedSatRecord = sel
          this.orbitDirty = true
          this.lastOrbitBuild = 0
        }
      }
      return true
    } catch {
      return false
    }
  }

  private async backgroundSyncLive(): Promise<void> {
    const ok = await this.refreshLive()
    if (this.disposed) return
    if (!ok && this.dataStatus === 'snapshot') {
      this.dataStatus = 'snapshot-stale'
      this.callbacks.onDataStatus?.('snapshot-stale')
    }
  }

  private buildScene(): void {
    // Lights
    this.sunLight = new THREE.DirectionalLight(0xfff6e8, 2.6)
    this.scene.add(this.sunLight)
    const ambient = new THREE.AmbientLight(0x223048, 0.85)
    this.scene.add(ambient)
    const hemi = new THREE.HemisphereLight(0x2a3c5f, 0x05070d, 0.5)
    this.scene.add(hemi)

    // Textures (WebP — ~69% smaller than the original JPG/PNG set)
    const loader = new THREE.TextureLoader()
    const base = import.meta.env.BASE_URL
    const earthAtmos = loader.load(`${base}textures/earth_atmos_2048.webp`)
    const earthNormal = loader.load(`${base}textures/earth_normal_2048.webp`)
    const earthSpecular = loader.load(`${base}textures/earth_specular_2048.webp`)
    const earthLights = loader.load(`${base}textures/earth_lights_2048.webp`)
    const earthClouds = loader.load(`${base}textures/earth_clouds_1024.webp`)
    earthAtmos.colorSpace = THREE.SRGBColorSpace
    earthClouds.colorSpace = THREE.SRGBColorSpace
    earthLights.colorSpace = THREE.SRGBColorSpace

    // Earth surface
    const earthGeo = new THREE.SphereGeometry(1, 96, 72)
    const earthMat = new THREE.MeshPhongMaterial({
      map: earthAtmos,
      normalMap: earthNormal,
      normalScale: new THREE.Vector2(0.85, 0.85),
      specularMap: earthSpecular,
      specular: new THREE.Color(0x1d2f42),
      shininess: 24,
    })
    if (earthMat.map) {
      earthMat.map.anisotropy = this.renderer.capabilities.getMaxAnisotropy()
    }
    const earthMesh = new THREE.Mesh(earthGeo, earthMat)
    this.scene.add(earthMesh)
    this.disposables.push(earthGeo, earthMat, earthAtmos, earthNormal, earthSpecular)

    // Night lights
    const nightGeo = new THREE.SphereGeometry(1.0012, 96, 72)
    this.nightMat = new THREE.ShaderMaterial({
      uniforms: {
        uMap: { value: earthLights },
        uSunDir: { value: new THREE.Vector3() },
        uIntensity: { value: 1.35 },
      },
      vertexShader: nightVertex,
      fragmentShader: nightFragment,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
    })
    const nightMesh = new THREE.Mesh(nightGeo, this.nightMat)
    this.scene.add(nightMesh)
    this.disposables.push(nightGeo, this.nightMat, earthLights)

    // Clouds
    const cloudsGeo = new THREE.SphereGeometry(1.014, 64, 48)
    const cloudsMat = new THREE.MeshPhongMaterial({
      map: earthClouds,
      transparent: true,
      opacity: 0.42,
      depthWrite: false,
    })
    this.clouds = new THREE.Mesh(cloudsGeo, cloudsMat)
    this.scene.add(this.clouds)
    this.disposables.push(cloudsGeo, cloudsMat, earthClouds)

    // Atmosphere
    const atmGeo = new THREE.SphereGeometry(1.028, 64, 48)
    const atmMat = new THREE.ShaderMaterial({
      vertexShader: atmosphereVertex,
      fragmentShader: atmosphereFragment,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
    })
    const atmMesh = new THREE.Mesh(atmGeo, atmMat)
    this.scene.add(atmMesh)
    this.disposables.push(atmGeo, atmMat)

    // Stars
    this.buildStars(3200, 1.5, 0.85)
    this.buildStars(160, 2.7, 0.95)

    // Satellite points
    this.buildSatPoints()

    // Selection visuals
    this.buildSelectionVisuals()

    // Initial camera position based on sun direction
    const date = this.time.now()
    const gmst = gstime(date)
    const [sx, sy, sz] = sunDirectionECI(date, gmst)
    this.camera.position.set(
      sx * 2.15 - sz * 0.8,
      sy * 1.7 + 0.5,
      sz * 2.15 + sx * 0.8,
    )
    this.controls.update()

    // Bind event listeners
    window.addEventListener('resize', this.onResize)
    this.canvas.addEventListener('pointerdown', this.onPointerDown)
    this.canvas.addEventListener('pointerup', this.onPointerUp)
    window.addEventListener('keydown', this.onKeyDown)
  }

  private buildStars(count: number, size: number, opacity: number): void {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const u = Math.random() * 2 - 1
      const theta = Math.random() * Math.PI * 2
      const r = Math.sqrt(1 - u * u)
      const dist = 280 + Math.random() * 320
      positions[i * 3] = r * Math.cos(theta) * dist
      positions[i * 3 + 1] = u * dist
      positions[i * 3 + 2] = r * Math.sin(theta) * dist

      const b = 0.35 + Math.random() * 0.65
      const bluish = Math.random() < 0.2
      const factor = bluish ? b * 0.85 : b * 0.92
      colors[i * 3] = factor
      colors[i * 3 + 1] = factor
      colors[i * 3 + 2] = bluish ? b : factor
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    const mat = new THREE.PointsMaterial({
      size,
      sizeAttenuation: false,
      vertexColors: true,
      transparent: true,
      opacity,
    })
    const points = new THREE.Points(geo, mat)
    points.frustumCulled = false
    this.scene.add(points)
    this.disposables.push(geo, mat)
  }

  private buildSatPoints(): void {
    const pixelRatio = this.renderer.getPixelRatio()

    for (const group of this.groups) {
      if (group.sats.length === 0) continue
      const def = group.def
      // All points start hidden (far below the globe). The animate loop
      // propagates 1/6 of the fleet per frame, so every position is real
      // within ~6 frames (~100 ms) — no multi-second main-thread freeze.
      const positions = new Float32Array(group.sats.length * 3)
      for (let i = 0; i < group.sats.length; i++) {
        positions[i * 3] = 0
        positions[i * 3 + 1] = -1e5
        positions[i * 3 + 2] = 0
      }
      // Mirror target buffer — starts hidden like the geometry.
      const target = new Float32Array(positions)
      this.targetPos.push(target)
      const geo = new THREE.BufferGeometry()
      const attr = new THREE.BufferAttribute(positions, 3)
      attr.setUsage(THREE.DynamicDrawUsage)
      geo.setAttribute('position', attr)
      const mat = new THREE.ShaderMaterial({
        uniforms: {
          uColor: { value: new THREE.Color(def.color).multiplyScalar(1.25) },
          uSize: { value: def.size },
          uPixelRatio: { value: pixelRatio },
          uOpacity: { value: 0.72 },
        },
        vertexShader: satPointVertex,
        fragmentShader: satPointFragment,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
      const points = new THREE.Points(geo, mat)
      points.frustumCulled = false
      points.userData = { group, groupKey: def.key }
      points.visible = this.groupVisibility[def.key] ?? true
      this.scene.add(points)
      this.satPoints.push(points)
      this.disposables.push(geo, mat)
    }
  }

  private rebuildSatPoints(): void {
    for (const p of this.satPoints) {
      this.scene.remove(p)
      p.geometry.dispose()
      const mat = p.material as THREE.Material
      mat.dispose()
    }
    this.satPoints = []
    this.targetPos = []
    this.buildSatPoints()
  }

  private buildSelectionVisuals(): void {
    // Orbit line
    const orbitGeo = new THREE.BufferGeometry()
    orbitGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array(ORBIT_SAMPLES * 3), 3),
    )
    const orbitMat = new THREE.LineBasicMaterial({
      color: 0xf0a83c,
      transparent: true,
      opacity: 0.95,
    })
    this.orbitLine = new THREE.Line(orbitGeo, orbitMat)
    this.orbitLine.visible = false
    this.scene.add(this.orbitLine)
    this.disposables.push(orbitGeo, orbitMat)

    // Coverage loop (96 segments + closing vertex)
    const covGeo = new THREE.BufferGeometry()
    covGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array((COV_SEGMENTS + 1) * 3), 3),
    )
    const covMat = new THREE.LineBasicMaterial({
      color: 0xf0a83c,
      transparent: true,
      opacity: 0.7,
    })
    this.covLoop = new THREE.Line(covGeo, covMat)
    this.covLoop.visible = false
    this.scene.add(this.covLoop)
    this.disposables.push(covGeo, covMat)

    // Coverage fan (96 triangles, 3 vertices each)
    const fanGeo = new THREE.BufferGeometry()
    fanGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array(COV_SEGMENTS * 3 * 3), 3),
    )
    const fanMat = new THREE.MeshBasicMaterial({
      color: 0xf0a83c,
      transparent: true,
      opacity: 0.06,
      side: THREE.DoubleSide,
      depthWrite: false,
    })
    this.covFan = new THREE.Mesh(fanGeo, fanMat)
    this.covFan.visible = false
    this.scene.add(this.covFan)
    this.disposables.push(fanGeo, fanMat)

    // Selection sprite
    const canvas = document.createElement('canvas')
    canvas.width = 128
    canvas.height = 128
    const ctx = canvas.getContext('2d')!
    ctx.strokeStyle = '#ffffff'
    ctx.lineWidth = 6
    ctx.beginPath()
    ctx.arc(64, 64, 44, 0, Math.PI * 2)
    ctx.stroke()
    ctx.fillStyle = '#ffffff'
    ctx.beginPath()
    ctx.arc(64, 64, 8, 0, Math.PI * 2)
    ctx.fill()
    const tex = new THREE.CanvasTexture(canvas)
    const spriteMat = new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
    })
    this.selSprite = new THREE.Sprite(spriteMat)
    this.selSprite.scale.set(0.034, 0.034, 1)
    this.selSprite.visible = false
    this.scene.add(this.selSprite)
    this.disposables.push(tex, spriteMat)
  }

  private animate = (): void => {
    if (this.disposed) return
    this.rafId = requestAnimationFrame(this.animate)

    const date = this.time.now()
    const gmst = gstime(date)

    // Sun direction
    const [sx, sy, sz] = sunDirectionECI(date, gmst)
    this.sunLight.position.set(sx * 10, sy * 10, sz * 10)
    ;(this.nightMat.uniforms.uSunDir.value as THREE.Vector3).set(sx, sy, sz)

    // Clouds rotation
    this.clouds.rotation.y += 16e-5

    // AutoRotate idle
    if (!this.controls.autoRotate && performance.now() - this.lastInteract > 12000) {
      this.controls.autoRotate = true
    }

    // Propagate 1/6 of satellites into per-group target buffers (round-robin)
    const total = Math.max(1, this.sats.length)
    const stride = Math.max(1, Math.floor(this.sats.length / 6))
    for (let gi = 0; gi < this.satPoints.length; gi++) {
      const points = this.satPoints[gi]
      const group = points.userData.group as GroupBucket
      const sats = group.sats
      if (sats.length === 0) continue
      const targetArr = this.targetPos[gi]
      const groupStride = Math.min(stride, sats.length)
      for (let j = 0; j < groupStride; j++) {
        const idx = (this.cursor + j) % sats.length
        const sat = sats[idx]
        const eci = propagateSat(sat.satrec, date)
        if (!eci) {
          targetArr[idx * 3] = 0
          targetArr[idx * 3 + 1] = -1e5
          targetArr[idx * 3 + 2] = 0
          continue
        }
        const [tx, ty, tz] = eciToThree(eci, gmst)
        targetArr[idx * 3] = tx
        targetArr[idx * 3 + 1] = ty
        targetArr[idx * 3 + 2] = tz
      }
    }
    this.cursor = (this.cursor + stride) % total

    // Ease every point toward its propagated target. The fan-out above writes
    // only 1/6 of the fleet per frame; easing makes updates continuous so the
    // ~100ms propagation cycle never shows as visible positional jumps,
    // twinkling or screen flicker.
    const EASE = 0.26
    for (let gi = 0; gi < this.satPoints.length; gi++) {
      const points = this.satPoints[gi]
      const posAttr = points.geometry.attributes.position as THREE.BufferAttribute
      const arr = posAttr.array as Float32Array
      const targetArr = this.targetPos[gi]
      const sats = (points.userData.group as GroupBucket).sats
      let dirty = false
      for (let k = 0; k < sats.length; k++) {
        const k3 = k * 3
        const t0 = arr[k3], t1 = arr[k3 + 1], t2 = arr[k3 + 2]
        const n0 = targetArr[k3], n1 = targetArr[k3 + 1], n2 = targetArr[k3 + 2]
        if (n1 < -9e4) {
          // Hidden — only touch the attribute if it isn't already
          if (t1 !== -1e5) {
            arr[k3] = 0
            arr[k3 + 1] = -1e5
            arr[k3 + 2] = 0
            dirty = true
          }
          continue
        }
        if (Math.abs(n1 - t1) < 1e-3 && Math.abs(n0 - t0) < 1e-3 && Math.abs(n2 - t2) < 1e-3) continue
        arr[k3] = t0 + (n0 - t0) * EASE
        arr[k3 + 1] = t1 + (n1 - t1) * EASE
        arr[k3 + 2] = t2 + (n2 - t2) * EASE
        dirty = true
      }
      if (dirty) posAttr.needsUpdate = true
    }

    // Selected satellite visuals
    let selThreePos: THREE.Vector3 | null = null
    if (this.selectedSatRecord) {
      const eci = propagateSat(this.selectedSatRecord.satrec, date)
      if (eci) {
        const [tx, ty, tz] = eciToThree(eci, gmst)
        selThreePos = new THREE.Vector3(tx, ty, tz)
        this.selSprite.position.copy(selThreePos)
        const s = 0.034 + 0.007 * Math.sin(performance.now() * 0.005)
        this.selSprite.scale.set(s, s, 1)

        const altKm =
          Math.hypot(eci.x, eci.y, eci.z) - EARTH_RADIUS_KM
        const earthCentralAngle = Math.acos(1 / (1 + altKm / EARTH_RADIUS_KM))
        this.updateCoverage(selThreePos, earthCentralAngle)

        const info = this.computeSatInfo(this.selectedSatRecord, date, eci)
        if (info) this.selectedInfo = info

        if (this.orbitDirty && performance.now() - this.lastOrbitBuild > 1100) {
          this.rebuildOrbitLine(this.selectedSatRecord, date)
          this.orbitDirty = false
          this.lastOrbitBuild = performance.now()
        }
      }
      this.orbitLine.visible = true
      this.covLoop.visible = true
      this.covFan.visible = true
      this.selSprite.visible = true
    }

    // HTML label positions
    this.updateLabels(date, gmst, selThreePos)

    // Controls + render
    this.controls.update()
    this.renderer.render(this.scene, this.camera)

    this.callbacks.onTick?.()
  }

  private updateCoverage(satPos: THREE.Vector3, earthCentralAngle: number): void {
    const satDir = satPos.clone().normalize()
    let up: THREE.Vector3
    if (Math.abs(satDir.y) > 0.9) {
      up = new THREE.Vector3(1, 0, 0)
    } else {
      up = new THREE.Vector3(0, 1, 0)
    }
    const v1 = new THREE.Vector3().crossVectors(up, satDir).normalize()
    const v2 = new THREE.Vector3().crossVectors(satDir, v1).normalize()

    const cosE = Math.cos(earthCentralAngle)
    const sinE = Math.sin(earthCentralAngle)

    const loopArr = this.covLoop.geometry.attributes.position.array as Float32Array
    const fanArr = this.covFan.geometry.attributes.position.array as Float32Array
    const center = satDir.clone().multiplyScalar(1.0016)

    // Pre-compute ring points
    const ringPoints: number[] = new Array((COV_SEGMENTS + 1) * 3)
    for (let k = 0; k <= COV_SEGMENTS; k++) {
      const angle = (k / COV_SEGMENTS) * Math.PI * 2
      const cosA = Math.cos(angle)
      const sinA = Math.sin(angle)
      const px = (cosE * satDir.x + sinE * (cosA * v1.x + sinA * v2.x)) * 1.0016
      const py = (cosE * satDir.y + sinE * (cosA * v1.y + sinA * v2.y)) * 1.0016
      const pz = (cosE * satDir.z + sinE * (cosA * v1.z + sinA * v2.z)) * 1.0016
      ringPoints[k * 3] = px
      ringPoints[k * 3 + 1] = py
      ringPoints[k * 3 + 2] = pz
      loopArr[k * 3] = px
      loopArr[k * 3 + 1] = py
      loopArr[k * 3 + 2] = pz
    }
    this.covLoop.geometry.attributes.position.needsUpdate = true

    // Fan: 96 triangles, each = (center, ring[k], ring[k+1])
    for (let k = 0; k < COV_SEGMENTS; k++) {
      const ti = k * 9
      fanArr[ti] = center.x
      fanArr[ti + 1] = center.y
      fanArr[ti + 2] = center.z
      fanArr[ti + 3] = ringPoints[k * 3]
      fanArr[ti + 4] = ringPoints[k * 3 + 1]
      fanArr[ti + 5] = ringPoints[k * 3 + 2]
      fanArr[ti + 6] = ringPoints[(k + 1) * 3]
      fanArr[ti + 7] = ringPoints[(k + 1) * 3 + 1]
      fanArr[ti + 8] = ringPoints[(k + 1) * 3 + 2]
    }
    this.covFan.geometry.attributes.position.needsUpdate = true
  }

  private rebuildOrbitLine(sat: SatRecord, date: Date): void {
    const satrec = sat.satrec
    const period = (2 * Math.PI / satrec.no) as number
    const arr = this.orbitLine.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < ORBIT_SAMPLES; i++) {
      const t = (i / ORBIT_SAMPLES) * period
      const sampleDate = new Date(date.getTime() + t * 60000)
      const eci = propagateSat(satrec, sampleDate)
      if (!eci) {
        arr[i * 3] = 0
        arr[i * 3 + 1] = -1e5
        arr[i * 3 + 2] = 0
        continue
      }
      const sampleGmst = gstime(sampleDate)
      const [tx, ty, tz] = eciToThree(eci, sampleGmst)
      arr[i * 3] = tx
      arr[i * 3 + 1] = ty
      arr[i * 3 + 2] = tz
    }
    this.orbitLine.geometry.attributes.position.needsUpdate = true
  }

  private updateLabels(
    date: Date,
    gmst: number,
    selThreePos: THREE.Vector3 | null,
  ): void {
    const width = this.canvas.clientWidth
    const height = this.canvas.clientHeight
    const camDir = this.camera.position.clone().normalize()

    let issLabel: LabelPos | null = null
    const issSat = this.sats.find((s) => s.norad === ISS_NORAD)
    if (issSat) {
      const eci = propagateSat(issSat.satrec, date)
      if (eci) {
        const [tx, ty, tz] = eciToThree(eci, gmst)
        const v = new THREE.Vector3(tx, ty, tz)
        issLabel = this.projectLabel(v, width, height, camDir)
      }
    }

    let selLabel: LabelPos | null = null
    if (selThreePos) {
      selLabel = this.projectLabel(selThreePos, width, height, camDir)
    }

    this.callbacks.onLabels?.({ iss: issLabel, sel: selLabel })
  }

  private projectLabel(
    pos: THREE.Vector3,
    width: number,
    height: number,
    camDir: THREE.Vector3,
  ): LabelPos {
    const satDir = pos.clone().normalize()
    const dot = satDir.dot(camDir)
    const visible = dot >= 0.12
    const ndc = pos.clone().project(this.camera)
    const x = (ndc.x * 0.5 + 0.5) * width
    const y = (-ndc.y * 0.5 + 0.5) * height
    return { x, y, visible }
  }

  private computeSatInfo(
    sat: SatRecord,
    date: Date,
    eci?: EciVec | null,
  ): SatInfo | null {
    const r = eci ?? propagateSat(sat.satrec, date)
    if (!r) return null
    const altKm = Math.hypot(r.x, r.y, r.z) - EARTH_RADIUS_KM
    const velKmS = Math.hypot(r.vx, r.vy, r.vz)
    const geo = eciToGeodetic({ x: r.x, y: r.y, z: r.z }, gstime(date))
    const lat = (geo.latitude * 180) / Math.PI
    const lon = (geo.longitude * 180) / Math.PI
    const periodMin = (2 * Math.PI) / sat.satrec.no
    const inclDeg = (sat.satrec.inclo * 180) / Math.PI
    const tleEpochMs = parseTleEpochMs(sat.satrec)
    return {
      norad: sat.norad,
      name: sat.name,
      groupKey: sat.groupKey,
      altKm,
      velKmS,
      lat,
      lon,
      periodMin,
      inclDeg,
      tleEpochMs,
    }
  }

  select(norad: string): void {
    const sat = this.sats.find((s) => s.norad === norad)
    if (!sat) return
    this.selectedSatRecord = sat
    this.selected = sat
    this.orbitDirty = true
    this.lastOrbitBuild = 0
    const info = this.computeSatInfo(sat, this.time.now())
    if (info) {
      this.selectedInfo = info
      history.replaceState(null, '', '?sel=' + encodeURIComponent(norad))
      this.callbacks.onSelect?.(info)
    }
  }

  deselect(): void {
    this.selectedSatRecord = null
    this.selected = null
    this.selectedInfo = null
    this.orbitLine.visible = false
    this.covLoop.visible = false
    this.covFan.visible = false
    this.selSprite.visible = false
    history.replaceState(null, '', window.location.pathname)
    this.callbacks.onSelect?.(null)
  }

  setGroupVisible(key: string, visible: boolean): void {
    this.groupVisibility[key] = visible
    for (const p of this.satPoints) {
      if (p.userData.groupKey === key) p.visible = visible
    }
    this.callbacks.onGroupVisibilityChange?.({ ...this.groupVisibility })
  }

  search(query: string): SearchResult[] {
    const q = query.trim().toLowerCase()
    if (!q) return []
    const featuredNorads = new Set(matchFeatured(q).map((f) => f.norad))

    interface Scored extends SearchResult {
      score: number
    }
    const scored: Scored[] = []
    for (const sat of this.sats) {
      const name = sat.name.toLowerCase()
      const norad = sat.norad
      let score = 0
      if (featuredNorads.has(norad)) score = 100
      else if (name.startsWith(q) || norad.startsWith(q)) score = 20
      else if (name.includes(q) || norad.includes(q)) score = 10
      if (score === 0) continue

      const featured = getFeatured(norad)
      const note = relatedNote(sat.name, norad)
      if (note) score -= 8 // modules/debris rank below canonical objects
      if (featured) score = 100

      scored.push({
        norad,
        name: sat.name,
        groupKey: sat.groupKey,
        featuredBadge: featured?.badge,
        note: note ?? undefined,
        score,
      })
    }
    scored.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name))
    return scored.slice(0, 9).map(({ score: _score, ...r }) => r)
  }

  getGroupCounts(): Record<string, number> {
    return { ...this.groupCounts }
  }

  getGroupVisibility(): GroupVisibility {
    return { ...this.groupVisibility }
  }

  getVisibleCount(): number {
    let count = 0
    for (const g of GROUPS) {
      if (this.groupVisibility[g.key]) {
        count += this.groupCounts[g.key] ?? 0
      }
    }
    return count
  }

  getTotalCount(): number {
    return this.sats.length
  }

  getDataStatus(): DataStatus {
    return this.dataStatus
  }

  getTleEpochMs(): number {
    return this.tleEpochMs
  }

  getSelectedInfo(): SatInfo | null {
    return this.selectedInfo
  }

  /** Satrec of the currently selected satellite (for pass prediction). */
  getSelectedSatrec(): any | null {
    return this.selectedSatRecord?.satrec ?? null
  }

  private onResize = (): void => {
    const w = this.canvas.clientWidth
    const h = this.canvas.clientHeight
    if (w === 0 || h === 0) return
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(w, h, false)
  }

  private onPointerDown = (e: PointerEvent): void => {
    this.pointerDown = { x: e.clientX, y: e.clientY }
  }

  private onPointerUp = (e: PointerEvent): void => {
    if (!this.pointerDown) return
    const dx = e.clientX - this.pointerDown.x
    const dy = e.clientY - this.pointerDown.y
    this.pointerDown = null
    if (Math.hypot(dx, dy) >= 6) return

    const width = this.canvas.clientWidth
    const height = this.canvas.clientHeight
    const ndc = new THREE.Vector2(
      (e.clientX / width) * 2 - 1,
      -(e.clientY / height) * 2 + 1,
    )
    const raycaster = new THREE.Raycaster()
    raycaster.params.Points.threshold = 0.022
    raycaster.setFromCamera(ndc, this.camera)
    const hits = raycaster.intersectObjects(
      this.satPoints.filter((p) => p.visible),
      false,
    )
    if (hits.length > 0) {
      const hit = hits[0]
      const group = hit.object.userData.group as GroupBucket
      const idx = hit.index
      if (typeof idx === 'number') {
        const sat = group.sats[idx]
        if (sat) this.select(sat.norad)
      }
    }
  }

  private onKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Escape') this.deselect()
  }

  dispose(): void {
    this.disposed = true
    cancelAnimationFrame(this.rafId)
    window.removeEventListener('resize', this.onResize)
    this.canvas.removeEventListener('pointerdown', this.onPointerDown)
    this.canvas.removeEventListener('pointerup', this.onPointerUp)
    window.removeEventListener('keydown', this.onKeyDown)
    this.controls.dispose()
    for (const d of this.disposables) {
      try {
        d.dispose()
      } catch {
        // ignore
      }
    }
    this.disposables = []
    this.renderer.dispose()
    this.scene.clear()
  }
}

export default Engine
