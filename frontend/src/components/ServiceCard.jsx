export default function ServiceCard({ title, description, benefits, who }) {
  return (
    <div className="service-card flex h-full flex-col">
      <div className="service-card__icon" aria-hidden="true"><span>✦</span></div>
      <h3 className="text-lg font-semibold text-brand-ink">{title}</h3>
      <p className="mt-2 text-sm text-brand-ink/70">{description}</p>
      <ul className="mt-4 space-y-1.5">
        {benefits.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-brand-ink/80">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0">
              <path d="M5 13l4 4L19 7" stroke="#14B8A6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {b}
          </li>
        ))}
      </ul>
      <p className="mt-auto pt-5 text-xs font-medium text-brand-teal">For: {who}</p>
    </div>
  );
}
