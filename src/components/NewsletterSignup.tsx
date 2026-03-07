import { Send } from 'lucide-react';

interface NewsletterSignupProps {
  variant?: 'light' | 'dark';
  compact?: boolean;
}

export default function NewsletterSignup({ variant = 'light', compact = false }: NewsletterSignupProps) {
  const isDark = variant === 'dark';

  if (compact) {
    return (
      <form className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          placeholder="Your email address"
          className={`flex-1 rounded-lg border px-4 py-2.5 font-body text-sm focus:outline-none ${
            isDark
              ? 'border-white/20 bg-white/10 text-white placeholder-white/50 focus:border-kurai-light'
              : 'border-kurai-dark-60/20 bg-white text-kurai-dark placeholder-kurai-dark-60/50 focus:border-kurai-royal'
          }`}
        />
        <button
          type="submit"
          className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 font-body text-sm font-semibold transition-colors ${
            isDark
              ? 'bg-kurai-royal text-white hover:bg-kurai-royal-light'
              : 'bg-kurai-royal text-white hover:bg-kurai-dark'
          }`}
        >
          <Send className="h-3.5 w-3.5" />
          Subscribe
        </button>
      </form>
    );
  }

  return (
    <div
      className={`rounded-2xl p-8 md:p-10 ${
        isDark ? 'bg-white/5 border border-white/10' : 'bg-kurai-ice border border-kurai-ice'
      }`}
    >
      <h3
        className={`font-heading text-lg font-semibold ${
          isDark ? 'text-white' : 'text-kurai-dark'
        }`}
      >
        Stay in the Loop
      </h3>
      <p
        className={`mt-2 font-body text-sm ${
          isDark ? 'text-kurai-light-soft' : 'text-kurai-dark-60'
        }`}
      >
        Get AI fun facts, parent tips, and event updates delivered to your inbox.
      </p>
      <form className="mt-5 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          placeholder="Your email address"
          className={`flex-1 rounded-lg border px-4 py-3 font-body text-sm focus:outline-none ${
            isDark
              ? 'border-white/20 bg-white/10 text-white placeholder-white/50 focus:border-kurai-light'
              : 'border-kurai-dark-60/20 bg-white text-kurai-dark placeholder-kurai-dark-60/50 focus:border-kurai-royal'
          }`}
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-kurai-royal px-6 py-3 font-body text-sm font-semibold text-white transition-colors hover:bg-kurai-royal-light"
        >
          <Send className="h-4 w-4" />
          Subscribe
        </button>
      </form>
      <p
        className={`mt-3 font-body text-xs ${
          isDark ? 'text-kurai-dark-60' : 'text-kurai-dark-60/60'
        }`}
      >
        No spam, ever. Unsubscribe anytime.
      </p>
    </div>
  );
}
