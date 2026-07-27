interface LoadingOverlayProps {
  progress: number // 0..1
  status: string // dynamic status text (e.g. "解析 2.3 MB 轨道根数…")
  visible: boolean // when false, apply opacity-0 + pointer-events-none (CSS transition 700ms)
}

export default function LoadingOverlay({ progress, status, visible }: LoadingOverlayProps) {
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020409] transition-opacity duration-700${
        visible ? '' : ' opacity-0 pointer-events-none'
      }`}
    >
      <div className="absolute size-[520px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative size-20">
          <div
            className="absolute inset-0 rounded-full border-2 border-cyan-300/20 border-t-cyan-300/80 animate-spin"
            style={{ animationDuration: '1.6s' }}
          />
          <div className="absolute left-1/2 top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_18px_4px_rgba(103,232,249,0.7)]" />
        </div>

        <div className="mt-8 text-center">
          <div className="text-2xl font-semibold tracking-[0.35em] text-slate-100">ORBITLIVE</div>
          <div className="mt-2 text-xs tracking-[0.3em] text-cyan-200/60">全球卫星实时追踪</div>
        </div>

        <div className="mt-8 h-[3px] w-64 overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 transition-all duration-300"
            style={{ width: `${Math.round(progress * 100)}%` }}
          />
        </div>

        <div className="mt-3 text-[11px] tracking-wider text-slate-400">{status}</div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 px-6 text-center text-[10px] leading-4 text-slate-600">
        轨道数据：CelesTrak NORAD GP（TLE） · 推算：satellite.js SGP4（浏览器本地实时计算）
      </div>
    </div>
  )
}
