export default function Section({ id, eyebrow, title, description, children, tone = 'light' }) {
  return (
    <section id={id} className={tone === 'dark' ? 'bg-brand-ink text-white' : 'bg-brand-paper'}>
      <div className="container-page py-20">
        {(eyebrow || title) && (
          <div className="mx-auto max-w-2xl text-center">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>}
            {description && (
              <p className={`mt-4 text-base ${tone === 'dark' ? 'text-white/70' : 'text-brand-ink/70'}`}>
                {description}
              </p>
            )}
          </div>
        )}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
