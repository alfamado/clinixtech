export default function ProductCard({ name, tagline, problem, features, target, status }) {
  return (
    <div className="card">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-2xl font-bold text-brand-ink">{name}</h3>
        <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue">
          {status}
        </span>
      </div>
      <p className="mt-1 text-sm font-medium text-brand-teal">{tagline}</p>
      <p className="mt-4 text-sm text-brand-ink/70">{problem}</p>

      <h4 className="mt-6 text-xs font-semibold uppercase tracking-wide text-brand-ink/50">Features</h4>
      <div className="mt-3 flex flex-wrap gap-2">
        {features.map((f) => (
          <span key={f} className="rounded-full border border-brand-mist px-3 py-1 text-xs text-brand-ink/80">
            {f}
          </span>
        ))}
      </div>

      <p className="mt-6 text-xs text-brand-ink/60">
        <span className="font-semibold text-brand-ink/80">Target users: </span>
        {target}
      </p>
    </div>
  );
}
