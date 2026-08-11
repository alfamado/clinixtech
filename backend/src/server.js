import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { securityHeaders, permissionsPolicy } from './config/security.js';
import contactRouter from './routes/contact.js';

const app = express();
const PORT = process.env.PORT || 4000;

// Trust the first proxy hop (Render/Railway/Fly/etc. sit behind a load balancer) —
// needed so express-rate-limit and req.ip see the real client IP.
app.set('trust proxy', 1);

// --- Security headers (helmet: CSP, HSTS, X-Frame-Options, X-Content-Type-Options, etc.) ---
app.use(securityHeaders);
app.use(permissionsPolicy);

// --- CORS: only allow the known frontend origin(s) ---
const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      // Allow same-origin/non-browser requests (no Origin header) and any whitelisted origin.
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error('Not allowed by CORS'));
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  })
);

// --- Body parsing, with a small size limit to reduce abuse surface ---
app.use(express.json({ limit: '20kb' }));

// --- Routes ---
app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }));
app.use('/api/contact', contactRouter);

// --- 404 handler ---
app.use((req, res) => {
  res.status(404).json({ message: 'Not found.' });
});

// --- Central error handler (e.g. CORS rejection, malformed JSON) ---
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error('[server error]', err.message);
  res.status(err.status || 500).json({ message: 'Something went wrong.' });
});

app.listen(PORT, () => {
  console.log(`ClinixTech API listening on port ${PORT}`);
});
