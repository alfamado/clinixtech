export default function ClinicalSignal() {
  return (
    <div className="signal-panel" aria-hidden="true">
      <div className="signal-panel__glow" />
      <div className="signal-panel__topline">
        <span className="signal-panel__live"><i /> Live clinical signal</span>
        <span>ClinixTech intelligence</span>
      </div>

      <svg viewBox="0 0 640 190" fill="none" className="signal-panel__chart" preserveAspectRatio="none">
        <defs>
          <linearGradient id="signal-gradient" x1="0" x2="1">
            <stop stopColor="#38BDF8" />
            <stop offset="1" stopColor="#2DD4BF" />
          </linearGradient>
        </defs>
        <path d="M0 145H100L128 145L150 85L174 167L198 145H282L302 116L320 145H408L432 43L458 145H640" stroke="url(#signal-gradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="signal-panel__path" />
        <circle cx="432" cy="43" r="8" fill="#2DD4BF" className="signal-panel__node" />
      </svg>

      <div className="signal-panel__metrics">
        <div><span>Data clarity</span><strong>Connected</strong></div>
        <div><span>Care workflow</span><strong>In focus</strong></div>
        <div><span>Decision support</span><strong>Ready</strong></div>
      </div>
    </div>
  );
}
