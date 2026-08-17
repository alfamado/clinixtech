import SEO from '../components/SEO.jsx';
import Section from '../components/Section.jsx';
import TeamCard from '../components/TeamCard.jsx';
import { team } from '../data/content.js';
import PageHero from '../components/PageHero.jsx';

export default function Team() {
  return (
    <>
      <SEO title="Team" description="Meet the founders behind ClinixTech Solutions Limited." />
      <PageHero index="04" eyebrow="Team" title="The people building ClinixTech" description="A multidisciplinary founding team at the intersection of clinical insight, AI research, and software engineering." />
      <Section eyebrow="Leadership" title="Built by people who care about the details">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((t) => (
            <TeamCard key={t.name} {...t} />
          ))}
        </div>
      </Section>
    </>
  );
}
