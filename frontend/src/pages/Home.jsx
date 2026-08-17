import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import Section from '../components/Section.jsx';
import ClinicalSignal from '../components/ClinicalSignal.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import ProductCard from '../components/ProductCard.jsx';
import { services, products } from '../data/content.js';

export default function Home() {
  return (
    <>
      <SEO
        title="AI-Powered Healthcare Software"
        description="ClinixTech builds AI-powered digital health software for hospitals, clinics, and healthcare organizations across Africa."
      />

      {/* Hero */}
      <section className="hero-tech">
        <div className="hero-tech__mesh" />
        <div className="container-page relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div className="animate-fade-up">
            <p className="hero-tech__eyebrow"><span /> Health technology, built for Africa</p>
            <h1 className="hero-tech__title mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              Smarter healthcare starts with{' '}
              <span className="bg-gradient-to-r from-sky-300 via-brand-blue to-brand-teal bg-clip-text text-transparent">
                a clearer signal
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-slate-300">
              ClinixTech develops intelligent digital solutions — AI, cloud, and data — that
              empower hospitals, clinicians, and researchers to catch what matters sooner and
              deliver better patient outcomes.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">Book a consultation</Link>
              <Link to="/products" className="hero-tech__secondary">Explore our products <span>→</span></Link>
            </div>
            <div className="hero-tech__proof"><span>●</span> Secure-by-design digital health solutions</div>
          </div>

          <ClinicalSignal />
        </div>
      </section>

      {/* Mission strip */}
      <section className="mission-band">
        <div className="mission-band__grid" />
        <div className="container-page relative grid gap-6 py-12 lg:grid-cols-[.7fr_2fr] lg:items-center">
          <p className="mission-band__label">Our mission <span>↗</span></p>
          <p className="text-xl font-medium leading-relaxed text-white/90 sm:text-2xl">
            "To transform healthcare delivery through innovative, AI-powered digital solutions that
            improve patient care, empower healthcare professionals, and strengthen health systems
            across Africa."
          </p>
        </div>
      </section>

      {/* Services preview */}
      <Section
        eyebrow="What we do"
        title="Services built around real clinical challenges"
        description="From custom software to AI-driven decision support, every service is designed to fit into a working hospital, not disrupt it."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="btn-secondary">View all services</Link>
        </div>
      </Section>

      {/* Products preview */}
      <Section eyebrow="Our products" title="Flagship products" tone="light">
        <div className="grid gap-6 lg:grid-cols-2">
          {products.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-brand-blue">
        <div className="container-page flex flex-col items-center gap-6 py-16 text-center text-white">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to modernize your healthcare workflows?</h2>
          <p className="max-w-xl text-white/80">
            Talk to our team about a custom build, a product demo, or a partnership.
          </p>
          <Link to="/contact" className="rounded-xl2 bg-white px-6 py-3 text-sm font-semibold text-brand-blue transition hover:bg-brand-paper">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
