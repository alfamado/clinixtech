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
      <section className="relative overflow-hidden bg-white">
        <div className="container-page grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div className="animate-fade-up">
            <p className="eyebrow">Health technology, built for Africa</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
              Smarter healthcare starts with{' '}
              <span className="bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">
                a clearer signal
              </span>
            </h1>
            <p className="mt-5 max-w-lg text-base text-brand-ink/70">
              ClinixTech develops intelligent digital solutions — AI, cloud, and data — that
              empower hospitals, clinicians, and researchers to catch what matters sooner and
              deliver better patient outcomes.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">Book a consultation</Link>
              <Link to="/products" className="btn-secondary">Explore our products</Link>
            </div>
          </div>

          <ClinicalSignal />
        </div>
      </section>

      {/* Mission strip */}
      <section className="border-y border-brand-mist bg-brand-ink">
        <div className="container-page py-10">
          <p className="text-center text-base font-medium text-white/90 sm:text-lg">
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
