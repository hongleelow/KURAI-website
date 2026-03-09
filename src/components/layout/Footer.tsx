import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { FORMSPREE_IDS, submitForm } from '@/config/formspree';

const footerLinks = {
  programs: [
    { label: 'AI Explorers', path: '/programs#ai-explorers' },
    { label: 'Robotics Programme', path: '/programs#robotics' },
    { label: 'Adult Workshops', path: '/programs/adults' },
    { label: 'School Partnerships', path: '/programs/schools' },
  ],
  company: [
    { label: 'About KURAI', path: '/about' },
    { label: 'Class Schedule', path: '/schedule' },
    { label: 'Events', path: '/events' },
    { label: 'Blog & Resources', path: '/blog' },
    { label: 'Contact Us', path: '/contact' },
  ],
  quickLinks: [
    { label: 'Book a Free Trial', path: '/free-trial' },
    { label: 'FAQs', path: '/contact#faq' },
    { label: 'Contact Us', path: '/contact' },
  ],
};

export default function Footer() {
  const [nlStatus, setNlStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleNewsletter = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNlStatus('sending');
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const result = await submitForm(FORMSPREE_IDS.newsletter, data);
    setNlStatus(result.ok ? 'success' : 'error');
    if (result.ok) e.currentTarget.reset();
  };

  return (
    <footer className="bg-kurai-dark text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand + Newsletter */}
          <div className="lg:col-span-2">
            <Link to="/">
              <img src="/images/logo-white.webp" alt="KURAI" className="h-8" />
            </Link>
            <p className="mt-4 font-body text-sm leading-relaxed text-kurai-light-soft">
              Structured AI and Robotics education for children aged 5–11
              in Johor Bahru, Malaysia.
            </p>
            {/* Newsletter Signup */}
            <div className="mt-6">
              <p className="font-body text-xs font-semibold uppercase tracking-wider text-kurai-light">
                Newsletter
              </p>
              {nlStatus === 'success' ? (
                <div className="mt-3 flex items-center gap-2 text-green-400">
                  <CheckCircle2 className="h-4 w-4" />
                  <span className="font-body text-sm">Subscribed!</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="mt-3 flex gap-2">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your email"
                    className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 font-body text-sm text-white placeholder-white/50 focus:border-kurai-light focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={nlStatus === 'sending'}
                    className="flex items-center justify-center rounded-lg bg-kurai-royal px-4 py-2.5 transition-all hover:scale-105 hover:bg-kurai-royal-light disabled:opacity-50"
                    aria-label="Subscribe to newsletter"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:contents">
          {/* Programs */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-kurai-light">
              Programmes
            </h4>
            <ul className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-kurai-light-soft transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-kurai-light">
              Company
            </h4>
            <ul className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-kurai-light-soft transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch + Quick Links */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-kurai-light">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-kurai-light" />
                <span className="font-body text-sm text-kurai-light-soft">
                  Horizon Hills, Iskandar Puteri, Johor
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-kurai-light" />
                <span className="font-body text-sm text-kurai-light-soft">
                  hong@thekurai.com
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-kurai-light" />
                <span className="font-body text-sm text-kurai-light-soft">
                  +6012-216 9871
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 shrink-0 text-green-400" />
                <a
                  href="https://wa.me/60122169871"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-kurai-light-soft transition-colors hover:text-white"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.instagram.com/thekuraico?igsh=MXRkejRneHJ0dDAzbA=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-kurai-light-soft transition-all hover:scale-110 hover:bg-white/20 hover:text-white"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a
                href="https://www.facebook.com/thekuraico"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-kurai-light-soft transition-all hover:scale-110 hover:bg-white/20 hover:text-white"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
            {/* Quick Links */}
            <div className="mt-6 border-t border-kurai-dark-80 pt-4">
              <ul className="space-y-2">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="font-body text-sm font-medium text-kurai-light transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-kurai-dark-80 pt-6 sm:mt-12 sm:pt-8">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
            <p className="font-body text-sm text-kurai-dark-60">
              &copy; {new Date().getFullYear()} KURAI Education Sdn Bhd. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link to="/privacy-policy" className="font-body text-sm text-kurai-dark-60 transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms" className="font-body text-sm text-kurai-dark-60 transition-colors hover:text-white">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
