import { useEffect, useState } from 'react';

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
const consentKey = 'clinixtech-analytics-consent';

export function resetAnalyticsConsent() {
  localStorage.removeItem(consentKey);
  window.dispatchEvent(new Event('clinixtech-consent-updated'));
}

function loadGoogleAnalytics() {
  if (!measurementId || document.querySelector('script[data-clinixtech-analytics]')) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  script.dataset.clinixtechAnalytics = 'true';
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, { anonymize_ip: true });
}

export default function Analytics() {
  useEffect(() => {
    if (localStorage.getItem(consentKey) === 'accepted') loadGoogleAnalytics();
  }, []);

  return null;
}

export function CookieConsent() {
  const [hasChoice, setHasChoice] = useState(() => localStorage.getItem(consentKey));
  useEffect(() => {
    const syncChoice = () => setHasChoice(localStorage.getItem(consentKey));
    window.addEventListener('clinixtech-consent-updated', syncChoice);
    return () => window.removeEventListener('clinixtech-consent-updated', syncChoice);
  }, []);
  const accept = () => {
    localStorage.setItem(consentKey, 'accepted');
    loadGoogleAnalytics();
    setHasChoice('accepted');
    window.dispatchEvent(new Event('clinixtech-consent-updated'));
  };

  const decline = () => {
    localStorage.setItem(consentKey, 'declined');
    setHasChoice('declined');
    window.dispatchEvent(new Event('clinixtech-consent-updated'));
  };

  if (!measurementId || hasChoice) return null;

  return (
    <aside className="cookie-consent" aria-label="Cookie preference">
      <p>We use optional analytics cookies to understand site traffic. <a href="/privacy">Privacy notice</a></p>
      <div className="flex shrink-0 gap-2">
        <button type="button" className="btn-secondary !px-3 !py-2" onClick={decline}>Decline</button>
        <button type="button" className="btn-primary !px-3 !py-2" onClick={accept}>Accept</button>
      </div>
    </aside>
  );
}
