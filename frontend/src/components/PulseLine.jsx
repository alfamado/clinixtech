/**
 * PulseLine — the site's signature motif.
 * A vital-sign trace that resolves into a circuit node, standing in for
 * ClinixTech's core idea: healthcare signal, read by intelligent systems.
 * Used sparingly — hero backdrop and section dividers only.
 */
export default function PulseLine({ className = '', tone = 'blue' }) {
  const stroke = tone === 'teal' ? '#14B8A6' : '#0A84FF';
  return (
    <svg
      viewBox="0 0 600 60"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M0 30 H160 L182 30 L196 8 L214 52 L230 30 L246 30 L258 18 L270 30 H340 C 360 30 360 12 380 12 C 400 12 400 30 420 30 H600"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="240"
        className="animate-pulse-travel"
      />
      <circle cx="380" cy="12" r="4" fill={stroke} />
    </svg>
  );
}
