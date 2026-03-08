import { Link } from 'react-router-dom';
import { Home, BookOpen, Mail, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | KURAI"
        description="The page you're looking for doesn't exist. Return to KURAI's homepage to explore our AI and Robotics programmes in Johor Bahru."
        path="/404"
        noindex
      />

      <section className="flex min-h-[70vh] items-center justify-center px-6 py-28">
        <div className="mx-auto max-w-lg text-center">
          <p className="font-heading text-7xl font-bold text-kurai-royal">404</p>
          <h1 className="mt-4 font-heading text-3xl font-bold text-kurai-dark">
            Page Not Found
          </h1>
          <p className="mt-4 font-body text-lg leading-relaxed text-kurai-dark-60">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-lg bg-kurai-royal px-6 py-3 font-body text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-kurai-dark"
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 rounded-lg border border-kurai-ice px-6 py-3 font-body text-sm font-semibold text-kurai-dark transition-all hover:scale-105 hover:border-kurai-royal/20 hover:shadow-sm"
            >
              <BookOpen className="h-4 w-4" />
              Our Programmes
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-kurai-ice px-6 py-3 font-body text-sm font-semibold text-kurai-dark transition-all hover:scale-105 hover:border-kurai-royal/20 hover:shadow-sm"
            >
              <Mail className="h-4 w-4" />
              Contact Us
            </Link>
          </div>
          <div className="mt-8">
            <Link
              to="/free-trial"
              className="inline-flex items-center gap-1 font-body text-sm font-semibold text-kurai-royal transition-colors hover:text-kurai-dark"
            >
              Or book a free trial class
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
