import { twoline2satrec, gstime, sgp4, eciToGeodetic } from 'satellite.js'
import { GROUPS } from './groups'

export interface SatRecord {
  name: string
  norad: string
  satrec: any
  groupKey: string
}

export interface GroupBucket {
  def: (typeof GROUPS)[number]
  sats: SatRecord[]
}

export type DataStatus =
  | 'loading'
  | 'snapshot'
  | 'live'
  | 'cached'
  | 'snapshot-stale'

export interface TLESource {
  tleText: string
  status: 'live' | 'cached' | 'snapshot'
  /** When this TLE text was fetched (ms epoch); 0 for the built-in snapshot */
  fetchedAt: number
}

export interface ParseResult {
  sats: SatRecord[]
  groups: GroupBucket[]
  /** Average TLE epoch across all satellites (ms epoch) — the truthful data age */
  avgEpochMs: number
}

// CelesTrak GP: free, no API key, CORS enabled (access-control-allow-origin: *)
// Data updates every ~2h; aggressive re-download gets a 403 "not updated" reply.
const CELESTRAK_URL =
  'https://celestrak.org/NORAD/elements/gp.php?GROUP=active&FORMAT=tle'
const LIVE_TIMEOUT_MS = 45000
/** A cached TLE is used directly when younger than this */
const CACHE_TTL_MS = 24 * 3600 * 1000
/** Older than this → background refresh from CelesTrak */
export const STALE_AFTER_MS = 2 * 3600 * 1000

// ---------- Cache API (localStorage is too small for 2.6MB text) ----------

const CACHE_NAME = 'orbitlive-tle'
const CACHE_URL = 'https://orbitlive.internal/tle-active'

interface CachedPayload {
  fetchedAt: number
  text: string
}

async function readCachedTLE(): Promise<CachedPayload | null> {
  try {
    if (typeof caches === 'undefined') return null
    const cache = await caches.open(CACHE_NAME)
    const res = await cache.match(CACHE_URL)
    if (!res) return null
    const data = (await res.json()) as CachedPayload
    if (!data?.text || !isTLEText(data.text) || !data.fetchedAt) return null
    return data
  } catch {
    return null
  }
}

export async function writeCachedTLE(text: string): Promise<void> {
  try {
    if (typeof caches === 'undefined') return
    const cache = await caches.open(CACHE_NAME)
    const body = JSON.stringify({ fetchedAt: Date.now(), text } satisfies CachedPayload)
    await cache.put(CACHE_URL, new Response(body, { headers: { 'content-type': 'application/json' } }))
  } catch {
    // storage quota / private mode — ignore
  }
}

// ---------- Validation ----------

function isTLEText(text: string): boolean {
  return text.length > 10000 && text.includes('\n1 ')
}

// ---------- Live fetch (streaming with progress) ----------

export async function fetchLiveTLE(
  onProgress?: (p: number, msg: string) => void,
): Promise<string | null> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), LIVE_TIMEOUT_MS)
  try {
    const res = await fetch(CELESTRAK_URL, { cache: 'no-store', signal: controller.signal })
    // 403 = CelesTrak throttle ("data has not updated since your last download");
    // 5xx = upstream issue. Either way fall back to cache/snapshot.
    if (!res.ok) return null
    if (!res.body) {
      const text = await res.text()
      return isTLEText(text) ? text : null
    }
    const total = Number(res.headers.get('content-length') || 0)
    const reader = res.body.getReader()
    const chunks: Uint8Array[] = []
    let received = 0
    for (;;) {
      const { done, value } = await reader.read()
      if (done) break
      if (value) {
        chunks.push(value)
        received += value.length
        if (onProgress) {
          const mb = (received / 1048576).toFixed(1)
          const label =
            total > 0 && received <= total * 1.05
              ? `${mb} / ${(total / 1048576).toFixed(1)} MB`
              : `${mb} MB`
          const frac = total > 0 ? Math.min(received / total, 1) : 0.5
          onProgress(frac, `正在下载 CelesTrak 实时 TLE… ${label}`)
        }
      }
    }
    const merged = new Uint8Array(received)
    let off = 0
    for (const c of chunks) {
      merged.set(c, off)
      off += c.length
    }
    const text = new TextDecoder().decode(merged)
    return isTLEText(text) ? text : null
  } catch {
    return null
  } finally {
    clearTimeout(timer)
  }
}

// ---------- Main loader: cache → live → snapshot ----------

export async function loadTLEData(
  onProgress?: (p: number, msg: string) => void,
): Promise<TLESource> {
  // 1) Fresh local cache (< 24h) — instant start
  onProgress?.(0.04, '检查本地缓存…')
  const cached = await readCachedTLE()
  if (cached && Date.now() - cached.fetchedAt < CACHE_TTL_MS) {
    return { tleText: cached.text, status: 'cached', fetchedAt: cached.fetchedAt }
  }

  // 2) Live from CelesTrak (free public GP feed, CORS ok)
  onProgress?.(0.08, '连接 CelesTrak 获取实时 TLE…')
  const live = await fetchLiveTLE((p, msg) => onProgress?.(0.08 + p * 0.5, msg))
  if (live) {
    await writeCachedTLE(live)
    return { tleText: live, status: 'live', fetchedAt: Date.now() }
  }

  // 3) Built-in snapshot fallback
  onProgress?.(0.5, 'CelesTrak 暂不可达，加载内置 TLE 快照…')
  const base = import.meta.env.BASE_URL
  const res = await fetch(`${base}data/tle-active.txt`)
  if (!res.ok) throw new Error(`快照加载失败 (HTTP ${res.status})`)
  const text = await res.text()
  if (!isTLEText(text)) throw new Error('TLE 快照内容无效')
  return { tleText: text, status: 'snapshot', fetchedAt: 0 }
}

