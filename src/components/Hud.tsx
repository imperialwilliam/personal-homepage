import { memo, useEffect, useRef, useState } from 'react'

// ---------- Helpers ----------

const GROUPS = [
  { key: 'starlink', zh: '星链', en: 'Starlink', color: '#7dd3fc', size: 2.1 },
  { key: 'oneweb', zh: '一网', en: 'OneWeb', color: '#c084fc', size: 2.3 },
  { key: 'stations', zh: '空间站', en: 'Stations', color: '#ffffff', size: 5.2 },
  { key: 'gps', zh: 'GPS', en: 'GPS', color: '#4ade80', size: 3.0 },
  { key: 'beidou', zh: '北斗', en: 'BeiDou', color: '#facc15', size: 3.0 },
  { key: 'glonass', zh: '格洛纳斯', en: 'GLONASS', color: '#fb923c', size: 3.0 },
  { key: 'galileo', zh: '伽利略', en: 'Galileo', color: '#818cf8', size: 3.0 },
  { key: 'iridium', zh: '铱星', en: 'Iridium', color: '#f472b6', size: 2.8 },
  { key: 'weather', zh: '气象', en: 'Weather', color: '#2dd4bf', size: 3.2 },
  { key: 'other', zh: '其他', en: 'Others', color: '#8ea2c0', size: 1.9 },
] as const

const cn = (...args: (string | false | undefined | null)[]): string =>
  args.filter(Boolean).join(' ')

function getGroupDef(key: string) {
  return GROUPS.find((g) => g.key === key) ?? GROUPS[GROUPS.length - 1]
}

// ---------- Types ----------

export type DataStatus = 'loading' | 'snapshot' | 'live' | 'snapshot-stale'

export interface GroupVisibility {
  [key: string]: boolean
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
}

export interface HudProps {
  dataStatus: DataStatus
  tleEpochMs: number
  visibleCount: number
  totalCount: number
  groupCounts: Record<string, number>
  groupVisibility: GroupVisibility
  onToggleGroup: (key: string) => void
  searchResults: SearchResult[]
  searchQuery: string
  onSearchChange: (q: string) => void
  onSelectSearch: (norad: string) => void
  selected: SatInfo | null
  onCloseDetail: () => void
  playing: boolean
  speed: number
  onTogglePlay: () => void
  onSetSpeed: (n: number) => void
  onResetNow: () => void
  simTime: Date
  satLabels: {
    iss: { x: number; y: number; visible: boolean } | null
    sel: { x: number; y: number; visible: boolean } | null
  }
  issLabelText: string // "国际空间站 ISS"
  selectedLabelText: string // satellite name
}

// ---------- Sub-components ----------

interface HeaderProps {
  dataStatus: DataStatus
  visibleCount: number
  totalCount: number
  tleEpochMs: number
}

function ageStr(tleEpochMs: number): string {
  const min = (Date.now() - tleEpochMs) / 60000
  if (min < 1) return '刚刚'
  if (min < 60) return `${Math.floor(min)} 分钟前`
  if (min < 2880) return `${Math.floor(min / 60)} 小时前`
  return `${Math.floor(min / 1440)} 天前`
}

function Header({ dataStatus, visibleCount, totalCount, tleEpochMs }: HeaderProps) {
  const isLive = dataStatus === 'live'
  return (
    <div className="pointer-events-none absolute left-0 right-0 top-0 z-20 p-4 md:p-5">
      <div className="text-lg md:text-xl font-semibold tracking-[0.28em] text-slate-100">
        ORBITLIVE
      </div>
      <div className="mt-2 flex items-center gap-2">
        <span
          className={`hidden sm:inline-block glass rounded-full px-2.5 py-1 text-[10px] tracking-wider ${
            isLive ? 'text-emerald-300' : 'text-amber-300'
          }`}
        >
          {isLive ? '● CelesTrak 实时 TLE 已同步' : '● 内置 TLE 快照'}
        </span>
        <div className="mt-1 text-[11px] tracking-wider text-slate-400">
          {visibleCount.toLocaleString()} / {totalCount.toLocaleString()} 颗在轨目标 · TLE 更新于{' '}
          {ageStr(tleEpochMs)}
        </div>
      </div>
    </div>
  )
}

interface SearchBoxProps {
  searchResults: SearchResult[]
  searchQuery: string
  onSearchChange: (q: string) => void
  onSelectSearch: (norad: string) => void
}

