import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  // Hide on the free trial page itself
  const isTrialPage = location.pathname === '/free-trial';

  useEffect(() => {
    if (isTrialPage) return;

    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isTrialPage]);

  if (isTrialPage || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-kurai-ice bg-white/95 px-4 py-3 backdrop-blur-md lg:hidden">
      <Link
        to="/free-trial"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-kurai-royal px-6 py-3 font-body text-sm font-bold text-white shadow-lg shadow-kurai-royal/20 transition-all active:scale-[0.98]"
      >
        Book a Free Trial
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
