import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarDays,
  DoorOpen,
  Sun,
  FlaskConical,
  Star,
  ArrowRight,
  MapPin,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { FORMSPREE_IDS, submitForm } from '@/config/formspree';

interface EventItem {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
}

interface EventCategory {
  icon: typeof CalendarDays;
  title: string;
  subtitle: string;
  events: EventItem[];
  dark?: boolean;
}

const categories: EventCategory[] = [
  {
    icon: DoorOpen,
    title: 'Open Days',
    subtitle: 'Tour our center, meet instructors, and see our programs in action.',
    events: [
      {
        title: 'KURAI Open Day — March',
        description:
          'A guided tour of our center, live demo classes, and Q&A with our instructors. Perfect for parents exploring AI education options.',
        date: 'Saturday, 22 March 2026',
        time: '10:00 AM – 1:00 PM',
        location: 'KURAI Center, Johor Bahru',
      },
      {
        title: 'KURAI Open Day — May',
        description:
          'Discover our new term offerings. Watch students in action and learn about our structured curriculum first-hand.',
        date: 'Saturday, 17 May 2026',
        time: '10:00 AM – 1:00 PM',
        location: 'KURAI Center, Johor Bahru',
      },
    ],
  },
  {
    icon: Sun,
    title: 'Holiday Camps',
    subtitle: 'Intensive, fun-filled AI and Robotics camps during school breaks.',
    events: [
      {
        title: 'AI Discovery Camp',
        description:
          'A 3-day immersive camp where students build their first AI project — from concept to demo. No prior experience needed.',
        date: '24 – 26 March 2026',
        time: '9:00 AM – 3:00 PM daily',
        location: 'KURAI Center, Johor Bahru',
      },
      {
        title: 'Robotics Builder Camp',
        description:
          'Design, build, and program a robot in 3 days. Students work in teams to complete engineering challenges and present their creations.',
        date: '7 – 9 April 2026',
        time: '9:00 AM – 3:00 PM daily',
        location: 'KURAI Center, Johor Bahru',
      },
      {
        title: 'Junior Innovators Camp',
        description:
          'A combined AI + Robotics camp where students tackle a real-world problem using technology. Ideal for returning students.',
        date: '2 – 4 June 2026',
        time: '9:00 AM – 3:00 PM daily',
        location: 'KURAI Center, Johor Bahru',
      },
    ],
  },
  {
    icon: FlaskConical,
    title: 'Trial Workshops',
    subtitle: 'Free introductory classes — experience KURAI before you commit.',
    events: [
      {
        title: 'Free Trial: AI Explorers (Ages 5–7)',
        description:
          'A 60-minute introductory AI class. Students explore pattern recognition and visual coding in a fun, guided session.',
        date: 'Saturday, 5 April 2026',
        time: '9:00 AM – 10:00 AM',
        location: 'KURAI Center, Johor Bahru',
      },
      {
        title: 'Free Trial: AI Explorers (Ages 8–11)',
        description:
          'Hands-on introduction to AI concepts for older children. Students train a simple AI model and see results in real time.',
        date: 'Saturday, 5 April 2026',
        time: '11:00 AM – 12:00 PM',
        location: 'KURAI Center, Johor Bahru',
      },
      {
        title: 'Free Trial: Robotics (Ages 5–11)',
        description:
          'Build and program a mini robot in 60 minutes. A hands-on taste of our Robotics program for all ages.',
        date: 'Saturday, 12 April 2026',
        time: '10:00 AM – 11:00 AM',
        location: 'KURAI Center, Johor Bahru',
      },
    ],
  },
  {
    icon: Star,
    title: 'Special Events',
    subtitle: 'Talks, showcases, and community events for parents and educators.',
    dark: true,
    events: [
      {
        title: 'Parent Talk: AI & Your Child\'s Education',
        description:
          'A thoughtful session for parents on what AI literacy means, why it matters, and how KURAI\'s structured approach gives children real understanding.',
        date: 'Saturday, 19 April 2026',
        time: '10:00 AM – 11:30 AM',
        location: 'KURAI Center, Johor Bahru',
      },
      {
        title: 'Student Showcase Day',
        description:
          'Watch KURAI students present their term projects — AI experiments, robots, and more. Open to parents, friends, and the community.',
        date: 'Saturday, 14 June 2026',
        time: '2:00 PM – 4:00 PM',
        location: 'KURAI Center, Johor Bahru',
      },
    ],
  },
];

