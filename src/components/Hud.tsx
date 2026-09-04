import { memo, useEffect, useRef, useState } from 'react'
import { GROUPS } from '../engine/groups'
import { FEATURED } from '../engine/featured'
import { CITIES, type CityDef } from '../engine/cities'
import type { Observer, PassInfo } from '../engine/passes'
import { compassLabel } from '../engine/passes'

// ---------- Helpers ----------

const cn = (...args: (string | false | undefined | null)[]): string =>
  args.filter(Boolean).join(' ')

function getGroupDef(key: string) {
  return GROUPS.find((g) => g.key === key) ?? GROUPS[GROUPS.length - 1]
}

function ageStr(tleEpochMs: number): string {
  const min = (Date.now() - tleEpochMs) / 60000
  if (min < 1) return '刚刚'
  if (min < 60) return `${Math.floor(min)} 分钟前`
  if (min < 2880) return `${Math.floor(min / 60)} 小时前`
  return `${Math.floor(min / 1440)} 天前`
}

function localTime(ms: number): string {
  return new Date(ms).toLocaleTimeString('zh-CN', { hour12: false })
}

function countdown(ms: number): string {
  const s = Math.max(0, Math.round((ms - Date.now()) / 1000))
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const sec = s % 60
  if (h > 0) return `${h} 时 ${m} 分`
  if (m > 0) return `${m} 分 ${String(sec).padStart(2, '0')} 秒`
  return `${sec} 秒`
}

// ---------- Types ----------

export type DataStatus = 'loading' | 'snapshot' | 'live' | 'cached' | 'snapshot-stale'

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
  featuredBadge?: string
  note?: string
}

export interface HudProps {
  dataStatus: DataStatus
  tleEpochMs: number
  refreshing: boolean
  onRefreshTLE: () => void
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
  observer: Observer | null
  locating: boolean
  onLocateMe: () => void
  city: CityDef | null
  onSelectCity: (c: CityDef) => void
  passInfo: PassInfo | null
  satLabels: {
    iss: { x: number; y: number; visible: boolean } | null
    sel: { x: number; y: number; visible: boolean } | null
  }
  issLabelText: string
  selectedLabelText: string
}

// ---------- Sub-components ----------

function MicroLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('text-[9px] uppercase tracking-[0.26em] text-[var(--ink-faint)]', className)}>
      {children}
    </div>
  )
}

interface HeaderProps {
  dataStatus: DataStatus
  visibleCount: number
  totalCount: number
  tleEpochMs: number
  refreshing: boolean
  onRefresh: () => void
  simTime: Date
}

function liveLabel(dataStatus: DataStatus): { tag: string; dot: string } {
  switch (dataStatus) {
    case 'live':
      return { tag: 'LIVE · CELESTRAK 实时', dot: '' }
    case 'cached':
      return { tag: 'LIVE · 今日已同步', dot: '' }
    case 'snapshot':
      return { tag: '内置快照', dot: 'opacity-40' }
    case 'snapshot-stale':
      return { tag: '内置快照 · 实时同步失败', dot: 'opacity-40' }
    default:
      return { tag: '连接中…', dot: 'opacity-40' }
  }
}

