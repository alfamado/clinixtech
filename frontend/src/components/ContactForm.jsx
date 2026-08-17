import { useState } from 'react';
import { submitContactForm } from '../lib/api.js';
import { Link } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  organization: '',
  reason: 'General inquiry',
  message: '',
  website: '', // honeypot — real users never fill this in
};

function validate(values) {
  const errors = {};
  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = 'Enter your full name.';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!values.message.trim() || values.message.trim().length < 20) {
    errors.message = 'Tell us a bit more — at least 20 characters.';
  }
  if (values.message.trim().length > 3000) {
    errors.message = 'Message is too long (max 3000 characters).';
  }
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [serverMessage, setServerMessage] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Honeypot: if filled, silently pretend success without calling the API.
    if (values.website) {
      setStatus('success');
      setServerMessage('Thanks — your message has been sent.');
      return;
    }

    const clientErrors = validate(values);
    setErrors(clientErrors);
    if (Object.keys(clientErrors).length > 0) return;

    setStatus('submitting');
    setServerMessage('');

    const { ok, message, errors: serverErrors } = await submitContactForm(values);

    if (ok) {
      setStatus('success');
      setServerMessage(message);
      setValues(initialState);
    } else {
      setStatus('error');
      setServerMessage(message);
      if (serverErrors) setErrors(serverErrors);
    }
  }

  if (status === 'success') {
    return (
      <div className="card" role="status">
        <h3 className="text-lg font-semibold text-brand-ink">Message sent</h3>
        <p className="mt-2 text-sm text-brand-ink/70">{serverMessage}</p>
        <button type="button" className="btn-secondary mt-4" onClick={() => setStatus('idle')}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card space-y-5">
      {/* Honeypot field — hidden from real users, visible to bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={handleChange}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-brand-ink">Full name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={values.name}
            onChange={handleChange}
            className="mt-1.5 w-full rounded-lg border border-brand-mist px-3 py-2.5 text-sm outline-none focus:border-brand-blue"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && <p id="name-error" className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-brand-ink">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={handleChange}
            className="mt-1.5 w-full rounded-lg border border-brand-mist px-3 py-2.5 text-sm outline-none focus:border-brand-blue"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && <p id="email-error" className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="organization" className="text-sm font-medium text-brand-ink">
            Organization <span className="text-brand-ink/40">(optional)</span>
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            value={values.organization}
            onChange={handleChange}
            className="mt-1.5 w-full rounded-lg border border-brand-mist px-3 py-2.5 text-sm outline-none focus:border-brand-blue"
          />
        </div>

        <div>
          <label htmlFor="reason" className="text-sm font-medium text-brand-ink">Reason for contact</label>
          <select
            id="reason"
            name="reason"
            value={values.reason}
            onChange={handleChange}
            className="mt-1.5 w-full rounded-lg border border-brand-mist bg-white px-3 py-2.5 text-sm outline-none focus:border-brand-blue"
          >
            <option>General inquiry</option>
            <option>Book a consultation</option>
            <option>Request a product demo</option>
            <option>Partnership</option>
            <option>Join product waiting list</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-brand-ink">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={values.message}
          onChange={handleChange}
          className="mt-1.5 w-full resize-none rounded-lg border border-brand-mist px-3 py-2.5 text-sm outline-none focus:border-brand-blue"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && <p id="message-error" className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      <p className="text-xs leading-5 text-brand-ink/60">
        Please do not include patient records or sensitive health information. By submitting, you acknowledge our <Link to="/privacy" className="font-medium text-brand-blue underline underline-offset-2">Privacy Notice</Link>.
      </p>

      {status === 'error' && serverMessage && (
        <p role="alert" className="text-sm text-red-600">{serverMessage}</p>
      )}

      <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full sm:w-auto">
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
