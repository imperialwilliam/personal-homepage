import { useCallback, useEffect, useRef, useState } from 'react'
import Engine, {
  type EngineCallbacks,
  type LabelPos,
  type SatInfo,
  type SearchResult,
  type GroupVisibility,
} from '../engine/Engine'
import Hud, { type DataStatus } from '../components/Hud'
import LoadingOverlay from '../components/LoadingOverlay'
import { predictBestPass, type Observer, type PassInfo } from '../engine/passes'

const ISS_LABEL_TEXT = '国际空间站 ISS'

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const engineRef = useRef<Engine | null>(null)

  const [loadingVisible, setLoadingVisible] = useState(true)
  const [progress, setProgress] = useState(0)
  const [statusText, setStatusText] = useState('正在连接 CelesTrak…')

  const [dataStatus, setDataStatus] = useState<DataStatus>('loading')
  const [tleEpochMs, setTleEpochMs] = useState(Date.now())
  const [visibleCount, setVisibleCount] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const [groupCounts, setGroupCounts] = useState<Record<string, number>>({})
  const [groupVisibility, setGroupVisibility] = useState<GroupVisibility>({})

  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])

  const [selected, setSelected] = useState<SatInfo | null>(null)
  const [satLabels, setSatLabels] = useState<{
    iss: LabelPos | null
    sel: LabelPos | null
  }>({ iss: null, sel: null })

  const [playing, setPlaying] = useState(true)
  const [speed, setSpeed] = useState(1)
  const [simTime, setSimTime] = useState(new Date())
  const [refreshing, setRefreshing] = useState(false)

  const [observer, setObserver] = useState<Observer | null>(null)
  const [locating, setLocating] = useState(false)
  const [passInfo, setPassInfo] = useState<PassInfo | null>(null)

  // Mount engine
  useEffect(() => {
    if (!canvasRef.current) return

    const callbacks: EngineCallbacks = {
      onProgress: (p, msg) => {
        setProgress(p)
        if (msg) setStatusText(msg)
      },
      onReady: () => {
        // Delay hiding the overlay so the 700ms fade-out is visible
        setTimeout(() => setLoadingVisible(false), 50)
        const e = engineRef.current
        if (!e) return
        // initialize HUD state from engine
        setDataStatus(e.getDataStatus())
        setTleEpochMs(e.getTleEpochMs())
        setVisibleCount(e.getVisibleCount())
        setTotalCount(e.getTotalCount())
        setGroupCounts(e.getGroupCounts())
        setGroupVisibility(e.getGroupVisibility())
        setPlaying(e.time.playing)
        setSpeed(e.time.speed)
      },
      onDataStatus: (s) => {
        setDataStatus(s)
        const e = engineRef.current
        if (e) setTleEpochMs(e.getTleEpochMs())
      },
      onSelect: (info) => {
        setSelected(info)
      },
      onGroupVisibilityChange: (v) => {
        setGroupVisibility(v)
        const e = engineRef.current
        if (e) setVisibleCount(e.getVisibleCount())
      },
      onLabels: (labels) => {
        setSatLabels(labels)
      },
    }

    let engine: Engine
    try {
      engine = new Engine(canvasRef.current, null as unknown as HTMLElement, callbacks)
    } catch (err) {
      console.error('[Engine.constructor]', err)
      setLoadingVisible(false)
      setStatusText('WebGL 不可用，请使用支持 WebGL 的浏览器')
      return
    }
    engineRef.current = engine
    engine.init().catch((err) => {
      console.error('[Engine.init]', err)
      setLoadingVisible(false)
      setStatusText(typeof err === 'string' ? err : err?.message ?? '初始化失败')
    })

    return () => {
      engine.dispose()
      engineRef.current = null
    }
  }, [])

  // 1Hz clock tick (UTC display) — falls back to wall time if the engine died
  useEffect(() => {
    const id = setInterval(() => {
      const e = engineRef.current
      setSimTime(e ? e.time.now() : new Date())
    }, 1000)
    return () => clearInterval(id)
  }, [])

  // 5Hz detail panel refresh while a satellite is selected
  useEffect(() => {
    if (!selected) return
    const id = setInterval(() => {
      const e = engineRef.current
      if (!e) return
      const info = e.getSelectedInfo()
      if (info) setSelected(info)
    }, 200)
    return () => clearInterval(id)
  }, [selected?.norad])

  // 1Hz header refresh (TLE age string + counts)
  useEffect(() => {
    const id = setInterval(() => {
      const e = engineRef.current
      if (!e) return
      setTleEpochMs((prev) => (e.getTleEpochMs() === prev ? prev : e.getTleEpochMs()))
      setVisibleCount((prev) => (e.getVisibleCount() === prev ? prev : e.getVisibleCount()))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  // Pass prediction for the selected satellite, recomputed every 30 s while
  // an observer is set — countdown itself ticks via panel re-renders.
  useEffect(() => {
    if (!selected || !observer) {
      setPassInfo(null)
      return
    }
    const compute = () => {
      const e = engineRef.current
      const satrec = e?.getSelectedSatrec()
      if (satrec) setPassInfo(predictBestPass(satrec, observer))
    }
    compute()
    const id = setInterval(compute, 30_000)
    return () => clearInterval(id)
  }, [selected?.norad, observer?.latDeg, observer?.lonDeg])

  // ---------- Handlers ----------

  const onRefreshTLE = async () => {
    const e = engineRef.current
    if (!e || refreshing) return
    setRefreshing(true)
    try {
      await e.refreshLive()
    } finally {
      setRefreshing(false)
    }
  }

  const onLocateMe = useCallback(() => {
    if (locating || !('geolocation' in navigator)) return
    setLocating(true)
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setObserver({
          latDeg: pos.coords.latitude,
          lonDeg: pos.coords.longitude,
          altKm: (pos.coords.altitude ?? 0) / 1000,
        })
        setLocating(false)
      },
      () => setLocating(false),
      { enableHighAccuracy: false, timeout: 10_000, maximumAge: 300_000 },
    )
  }, [locating])

  const onToggleGroup = (key: string) => {
    engineRef.current?.setGroupVisible(key, !groupVisibility[key])
  }

  const onSearchChange = (q: string) => {
    setSearchQuery(q)
    setSearchResults(engineRef.current?.search(q) ?? [])
  }

  const onSelectSearch = (norad: string) => {
    engineRef.current?.select(norad)
    setSearchQuery('')
    setSearchResults([])
  }

  const onCloseDetail = () => {
    engineRef.current?.deselect()
  }

  const onTogglePlay = () => {
    const e = engineRef.current
    if (!e) return
    e.time.toggle()
    setPlaying(e.time.playing)
  }

  const onSetSpeed = (n: number) => {
    const e = engineRef.current
    if (!e) return
    e.time.setSpeed(n)
    setPlaying(e.time.playing)
    setSpeed(e.time.speed)
  }

  const onResetNow = () => {
    const e = engineRef.current
    if (!e) return
    e.time.resetToNow()
    setPlaying(e.time.playing)
    setSpeed(e.time.speed)
    setSimTime(e.time.now())
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#04060b]">
      <canvas ref={canvasRef} className="block h-full w-full touch-none" />

      <Hud
        dataStatus={dataStatus}
        tleEpochMs={tleEpochMs}
        refreshing={refreshing}
        onRefreshTLE={onRefreshTLE}
        visibleCount={visibleCount}
        totalCount={totalCount}
        groupCounts={groupCounts}
        groupVisibility={groupVisibility}
        onToggleGroup={onToggleGroup}
        searchResults={searchResults}
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        onSelectSearch={onSelectSearch}
        selected={selected}
        onCloseDetail={onCloseDetail}
        playing={playing}
        speed={speed}
        onTogglePlay={onTogglePlay}
        onSetSpeed={onSetSpeed}
        onResetNow={onResetNow}
        simTime={simTime}
        observer={observer}
        locating={locating}
        onLocateMe={onLocateMe}
        passInfo={passInfo}
        satLabels={satLabels}
        issLabelText={ISS_LABEL_TEXT}
        selectedLabelText={selected?.name ?? ''}
      />

      <LoadingOverlay progress={progress} status={statusText} visible={loadingVisible} />
    </div>
  )
}