function SearchBox({ searchResults, searchQuery, onSearchChange, onSelectSearch }: SearchBoxProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const open = searchResults.length > 0

  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (!containerRef.current) return
      if (!containerRef.current.contains(e.target as Node)) {
        onSearchChange('')
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open, onSearchChange])

  return (
    <div ref={containerRef} className="absolute right-4 top-4 z-30 w-60 md:w-72">
      <div className="glass flex items-center gap-2 rounded-xl px-3 py-2">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="size-4 text-cyan-300/70"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="text"
          className="flex-1 bg-transparent text-sm text-slate-200 placeholder:text-slate-500 outline-none"
          placeholder="搜索卫星：ISS / STARLINK-…"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => onSearchChange('')}
            className="text-slate-500 hover:text-slate-300 text-xs"
          >
            ✕
          </button>
        )}
      </div>
      {open && (
        <div className="glass mt-2 max-h-72 w-full overflow-auto rounded-xl py-1">
          {searchResults.map((r) => {
            const def = getGroupDef(r.groupKey)
            return (
              <button
                key={r.norad}
                type="button"
                onClick={() => onSelectSearch(r.norad)}
                className="flex w-full items-center gap-2 px-3 py-1.5 text-left hover:bg-cyan-400/10"
              >
                <span
                  className="size-2 shrink-0 rounded-full"
                  style={{ background: def.color, boxShadow: `0 0 6px ${def.color}` }}
                />
                <span className="flex-1 truncate">
                  <span className="block truncate text-sm text-slate-200">{r.name}</span>
                  <span className="block text-[10px] text-slate-500">
                    #{r.norad} · {def.zh}
                  </span>
                </span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

interface GroupPanelProps {
  groupCounts: Record<string, number>
  groupVisibility: GroupVisibility
  onToggleGroup: (key: string) => void
}

function GroupPanel({ groupCounts, groupVisibility, onToggleGroup }: GroupPanelProps) {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div className="absolute right-4 top-1/2 z-20 w-44 -translate-y-1/2 md:w-48">
      <div className="glass rounded-2xl p-2.5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[11px] tracking-[0.2em] text-slate-400">星座分组</span>
          <button
            type="button"
            onClick={() => setCollapsed((c) => !c)}
            className="text-slate-400 hover:text-slate-200 text-xs"
          >
            {collapsed ? '+' : '−'}
          </button>
        </div>
        {!collapsed && (
          <div className="space-y-1">
            {GROUPS.map((g) => {
              const visible = groupVisibility[g.key] ?? true
              const count = groupCounts[g.key] ?? 0
              return (
                <button
                  key={g.key}
                  type="button"
                  onClick={() => onToggleGroup(g.key)}
                  className="flex w-full items-center gap-2 rounded-md px-1.5 py-1 hover:bg-cyan-400/10"
                >
                  <span
                    className="size-2 shrink-0 rounded-full"
                    style={{
                      background: g.color,
                      boxShadow: visible ? `0 0 7px ${g.color}` : 'none',
                    }}
                  />
                  <span className="flex-1">
                    <span className="block text-xs text-slate-300">{g.zh}</span>
                    <span className="block text-[10px] text-slate-500">{g.en}</span>
                  </span>
                  <span className="font-num text-[10px] text-slate-500">
                    {count.toLocaleString()}
                  </span>
                </button>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

interface DetailPanelProps {
  selected: SatInfo
  onCloseDetail: () => void
}

function DetailPanel({ selected, onCloseDetail }: DetailPanelProps) {
  const def = getGroupDef(selected.groupKey)
  const groupColor = def.color
  const groupLabel = def.zh

  const days = (Date.now() - selected.tleEpochMs) / 86400000
  const tleAgeStr = days < 1 ? `${(days * 24).toFixed(1)} 小时` : `${days.toFixed(1)} 天`

  const rows: { label: string; value: string }[] = [
    { label: '高度', value: `${selected.altKm.toFixed(1)} km` },
    { label: '速度', value: `${selected.velKmS.toFixed(2)} km/s` },
    {
      label: '纬度 / 经度',
      value: `${Math.abs(selected.lat).toFixed(2)}° ${
        selected.lat >= 0 ? 'N' : 'S'
      } / ${Math.abs(selected.lon).toFixed(2)}° ${selected.lon >= 0 ? 'E' : 'W'}`,
    },
    { label: '轨道周期', value: `${selected.periodMin.toFixed(1)} min` },
    { label: '轨道倾角', value: `${selected.inclDeg.toFixed(2)}°` },
    { label: 'TLE 龄期', value: tleAgeStr },
  ]

  return (
    <div className="absolute bottom-20 left-4 z-20 w-64 md:bottom-5 md:left-5 md:w-72">
      <div className="glass rounded-2xl p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-sm font-semibold text-slate-100">{selected.name}</h3>
            <div className="text-[10px] tracking-wider text-slate-500">
              NORAD #{selected.norad}
            </div>
            <span
              className="mt-1 inline-block rounded-full px-2 py-0.5 text-[10px]"
              style={{
                color: groupColor,
                background: groupColor + '22',
                border: `1px solid ${groupColor}44`,
              }}
            >
              {groupLabel}
            </span>
          </div>
          <button
            type="button"
            onClick={onCloseDetail}
            className="text-slate-500 hover:text-slate-300 text-xs"
          >
            ✕
          </button>
        </div>
        <div className="mt-3 divide-y divide-slate-700/30">
          {rows.map((r) => (
            <div key={r.label} className="flex items-center justify-between py-1">
              <span className="text-[11px] text-slate-500">{r.label}</span>
              <span className="font-num text-xs text-slate-200">{r.value}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 text-[10px] leading-4 text-slate-500">
          轨道线与地面覆盖圈基于 SGP4 对整周期 220 点采样推算
        </div>
      </div>
    </div>
  )
}

interface TimeControlsProps {
  playing: boolean
  speed: number
  onTogglePlay: () => void
  onSetSpeed: (n: number) => void
  onResetNow: () => void
  simTime: Date
}

const SPEEDS = [1, 10, 60, 300, 1000]

function TimeControls({
  playing,
  speed,
  onTogglePlay,
  onSetSpeed,
  onResetNow,
  simTime,
}: TimeControlsProps) {
  const clockStr = `${simTime.toISOString().replace('T', ' ').slice(0, 19)} UTC`
  return (
    <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2">
      <div className="glass flex items-center gap-2 rounded-2xl px-3 py-2 md:px-4">
        <button
          type="button"
          onClick={onResetNow}
          title="回到当前真实时间"
          className="text-[11px] text-slate-300 hover:bg-cyan-400/15 hover:text-cyan-200 rounded-md px-2 py-1"
        >
          ⏮ 现在
        </button>
        <button
          type="button"
          onClick={onTogglePlay}
          className="flex size-7 items-center justify-center rounded-md bg-cyan-400/15 text-cyan-200 hover:bg-cyan-400/25"
        >
          {playing ? '❚❚' : '▶'}
        </button>
        <div className="h-5 w-px bg-slate-600/50" />
        {SPEEDS.map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onSetSpeed(n)}
            className={cn(
              'font-num text-[11px] rounded-md px-2 py-1',
              speed === n
                ? 'bg-cyan-400/20 text-cyan-200'
                : 'text-slate-400 hover:bg-cyan-400/10 hover:text-slate-200',
            )}
          >
            {n}×
          </button>
        ))}
        <div className="hidden sm:block min-w-[148px] text-center font-num text-[11px] tracking-wider text-slate-300">
          {clockStr}
        </div>
      </div>
    </div>
  )
}

function Attribution() {
  return (
    <div className="pointer-events-none absolute bottom-4 right-4 z-10 hidden md:block text-[10px] leading-4 text-slate-600">
      数据：CelesTrak NORAD GP · SGP4 本地推算 · 无 API key
    </div>
  )
}

// ---------- Default Hud ----------

function HudInner(props: HudProps) {
  const {
    dataStatus,
    tleEpochMs,
    visibleCount,
    totalCount,
    groupCounts,
    groupVisibility,
    onToggleGroup,
    searchResults,
    searchQuery,
    onSearchChange,
    onSelectSearch,
    selected,
    onCloseDetail,
    playing,
    speed,
    onTogglePlay,
    onSetSpeed,
    onResetNow,
    simTime,
    satLabels,
    issLabelText,
    selectedLabelText,
  } = props

  return (
    <>
      {satLabels.iss && (
        <div
          className="sat-label"
          style={{
            left: satLabels.iss.x,
            top: satLabels.iss.y,
            display: satLabels.iss.visible ? 'block' : 'none',
          }}
        >
          {issLabelText}
        </div>
      )}
      {satLabels.sel && selected && (
        <div
          className="sat-label sat-label--sel"
          style={{
            left: satLabels.sel.x,
            top: satLabels.sel.y,
            display: satLabels.sel.visible ? 'block' : 'none',
          }}
        >
          {selectedLabelText}
        </div>
      )}

      <Header
        dataStatus={dataStatus}
        visibleCount={visibleCount}
        totalCount={totalCount}
        tleEpochMs={tleEpochMs}
      />
      <SearchBox
        searchResults={searchResults}
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        onSelectSearch={onSelectSearch}
      />
      <GroupPanel
        groupCounts={groupCounts}
        groupVisibility={groupVisibility}
        onToggleGroup={onToggleGroup}
      />
      {selected && <DetailPanel selected={selected} onCloseDetail={onCloseDetail} />}
      <TimeControls
        playing={playing}
        speed={speed}
        onTogglePlay={onTogglePlay}
        onSetSpeed={onSetSpeed}
        onResetNow={onResetNow}
        simTime={simTime}
      />
      <Attribution />
    </>
  )
}

const Hud = memo(HudInner)

export default Hud
