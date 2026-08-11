import helmet from 'helmet';

/**
 * Security headers for the API.
 * The API only ever returns JSON, so the CSP here is intentionally locked down —
 * it exists mainly as defense-in-depth in case an error page or docs route is
 * ever served as HTML.
 */
export const securityHeaders = helmet({
  contentSecurityPolicy: {
    useDefaults: false,
    directives: {
      defaultSrc: ["'none'"],
      frameAncestors: ["'none'"],
      baseUri: ["'none'"],
      objectSrc: ["'none'"],
    },
  },
  hsts: {
    maxAge: 63072000, // 2 years, in seconds
    includeSubDomains: true,
    preload: true,
  },
  frameguard: { action: 'deny' }, // X-Frame-Options: DENY
  noSniff: true, // X-Content-Type-Options: nosniff
  referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
  crossOriginResourcePolicy: { policy: 'same-site' },
  crossOriginOpenerPolicy: { policy: 'same-origin' },
  xssFilter: true,
});

/**
 * Explicit Permissions-Policy — helmet doesn't set this one for us.
 */
export function permissionsPolicy(req, res, next) {
  res.setHeader(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), payment=(), usb=()'
  );
  next();
}
