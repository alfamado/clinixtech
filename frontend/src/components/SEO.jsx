import { useEffect } from 'react';

export default function SEO({ title, description }) {
  useEffect(() => {
    if (title) document.title = `${title} | ClinixTech Solutions Limited`;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', description);
    }
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://clinixtech.org${window.location.pathname}`);
  }, [title, description]);

  return null;
}
