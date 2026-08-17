export default function PageHero({ eyebrow, title, description, index = '01' }) {
  return (
    <section className="page-hero">
      <div className="page-hero__grid" />
      <div className="page-hero__orb" />
      <div className="container-page relative py-16 sm:py-20">
        <p className="page-hero__eyebrow"><span /> {eyebrow}</p>
        <div className="mt-5 flex items-end justify-between gap-6">
          <div>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl">{title}</h1>
            {description && <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">{description}</p>}
          </div>
          <span className="page-hero__index hidden sm:block">{index}</span>
        </div>
      </div>
    </section>
  );
}
