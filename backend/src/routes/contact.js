import { Router } from 'express';
import { contactSchema, formatZodErrors } from '../validators/contactValidator.js';
import { sendContactNotification } from '../services/resend.js';
import { contactRateLimiter } from '../middleware/rateLimiter.js';

const router = Router();

router.post('/', contactRateLimiter, async (req, res) => {
  const parsed = contactSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      message: 'Please fix the highlighted fields and try again.',
      errors: formatZodErrors(parsed.error),
    });
  }

  const { website, ...data } = parsed.data;

  // Honeypot tripped — pretend success so bots don't learn to adapt, but skip sending.
  if (website) {
    return res.status(200).json({ message: 'Message sent successfully.' });
  }

  try {
    await sendContactNotification(data);
    return res.status(200).json({ message: 'Message sent successfully. We will be in touch shortly.' });
  } catch (err) {
    // Never leak internal error details to the client.
    console.error('[contact] failed to send email:', err.message);
    return res.status(502).json({
      message: 'We could not send your message right now. Please try again shortly or email us directly.',
    });
  }
});

export default router;
