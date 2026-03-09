import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import {
  CalendarDays,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  Star,
  Shield,
  Sparkles,
  Quote,
  AlertCircle,
} from 'lucide-react';
import { FORMSPREE_IDS, submitForm } from '@/config/formspree';
import { validate, validateForm } from '@/utils/validation';

const trialSlots = [
  {
    day: 'Saturday',
    time: '10:00 AM – 11:00 AM',
    program: 'AI Explorers',
    ages: 'Ages 5–7',
    spots: 3,
  },
  {
    day: 'Saturday',
    time: '11:30 AM – 12:30 PM',
    program: 'AI Explorers',
    ages: 'Ages 8–11',
    spots: 2,
  },
  {
    day: 'Saturday',
    time: '2:00 PM – 3:00 PM',
    program: 'Robotics Programme',
    ages: 'Ages 7–11',
    spots: 4,
  },
  {
    day: 'Weekday',
    time: 'By Appointment',
    program: 'Private Trial',
    ages: 'Ages 5–11',
    spots: 5,
  },
];

const whatToExpect = [
  'A 60-minute guided, hands-on lesson',
  'Age-appropriate activities in AI or Robotics',
  'Small group setting — max 8 students',
  'Meet our instructors and see our learning space',
  'A post-class summary so you know what your child learned',
  'No commitment, no pressure — just come and see',
];

const parentTestimonials = [
  {
    quote:
      'Brought my son for the trial and he loved it. He came home talking about training an AI to recognise animals. We signed up for the full term the next week — he couldn\'t wait to go back.',
    name: 'Tan',
    detail: 'Parent of 7-year-old · Signed up after AI Explorers trial',
  },
  {
    quote:
      'We tried the Robotics trial and my son was hooked from the first 10 minutes. He built a line-following robot in one session — I couldn\'t believe it. The instructor kept him engaged and focused the whole time.',
    name: 'Kangting',
    detail: 'Parent of 9-year-old · Signed up after Robotics trial',
  },
  {
    quote:
      'I was unsure about more screen time, but the trial changed my mind. My daughter spent the whole session building something real. The teacher explained everything she\'d learned afterwards, which I really appreciated.',
    name: 'Sarah',
    detail: 'Parent of 6-year-old · Signed up after AI Explorers trial',
  },
];

const freeTrialSchema = {
  '@context': 'https://schema.org',
  '@type': 'Offer',
  name: 'Free Trial AI & Robotics Class',
  description: 'A complimentary 60-minute guided AI or Robotics class for children aged 5–11 at KURAI, Iskandar Puteri.',
  price: '0',
  priceCurrency: 'MYR',
  availability: 'https://schema.org/InStock',
  url: 'https://kurai.edu.my/free-trial',
  seller: {
    '@type': 'EducationalOrganization',
    name: 'KURAI',
    url: 'https://kurai.edu.my',
  },
};

const STEP1_FIELDS = ['parent_name', 'phone', 'email', 'child_name', 'child_age'];

function FieldError({ error }: { error?: string }) {
  if (!error) return null;
  return <p className="mt-1 font-body text-xs text-red-500">{error}</p>;
}

