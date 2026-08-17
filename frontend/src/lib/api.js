// Base URL of the backend API. Set VITE_API_URL in .env / hosting provider env vars.
// Example production value: https://api.clinixtech.org
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

/**
 * Submits the contact form to the backend.
 * The backend performs the authoritative validation — this is a thin client.
 * Returns { ok, message, errors? }.
 */
export async function submitContactForm(payload) {
  try {
    const res = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'omit',
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      return {
        ok: false,
        message: data.message || 'Something went wrong. Please try again.',
        errors: data.errors || null,
        status: res.status,
      };
    }

    return { ok: true, message: data.message || 'Message sent successfully.' };
  } catch {
    return { ok: false, message: 'Network error — please check your connection and try again.' };
  }
}
