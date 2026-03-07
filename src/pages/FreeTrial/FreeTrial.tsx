import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
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
    program: 'Robotics Program',
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
      'The trial class was all it took. My daughter was hooked after 10 minutes. Now she looks forward to every Saturday at KURAI.',
    name: 'Farah H.',
    detail: 'Parent of a 6-year-old',
  },
  {
    quote:
      'I was sceptical about AI classes for children, but the trial completely changed my mind. The instructors were patient, and my son built something real.',
    name: 'David C.',
    detail: 'Parent of a 10-year-old',
  },
];

export default function FreeTrial() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const result = await submitForm(FORMSPREE_IDS.freeTrial, data);

    if (result.ok) {
      setFormStatus('success');
      form.reset();
    } else {
      setFormStatus('error');
    }
  };

  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-kurai-dark px-6 py-28 text-white md:py-36">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-kurai-royal/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-60 -left-40 h-[400px] w-[400px] rounded-full bg-kurai-light/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-kurai-royal/20 px-4 py-2 font-body text-xs font-semibold uppercase tracking-wider text-kurai-light">
            <Sparkles className="h-4 w-4" />
            Completely Free · No Commitment
          </div>
          <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
            Book a{' '}
            <span className="bg-gradient-to-r from-kurai-light to-kurai-royal-light bg-clip-text text-transparent">
              Free Trial Class
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-kurai-light-soft">
            Let your child experience a real KURAI lesson — guided, hands-on, and designed
            for how young minds learn. No payment, no obligation.
          </p>
          <a
            href="#booking-form"
            className="mt-10 inline-flex items-center gap-2 rounded-lg bg-kurai-royal px-8 py-3.5 font-body text-sm font-semibold text-white shadow-lg shadow-kurai-royal/30 transition-all hover:bg-kurai-royal-light hover:shadow-kurai-royal/40"
          >
            Reserve Your Spot
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* ─── WHAT TO EXPECT ─── */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-kurai-royal">
              What to Expect
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-kurai-dark md:text-4xl">
              Your Child&apos;s First KURAI Experience
            </h2>
            <p className="mt-4 font-body leading-relaxed text-kurai-dark-60">
              Our trial class is a real lesson — not a sales pitch. Your child will experience
              KURAI exactly as it is: structured, hands-on, and thoughtfully guided.
            </p>
            <ul className="mt-8 space-y-4">
              {whatToExpect.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                  <span className="font-body text-sm text-kurai-dark-60">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-kurai-ice p-8 text-center">
              <Clock className="mx-auto h-8 w-8 text-kurai-royal" />
              <p className="mt-3 font-heading text-2xl font-bold text-kurai-dark">60 min</p>
              <p className="mt-1 font-body text-xs text-kurai-dark-60">Session Duration</p>
            </div>
            <div className="rounded-2xl bg-kurai-ice p-8 text-center">
              <Users className="mx-auto h-8 w-8 text-kurai-royal" />
              <p className="mt-3 font-heading text-2xl font-bold text-kurai-dark">Max 8</p>
              <p className="mt-1 font-body text-xs text-kurai-dark-60">Students per Class</p>
            </div>
            <div className="rounded-2xl bg-kurai-ice p-8 text-center">
              <Shield className="mx-auto h-8 w-8 text-kurai-royal" />
              <p className="mt-3 font-heading text-2xl font-bold text-kurai-dark">100%</p>
              <p className="mt-1 font-body text-xs text-kurai-dark-60">Free, No Obligation</p>
            </div>
            <div className="rounded-2xl bg-kurai-ice p-8 text-center">
              <Star className="mx-auto h-8 w-8 text-kurai-royal" />
              <p className="mt-3 font-heading text-2xl font-bold text-kurai-dark">5–11</p>
              <p className="mt-1 font-body text-xs text-kurai-dark-60">Age Range</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AVAILABLE SLOTS ─── */}
      <section className="bg-kurai-ice/50 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-kurai-royal">
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
                className="flex items-center justify-between rounded-2xl border border-kurai-ice bg-white p-6 transition-shadow hover:shadow-md"
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
                        : 'bg-green-50 text-green-700'
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
      <section id="booking-form" className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-kurai-royal">
              Reserve Your Spot
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

          <form onSubmit={handleSubmit} className="mt-10 space-y-5 rounded-2xl border border-kurai-ice bg-white p-8 md:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="font-body text-sm font-medium text-kurai-dark">
                  Parent / Guardian Name
                </label>
                <input
                  type="text"
                  name="parent_name"
                  required
                  className="mt-1.5 w-full rounded-lg border border-kurai-dark-60/20 px-4 py-3 font-body text-sm focus:border-kurai-royal focus:outline-none"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-kurai-dark">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="mt-1.5 w-full rounded-lg border border-kurai-dark-60/20 px-4 py-3 font-body text-sm focus:border-kurai-royal focus:outline-none"
                  placeholder="+60 1X-XXX XXXX"
                />
              </div>
            </div>
            <div>
              <label className="font-body text-sm font-medium text-kurai-dark">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1.5 w-full rounded-lg border border-kurai-dark-60/20 px-4 py-3 font-body text-sm focus:border-kurai-royal focus:outline-none"
                placeholder="your@email.com"
              />
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
                  className="mt-1.5 w-full rounded-lg border border-kurai-dark-60/20 px-4 py-3 font-body text-sm focus:border-kurai-royal focus:outline-none"
                  placeholder="Child's name"
                />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-kurai-dark">
                  Child&apos;s Age
                </label>
                <select
                  name="child_age"
                  required
                  className="mt-1.5 w-full rounded-lg border border-kurai-dark-60/20 px-4 py-3 font-body text-sm focus:border-kurai-royal focus:outline-none"
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
              </div>
            </div>
            <div>
              <label className="font-body text-sm font-medium text-kurai-dark">
                Preferred Program
              </label>
              <select
                name="preferred_program"
                className="mt-1.5 w-full rounded-lg border border-kurai-dark-60/20 px-4 py-3 font-body text-sm focus:border-kurai-royal focus:outline-none"
              >
                <option>AI Explorers</option>
                <option>Robotics Program</option>
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
            <button
              type="submit"
              disabled={formStatus === 'sending'}
              className="w-full rounded-lg bg-kurai-royal px-8 py-3.5 font-body font-semibold text-white transition-colors hover:bg-kurai-dark disabled:opacity-50"
            >
              {formStatus === 'sending' ? 'Submitting...' : 'Book My Free Trial'}
            </button>
            <p className="text-center font-body text-xs text-kurai-dark-60">
              We&apos;ll confirm your booking via email and WhatsApp within 24 hours.
            </p>
          </form>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-kurai-dark px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-kurai-light">
              From Other Parents
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
              What Parents Said After the Trial
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {parentTestimonials.map((t) => (
              <div
                key={t.name}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-8"
              >
                <Quote className="absolute right-6 top-6 h-8 w-8 text-white/10" />
                <div className="flex gap-1 text-kurai-light">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 font-body text-sm italic leading-relaxed text-kurai-light-soft">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-heading text-sm font-semibold">{t.name}</p>
                  <p className="font-body text-xs text-kurai-light-soft">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="relative overflow-hidden bg-kurai-royal px-6 py-16 text-white">
        <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold md:text-3xl">
            Have questions before booking?
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-body text-white/80">
            We&apos;re happy to help you find the right programme and schedule for your child.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 font-body text-sm font-semibold text-kurai-royal shadow-lg transition-all hover:bg-kurai-ice hover:shadow-xl"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/programs"
              className="rounded-lg border border-white/30 px-8 py-3.5 font-body text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/10"
            >
              View Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
