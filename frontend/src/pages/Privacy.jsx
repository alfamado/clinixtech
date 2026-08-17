import SEO from '../components/SEO.jsx';
import Section from '../components/Section.jsx';
import { resetAnalyticsConsent } from '../components/Analytics.jsx';
import PageHero from '../components/PageHero.jsx';

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Notice" description="How ClinixTech handles personal information submitted through this website." />
      <PageHero index="06" eyebrow="Privacy" title="Privacy notice" description="A clear explanation of how information submitted through this website is handled." />
      <Section eyebrow="Your information" title="Clear, limited, and purposeful processing">
        <article className="mx-auto max-w-3xl space-y-7 text-sm leading-7 text-brand-ink/80">
          <p>Last updated: August 2026</p>
          <section><h2 className="text-xl font-bold">What we collect</h2><p className="mt-2">When you contact us, we collect the information you provide: your name, email address, organization, reason for contact, and message.</p></section>
          <section><h2 className="text-xl font-bold">Why we use it</h2><p className="mt-2">We use contact-form information only to respond to your enquiry, provide requested information, and manage a potential business relationship. Please do not include patient records, medical information, or other sensitive personal data in the contact form.</p></section>
          <section><h2 className="text-xl font-bold">Who receives it</h2><p className="mt-2">Your enquiry is sent to ClinixTech through our email service provider and is accessible only to people who need it to respond to you. We do not sell personal information.</p></section>
          <section><h2 className="text-xl font-bold">Analytics cookies</h2><p className="mt-2">If you choose to accept analytics cookies, we use Google Analytics to understand aggregate site usage. You can decline without affecting the website’s core functions.</p><button type="button" onClick={resetAnalyticsConsent} className="btn-secondary mt-3">Manage cookie preference</button></section>
          <section><h2 className="text-xl font-bold">Your choices</h2><p className="mt-2">You may ask to access, correct, or delete the personal information you submitted by emailing clinixtechsolutions@gmail.com. You may also raise a privacy concern with the Nigeria Data Protection Commission.</p></section>
        </article>
      </Section>
    </>
  );
}