function StepIndicator({ step }: { step: number }) {
  return (
    <div className="mb-8 flex items-center justify-center gap-3">
      {[1, 2].map((s) => (
        <div key={s} className="flex items-center gap-3">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full font-body text-sm font-bold transition-colors ${
              s <= step
                ? 'bg-kurai-royal text-white'
                : 'bg-kurai-ice text-kurai-dark-60'
            }`}
          >
            {s}
          </div>
          {s < 2 && (
            <div
              className={`h-0.5 w-12 rounded transition-colors ${
                step > 1 ? 'bg-kurai-royal' : 'bg-kurai-ice'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default function FreeTrial() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    const error = validate(name, value);
    setErrors((prev) => {
      if (error) return { ...prev, [name]: error };
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const inputClass = (name: string) =>
    `mt-1.5 w-full rounded-lg border px-4 py-3 font-body text-sm focus:outline-none ${
      touched[name] && errors[name]
        ? 'border-red-400 focus:border-red-500'
        : 'border-kurai-dark-60/20 focus:border-kurai-royal'
    }`;

  const goToStep2 = () => {
    const form = document.getElementById('trial-form') as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const formErrors = validateForm(data, STEP1_FIELDS);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setTouched(Object.fromEntries(STEP1_FIELDS.map((f) => [f, true])));
      return;
    }
    setStep(2);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    setFormStatus('sending');
    const result = await submitForm(FORMSPREE_IDS.freeTrial, data);

    if (result.ok) {
      setFormStatus('success');
      form.reset();
      setErrors({});
      setTouched({});
      setStep(1);
    } else {
      setFormStatus('error');
    }
  };

  return (
    <>
      <SEO
        title="Book a Free Trial Class | KURAI AI & Robotics Johor"
        description="Try a free AI or Robotics class for your child at KURAI, Iskandar Puteri. 60-minute guided session, no commitment. Book your spot today."
        path="/free-trial"
        jsonLd={freeTrialSchema}
      />
      <div>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-kurai-dark px-5 py-20 text-white sm:px-6 sm:py-28 md:py-36">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-kurai-royal/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-60 -left-40 h-[250px] w-[250px] md:h-[400px] md:w-[400px] rounded-full bg-kurai-light/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-kurai-royal/20 px-4 py-2 font-body text-xs font-semibold uppercase tracking-wider text-kurai-light">
            <Sparkles className="h-4 w-4" />
            Completely Free · No Commitment
          </div>
          <h1 className="font-heading text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-6xl">
            Book a{' '}
            <span className="bg-gradient-to-r from-kurai-light to-kurai-royal-light bg-clip-text text-transparent">
              Free Trial Class
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-kurai-light-soft">
            Let your child experience a real KURAI lesson — guided, hands-on, and age-appropriate. No payment, no obligation.
          </p>
          <a
            href="#booking-form"
            className="mt-10 inline-flex items-center gap-2 rounded-lg bg-kurai-cream px-8 py-4 font-body text-sm font-bold text-kurai-dark shadow-lg shadow-kurai-dark/10 transition-all hover:scale-105 hover:bg-kurai-cream-dark hover:shadow-kurai-dark/15"
          >
            Book Your Free Trial
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* ─── WHAT TO EXPECT ─── */}
      <section className="px-5 py-16 sm:px-6 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 sm:gap-16 md:grid-cols-2">
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-kurai-royal">
              What to Expect
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-kurai-dark md:text-4xl">
              Your Child&apos;s First KURAI Experience
            </h2>
            <p className="mt-4 font-body leading-relaxed text-kurai-dark-60">
              Our trial is a real lesson. Your child will experience
              KURAI exactly as it is: structured, hands-on, and guided.
            </p>
            <ul className="mt-8 space-y-4">
              {whatToExpect.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  <span className="font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image + Stats */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl shadow-lg shadow-kurai-dark/5">
              <picture>
                <source srcSet="/images/coding-cards.webp" type="image/webp" />
                <img
                  src="/images/coding-cards.jpg"
                  alt="Colorful coding cards used in KURAI classes"
                  className="h-48 w-full object-cover sm:h-64"
                  loading="lazy"
                />
              </picture>
            </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-kurai-ice p-5 text-center sm:p-8">
              <Clock className="mx-auto h-8 w-8 text-kurai-royal" />
              <p className="mt-3 font-heading text-2xl font-bold text-kurai-dark">60 min</p>
              <p className="mt-1 font-body text-sm text-kurai-dark-60">Session Duration</p>
            </div>
            <div className="rounded-2xl bg-kurai-ice p-5 text-center sm:p-8">
              <Users className="mx-auto h-8 w-8 text-kurai-royal" />
              <p className="mt-3 font-heading text-2xl font-bold text-kurai-dark">Max 8</p>
              <p className="mt-1 font-body text-sm text-kurai-dark-60">Students per Class</p>
            </div>
            <div className="rounded-2xl bg-kurai-ice p-5 text-center sm:p-8">
              <Shield className="mx-auto h-8 w-8 text-kurai-royal" />
              <p className="mt-3 font-heading text-2xl font-bold text-kurai-dark">100%</p>
              <p className="mt-1 font-body text-sm text-kurai-dark-60">Free, No Obligation</p>
            </div>
            <div className="rounded-2xl bg-kurai-ice p-5 text-center sm:p-8">
              <Star className="mx-auto h-8 w-8 text-kurai-royal" />
              <p className="mt-3 font-heading text-2xl font-bold text-kurai-dark">5–11</p>
              <p className="mt-1 font-body text-sm text-kurai-dark-60">Age Range</p>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ─── AVAILABLE SLOTS ─── */}
      <section className="bg-kurai-ice/50 px-5 py-16 sm:px-6 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-kurai-royal">
              Available Slots
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-kurai-dark md:text-4xl">
              Upcoming Trial Sessions
            </h2>
            <p className="mx-auto mt-4 max-w-lg font-body text-kurai-dark-60">
              Pick a session that suits your family. Spots are limited so every child gets real attention.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {trialSlots.map((slot, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-2xl border border-kurai-ice bg-white p-5 transition-shadow sm:p-6 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center gap-2 text-kurai-royal">
                    <CalendarDays className="h-4 w-4" />
                    <span className="font-body text-xs font-semibold uppercase tracking-wider">
                      {slot.day}
                    </span>
                  </div>
                  <h3 className="mt-2 font-heading text-base font-semibold text-kurai-dark">
                    {slot.program}
                  </h3>
                  <p className="mt-1 font-body text-sm text-kurai-dark-60">
                    {slot.time} · {slot.ages}
                  </p>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-block rounded-full px-3 py-1 font-body text-xs font-semibold ${
                      slot.spots <= 2
                        ? 'bg-amber-50 text-amber-700'
                        : 'bg-emerald-50 text-emerald-700'
                    }`}
                  >
                    {slot.spots} spots left
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOOKING FORM ─── */}
      <section id="booking-form" className="px-5 py-16 sm:px-6 md:py-28">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-kurai-royal">
              Book Now
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-kurai-dark md:text-4xl">
              Book Your Free Trial
            </h2>
            <p className="mx-auto mt-4 max-w-lg font-body text-kurai-dark-60">
              Tell us a little about your child and we&apos;ll confirm your booking within 24 hours.
            </p>
          </div>

          {/* Success message */}
          {formStatus === 'success' && (
            <div className="mt-8 flex items-start gap-3 rounded-lg bg-green-50 p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
              <div>
                <p className="font-heading text-sm font-semibold text-green-800">Booking received!</p>
                <p className="mt-1 font-body text-sm text-green-700">
                  We&apos;ll confirm your free trial via email and WhatsApp within 24 hours. See you soon!
                </p>
              </div>
            </div>
          )}

          {/* Error message */}
          {formStatus === 'error' && (
            <div className="mt-8 flex items-start gap-3 rounded-lg bg-red-50 p-5">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
              <div>
                <p className="font-heading text-sm font-semibold text-red-800">Something went wrong</p>
                <p className="mt-1 font-body text-sm text-red-700">
                  Please try again or WhatsApp us directly to book your trial.
                </p>
              </div>
            </div>
          )}

          <form id="trial-form" onSubmit={handleSubmit} className="mt-10 rounded-2xl border border-kurai-ice bg-white p-6 sm:p-8 md:p-10">
            <StepIndicator step={step} />

            {/* ── Step 1: Parent & Child Info ── */}
            <div className={step === 1 ? 'space-y-5' : 'hidden'}>
              <p className="font-heading text-lg font-semibold text-kurai-dark">About You & Your Child</p>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="font-body text-sm font-medium text-kurai-dark">
                    Parent / Guardian Name
                  </label>
                  <input
                    type="text"
                    name="parent_name"
                    required
                    onBlur={handleBlur}
                    className={inputClass('parent_name')}
                    placeholder="Your full name"
                  />
                  <FieldError error={touched.parent_name ? errors.parent_name : undefined} />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-kurai-dark">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    onBlur={handleBlur}
                    className={inputClass('phone')}
                    placeholder="+60 1X-XXX XXXX"
                  />
                  <FieldError error={touched.phone ? errors.phone : undefined} />
                </div>
              </div>
              <div>
                <label className="font-body text-sm font-medium text-kurai-dark">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  onBlur={handleBlur}
                  className={inputClass('email')}
                  placeholder="your@email.com"
                />
                <FieldError error={touched.email ? errors.email : undefined} />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="font-body text-sm font-medium text-kurai-dark">
                    Child&apos;s Name
                  </label>
                  <input
                    type="text"
                    name="child_name"
                    required
                    onBlur={handleBlur}
                    className={inputClass('child_name')}
                    placeholder="Child's name"
                  />
                  <FieldError error={touched.child_name ? errors.child_name : undefined} />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-kurai-dark">
                    Child&apos;s Age
                  </label>
                  <select
                    name="child_age"
                    required
                    onBlur={handleBlur}
                    className={inputClass('child_age')}
                  >
                    <option value="">Select age</option>
                    <option>5 years old</option>
                    <option>6 years old</option>
                    <option>7 years old</option>
                    <option>8 years old</option>
                    <option>9 years old</option>
                    <option>10 years old</option>
                    <option>11 years old</option>
                  </select>
                  <FieldError error={touched.child_age ? errors.child_age : undefined} />
                </div>
              </div>
              <button
                type="button"
                onClick={goToStep2}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-kurai-royal px-8 py-3.5 font-body font-bold text-white transition-all hover:scale-105 hover:bg-kurai-dark"
              >
                Next: Choose Your Session
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* ── Step 2: Preferences & Submit ── */}
            <div className={step === 2 ? 'space-y-5' : 'hidden'}>
              <p className="font-heading text-lg font-semibold text-kurai-dark">Choose Your Session</p>
              <div>
                <label className="font-body text-sm font-medium text-kurai-dark">
                  Preferred Programme
                </label>
                <select
                  name="preferred_program"
                  className="mt-1.5 w-full rounded-lg border border-kurai-dark-60/20 px-4 py-3 font-body text-sm focus:border-kurai-royal focus:outline-none"
                >
                  <option>AI Explorers</option>
                  <option>Robotics Programme</option>
                  <option>Not sure — help me choose</option>
                </select>
              </div>
              <div>
                <label className="font-body text-sm font-medium text-kurai-dark">
                  Preferred Trial Date
                </label>
                <select
                  name="preferred_date"
                  className="mt-1.5 w-full rounded-lg border border-kurai-dark-60/20 px-4 py-3 font-body text-sm focus:border-kurai-royal focus:outline-none"
                >
                  <option value="">Select a session</option>
                  <option>Saturday — 10:00 AM (Ages 5–7)</option>
                  <option>Saturday — 11:30 AM (Ages 8–11)</option>
                  <option>Saturday — 2:00 PM (Robotics)</option>
                  <option>Weekday — by appointment</option>
                </select>
              </div>
              <div>
                <label className="font-body text-sm font-medium text-kurai-dark">
                  Anything we should know?
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  className="mt-1.5 w-full rounded-lg border border-kurai-dark-60/20 px-4 py-3 font-body text-sm focus:border-kurai-royal focus:outline-none"
                  placeholder="Special requirements, questions, etc. (optional)"
                />
              </div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="privacy_consent"
                  id="privacy_consent_trial"
                  required
                  className="mt-1 h-4 w-4 shrink-0 rounded border-kurai-dark-60/20 text-kurai-royal focus:ring-kurai-royal"
                />
                <label htmlFor="privacy_consent_trial" className="font-body text-sm leading-relaxed text-kurai-dark-60">
                  I agree to the{' '}
                  <Link to="/privacy-policy" className="font-semibold text-kurai-royal hover:text-kurai-dark" target="_blank">
                    Privacy Policy
                  </Link>{' '}
                  and consent to KURAI collecting and processing my data and my child&apos;s data as described.
                </label>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="rounded-lg border border-kurai-dark-60/20 px-6 py-3.5 font-body text-sm font-semibold text-kurai-dark transition-all hover:bg-kurai-ice"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="flex-1 rounded-lg bg-kurai-royal px-8 py-3.5 font-body font-bold text-white transition-all hover:scale-105 hover:bg-kurai-dark disabled:opacity-50"
                >
                  {formStatus === 'sending' ? 'Submitting...' : 'Book My Free Trial'}
                </button>
              </div>
              <p className="text-center font-body text-sm text-kurai-dark-60">
                We&apos;ll confirm your booking via email and WhatsApp within 24 hours.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-kurai-dark to-kurai-dark-80 px-5 py-16 text-white sm:px-6 md:py-28">
        <div className="pointer-events-none absolute -right-40 -bottom-40 h-[250px] w-[250px] md:h-[400px] md:w-[400px] rounded-full bg-kurai-light/10 blur-3xl" />
        <div className="relative mx-auto max-w-5xl">
          <div className="text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-kurai-light">
              From Other Parents
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
              What Parents Said After the Trial
            </h2>
            <div className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-white/10 px-5 py-2.5">
              <div className="flex gap-0.5 text-kurai-amber">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <a href="https://g.page/r/CeijCcLckt4BEB0/review" target="_blank" rel="noopener noreferrer" className="font-body text-sm font-semibold text-kurai-light-soft hover:text-white transition-colors">Rated 5.0 on Google · 15+ Reviews</a>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {parentTestimonials.map((t) => (
              <div
                key={t.name}
                className="relative rounded-2xl border border-white/10 border-t-2 border-t-kurai-light/20 bg-white/5 p-6 sm:p-8 md:p-10"
              >
                <Quote className="absolute right-6 top-6 h-10 w-10 text-white/5" />
                <div className="flex gap-1 text-kurai-amber">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 font-body text-sm leading-[1.8] text-kurai-light-soft md:text-base">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="font-heading text-base font-semibold">{t.name}</p>
                  <p className="mt-0.5 font-body text-sm text-kurai-light-soft">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="relative overflow-hidden bg-kurai-royal px-5 py-16 text-white sm:px-6 md:py-28">
        <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold md:text-3xl">
            Have questions before booking?
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-body text-lg leading-relaxed text-white/80">
            We&apos;ll help you find the right programme and schedule. Chat with us on WhatsApp for a quick reply.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/60122169871"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-8 py-3.5 font-body text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-emerald-600 hover:shadow-xl"
            >
              Chat on WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold text-white/80 transition-colors hover:text-white"
            >
              Explore Our Programmes
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            <Link
              to="/schedule"
              className="inline-flex items-center gap-1.5 font-body text-sm text-white/60 transition-colors hover:text-white"
            >
              View our class schedule
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 font-body text-sm text-white/60 transition-colors hover:text-white"
            >
              Have questions? Contact us
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