export default function Events() {
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
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-kurai-dark px-6 py-24 text-white md:py-32">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full bg-kurai-light/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-kurai-light">
            What&apos;s Happening
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold md:text-6xl">Events</h1>
          <p className="mx-auto mt-5 max-w-2xl font-body text-lg leading-relaxed text-kurai-light-soft">
            Open days, holiday camps, free trials, and special events. Find the right way to experience KURAI.
          </p>
        </div>
      </section>

      {/* Event Categories */}
      {categories.map((category) => (
        <section
          key={category.title}
          className={`px-6 py-20 md:py-28 ${category.dark ? 'bg-gradient-to-br from-kurai-dark to-kurai-dark-80 text-white' : ''}`}
        >
          <div className="mx-auto max-w-7xl">
            {/* Category Header */}
            <div className="flex items-start gap-4">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                  category.dark ? 'bg-kurai-royal/20 text-kurai-light' : 'bg-kurai-royal/10 text-kurai-royal'
                }`}
              >
                <category.icon className="h-6 w-6" />
              </div>
              <div>
                <h2
                  className={`font-heading text-2xl font-bold md:text-3xl ${
                    category.dark ? '' : 'text-kurai-dark'
                  }`}
                >
                  {category.title}
                </h2>
                <p
                  className={`mt-1 font-body text-sm ${
                    category.dark ? 'text-kurai-light-soft' : 'text-kurai-dark-60'
                  }`}
                >
                  {category.subtitle}
                </p>
              </div>
            </div>

            {/* Event Cards */}
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.events.map((event) => (
                <div
                  key={event.title}
                  className={`flex flex-col rounded-2xl p-7 transition-shadow hover:shadow-lg ${
                    category.dark
                      ? 'border border-white/10 bg-white/5'
                      : 'border border-kurai-ice bg-white shadow-sm'
                  }`}
                >
                  {/* Date badge */}
                  <div
                    className={`inline-flex items-center gap-1.5 self-start rounded-full px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-wider ${
                      category.dark
                        ? 'bg-kurai-royal/20 text-kurai-light'
                        : 'bg-kurai-royal/10 text-kurai-royal'
                    }`}
                  >
                    <CalendarDays className="h-3 w-3" />
                    {event.date}
                  </div>

                  <h3
                    className={`mt-4 font-heading text-lg font-semibold ${
                      category.dark ? '' : 'text-kurai-dark'
                    }`}
                  >
                    {event.title}
                  </h3>

                  <p
                    className={`mt-2 flex-1 font-body text-sm leading-relaxed ${
                      category.dark ? 'text-kurai-light-soft' : 'text-kurai-dark-60'
                    }`}
                  >
                    {event.description}
                  </p>

                  {/* Meta */}
                  <div
                    className={`mt-5 space-y-2 border-t pt-4 ${
                      category.dark ? 'border-white/10' : 'border-kurai-ice'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Clock
                        className={`h-3.5 w-3.5 ${
                          category.dark ? 'text-kurai-light-soft' : 'text-kurai-dark-60'
                        }`}
                      />
                      <span
                        className={`font-body text-xs ${
                          category.dark ? 'text-kurai-light-soft' : 'text-kurai-dark-60'
                        }`}
                      >
                        {event.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin
                        className={`h-3.5 w-3.5 ${
                          category.dark ? 'text-kurai-light-soft' : 'text-kurai-dark-60'
                        }`}
                      />
                      <span
                        className={`font-body text-xs ${
                          category.dark ? 'text-kurai-light-soft' : 'text-kurai-dark-60'
                        }`}
                      >
                        {event.location}
                      </span>
                    </div>
                  </div>

                  {/* Register Button */}
                  <Link
                    to="/contact"
                    className={`mt-5 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 font-body text-sm font-semibold transition-all ${
                      category.dark
                        ? 'bg-kurai-royal text-white hover:bg-kurai-royal-light'
                        : 'bg-kurai-royal text-white hover:bg-kurai-dark'
                    }`}
                  >
                    Register
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="relative overflow-hidden bg-kurai-royal px-6 py-20 text-white md:py-28">
        <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold">Want to stay updated?</h2>
          <p className="mt-4 font-body text-lg text-white/80">
            Get notified about upcoming events, new programmes, and early access to registration.
          </p>
          {nlStatus === 'success' ? (
            <div className="mx-auto mt-8 flex items-center justify-center gap-2 text-green-300">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-body text-sm font-semibold">You&apos;re subscribed!</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletter} className="mx-auto mt-8 flex max-w-md gap-3">
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-3 font-body text-sm text-white placeholder-white/50 backdrop-blur-sm focus:border-white/40 focus:outline-none"
              />
              <button
                type="submit"
                disabled={nlStatus === 'sending'}
                className="rounded-lg bg-white px-6 py-3 font-body text-sm font-semibold text-kurai-royal transition-colors hover:bg-kurai-ice disabled:opacity-50"
              >
                {nlStatus === 'sending' ? '...' : 'Subscribe'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
