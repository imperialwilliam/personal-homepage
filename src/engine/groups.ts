export interface GroupDef {
  key: 'starlink' | 'oneweb' | 'stations' | 'gps' | 'beidou' | 'glonass' | 'galileo' | 'iridium' | 'weather' | 'other'
  zh: string
  en: string
  color: string
  size: number
}

export const GROUPS: GroupDef[] = [
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
]

export const GROUP_KEYS: GroupDef['key'][] = GROUPS.map((g) => g.key)

export function groupIndexOf(key: string): number {
  for (let i = 0; i < GROUPS.length; i++) {
    if (GROUPS[i].key === key) return i
  }
  return GROUPS.length - 1
}
