import SEO from '../components/SEO.jsx';
import Section from '../components/Section.jsx';
import { values } from '../data/content.js';
import PageHero from '../components/PageHero.jsx';

export default function About() {
  return (
    <>
      <SEO title="About Us" description="Learn about ClinixTech's mission, vision, and story." />

      <PageHero index="01" eyebrow="About ClinixTech" title="Bridging healthcare and technology across Africa" description="ClinixTech is a Nigerian health technology company building intelligent digital systems for better healthcare delivery." />

      <Section eyebrow="Our story" title="Why ClinixTech exists">
        <div className="mx-auto max-w-3xl space-y-5 text-brand-ink/80">
          <p>
            ClinixTech was founded from a shared vision among three passionate innovators who
            recognized the growing need for digital transformation in Africa's healthcare system.
            During years of working on healthcare research, artificial intelligence, clinical
            workflows, and software engineering projects, the founders repeatedly encountered
            inefficient hospital processes, fragmented patient records, delayed diagnoses, and
            limited access to intelligent healthcare tools.
          </p>
          <p>
            Rather than viewing these as isolated problems, they saw an opportunity to build
            technology that could fundamentally improve healthcare delivery — bridging the gap
            between medicine and technology through software designed specifically for African
            healthcare systems.
          </p>
          <p>
            The company began by developing AI-powered healthcare products addressing practical
            clinical challenges, including neonatal jaundice screening and intelligent clinical
            workflow management. Today, ClinixTech is committed to creating scalable digital
            health solutions that empower healthcare professionals, improve patient outcomes, and
            contribute to stronger healthcare systems across Africa and beyond.
          </p>
        </div>
      </Section>

      <Section eyebrow="What guides us" title="Mission, vision & values" tone="dark">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl2 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Mission</h3>
            <p className="mt-2 text-sm text-white/70">
              To transform healthcare delivery through innovative, AI-powered digital solutions
              that improve patient care, empower healthcare professionals, and strengthen health
              systems across Africa.
            </p>
          </div>
          <div className="rounded-xl2 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Vision</h3>
            <p className="mt-2 text-sm text-white/70">
              To become Africa's leading healthcare technology company, building intelligent
              digital infrastructure that makes quality healthcare more accessible, efficient, and
              data-driven.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {values.map((v) => (
            <span key={v} className="rounded-full border border-white/20 px-4 py-2 text-sm text-white">
              {v}
            </span>
          ))}
        </div>
      </Section>
    </>
  );
}
