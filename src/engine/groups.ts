export interface GroupDef {
  key: 'starlink' | 'oneweb' | 'stations' | 'gps' | 'beidou' | 'glonass' | 'galileo' | 'iridium' | 'weather' | 'other'
  zh: string
  en: string
  color: string
  size: number
}

export const GROUPS: GroupDef[] = [
  { key: 'starlink', zh: '星链', en: 'Starlink', color: '#8fb2d9', size: 2.1 },
  { key: 'oneweb', zh: '一网', en: 'OneWeb', color: '#b48ec9', size: 2.3 },
  { key: 'stations', zh: '空间站', en: 'Stations', color: '#f5efdd', size: 5.2 },
  { key: 'gps', zh: 'GPS', en: 'GPS', color: '#7fc98f', size: 3.0 },
  { key: 'beidou', zh: '北斗', en: 'BeiDou', color: '#d9c26b', size: 3.0 },
  { key: 'glonass', zh: '格洛纳斯', en: 'GLONASS', color: '#d98f6b', size: 3.0 },
  { key: 'galileo', zh: '伽利略', en: 'Galileo', color: '#8f9fd9', size: 3.0 },
  { key: 'iridium', zh: '铱星', en: 'Iridium', color: '#d98fa8', size: 2.8 },
  { key: 'weather', zh: '气象', en: 'Weather', color: '#6bc4bd', size: 3.2 },
  { key: 'other', zh: '其他', en: 'Others', color: '#7d8aa0', size: 1.9 },
]

export const GROUP_KEYS: GroupDef['key'][] = GROUPS.map((g) => g.key)

export function groupIndexOf(key: string): number {
  for (let i = 0; i < GROUPS.length; i++) {
    if (GROUPS[i].key === key) return i
  }
  return GROUPS.length - 1
}
