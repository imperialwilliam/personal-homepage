interface LoadingOverlayProps {
  progress: number // 0..1
  status: string // dynamic status text (e.g. "解析 2.3 MB 轨道根数…")
  visible: boolean // when false, apply opacity-0 + pointer-events-none (CSS transition 700ms)
}

/** Boot log lines revealed as loading progresses — cinematic mission-control flavor. */
function bootLines(progress: number): { text: string; done: boolean }[] {
  const p = progress
  return [
    { text: 'INIT RENDERER · WEBGL', done: p > 0.05 },
    { text: 'LINK CELESTRAK NORAD GP', done: p > 0.3 },
    { text: 'PARSE TWO-LINE ELEMENTS', done: p > 0.94 },
    { text: 'ARM SGP4 PROPAGATOR', done: p >= 1 },
  ]
}

export default function LoadingOverlay({ progress, status, visible }: LoadingOverlayProps) {
  const lines = bootLines(progress)
  const pct = Math.round(progress * 100)

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#04060b]/92 transition-opacity duration-700${
        visible ? '' : ' opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative z-10 w-[300px] md:w-[340px]">
        {/* Wordmark */}
        <div className="rise">
          <h1 className="font-display text-[26px] font-semibold tracking-[0.5em] text-[var(--ink)]">
            ZENITH
          </h1>
          <div className="mt-1.5 text-[9px] uppercase tracking-[0.32em] text-[var(--ink-faint)]">
            Real-time satellite tracker
          </div>
        </div>

        {/* Hairline progress */}
        <div className="mt-8">
          <div className="flex items-baseline justify-between">
            <span className="mono text-[10px] tracking-[0.2em] text-[var(--accent)]">
              {String(pct).padStart(3, '0')}%
            </span>
            <span className="mono text-[10px] text-[var(--ink-faint)]">ACQUIRING</span>
          </div>
          <div className="mt-1.5 h-px w-full bg-[var(--hairline)]">
            <div
              className="h-px bg-[var(--accent)] transition-all duration-300"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        {/* Boot log */}
        <div className="mono mt-6 space-y-1.5">
          {lines.map((l) => (
            <div
              key={l.text}
              className={`flex items-center gap-2 text-[10px] tracking-[0.08em] transition-colors duration-500 ${
                l.done ? 'text-[var(--ink-dim)]' : 'text-[var(--ink-faint)]'
              }`}
            >
              <span className={l.done ? 'text-[var(--accent)]' : 'text-[var(--ink-faint)]'}>
                {l.done ? '✓' : '·'}
              </span>
              <span>{l.text}</span>
            </div>
          ))}
        </div>

        {/* Live status */}
        <div className="mt-6 border-t border-[var(--hairline)] pt-4 text-[11px] leading-5 text-[var(--ink-dim)]">
          {status}
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 px-6 text-center text-[9px] uppercase tracking-[0.18em] leading-4 text-[var(--ink-faint)]">
        Data · CelesTrak NORAD GP · Propagation · SGP4 local
      </div>
    </div>
  )
}
