import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import { FORMSPREE_IDS, submitForm } from '@/config/formspree';

const footerLinks = {
  programs: [
    { label: 'AI Explorers', path: '/programs#ai-explorers' },
    { label: 'Robotics Program', path: '/programs#robotics' },
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
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand + Newsletter */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-heading text-2xl font-bold tracking-tight">
              KURAI
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
                    className="flex items-center justify-center rounded-lg bg-kurai-royal px-4 py-2.5 transition-colors hover:bg-kurai-royal-light disabled:opacity-50"
                    aria-label="Subscribe to newsletter"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-kurai-light">
              Programs
            </h4>
            <ul className="mt-4 space-y-3">
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
            <ul className="mt-4 space-y-3">
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
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-kurai-light">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-kurai-light" />
                <span className="font-body text-sm text-kurai-light-soft">
                  Johor Bahru, Malaysia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-kurai-light" />
                <span className="font-body text-sm text-kurai-light-soft">
                  hello@kurai.edu.my
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-kurai-light" />
                <span className="font-body text-sm text-kurai-light-soft">
                  +60 7-XXX XXXX
                </span>
              </li>
            </ul>
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

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-kurai-dark-80 pt-8">
          <p className="text-center font-body text-xs text-kurai-dark-60">
            &copy; {new Date().getFullYear()} KURAI Education Sdn Bhd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
