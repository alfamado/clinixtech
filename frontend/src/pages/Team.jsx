import SEO from '../components/SEO.jsx';
import Section from '../components/Section.jsx';
import TeamCard from '../components/TeamCard.jsx';
import { team } from '../data/content.js';

export default function Team() {
  return (
    <>
      <SEO title="Team" description="Meet the founders behind ClinixTech Solutions Limited." />
      <Section eyebrow="Team" title="The people building ClinixTech">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((t) => (
            <TeamCard key={t.name} {...t} />
          ))}
        </div>
      </Section>
    </>
  );
}
