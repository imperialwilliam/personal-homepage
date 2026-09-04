/**
 * Featured objects registry — canonical targets for search.
 *
 * Solves two UX problems:
 *  1. Searching "iss" returns the station plus a dozen module/debris entries
 *     (ISS (ZARYA) #25544 is the canonical object to track).
 *  2. The Chinese Space Station is catalogued as "CSS (TIANHE)" — English-only
 *     name matching makes it invisible to Chinese queries like 天宫 / 中国空间站.
 */

export interface FeaturedDef {
  norad: string
  /** Badge shown in search results & detail panel */
  badge: string
  /** Lowercase search aliases (English + Chinese) */
  aliases: string[]
  /** Quick-select chip label */
  chip: string
}

export const FEATURED: FeaturedDef[] = [
  {
    norad: '25544',
    badge: '国际空间站 · 主目标',
    aliases: ['iss', '国际空间站', '国际站', 'zarya', 'iss (zarya)'],
    chip: 'ISS',
  },
  {
    norad: '48274',
    badge: '中国空间站 · 天宫',
    aliases: ['css', '天宫', 'tiangong', '中国空间站', '中国站', 'css (tianhe)'],
    chip: '天宫',
  },
  {
    norad: '20580',
    badge: '哈勃空间望远镜',
    aliases: ['hst', 'hubble', '哈勃', '哈勃望远镜'],
    chip: 'HUBBLE',
  },
]

export const FEATURED_BY_NORAD: Record<string, FeaturedDef> = Object.fromEntries(
  FEATURED.map((f) => [f.norad, f]),
)

/** Returns featured defs whose alias matches the query (exact or prefix). */
export function matchFeatured(query: string): FeaturedDef[] {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return FEATURED.filter(
    (f) => f.aliases.some((a) => a === q || a.startsWith(q) || q.startsWith(a)) || f.norad === q,
  )
}

export function getFeatured(norad: string): FeaturedDef | null {
  return FEATURED_BY_NORAD[norad] ?? null
}

/**
 * Classify a catalog entry as a "related object" — physically part of a station
 * (tracked under its own historic catalog id) or debris. These get a dim note
 * in search results and rank below canonical targets.
 */
export function relatedNote(name: string, norad: string): string | null {
  const n = name.toUpperCase()
  const featured = getFeatured(norad)
  if (featured) return null
  if (n.startsWith('ISS (') || n.startsWith('CSS') || n.startsWith('TIANHE'))
    return '舱段 / 相关目标'
  if (/\bDEB\b/.test(n) || n.includes('OBJECT')) return '碎片 / 相关目标'
  return null
}
