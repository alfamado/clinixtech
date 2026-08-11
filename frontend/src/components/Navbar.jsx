import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-brand-blue' : 'text-brand-ink/70 hover:text-brand-ink'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? 'border-brand-mist bg-white/90 backdrop-blur' : 'border-transparent bg-white/60 backdrop-blur'
      }`}
    >
      <nav className="container-page flex items-center justify-between py-3">
        <NavLink to="/" className="flex items-center gap-2" aria-label="ClinixTech home">
          <img src="/logo.jpg" alt="ClinixTech Solutions Limited" className="h-36 w-auto rounded-md" />
        </NavLink>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={linkClass} end={l.to === '/'}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <NavLink to="/contact" className="btn-primary">
            Book a consultation
          </NavLink>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-lg border border-brand-mist p-2 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          )}
        </button>
      </nav>

      {open && (
        <div className="border-t border-brand-mist bg-white md:hidden">
          <ul className="container-page flex flex-col gap-1 py-3">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2.5 text-sm font-medium ${
                      isActive ? 'bg-brand-paper text-brand-blue' : 'text-brand-ink/80'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <NavLink to="/contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                Book a consultation
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
