/**
 * Preset observer cities for overhead pass prediction.
 * Selecting a city avoids browser geolocation permission friction.
 */
export interface CityDef {
  name: string
  lat: number
  lon: number
  tz?: string
}

export const CITIES: CityDef[] = [
  { name: '北京', lat: 39.9042, lon: 116.4074, tz: 'Asia/Shanghai' },
  { name: '上海', lat: 31.2304, lon: 121.4737, tz: 'Asia/Shanghai' },
  { name: '广州', lat: 23.1291, lon: 113.2644, tz: 'Asia/Shanghai' },
  { name: '深圳', lat: 22.5431, lon: 114.0579, tz: 'Asia/Shanghai' },
  { name: '香港', lat: 22.3193, lon: 114.1694, tz: 'Asia/Hong_Kong' },
  { name: '台北', lat: 25.033, lon: 121.5654, tz: 'Asia/Taipei' },
  { name: '成都', lat: 30.5728, lon: 104.0668, tz: 'Asia/Shanghai' },
  { name: '武汉', lat: 30.5928, lon: 114.3055, tz: 'Asia/Shanghai' },
  { name: '西安', lat: 34.3416, lon: 108.9398, tz: 'Asia/Shanghai' },
  { name: '杭州', lat: 30.2741, lon: 120.1551, tz: 'Asia/Shanghai' },
  { name: '东京', lat: 35.6762, lon: 139.6503, tz: 'Asia/Tokyo' },
  { name: '首尔', lat: 37.5665, lon: 126.978, tz: 'Asia/Seoul' },
  { name: '新加坡', lat: 1.3521, lon: 103.8198, tz: 'Asia/Singapore' },
  { name: '悉尼', lat: -33.8688, lon: 151.2093, tz: 'Australia/Sydney' },
  { name: '莫斯科', lat: 55.7558, lon: 37.6173, tz: 'Europe/Moscow' },
  { name: '巴黎', lat: 48.8566, lon: 2.3522, tz: 'Europe/Paris' },
  { name: '伦敦', lat: 51.5074, lon: -0.1278, tz: 'Europe/London' },
  { name: '纽约', lat: 40.7128, lon: -74.006, tz: 'America/New_York' },
  { name: '洛杉矶', lat: 34.0522, lon: -118.2437, tz: 'America/Los_Angeles' },
  { name: '旧金山', lat: 37.7749, lon: -122.4194, tz: 'America/Los_Angeles' },
  { name: '多伦多', lat: 43.6532, lon: -79.3832, tz: 'America/Toronto' },
  { name: '圣保罗', lat: -23.5505, lon: -46.6333, tz: 'America/Sao_Paulo' },
]