function Header({
  dataStatus,
  visibleCount,
  totalCount,
  tleEpochMs,
  refreshing,
  onRefresh,
  simTime,
}: HeaderProps) {
  const { tag, dot } = liveLabel(dataStatus)
  const utc = `${simTime.toISOString().slice(11, 19)} UTC`
  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-20 border-b border-[var(--hairline)] bg-[rgba(4,6,11,0.4)] backdrop-blur-xl">
      <div className="flex items-end justify-between px-4 pb-2.5 pt-3 md:px-6 md:pb-3 md:pt-4">
        {/* Wordmark */}
        <div className="rise rise-1">
          <h1 className="font-display text-[15px] font-semibold tracking-[0.42em] text-[var(--ink)] md:text-[17px]">
            ZENITH
          </h1>
          <MicroLabel className="mt-1 hidden sm:block">
            Real-time satellite tracker
          </MicroLabel>
        </div>

        {/* Live telemetry */}
        <div className="flex items-center gap-3 md:gap-5">
          <div className="hidden text-right sm:block">
            <div className="flex items-center justify-end gap-2">
              <span className={cn('pulse-dot', dot)} />
              <span className="text-[11px] font-semibold tracking-[0.14em] text-[var(--accent)]">
                {tag}
              </span>
            </div>
            <MicroLabel className="mt-1">
              SGP4 逐秒推算 · 轨道根数 {ageStr(tleEpochMs)}
            </MicroLabel>
          </div>

          <div className="hidden text-right md:block">
            <div className="mono text-[15px] font-medium tracking-[0.08em] text-[var(--ink)]">
              {utc}
            </div>
            <MicroLabel className="mt-1">
              {visibleCount.toLocaleString()} / {totalCount.toLocaleString()} tracked
            </MicroLabel>
          </div>

          <button
            type="button"
            onClick={onRefresh}
            disabled={refreshing}
            title="从 CelesTrak 刷新实时轨道根数"
            className="pointer-events-auto flex size-8 items-center justify-center rounded-full border border-[var(--hairline)] text-[var(--ink-dim)] transition-colors hover:border-[var(--accent)]/50 hover:text-[var(--accent)] disabled:opacity-50"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className={cn('size-3.5', refreshing && 'animate-spin')}
            >
              <path d="M21 12a9 9 0 1 1-2.64-6.36" />
              <path d="M21 3v6h-6" />
            </svg>
          </button>
        </div>
      </div>
    </header>
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
  const [focused, setFocused] = useState(false)
  const open = focused && searchQuery.trim().length > 0 && searchResults.length > 0

  useEffect(() => {
    if (!open && !focused) return
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setFocused(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open, focused])

  const select = (norad: string) => {
    onSelectSearch(norad)
    setFocused(false)
  }

  return (
    <div ref={containerRef} className="absolute right-4 top-[64px] z-30 w-[280px] md:right-6 md:top-[76px] md:w-[320px]">
      <div className="panel rise rise-2 flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="size-3.5 shrink-0 text-[var(--accent)]"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="text"
          className="mono min-w-0 flex-1 bg-transparent text-[12px] tracking-wide text-[var(--ink)] outline-none"
          placeholder="搜索 NORAD / 名称 / 天宫…"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          onFocus={() => setFocused(true)}
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => onSearchChange('')}
            className="text-[var(--ink-faint)] transition-colors hover:text-[var(--ink-dim)]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-3.5">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Featured quick-select chips */}
      {focused && !searchQuery && (
        <div className="panel rise mt-2 rounded-2xl p-2.5">
          <MicroLabel className="px-1.5 pb-1.5 pt-0.5">快速锁定 · Quick lock</MicroLabel>
          <div className="space-y-0.5">
            {FEATURED.map((f) => (
              <button
                key={f.norad}
                type="button"
                onClick={() => select(f.norad)}
                className="flex w-full items-center justify-between rounded-xl px-2.5 py-2 text-left transition-colors hover:bg-[var(--accent-soft)]"
              >
                <span className="text-[12px] font-medium text-[var(--ink)]">{f.badge}</span>
                <span className="mono text-[10px] text-[var(--ink-faint)]">#{f.norad}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      {open && (
        <div className="panel mt-2 max-h-[320px] overflow-auto rounded-2xl py-1.5">
          {searchResults.map((r) => {
            const def = getGroupDef(r.groupKey)
            return (
              <button
                key={r.norad}
                type="button"
                onClick={() => select(r.norad)}
                className="scan-in flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left transition-colors hover:bg-[var(--accent-soft)]"
              >
                <span
                  className="size-1.5 shrink-0 rounded-full"
                  style={{ background: def.color }}
                />
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-1.5">
                    <span
                      className={cn(
                        'truncate text-[12px]',
                        r.note ? 'text-[var(--ink-dim)]' : 'text-[var(--ink)]',
                      )}
                    >
                      {r.name}
                    </span>
                    {r.featuredBadge && (
                      <span className="shrink-0 rounded-full border border-[var(--accent)]/40 bg-[var(--accent-soft)] px-2 py-px text-[9px] font-semibold tracking-wide text-[var(--accent)]">
                        {r.featuredBadge}
                      </span>
                    )}
                  </span>
                  <span className="mono mt-0.5 block text-[10px] text-[var(--ink-faint)]">
                    #{r.norad}
                    {r.note ? ` · ${r.note}` : ` · ${def.zh}`}
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
    <div className="absolute right-4 top-1/2 z-20 hidden w-[176px] -translate-y-1/2 md:block lg:w-[196px]">
      <div className="panel rise rise-3 rounded-2xl p-3">
        <div className="mb-2 flex items-center justify-between px-1">
          <MicroLabel>Constellations · 星座</MicroLabel>
          <button
            type="button"
            onClick={() => setCollapsed((c) => !c)}
            className="mono text-[10px] text-[var(--ink-faint)] transition-colors hover:text-[var(--ink-dim)]"
          >
            [{collapsed ? '+' : '−'}]
          </button>
        </div>
        {!collapsed && (
          <div className="space-y-px">
            {GROUPS.map((g) => {
              const visible = groupVisibility[g.key] ?? true
              const count = groupCounts[g.key] ?? 0
              return (
                <button
                  key={g.key}
                  type="button"
                  onClick={() => onToggleGroup(g.key)}
                  className={cn(
                    'flex w-full items-center gap-2 rounded-full px-2 py-1 text-left transition-colors hover:bg-white/5',
                    !visible && 'opacity-40',
                  )}
                >
                  <span
                    className="size-1.5 shrink-0 rounded-full"
                    style={{ background: g.color, boxShadow: visible ? `0 0 6px ${g.color}66` : 'none' }}
                  />
                  <span className="flex-1 truncate text-[11px] text-[var(--ink-dim)]">
                    {g.en}
                    <span className="ml-1 text-[var(--ink-faint)]">{g.zh}</span>
                  </span>
                  <span className="mono text-[10px] text-[var(--ink-faint)]">
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

// ---------- Location + pass prediction ----------

interface LocationSectionProps {
  observer: Observer | null
  locating: boolean
  onLocateMe: () => void
  city: CityDef | null
  onSelectCity: (c: CityDef) => void
  passInfo: PassInfo | null
}

function LocationSection({
  observer,
  locating,
  onLocateMe,
  city,
  onSelectCity,
  passInfo,
}: LocationSectionProps) {
  const pickerRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const citySet = city !== null

  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  const locLabel = citySet
    ? `${city!.name} · ${observer ? `${Math.abs(observer.latDeg).toFixed(1)}°${observer.latDeg >= 0 ? 'N' : 'S'} ${Math.abs(observer.lonDeg).toFixed(1)}°${observer.lonDeg >= 0 ? 'E' : 'W'}` : ''}`
    : observer
      ? `自定义位置 · ${Math.abs(observer.latDeg).toFixed(2)}°${observer.latDeg >= 0 ? 'N' : 'S'} ${Math.abs(observer.lonDeg).toFixed(2)}°${observer.lonDeg >= 0 ? 'E' : 'W'}`
      : '未设定位置'

  const quick = CITIES.slice(0, 5)

  return (
    <div>
      <div className="flex items-center justify-between">
        <MicroLabel>Observer · 观测位置</MicroLabel>
        <span className="mono max-w-[140px] truncate text-[9px] text-[var(--ink-faint)]">{locLabel}</span>
      </div>

      {/* City quick chips */}
      <div className="mt-2 flex flex-wrap gap-1.5">
        {quick.map((c) => (
          <button
            key={c.name}
            type="button"
            onClick={() => onSelectCity(c)}
            className={cn(
              'rounded-full border px-2.5 py-1 text-[10px] transition-colors',
              city?.name === c.name
                ? 'border-[var(--accent)]/60 bg-[var(--accent-soft)] text-[var(--accent)]'
                : 'border-[var(--hairline)] text-[var(--ink-dim)] hover:border-[var(--accent)]/40 hover:text-[var(--ink)]',
            )}
          >
            {c.name}
          </button>
        ))}
        <div ref={pickerRef} className="relative">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="rounded-full border border-[var(--hairline)] px-2.5 py-1 text-[10px] text-[var(--ink-dim)] transition-colors hover:border-[var(--accent)]/40 hover:text-[var(--ink)]"
          >
            {open ? '收起' : '更多'}
          </button>
          {open && (
            <div className="panel rise absolute bottom-9 right-0 z-30 w-[260px] rounded-2xl p-2">
              <div className="grid grid-cols-3 gap-1">
                {CITIES.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => {
                      onSelectCity(c)
                      setOpen(false)
                    }}
                    className={cn(
                      'rounded-full px-2 py-1.5 text-[10px] transition-colors',
                      city?.name === c.name
                        ? 'bg-[var(--accent-soft)] text-[var(--accent)]'
                        : 'text-[var(--ink-dim)] hover:bg-white/5 hover:text-[var(--ink)]',
                    )}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Locate button */}
      <button
        type="button"
        onClick={onLocateMe}
        disabled={locating}
        className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-[var(--hairline)] py-2 text-[11px] text-[var(--ink-dim)] transition-colors hover:border-[var(--accent)]/50 hover:text-[var(--accent)] disabled:opacity-60"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-3.5">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        </svg>
        {locating ? '定位中…' : '使用我的位置'}
      </button>

      {/* Pass prediction */}
      <div className="mt-3 border-t border-[var(--hairline)] pt-3">
        <MicroLabel>Overhead pass · 过顶预测</MicroLabel>
        {!observer ? (
          <div className="mt-1.5 text-[11px] leading-5 text-[var(--ink-faint)]">
            选个城市或用我的位置，即预测所选卫星何时经过头顶。
          </div>
        ) : !passInfo || passInfo.state === 'none' ? (
          <div className="mono mt-1.5 text-[11px] text-[var(--ink-faint)]">
            未来 3 小时内无过境
          </div>
        ) : passInfo.state === 'overhead-now' ? (
          <div className="mt-2 rounded-xl border border-[var(--accent)]/50 bg-[var(--accent-soft)] p-2.5">
            <div className="text-[11px] font-bold tracking-[0.2em] text-[var(--accent)]">
              ● 正在过顶 OVERHEAD
            </div>
            <div className="mono mt-1 text-[11px] text-[var(--ink)]">
              当前仰角 {passInfo.nowElevDeg.toFixed(0)}° · 峰值 {passInfo.maxElevDeg.toFixed(0)}° @{' '}
              {localTime(passInfo.maxElevAtMs)}
            </div>
          </div>
        ) : (
          <div className="mt-1.5 space-y-1.5">
            <div className="flex items-baseline justify-between">
              <span className="mono text-[18px] font-semibold leading-none text-[var(--accent)]">
                T−{countdown(passInfo.maxElevAtMs)}
              </span>
              <span className="mono text-[11px] text-[var(--ink-dim)]">
                {localTime(passInfo.maxElevAtMs)} 峰值
              </span>
            </div>
            <div className="mono grid grid-cols-2 gap-x-3 gap-y-0.5 text-[10px] text-[var(--ink-dim)]">
              <span>峰值仰角 {passInfo.maxElevDeg.toFixed(0)}°</span>
              <span>方位 {compassLabel(passInfo.azAtMaxDeg)} {Math.round(passInfo.azAtMaxDeg)}°</span>
              {passInfo.aosMs && passInfo.losMs && (
                <>
                  <span>升起 {localTime(passInfo.aosMs)}</span>
                  <span>落下 {localTime(passInfo.losMs)}</span>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ---------- Detail panel ----------

interface DetailPanelProps {
  selected: SatInfo
  onCloseDetail: () => void
  observer: Observer | null
  locating: boolean
  onLocateMe: () => void
  city: CityDef | null
  onSelectCity: (c: CityDef) => void
  passInfo: PassInfo | null
}

function DetailPanel({
  selected,
  onCloseDetail,
  observer,
  locating,
  onLocateMe,
  city,
  onSelectCity,
  passInfo,
}: DetailPanelProps) {
  const def = getGroupDef(selected.groupKey)
  const days = (Date.now() - selected.tleEpochMs) / 86400000
  const tleAgeStr = days < 1 ? `${(days * 24).toFixed(1)} h` : `${days.toFixed(1)} d`

  const cells: { label: string; value: string }[] = [
    { label: 'ALT 高度', value: `${selected.altKm.toFixed(1)} km` },
    { label: 'VEL 速度', value: `${selected.velKmS.toFixed(2)} km/s` },
    { label: 'LAT 纬度', value: `${Math.abs(selected.lat).toFixed(2)}° ${selected.lat >= 0 ? 'N' : 'S'}` },
    { label: 'LON 经度', value: `${Math.abs(selected.lon).toFixed(2)}° ${selected.lon >= 0 ? 'E' : 'W'}` },
    { label: 'PERIOD 周期', value: `${selected.periodMin.toFixed(1)} min` },
    { label: 'INCL 倾角', value: `${selected.inclDeg.toFixed(2)}°` },
  ]

  return (
    <div className="absolute bottom-[84px] left-4 z-20 w-[288px] md:bottom-6 md:left-6 md:w-[320px]">
      <div className="panel reticle rise rounded-[26px] p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <MicroLabel>
              Target lock · {def.en}
            </MicroLabel>
            <h3 className="mt-1 truncate text-[14px] font-semibold tracking-wide text-[var(--ink)]">
              {selected.name}
            </h3>
            <div className="mono mt-0.5 text-[10px] text-[var(--ink-faint)]">
              NORAD {selected.norad} · TLE {tleAgeStr}
            </div>
          </div>
          <button
            type="button"
            onClick={onCloseDetail}
            className="flex size-7 items-center justify-center rounded-full text-[var(--ink-faint)] transition-colors hover:bg-white/5 hover:text-[var(--ink-dim)]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-3.5">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Telemetry grid */}
        <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 border-t border-[var(--hairline)] pt-3">
          {cells.map((c) => (
            <div key={c.label}>
              <div className="text-[8px] uppercase tracking-[0.18em] text-[var(--ink-faint)]">
                {c.label}
              </div>
              <div className="mono mt-0.5 text-[12px] text-[var(--ink)]">{c.value}</div>
            </div>
          ))}
        </div>

        {/* Location + pass prediction */}
        <div className="mt-3 border-t border-[var(--hairline)] pt-3">
          <LocationSection
            observer={observer}
            locating={locating}
            onLocateMe={onLocateMe}
            city={city}
            onSelectCity={onSelectCity}
            passInfo={passInfo}
          />
        </div>
      </div>
    </div>
  )
}

// ---------- Time controls ----------

const SPEEDS = [1, 10, 60, 300, 1000]

interface TimeControlsProps {
  playing: boolean
  speed: number
  onTogglePlay: () => void
  onSetSpeed: (n: number) => void
  onResetNow: () => void
  simTime: Date
}

function TimeControls({
  playing,
  speed,
  onTogglePlay,
  onSetSpeed,
  onResetNow,
  simTime,
}: TimeControlsProps) {
  const clockStr = `${simTime.toISOString().slice(0, 19).replace('T', ' ')} UTC`
  return (
    <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2">
      <div className="panel rise rise-4 flex items-center gap-0.5 rounded-full px-1.5 py-1">
        <button
          type="button"
          onClick={onResetNow}
          title="回到当前真实时间"
          className="mono rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-[var(--ink-dim)] transition-colors hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
        >
          Now
        </button>
        <button
          type="button"
          onClick={onTogglePlay}
          className="flex size-8 items-center justify-center rounded-full border border-[var(--accent)]/40 text-[var(--accent)] transition-colors hover:bg-[var(--accent-soft)]"
        >
          {playing ? (
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-3">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-3">
              <path d="M7 4.5v15l13-7.5-13-7.5Z" />
            </svg>
          )}
        </button>
        <div className="mx-1 h-4 w-px bg-[var(--hairline)]" />
        {SPEEDS.map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onSetSpeed(n)}
            className={cn(
              'mono rounded-full px-2 py-1.5 text-[10px] transition-colors',
              speed === n
                ? 'bg-[var(--accent-soft)] text-[var(--accent)]'
                : 'text-[var(--ink-faint)] hover:text-[var(--ink-dim)]',
            )}
          >
            {n}×
          </button>
        ))}
        <div className="mx-1 hidden h-4 w-px bg-[var(--hairline)] sm:block" />
        <div className="mono hidden min-w-[150px] text-center text-[10px] tracking-wider text-[var(--ink-dim)] sm:block">
          {clockStr}
        </div>
      </div>
    </div>
  )
}

const Attribution = () => (
  <div className="pointer-events-none absolute bottom-5 right-4 z-10 hidden text-right text-[9px] uppercase tracking-[0.18em] leading-4 text-[var(--ink-faint)] lg:block">
    <div>Data · CelesTrak NORAD GP</div>
    <div>Propagation · SGP4 local · no API key</div>
  </div>
)

// ---------- Default Hud ----------

function HudInner(props: HudProps) {
  const {
    dataStatus,
    tleEpochMs,
    refreshing,
    onRefreshTLE,
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
    observer,
    locating,
    onLocateMe,
    city,
    onSelectCity,
    passInfo,
    satLabels,
    issLabelText,
    selectedLabelText,
  } = props

  return (
    <>
      <div className="vignette" />
      <div className="grain" />

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
        refreshing={refreshing}
        onRefresh={onRefreshTLE}
        simTime={simTime}
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
      {selected && (
        <DetailPanel
          selected={selected}
          onCloseDetail={onCloseDetail}
          observer={observer}
          locating={locating}
          onLocateMe={onLocateMe}
          city={city}
          onSelectCity={onSelectCity}
          passInfo={passInfo}
        />
      )}
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