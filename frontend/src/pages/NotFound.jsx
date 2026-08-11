import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found" />
      <div className="container-page flex min-h-[60vh] flex-col items-center justify-center text-center">
        <p className="text-sm font-semibold text-brand-blue">404</p>
        <h1 className="mt-2 text-3xl font-bold">Page not found</h1>
        <p className="mt-3 text-brand-ink/70">The page you're looking for doesn't exist or has moved.</p>
        <Link to="/" className="btn-primary mt-6">Back to home</Link>
      </div>
    </>
  );
}
