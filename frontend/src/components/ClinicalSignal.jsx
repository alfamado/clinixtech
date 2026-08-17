export default function ClinicalSignal() {
  return (
    <div className="clinical-visual" aria-hidden="true">
      <div className="clinical-visual__orb clinical-visual__orb--one" />
      <div className="clinical-visual__orb clinical-visual__orb--two" />
      <div className="clinical-visual__halo" />
      <div className="clinical-visual__topline">
        <span className="clinical-visual__live"><i /> Signal intelligence</span>
        <span>CT · 01</span>
      </div>
      <div className="clinical-visual__core">
        <div className="clinical-visual__ring clinical-visual__ring--outer" />
        <div className="clinical-visual__ring clinical-visual__ring--inner" />
        <div className="clinical-visual__cross">+</div>
        <span className="clinical-visual__dot clinical-visual__dot--a" />
        <span className="clinical-visual__dot clinical-visual__dot--b" />
        <span className="clinical-visual__dot clinical-visual__dot--c" />
      </div>
      <svg viewBox="0 0 640 150" fill="none" className="clinical-visual__chart" preserveAspectRatio="none">
        <defs>
          <linearGradient id="signal-gradient" x1="0" x2="1">
            <stop stopColor="#38BDF8" />
            <stop offset="1" stopColor="#2DD4BF" />
          </linearGradient>
        </defs>
        <path d="M0 110H78L101 110L121 76L143 126L164 110H260L280 89L298 110H380L404 27L430 110H640" stroke="url(#signal-gradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="signal-panel__path" />
        <circle cx="404" cy="27" r="8" fill="#2DD4BF" className="signal-panel__node" />
      </svg>
      <div className="clinical-visual__metrics">
        <div><span className="metric-icon">⌁</span><p>Data signal<strong>Connected</strong></p></div>
        <div><span className="metric-icon">✦</span><p>Clinical flow<strong>In focus</strong></p></div>
      </div>
    </div>
  );
}
