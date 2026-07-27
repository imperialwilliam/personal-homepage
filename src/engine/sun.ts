export function sunDirectionECI(date: Date, gmst: number): [number, number, number] {
  const PI = Math.PI
  const s = date.getTime() / 86400000 + 2440587.5 - 2451545 // days since J2000
  const o = ((280.46 + 0.9856474 * s) % 360) * PI / 180 // mean longitude
  const c = ((357.528 + 0.9856003 * s) % 360) * PI / 180 // mean anomaly
  const u = o + (1.915 * Math.sin(c) + 0.02 * Math.sin(2 * c)) * PI / 180 // ecliptic longitude
  const d = (23.439 - 4e-7 * s) * PI / 180 // obliquity
  const m = Math.atan2(Math.cos(d) * Math.sin(u), Math.cos(u)) // right ascension
  const p = Math.asin(Math.sin(d) * Math.sin(u)) // declination
  const g = m - gmst // hour angle
  return [Math.cos(p) * Math.cos(g), Math.sin(p), -Math.cos(p) * Math.sin(g)]
}
