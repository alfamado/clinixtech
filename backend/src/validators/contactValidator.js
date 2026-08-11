import { z } from 'zod';

// Authoritative, server-side validation. The client-side checks in the React
// app are only a UX convenience — this is what actually enforces correctness.
export const contactSchema = z.object({
  name: z
    .string({ required_error: 'Name is required.' })
    .trim()
    .min(2, 'Name must be at least 2 characters.')
    .max(100, 'Name must be under 100 characters.'),

  email: z
    .string({ required_error: 'Email is required.' })
    .trim()
    .email('Enter a valid email address.')
    .max(254),

  organization: z.string().trim().max(150).optional().or(z.literal('')),

  reason: z
    .enum([
      'General inquiry',
      'Book a consultation',
      'Request a product demo',
      'Partnership',
      'Join product waiting list',
    ])
    .default('General inquiry'),

  message: z
    .string({ required_error: 'Message is required.' })
    .trim()
    .min(20, 'Message must be at least 20 characters.')
    .max(3000, 'Message must be under 3000 characters.'),

  // Honeypot — must arrive empty. Real browsers/users never populate it.
  website: z.string().max(0, 'Spam detected.').optional().or(z.literal('')),
});

export function formatZodErrors(zodError) {
  const errors = {};
  for (const issue of zodError.issues) {
    const field = issue.path[0];
    if (field && !errors[field]) errors[field] = issue.message;
  }
  return errors;
}
