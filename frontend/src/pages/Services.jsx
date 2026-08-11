import SEO from '../components/SEO.jsx';
import Section from '../components/Section.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { services } from '../data/content.js';

export default function Services() {
  return (
    <>
      <SEO title="Services" description="Healthcare software development, AI solutions, digital transformation, and more." />
      <Section
        eyebrow="Services"
        title="Everything needed to digitize a health system"
        description="Each service is designed to work with hospitals as they are today, with room to scale as needs grow."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </Section>
    </>
  );
}
