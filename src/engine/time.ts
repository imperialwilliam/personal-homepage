export class TimeController {
  public simMs: number
  public realMs: number
  public speed: number
  public playing: boolean

  constructor() {
    this.simMs = Date.now()
    this.realMs = performance.now()
    this.speed = 1
    this.playing = true
  }

  now(): Date {
    if (this.playing) {
      return new Date(this.simMs + (performance.now() - this.realMs) * this.speed)
    }
    return new Date(this.simMs)
  }

  reanchor(): void {
    this.simMs = this.now().getTime()
    this.realMs = performance.now()
  }

  setSpeed(n: number): void {
    this.reanchor()
    this.speed = n
    this.playing = true
  }

  toggle(): void {
    this.reanchor()
    this.playing = !this.playing
  }

  resetToNow(): void {
    this.reanchor()
    this.simMs = Date.now()
    this.realMs = performance.now()
    this.speed = 1
    this.playing = true
  }
}
