import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'Programmes',
    path: '/programs',
    children: [
      { label: 'AI Explorers', path: '/programs#ai-explorers', desc: 'Ages 5–11 · AI fundamentals' },
      { label: 'Robotics Programme', path: '/programs#robotics', desc: 'Ages 5–11 · Build real robots' },
      { label: 'Adult Workshops', path: '/programs/adults', desc: 'Coming soon · For parents & pros' },
      { label: 'School Partnerships', path: '/programs/schools', desc: 'Bring KURAI to your school' },
    ],
  },
  { label: 'Schedule', path: '/schedule' },
  { label: 'Events', path: '/events' },
  { label: 'About', path: '/about' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-kurai-ice bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/">
          <img src="/images/logo.png" alt="KURAI" className="h-8" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label} className="relative">
              {link.children ? (
                <div
                  className="group relative"
                  onMouseEnter={() => setProgramsOpen(true)}
                  onMouseLeave={() => setProgramsOpen(false)}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center gap-1 font-body text-sm font-medium transition-colors ${
                        isActive ? 'text-kurai-royal' : 'text-kurai-dark hover:text-kurai-royal'
                      }`
                    }
                  >
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </NavLink>

                  {/* Dropdown */}
                  {programsOpen && (
                    <div className="absolute left-0 top-full pt-2">
                      <ul className="min-w-56 rounded-lg border border-kurai-ice bg-white p-2 shadow-lg">
                        {link.children.map((child) => (
                          <li key={child.label}>
                            <NavLink
                              to={child.path}
                              className={({ isActive }) =>
                                `block rounded-md px-4 py-2.5 transition-colors ${
                                  isActive
                                    ? 'bg-kurai-ice text-kurai-royal'
                                    : 'text-kurai-dark hover:bg-kurai-ice hover:text-kurai-royal'
                                }`
                              }
                            >
                              <span className="text-sm font-medium">{child.label}</span>
                              {'desc' in child && (
                                <span className="block text-[11px] text-kurai-dark-60">{(child as { desc: string }).desc}</span>
                              )}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `font-body text-sm font-medium transition-colors ${
                      isActive ? 'text-kurai-royal' : 'text-kurai-dark hover:text-kurai-royal'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          to="/free-trial"
          className="hidden rounded-lg bg-kurai-royal px-5 py-2.5 font-body text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-kurai-dark lg:inline-block"
        >
          Book a Free Trial
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-kurai-ice bg-white px-6 py-4 lg:hidden">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className="block font-body text-sm font-medium text-kurai-dark"
                >
                  {link.label}
                </NavLink>
                {link.children && (
                  <ul className="ml-4 mt-2 space-y-2">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <NavLink
                          to={child.path}
                          onClick={() => setMobileOpen(false)}
                          className="block font-body text-sm text-kurai-dark-60"
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link
            to="/free-trial"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block w-full rounded-lg bg-kurai-royal py-2.5 text-center font-body text-sm font-semibold text-white"
          >
            Book a Free Trial
          </Link>
        </div>
      )}
    </header>
  );
}
