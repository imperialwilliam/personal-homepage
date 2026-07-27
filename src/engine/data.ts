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

export interface SnapshotData {
  tleText: string
  groupsMap: Record<string, string>
  meta: { fetchedAt?: string; source?: string; counts?: Record<string, number> }
}

export type DataStatus = 'loading' | 'snapshot' | 'live' | 'snapshot-stale'

export async function loadSnapshot(
  onProgress?: (p: number, msg: string) => void,
): Promise<SnapshotData> {
  onProgress?.(0.05, '正在加载 TLE 快照…')
  const [tleRes, groupsRes, metaRes] = await Promise.all([
    fetch('/data/tle-active.txt'),
    fetch('/data/groups.json'),
    fetch('/data/meta.json'),
  ])
  const tleText = await tleRes.text()
  const groupsMap = (await groupsRes.json()) as Record<string, string>
  const meta = (await metaRes.json()) as SnapshotData['meta']
  return { tleText, groupsMap, meta }
}

export function parseTLE(
  tleText: string,
  groupsMap: Record<string, string>,
): { sats: SatRecord[]; groups: GroupBucket[] } {
  const groups: GroupBucket[] = GROUPS.map((def) => ({ def, sats: [] }))
  const sats: SatRecord[] = []

  const lines = tleText.split('\n')
  let i = 0
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
    const groupKey = groupsMap[norad] ?? 'other'

    let satrec: any
    try {
      satrec = twoline2satrec(line1, line2)
    } catch {
      i += 1
      continue
    }

    const rec: SatRecord = { name, norad, satrec, groupKey }
    sats.push(rec)
    groups[resolveGroupIndex(groupKey)].sats.push(rec)

    i += 3
  }

  if (sats.length < 100) {
    throw new Error('TLE 快照解析失败')
  }

  return { sats, groups }
}

function resolveGroupIndex(key: string): number {
  for (let k = 0; k < GROUPS.length; k++) {
    if (GROUPS[k].key === key) return k
  }
  return GROUPS.length - 1
}

export async function syncLive(): Promise<string | null> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 15000)
  try {
    const res = await fetch(
      'https://celestrak.org/NORAD/elements/gp.php?GROUP=active&FORMAT=tle',
      { cache: 'no-store', signal: controller.signal },
    )
    if (!res.ok) return null
    const text = await res.text()
    if (!text.startsWith('1 ') && !text.includes('\n1 ')) return null
    return text
  } catch {
    return null
  } finally {
    clearTimeout(timer)
  }
}

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
