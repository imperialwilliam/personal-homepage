/**
 * Observer pass prediction — answers "when will this satellite be overhead?"
 *
 * Uses the same SGP4 satrec that drives the 3D view, so predictions are
 * consistent with what's on screen. For a fresh LEO TLE the along-track
 * error is ~1 km class, i.e. pass timing good to a few seconds — enough to
 * plan a telephoto shot.
 *
 * All angles in degrees.
 */
import { propagate, gstime, eciToEcf, ecfToLookAngles } from 'satellite.js'

export interface Observer {
  latDeg: number
  lonDeg: number
  /** Elevation above WGS-84 ellipsoid, km */
  altKm: number
}

export type PassState = 'overhead-now' | 'upcoming' | 'none'

export interface PassInfo {
  state: PassState
  /** Max elevation of the best upcoming pass, degrees (0–90) */
  maxElevDeg: number
  /** When max elevation occurs, ms epoch */
  maxElevAtMs: number
  /** Azimuth at max elevation, degrees (0=N, 90=E) */
  azAtMaxDeg: number
  /** Pass window (elevation > 0°), ms epoch; null when state==='none' */
  aosMs: number | null
  losMs: number | null
  /** Current elevation, degrees */
  nowElevDeg: number
}

const DEG = 180 / Math.PI

/** Look angles (elevation/azimuth in degrees) from an observer to a satrec at time t. */
function lookAngles(satrec: any, observerGd: any, tMs: number): { el: number; az: number } | null {
  const date = new Date(tMs)
  const pv = propagate(satrec, date)
  const pos = pv?.position
  if (!pos || typeof pos === 'boolean') return null
  const gmst = gstime(date)
  const ecf = eciToEcf(pos as { x: number; y: number; z: number }, gmst)
  const look = ecfToLookAngles(observerGd, ecf)
  return { el: look.elevation * DEG, az: ((look.azimuth * DEG) + 360) % 360 }
}

interface Segment {
  aos: number
  los: number
  peak: number
  peakAt: number
}

/**
 * Find the best pass (highest max elevation) within the next `horizonMin`
 * minutes for an observer: 10 s coarse scan, then 1 s refinement near the
 * peak. Cheap — ~1,000 propagations, sub-millisecond each.
 */
export function predictBestPass(
  satrec: any,
  observer: Observer,
  horizonMin = 180,
): PassInfo | null {
  const observerGd = {
    latitude: observer.latDeg / DEG,
    longitude: observer.lonDeg / DEG,
    height: observer.altKm,
  }
  const start = Date.now()
  const end = start + horizonMin * 60_000
  const step = 10_000 // 10 s coarse

  const segments: Segment[] = []
  let seg: Segment | null = null
  for (let t = start; t <= end; t += step) {
    const la = lookAngles(satrec, observerGd, t)
    const el = la?.el ?? -90
    if (el > 0) {
      if (!seg) seg = { aos: t, los: t, peak: el, peakAt: t }
      else {
        seg.los = t
        if (el > seg.peak) {
          seg.peak = el
          seg.peakAt = t
        }
      }
    } else if (seg) {
      segments.push(seg)
      seg = null
    }
  }
  if (seg) segments.push(seg)

  const nowLa = lookAngles(satrec, observerGd, start)
  const nowElev = nowLa?.el ?? -90

  const best = segments.length > 0 ? segments.reduce((a, b) => (b.peak > a.peak ? b : a)) : null
  if (!best) {
    return {
      state: 'none',
      maxElevDeg: 0,
      maxElevAtMs: 0,
      azAtMaxDeg: 0,
      aosMs: null,
      losMs: null,
      nowElevDeg: nowElev,
    }
  }

  // Refine the peak ±10 s at 1 s resolution
  let peak = best.peak
  let peakAt = best.peakAt
  for (let t = Math.max(start, best.peakAt - 10_000); t <= best.peakAt + 10_000; t += 1000) {
    const la = lookAngles(satrec, observerGd, t)
    if (la && la.el > peak) {
      peak = la.el
      peakAt = t
    }
  }
  const peakLa = lookAngles(satrec, observerGd, peakAt)

  return {
    state: nowElev > 10 ? 'overhead-now' : 'upcoming',
    maxElevDeg: peak,
    maxElevAtMs: peakAt,
    azAtMaxDeg: peakLa?.az ?? 0,
    aosMs: best.aos,
    losMs: best.los,
    nowElevDeg: nowElev,
  }
}

/** 16-wind compass label for an azimuth in degrees. */
export function compassLabel(azDeg: number): string {
  const dirs = [
    '北', '北东北', '东北', '东东北',
    '东', '东东南', '东南', '南东南',
    '南', '南西南', '西南', '西西南',
    '西', '西西北', '西北', '北西北',
  ]
  const idx = Math.round((((azDeg % 360) + 360) % 360) / 22.5) % 16
  return dirs[idx]
}
