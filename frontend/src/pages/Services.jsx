import SEO from '../components/SEO.jsx';
import Section from '../components/Section.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { services } from '../data/content.js';
import PageHero from '../components/PageHero.jsx';

export default function Services() {
  return (
    <>
      <SEO title="Services" description="Healthcare software development, AI solutions, digital transformation, and more." />
      <PageHero index="02" eyebrow="Services" title="Everything needed to digitize a health system" description="Technology strategy, design, engineering, and intelligent systems—built around real clinical work." />
      <Section eyebrow="Capabilities" title="Designed for the work that matters">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </Section>
    </>
  );
}
