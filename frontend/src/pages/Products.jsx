import SEO from '../components/SEO.jsx';
import Section from '../components/Section.jsx';
import ProductCard from '../components/ProductCard.jsx';
import { products } from '../data/content.js';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';

export default function Products() {
  return (
    <>
      <SEO title="Products" description="CliniqFlow and JandiCare — ClinixTech's flagship healthcare products." />
      <PageHero index="03" eyebrow="Products" title="Built to solve real clinical problems" description="Purpose-built products for the moments where healthcare teams need clarity, speed, and confidence." />
      <Section eyebrow="Product suite" title="Flagship solutions in progress">
        <div className="grid gap-6 lg:grid-cols-2">
          {products.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm text-brand-ink/60">Want early access or a walkthrough?</p>
          <Link to="/contact" className="btn-primary mt-4 inline-flex">Join the waiting list</Link>
        </div>
      </Section>
    </>
  );
}
