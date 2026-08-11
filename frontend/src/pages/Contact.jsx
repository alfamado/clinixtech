import SEO from '../components/SEO.jsx';
import Section from '../components/Section.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { faqs } from '../data/content.js';

export default function Contact() {
  return (
    <>
      <SEO title="Contact" description="Book a consultation, request a demo, or partner with ClinixTech." />
      <Section eyebrow="Contact" title="Let's talk about your healthcare workflows">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="space-y-6 lg:col-span-2">
            <div className="card">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-ink/50">Email</h3>
              <a href="mailto:clinixtech@gmail.com" className="mt-1 block text-brand-blue">clinixtech@gmail.com</a>
            </div>
            <div className="card">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-ink/50">Phone</h3>
              <a href="tel:+2348023567823" className="mt-1 block text-brand-ink">+234 802 356 7823</a>
              <a href="tel:+2349079790073" className="mt-1 block text-brand-ink">+234 907 979 0073</a>
            </div>
            <div className="card">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-ink/50">Office</h3>
              <p className="mt-1 text-brand-ink/70">Adenekan Street, Alakuko, Ifako-Ijaye, Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Frequently asked questions" tone="light">
        <div className="mx-auto max-w-3xl divide-y divide-brand-mist">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-left text-base font-medium text-brand-ink">
                {f.q}
                <span className="ml-4 text-brand-ink/40 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-brand-ink/70">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