export async function fetchGroupsMap(): Promise<Record<string, string>> {
  const base = import.meta.env.BASE_URL
  const res = await fetch(`${base}data/groups.json`)
  return (await res.json()) as Record<string, string>
}

// ---------- TLE parsing (chunked, UI stays responsive) ----------

export function parseTleEpochMs(satrec: any): number {
  const yy = satrec.epochyr as number
  const year = yy < 57 ? 2000 + yy : 1900 + yy
  const days = (satrec.epochdays as number) - 1
  return Date.UTC(year, 0, 1) + days * 86400000
}

/** Name-based classification for satellites missing from groups.json (e.g. new launches in live feed) */
function classifyByName(name: string): string | null {
  const n = name.toUpperCase()
  if (n.startsWith('STARLINK')) return 'starlink'
  if (n.startsWith('ONEWEB')) return 'oneweb'
  if (n.startsWith('ISS (') || n.startsWith('CSS') || n.startsWith('TIANZHOU') || n.startsWith('SHENZHOU') || n.startsWith('XWANGFU'))
    return 'stations'
  if (n.startsWith('NAVSTAR') || n.startsWith('GPS')) return 'gps'
  if (n.startsWith('BEIDOU') || n.startsWith('BDS')) return 'beidou'
  if (n.startsWith('GALILEO') || n.startsWith('GSAT')) return 'galileo'
  if (n.startsWith('IRIDIUM')) return 'iridium'
  if (
    n.startsWith('NOAA') || n.startsWith('METOP') || n.startsWith('METEOR') ||
    n.startsWith('FENGYUN') || n.startsWith('GOES') || n.startsWith('HIMAWARI') ||
    n.startsWith('METEOSAT')
  )
    return 'weather'
  return null
}

const PARSE_CHUNK = 1500

export async function parseTLEChunked(
  tleText: string,
  groupsMap: Record<string, string>,
  onProgress?: (p: number, msg: string) => void,
): Promise<ParseResult> {
  const groups: GroupBucket[] = GROUPS.map((def) => ({ def, sats: [] }))
  const sats: SatRecord[] = []
  const groupIndex = new Map<string, number>(GROUPS.map((g, i) => [g.key, i]))

  const lines = tleText.split('\n')
  let epochSum = 0
  let i = 0
  let lastYield = 0
  while (i + 2 < lines.length) {
    const nameRaw = lines[i]
    const line1 = lines[i + 1]
    const line2 = lines[i + 2]

    if (typeof line1 !== 'string' || !line1.startsWith('1 ') || typeof line2 !== 'string' || !line2.startsWith('2 ')) {
      i += 1
      continue
    }

    const name = (nameRaw ?? '').trim() || 'UNKNOWN'
    const norad = line1.substring(2, 7).trim()
    const groupKey = groupsMap[norad] ?? classifyByName(name) ?? 'other'

    let satrec: any
    try {
      satrec = twoline2satrec(line1, line2)
    } catch {
      i += 1
      continue
    }

    epochSum += parseTleEpochMs(satrec)
    const rec: SatRecord = { name, norad, satrec, groupKey }
    sats.push(rec)
    const gi = groupIndex.get(groupKey) ?? groupIndex.get('other')!
    groups[gi].sats.push(rec)

    i += 3

    // Yield to the event loop periodically so the progress bar animates
    if (sats.length - lastYield >= PARSE_CHUNK) {
      lastYield = sats.length
      onProgress?.(i / lines.length, `解析轨道根数 ${sats.length.toLocaleString()} 颗…`)
      await new Promise((r) => setTimeout(r, 0))
    }
  }

  if (sats.length < 100) {
    throw new Error('TLE 解析失败')
  }

  return {
    sats,
    groups,
    avgEpochMs: sats.length > 0 ? epochSum / sats.length : Date.now(),
  }
}

// ---------- Formatting helpers ----------

export function formatTLEAge(epochMs: number): string {
  const min = (Date.now() - epochMs) / 60000
  if (min < 1) return '刚刚'
  if (min < 60) return `${Math.floor(min)} 分钟前`
  if (min < 2880) return `${Math.floor(min / 60)} 小时前`
  return `${Math.floor(min / 1440)} 天前`
}

export function formatPanelAge(epochMs: number): string {
  const days = (Date.now() - epochMs) / 86400000
  if (days < 1) return `${(days * 24).toFixed(1)} 小时`
  return `${days.toFixed(1)} 天`
}

// Re-export so engine consumers can import satellite.js helpers from a single module if desired
export { twoline2satrec, gstime, sgp4, eciToGeodetic }
