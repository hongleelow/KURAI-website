import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  MessageCircle,
  ChevronDown,
  ArrowRight,
  Send,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { FORMSPREE_IDS, submitForm } from '@/config/formspree';

const faqs = [
  {
    question: 'What age group is KURAI designed for?',
    answer:
      'Our programmes are designed for children aged 5 to 11, with age-appropriate tiers so every child is learning at the right level. We also have adult workshops launching soon.',
  },
  {
    question: 'Does my child need any prior experience?',
    answer:
      'No prior experience is needed. Our curriculum starts from the fundamentals using visual programming tools and hands-on activities. Every child begins at their own pace.',
  },
  {
    question: 'How big are the classes?',
    answer:
      'Every class is capped at 8 students. This means your child gets real attention, meaningful feedback, and a comfortable environment to learn in.',
  },
  {
    question: 'What will my child actually learn?',
    answer:
      'Children learn the foundations of AI, machine learning, and robotics through structured, project-based lessons. They also develop critical thinking, problem-solving, and the confidence to engage with technology independently.',
  },
  {
    question: 'How is KURAI different from regular coding classes?',
    answer:
      'Most coding classes focus on syntax. KURAI focuses on understanding — how AI systems work, why they matter, and how to think about technology critically. Our structured curriculum goes well beyond basic coding.',
  },
  {
    question: 'Can I try a class before committing?',
    answer:
      'Yes — we offer free trial classes with no obligation. Your child can experience a real KURAI lesson before you decide. You can book a trial on our Free Trial page or contact us directly.',
  },
  {
    question: 'What are the fees and payment options?',
    answer:
      'We offer term-based and monthly payment plans. Contact us for the latest pricing — we\'re happy to walk you through the options and find what works for your family.',
  },
  {
    question: 'Where is KURAI located?',
    answer:
      'We\'re located at 26A, Jalan Horizon Perdana 5, Horizon Hills, 79100 Iskandar Puteri, Johor. Easy access with nearby parking.',
  },
];

