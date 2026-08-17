# ClinixTech Website

A two-part project:

```
clinixtech/
├── frontend/   React 18 + Vite + React Router + Tailwind
├── backend/    Express API — validates and emails contact-form submissions via Resend
└── deploy/     Sample Nginx config (only needed for a self-managed VPS deploy)
```

## 1. Local setup

**Frontend**
```bash
cd frontend
npm install
cp .env.example .env      # set VITE_API_URL=http://localhost:4000 for local dev
npm run dev
```

**Backend**
```bash
cd backend
npm install
cp .env.example .env      # fill in RESEND_API_KEY, CONTACT_TO_EMAIL, ALLOWED_ORIGINS
npm run dev
```

Get a free Resend API key at https://resend.com — verify your sending domain there
(e.g. `clinixtech.org`) so `CONTACT_FROM_EMAIL` can use it. Until the domain is
verified, Resend's sandbox `onboarding@resend.dev` sender works for testing.

## 2. How the contact form is protected

- **Client-side**: format checks + a hidden honeypot field (`ContactForm.jsx`) — UX only, not trusted.
- **Server-side (authoritative)**: `zod` schema in `contactValidator.js` — 100–3000 char message length,
  RFC-shaped email, honeypot must be empty, `reason` restricted to a fixed enum.
- **Rate limiting**: 5 requests per 15 minutes per IP (`rateLimiter.js`) — tune via `.env`.
- **CORS**: only origins listed in `ALLOWED_ORIGINS` may call the API.
- **Body size limit**: 20kb cap on the JSON payload.
- **Email injection safety**: all user input is HTML-escaped before being interpolated into the
  notification email (`escapeHtml.js`).
- Errors are logged server-side but never leak internals to the client response.

### No-backend alternative
If you'd rather not run/host the Express API at all, swap `ContactForm`'s submit call for a POST
to a [Formspree](https://formspree.io) endpoint instead — same form markup, no backend needed,
but you lose the custom validation/rate-limiting above (Formspree does its own spam filtering).

## 3. Deployment

**Frontend → Vercel (recommended)**
1. Import the `frontend/` folder as a new Vercel project.
2. Set env var `VITE_API_URL` to your deployed backend URL.
3. `vercel.json` already ships the security headers below — no extra config needed.
4. Point your domain's DNS at Vercel, then enable the domain in Vercel's dashboard (auto-HTTPS via
   Let's Encrypt).

**Frontend → Netlify (alternative)**: the same headers are duplicated in `public/_headers`, which
Netlify reads automatically — no `vercel.json` equivalent needed.

**Frontend → self-managed VPS**: build with `npm run build`, serve the `dist/` folder with Nginx
using `deploy/nginx.conf.example` as a starting point (already includes the same header set, plus
`certbot`/Let's Encrypt TLS termination).

**Backend → Render / Railway / Fly.io**
1. Deploy `backend/` as a Node web service (`npm start`).
2. Set all vars from `.env.example` in the host's dashboard.
3. Point `ALLOWED_ORIGINS` at your live frontend domain(s).
4. Point the frontend's `VITE_API_URL` at the backend's public URL (put it behind your own
   subdomain, e.g. `api.clinixtech.org`, via a CNAME).

## 4. Exact security headers (as requested)

These are already configured in `frontend/vercel.json`, `frontend/public/_headers`,
`deploy/nginx.conf.example`, and `backend/src/config/security.js` (via `helmet`) — reproduced here
for reference:

```
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self' https://api.clinixtech.org; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()
X-XSS-Protection: 0
```

Notes:
- **HSTS `preload`**: only submit the domain to https://hstspreload.org once you're certain every
  subdomain will always serve HTTPS — preload-listed domains are extremely hard to walk back.
  It's safe to launch without submitting to the list; the header still enforces HTTPS for repeat
  visitors either way.
- **CSP `connect-src`**: update `https://api.clinixtech.org` to match wherever you actually deploy
  the backend, in both `vercel.json`/`_headers`/`nginx.conf.example` and this README.
- **`X-XSS-Protection: 0`**: intentionally disables the legacy browser XSS auditor, which is
  deprecated and can itself introduce bugs — CSP is the modern replacement.
- CSP has no `unsafe-inline` anywhere, so any future inline `<script>` or `style=""` attribute will
  be silently blocked by the browser — keep all styles in Tailwind classes and all scripts in
  bundled files.

## 5. Content

All copy (services, products, team bios, FAQs) lives in `frontend/src/data/content.js`, sourced
directly from the requirements doc — edit that one file to update site-wide text without touching
components.
