export default function Section({ id, eyebrow, title, description, children, tone = 'white' }) {
  const dark = tone === 'dark';
  return (
    <section id={id} className={`section-shell ${dark ? 'section-shell--dark' : tone === 'light' ? 'section-shell--soft' : 'section-shell--white'}`}>
      <div className="section-shell__grid" aria-hidden="true" />
      <div className="section-shell__orb" aria-hidden="true" />
      <div className="container-page relative py-20 lg:py-24">
        {(eyebrow || title) && (
          <div className="section-shell__heading max-w-3xl">
            {eyebrow && <p className={`section-shell__eyebrow ${dark ? 'text-teal-300' : ''}`}><span />{eyebrow}</p>}
            {title && <h2 className={`mt-4 text-3xl font-bold leading-tight sm:text-4xl ${dark ? 'text-white' : 'text-brand-ink'}`}>{title}</h2>}
            {description && (
              <p className={`mt-5 max-w-2xl text-base leading-7 ${dark ? 'text-white/70' : 'text-brand-ink/70'}`}>
                {description}
              </p>
            )}
          </div>
        )}
        <div className={`${eyebrow || title ? 'mt-12' : ''}`}>{children}</div>
      </div>
    </section>
  );
}