const businessHours = [
  { day: 'Wednesday – Sunday', hours: '10:00 AM – 9:00 PM' },
  { day: 'Monday', hours: 'Closed' },
  { day: 'Tuesday', hours: 'Closed' },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const result = await submitForm(FORMSPREE_IDS.contact, data);

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
      <section className="relative overflow-hidden bg-kurai-dark px-6 py-28 text-white md:py-32">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-kurai-royal/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="font-body text-sm font-medium uppercase tracking-[0.2em] text-kurai-light">
            Contact Us
          </p>
          <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
            We&apos;re Here to{' '}
            <span className="bg-gradient-to-r from-kurai-light to-kurai-royal-light bg-clip-text text-transparent">
              Help
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-kurai-light-soft">
            Whether you have questions about our programmes, want to book a trial, or just
            want to learn more — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* ─── QUICK ACTIONS ─── */}
      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
          <Link
            to="/free-trial"
            className="flex items-center gap-3 rounded-xl border border-kurai-ice bg-white p-5 transition-shadow hover:shadow-lg"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-kurai-royal/10 text-kurai-royal">
              <ArrowRight className="h-5 w-5" />
            </div>
            <div>
              <p className="font-heading text-sm font-semibold text-kurai-dark">Book a Free Trial</p>
              <p className="font-body text-xs text-kurai-dark-60">Try a class, no commitment</p>
            </div>
          </Link>
          <a
            href="https://wa.me/60122169871"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-kurai-ice bg-white p-5 transition-shadow hover:shadow-lg"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div>
              <p className="font-heading text-sm font-semibold text-kurai-dark">WhatsApp Us</p>
              <p className="font-body text-xs text-kurai-dark-60">Quick reply within minutes</p>
            </div>
          </a>
          <a
            href="mailto:hello@kurai.edu.my"
            className="flex items-center gap-3 rounded-xl border border-kurai-ice bg-white p-5 transition-shadow hover:shadow-lg"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-kurai-royal/10 text-kurai-royal">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="font-heading text-sm font-semibold text-kurai-dark">Email Us</p>
              <p className="font-body text-xs text-kurai-dark-60">hello@kurai.edu.my</p>
            </div>
          </a>
        </div>
      </section>

      {/* ─── CONTACT FORM + INFO ─── */}
      <section className="bg-kurai-ice/50 px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-5">
          {/* Form — takes 3 cols */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-kurai-ice bg-white p-8 md:p-10">
              <h2 className="font-heading text-2xl font-bold text-kurai-dark">Send a Message</h2>
              <p className="mt-2 font-body text-sm text-kurai-dark-60">
                Tell us a little about what you&apos;re looking for — we&apos;ll get back to you within 24 hours.
              </p>

              {/* Success message */}
              {formStatus === 'success' && (
                <div className="mt-6 flex items-start gap-3 rounded-lg bg-green-50 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <div>
                    <p className="font-heading text-sm font-semibold text-green-800">Message sent!</p>
                    <p className="mt-1 font-body text-sm text-green-700">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              {/* Error message */}
              {formStatus === 'error' && (
                <div className="mt-6 flex items-start gap-3 rounded-lg bg-red-50 p-4">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                  <div>
                    <p className="font-heading text-sm font-semibold text-red-800">Something went wrong</p>
                    <p className="mt-1 font-body text-sm text-red-700">
                      Please try again or email us directly at hello@kurai.edu.my
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
                      Child&apos;s Age
                    </label>
                    <input
                      type="text"
                      name="child_age"
                      className="mt-1.5 w-full rounded-lg border border-kurai-dark-60/20 px-4 py-3 font-body text-sm focus:border-kurai-royal focus:outline-none"
                      placeholder="e.g. 7"
                    />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
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
                  <div>
                    <label className="font-body text-sm font-medium text-kurai-dark">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      className="mt-1.5 w-full rounded-lg border border-kurai-dark-60/20 px-4 py-3 font-body text-sm focus:border-kurai-royal focus:outline-none"
                      placeholder="+60 1X-XXX XXXX"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-kurai-dark">
                    I&apos;m interested in
                  </label>
                  <select
                    name="subject"
                    className="mt-1.5 w-full rounded-lg border border-kurai-dark-60/20 px-4 py-3 font-body text-sm focus:border-kurai-royal focus:outline-none"
                  >
                    <option>General Enquiry</option>
                    <option>Programme Information</option>
                    <option>Booking a Free Trial</option>
                    <option>School Partnership</option>
                    <option>Adult Workshops</option>
                    <option>Events &amp; Open Days</option>
                  </select>
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-kurai-dark">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="mt-1.5 w-full rounded-lg border border-kurai-dark-60/20 px-4 py-3 font-body text-sm focus:border-kurai-royal focus:outline-none"
                    placeholder="Tell us what you'd like to know..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-kurai-royal px-8 py-3.5 font-body font-semibold text-white transition-colors hover:bg-kurai-dark disabled:opacity-50 sm:w-auto"
                >
                  <Send className="h-4 w-4" />
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info — takes 2 cols */}
          <div className="space-y-6 lg:col-span-2">
            {/* Location */}
            <div className="rounded-2xl border border-kurai-ice bg-white p-8">
              <h3 className="font-heading text-lg font-semibold text-kurai-dark">Visit Us</h3>
              <ul className="mt-5 space-y-5">
                <li className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-kurai-royal" />
                  <div>
                    <p className="font-body text-sm font-medium text-kurai-dark">Location</p>
                    <p className="mt-1 font-body text-sm text-kurai-dark-60">
                      26A, Jalan Horizon Perdana 5,
                      <br />
                      Horizon Hills, 79100 Iskandar Puteri,
                      <br />
                      Johor Darul Ta&apos;zim
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-kurai-royal" />
                  <div>
                    <p className="font-body text-sm font-medium text-kurai-dark">Email</p>
                    <p className="mt-1 font-body text-sm text-kurai-dark-60">hello@kurai.edu.my</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-kurai-royal" />
                  <div>
                    <p className="font-body text-sm font-medium text-kurai-dark">Phone</p>
                    <p className="mt-1 font-body text-sm text-kurai-dark-60">+6012-216 9871</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Business Hours */}
            <div className="rounded-2xl border border-kurai-ice bg-white p-8">
              <h3 className="flex items-center gap-2 font-heading text-lg font-semibold text-kurai-dark">
                <Clock className="h-5 w-5 text-kurai-royal" />
                Business Hours
              </h3>
              <ul className="mt-5 space-y-3">
                {businessHours.map((item) => (
                  <li key={item.day} className="flex items-center justify-between">
                    <span className="font-body text-sm text-kurai-dark-60">{item.day}</span>
                    <span
                      className={`font-body text-sm font-medium ${
                        item.hours === 'Closed' ? 'text-red-500' : 'text-kurai-dark'
                      }`}
                    >
                      {item.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/60122169871"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl bg-green-600 p-6 text-white transition-colors hover:bg-green-700"
            >
              <div className="flex items-center gap-3">
                <MessageCircle className="h-8 w-8" />
                <div>
                  <p className="font-heading text-lg font-semibold">Chat on WhatsApp</p>
                  <p className="mt-1 font-body text-sm text-green-100">
                    Get a quick reply — tap to open WhatsApp
                  </p>
                </div>
                <ExternalLink className="ml-auto h-5 w-5 text-green-200" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ─── LOCATION MAP ─── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-kurai-royal">
              Find Us
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-kurai-dark">
              Our Location
            </h2>
            <p className="mx-auto mt-3 max-w-lg font-body text-kurai-dark-60">
              Located at Horizon Hills, Iskandar Puteri — easy access with nearby parking.
            </p>
          </div>
          {/* Facility photo */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-kurai-ice">
            <div className="relative">
              <img
                src="/images/facility.jpg"
                alt="KURAI education center in Johor Bahru"
                className="h-80 w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-kurai-dark/70 to-transparent px-6 pb-5 pt-12">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="h-5 w-5" />
                  <span className="font-body text-sm font-medium">Horizon Hills, Iskandar Puteri, Johor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="bg-kurai-ice/50 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-kurai-royal">
              For Parents
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-kurai-dark md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-4 max-w-lg font-body text-kurai-dark-60">
              Answers to the questions parents ask most about KURAI.
            </p>
          </div>

          <div className="mt-12 space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-kurai-ice bg-white transition-shadow hover:shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="pr-4 font-heading text-sm font-semibold text-kurai-dark md:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-kurai-royal transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="border-t border-kurai-ice px-6 pb-5 pt-4">
                    <p className="font-body text-sm leading-relaxed text-kurai-dark-60">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="font-body text-sm text-kurai-dark-60">
              Still have questions?{' '}
              <a
                href="https://wa.me/60122169871"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-kurai-royal hover:text-kurai-dark"
              >
                Chat with us on WhatsApp
              </a>{' '}
              or{' '}
              <a
                href="mailto:hello@kurai.edu.my"
                className="font-semibold text-kurai-royal hover:text-kurai-dark"
              >
                send us an email
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden bg-kurai-royal px-6 py-20 text-white md:py-28">
        <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold md:text-3xl">
            See what structured AI education looks like.
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-body text-white/80">
            Book a free trial class and let your child experience KURAI first-hand. No commitment, no pressure.
          </p>
          <Link
            to="/free-trial"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 font-body text-sm font-semibold text-kurai-royal shadow-lg transition-all hover:bg-kurai-ice hover:shadow-xl"
          >
            Book a Free Trial
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
