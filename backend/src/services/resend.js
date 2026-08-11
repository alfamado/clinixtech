import { Resend } from 'resend';
import { escapeHtml } from '../utils/escapeHtml.js';

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Sends the contact-form notification email via Resend.
 * Throws on failure so the route handler can respond appropriately.
 */
export async function sendContactNotification({ name, email, organization, reason, message }) {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto;">
      <h2 style="color:#0F172A;">New website enquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${organization ? `<p><strong>Organization:</strong> ${escapeHtml(organization)}</p>` : ''}
      <p><strong>Reason:</strong> ${escapeHtml(reason)}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap; border-left: 3px solid #0A84FF; padding-left: 12px;">${escapeHtml(message)}</p>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL,
    to: process.env.CONTACT_TO_EMAIL,
    replyTo: email,
    subject: `[ClinixTech website] ${reason} — ${name}`,
    html,
  });

  if (error) {
    throw new Error(error.message || 'Failed to send email via Resend.');
  }
}
