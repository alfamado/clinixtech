import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-brand-mist bg-brand-ink text-brand-mist">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src="/logo-header.png" alt="ClinixTech Solutions Limited" className="h-11 w-auto rounded-md bg-white p-1" />
          <p className="mt-4 max-w-sm text-sm text-brand-mist/80">
            Intelligent digital solutions for healthcare delivery across Africa — built for hospitals,
            clinicians, researchers, and public health organizations.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/products" className="hover:text-white">Products</Link></li>
            <li><Link to="/team" className="hover:text-white">Team</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="mailto:clinixtechsolutions@gmail.com" className="hover:text-white">clinixtechsolutions@gmail.com</a></li>
            <li><a href="tel:+2348023567823" className="hover:text-white">+234 802 356 7823</a></li>
            <li><a href="tel:+2349079790073" className="hover:text-white">+234 907 979 0073</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-brand-mist/60 sm:flex-row">
          <p>&copy; {year} ClinixTech Solutions Limited. All rights reserved.</p>
          <div className="flex items-center gap-4"><Link to="/privacy" className="hover:text-white">Privacy</Link><p>Lagos, Nigeria</p></div>
        </div>
      </div>
    </footer>
  );
}
