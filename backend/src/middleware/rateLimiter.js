import rateLimit from 'express-rate-limit';

const windowMs = Number(process.env.CONTACT_RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000; // 15 min
const max = Number(process.env.CONTACT_RATE_LIMIT_MAX) || 5;

export const contactRateLimiter = rateLimit({
  windowMs,
  max,
  standardHeaders: true, // send RateLimit-* headers
  legacyHeaders: false,
  message: {
    message: 'Too many messages sent from this network. Please try again later.',
  },
});
