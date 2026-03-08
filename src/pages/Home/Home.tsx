import { Link } from 'react-router-dom';
import {
  Brain,
  Cpu,
  Users,
  Lightbulb,
  Puzzle,
  GitBranch,
  ShieldCheck,
  Handshake,
  UserCheck,
  Layers,
  FlaskConical,
  Lock,
  CalendarDays,
  ArrowRight,
  Star,
  Quote,
} from 'lucide-react';
import SEO from '@/components/SEO';

const programs = [
  {
    icon: Brain,
    title: 'AI Explorers',
    ages: 'Ages 5–11',
    description:
      'A guided introduction to how AI works — from pattern recognition to visual coding — building real understanding.',
    path: '/programs#ai-explorers',
  },
  {
    icon: Cpu,
    title: 'Robotics Programme',
    ages: 'Ages 5–11',
    description:
      'Children build, programme, and test real robots — learning how hardware and software come together through hands-on projects.',
    path: '/programs#robotics',
  },
  {
    icon: Users,
    title: 'Adult AI Workshops',
    ages: 'Coming Soon',
    description:
      'Practical, jargon-free AI workshops for professionals and parents. Understand what AI is and how to apply it.',
    path: '/programs/adults',
    comingSoon: true,
  },
];

const skills = [
  { icon: Lightbulb, label: 'Creative Thinking', desc: 'Approach challenges with imagination and original ideas' },
  { icon: Puzzle, label: 'Problem Solving', desc: 'Break down complex problems into manageable steps' },
  { icon: GitBranch, label: 'Logical Reasoning', desc: 'Think systematically and draw sound conclusions' },
  { icon: ShieldCheck, label: 'Digital Confidence', desc: 'Engage with technology independently and responsibly' },
  { icon: Handshake, label: 'Collaboration', desc: 'Work together, communicate, and learn from peers' },
];

const reasons = [
  {
    icon: UserCheck,
    title: 'Small Groups, Real Guidance',
    description: 'With a maximum of 8 students per class, every child gets the attention they need to truly understand.',
  },
  {
    icon: Layers,
    title: 'Structured Pathways',
    description: 'Each programme follows a clear progression — children build on what they know.',
  },
  {
    icon: FlaskConical,
    title: 'Projects with Purpose',
    description: 'Every module ends with a real project children can demonstrate, explain, and be proud of.',
  },
  {
    icon: Lock,
    title: 'A Safe, Thoughtful Learning Space',
    description: 'A trusted environment where children explore technology with patience, structure, and expert guidance.',
  },
];

const events = [
  {
    date: 'Mar 24–26, 2026',
    title: 'AI Discovery Camp',
    description: 'A 3-day immersive camp where students build their first AI project — from concept to demo.',
    urgency: 'This Month',
  },
  {
    date: 'Apr 5, 2026',
    title: 'Free Trial: AI Explorers',
    description: 'A complimentary 60-minute introductory AI class for ages 5–11.',
    urgency: 'Coming Up',
  },
  {
    date: 'Apr 19, 2026',
    title: 'Parent Workshop: AI & Your Child',
    description: 'A focused session on what AI literacy means for your child\'s education.',
    urgency: '',
  },
];

const testimonials = [
  {
    quote: 'Wow, this place is amazing. My kid enjoys it so much. From robotics to AI, he\'s learning more than I would have imagined. I\'d strongly recommend just dropping by to see for yourself.',
    name: 'Deddy M.',
    detail: 'Parent of 8-year-old · AI Explorers',
  },
  {
    quote: 'Fun and interactive place to learn AI and robotics. The teachers are kind, attentive, and knowledgeable. My kids love their classes.',
    name: 'Amy M.',
    detail: 'Parent of 6 & 9-year-old · AI Explorers',
  },
  {
    quote: 'My child really enjoys KURAI classes. The lessons are fun and interactive. Teacher Ms. Joanne is very kind and helpful. Very happy with this centre.',
    name: 'Kangting',
    detail: 'Parent of 7-year-old · Robotics Programme',
  },
];

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness'],
  name: 'KURAI',
  legalName: 'KURAI Education Sdn Bhd',
  url: 'https://kurai.edu.my',
  logo: 'https://kurai.edu.my/images/logo.png',
  image: 'https://kurai.edu.my/images/facility.jpg',
  description:
    'Premium AI and Robotics education centre for children aged 5–11 in Johor Bahru, Malaysia.',
  telephone: '+60122169871',
  email: 'hong@thekurai.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '26A, Jalan Horizon Perdana 5, Horizon Hills',
    addressLocality: 'Iskandar Puteri',
    addressRegion: 'Johor',
    postalCode: '79100',
    addressCountry: 'MY',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 1.4837,
    longitude: 103.6325,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '10:00',
      closes: '21:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Johor Bahru' },
    { '@type': 'City', name: 'Iskandar Puteri' },
  ],
  sameAs: [
    'https://www.instagram.com/thekuraico',
    'https://www.facebook.com/thekuraico',
  ],
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '15',
    bestRating: '5',
  },
};

export default function Home() {
  return (
    <div>
      <SEO
        title="KURAI | AI & Robotics Education for Kids in Johor Bahru"
        description="Structured AI and Robotics classes for children aged 5–11 in Iskandar Puteri, Johor Bahru. Small groups, real projects, expert guidance. Book a free trial today."
        path="/"
        jsonLd={organizationSchema}
      />
      {/* ─── 1. HERO ─── */}
      <section className="relative overflow-hidden bg-kurai-dark px-5 py-24 text-white sm:px-6 sm:py-32 md:py-40">
        {/* Hero background image */}
        <div className="absolute inset-0">
          <img
            src="/images/kids-kurai-wall.jpg"
            alt="Students posing by the KURAI wall at AI education centre in Johor Bahru"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-kurai-dark/40 via-kurai-dark/20 to-kurai-dark/60" />
        </div>
        {/* Decorative gradient orb */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[300px] w-[300px] rounded-full bg-kurai-royal/20 blur-3xl md:h-[500px] md:w-[500px]" />
        <div className="pointer-events-none absolute -bottom-60 -left-40 h-[250px] w-[250px] rounded-full bg-kurai-light/10 blur-3xl md:h-[400px] md:w-[400px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-kurai-light">
            AI Education Centre&ensp;·&ensp;Johor, Malaysia
          </p>
          <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-7xl">
            WHERE CURIOSITY
            <br />
            <span className="bg-gradient-to-r from-kurai-light to-kurai-royal-light bg-clip-text text-transparent">
              MEETS AI
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-white/75 sm:text-lg md:text-xl">
            Structured, hands-on AI and Robotics classes for children aged 5–11 in Johor Bahru. Real understanding, real projects.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-12 sm:gap-5">
            <Link
              to="/free-trial"
              className="rounded-lg bg-kurai-cream px-6 py-3.5 font-body text-sm font-bold sm:px-8 sm:py-4 text-kurai-dark shadow-lg shadow-kurai-dark/10 transition-all hover:scale-105 hover:bg-kurai-cream-dark hover:shadow-kurai-dark/15"
            >
              Book a Free Trial
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3.5 font-body text-sm sm:px-6 sm:py-4 font-semibold text-white/90 transition-all hover:scale-105 hover:border-white/40 hover:text-white"
            >
              Explore Our Programmes
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 2. WHAT IS KURAI? ─── */}
      <section className="px-5 py-16 sm:px-6 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-kurai-royal">
              About Us
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-kurai-dark md:text-4xl">
              What is KURAI?
            </h2>
            <p className="mt-5 font-body leading-relaxed text-kurai-dark-60">
              KURAI is a premium AI and Robotics learning centre in Johor Bahru for children aged 5 to 11. Every class is structured, guided, and built around real projects.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-kurai-royal/10 px-4 py-1.5 font-body text-xs font-semibold text-kurai-royal">Max 8 students per class</span>
              <span className="rounded-full bg-kurai-royal/10 px-4 py-1.5 font-body text-xs font-semibold text-kurai-royal">Expert instructors</span>
              <span className="rounded-full bg-kurai-royal/10 px-4 py-1.5 font-body text-xs font-semibold text-kurai-royal">Horizon Hills, Iskandar Puteri</span>
            </div>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-kurai-royal transition-colors hover:text-kurai-dark"
            >
              See how we teach
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          {/* Classroom photo */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg shadow-kurai-dark/5">
            <img
              src="/images/kids-robotics-group-new.jpg"
              alt="Children building robots together at KURAI education centre"
              className="h-56 w-full object-cover sm:h-72 md:h-[28rem]"
            />
            {/* Stats overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-kurai-dark/80 to-transparent p-6">
              <div className="grid grid-cols-4 gap-2 text-center text-white">
                <div>
                  <p className="font-heading text-2xl font-bold">5–11</p>
                  <p className="font-body text-[11px] uppercase tracking-wider text-white/70">Ages</p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold">8</p>
                  <p className="font-body text-[11px] uppercase tracking-wider text-white/70">Max Students</p>
                </div>
                <div>
                  <p className="font-heading text-lg font-bold md:text-2xl">Project</p>
                  <p className="font-body text-[11px] uppercase tracking-wider text-white/70">Based Learning</p>
                </div>
                <div>
                  <p className="font-heading text-lg font-bold md:text-2xl">Johor</p>
                  <p className="font-body text-[11px] uppercase tracking-wider text-white/70">Bahru</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. OUR PROGRAMS ─── */}
      <section className="bg-kurai-ice/50 px-5 py-16 sm:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-kurai-royal">
              Programmes
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-kurai-dark md:text-4xl">
              Our Programmes
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-body text-kurai-dark-60">
              Each programme is structured around clear learning goals &mdash; so children progress with purpose.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {programs.map((program) => (
              <Link
                key={program.title}
                to={program.path}
                className="group relative rounded-2xl border border-kurai-ice bg-white p-6 shadow-sm sm:p-8 transition-all hover:scale-[1.02] hover:border-kurai-royal/20 hover:shadow-lg md:p-10"
              >
                {program.comingSoon && (
                  <span className="absolute right-6 top-6 rounded-full bg-kurai-royal/10 px-3 py-1 font-body text-xs font-semibold uppercase tracking-wider text-kurai-royal">
                    Coming Soon
                  </span>
                )}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-kurai-royal/10 text-kurai-royal">
                  <program.icon className="h-6 w-6" />
                </div>
                <p className="mt-5 font-body text-xs font-medium uppercase tracking-wider text-kurai-dark-60">
                  {program.ages}
                </p>
                <h3 className="mt-1 font-heading text-xl font-semibold text-kurai-dark group-hover:text-kurai-royal">
                  {program.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
                  {program.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 font-body text-sm font-semibold text-kurai-royal opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. SKILLS WE DEVELOP ─── */}
      <section className="px-5 py-14 sm:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-kurai-royal">
              Beyond Coding
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-kurai-dark md:text-4xl">
              Skills We Develop
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-body text-kurai-dark-60">
              Beyond coding: children develop thinking habits that strengthen how they learn, reason, and communicate.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {skills.map((skill) => (
              <div
                key={skill.label}
                className="rounded-2xl border border-kurai-ice bg-white p-5 text-center sm:p-6 shadow-sm transition-shadow hover:shadow-md md:p-8"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-kurai-royal/10 text-kurai-royal">
                  <skill.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-sm font-semibold text-kurai-dark">
                  {skill.label}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-kurai-dark-60">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. WHY CHOOSE KURAI ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-kurai-dark to-kurai-dark-80 px-5 py-16 text-white sm:px-6 md:py-28">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[250px] w-[250px] rounded-full bg-kurai-royal/15 blur-3xl md:h-[400px] md:w-[400px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-kurai-light">
              The KURAI Difference
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
              Why Choose KURAI
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-body text-kurai-light-soft">
              What makes KURAI different isn&apos;t what we teach — it&apos;s how we teach.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <div key={reason.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 border-t-2 sm:p-8 border-t-kurai-light">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-kurai-royal/20 text-kurai-light">
                  <reason.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold">{reason.title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-kurai-light-soft md:text-base">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. UPCOMING EVENTS ─── */}
      <section className="px-5 py-16 sm:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-kurai-royal">
              What&apos;s Coming Up
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-kurai-dark md:text-4xl">
              Upcoming Events
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-body text-kurai-dark-60">
              Holiday camps, free trial classes, and parent sessions. Come see for yourself.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {events.map((event) => (
              <div
                key={event.title}
                className="rounded-2xl border border-kurai-ice bg-white p-6 transition-shadow sm:p-8 hover:shadow-md md:p-10"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-kurai-royal">
                    <CalendarDays className="h-4 w-4" />
                    <span className="font-body text-xs font-semibold uppercase tracking-wider">
                      {event.date}
                    </span>
                  </div>
                  {event.urgency && (
                    <span className={`rounded-full px-2.5 py-1 font-body text-xs font-semibold uppercase tracking-wider ${
                      event.urgency === 'This Month' ? 'bg-kurai-amber/10 text-kurai-amber-dark' : 'bg-kurai-royal/10 text-kurai-royal'
                    }`}>
                      {event.urgency}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-kurai-dark">
                  {event.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
                  {event.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold text-kurai-royal transition-colors hover:text-kurai-dark"
            >
              View all events
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 7. TESTIMONIALS ─── */}
      <section className="bg-kurai-ice/50 px-5 py-14 sm:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-kurai-royal">
              Trusted by Parents
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-kurai-dark md:text-4xl">
              What Parents Say
            </h2>
            <div className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-kurai-amber/10 px-5 py-2.5">
              <div className="flex gap-0.5 text-kurai-amber">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="font-body text-sm font-semibold text-kurai-dark-60">Rated 5.0 on Google · 15+ Reviews</span>
            </div>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="relative rounded-2xl border border-kurai-ice border-t-2 border-t-kurai-royal/30 bg-white p-6 shadow-sm sm:p-8 md:p-10"
              >
                <Quote className="absolute right-6 top-6 h-10 w-10 text-kurai-royal/8" />
                <div className="flex gap-1 text-kurai-amber">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 font-body text-sm leading-[1.8] text-kurai-dark-60 md:text-base">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-kurai-ice pt-5">
                  <p className="font-heading text-base font-semibold text-kurai-dark">{t.name}</p>
                  <p className="mt-0.5 font-body text-sm text-kurai-dark-60">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. FINAL CTA ─── */}
      <section className="relative overflow-hidden bg-kurai-royal px-5 py-16 text-white sm:px-6 md:py-28">
        <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Give your child a stronger start with AI and Robotics.
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-body text-lg leading-relaxed text-white/80">
            Book a free trial and experience how KURAI helps children learn with curiosity, confidence, and structure.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-10 sm:gap-4">
            <Link
              to="/free-trial"
              className="rounded-lg bg-kurai-cream px-8 py-3.5 font-body text-sm font-bold text-kurai-dark shadow-lg shadow-kurai-dark/10 transition-all hover:scale-105 hover:bg-kurai-cream-dark hover:shadow-xl"
            >
              Book a Free Trial
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold text-white/80 transition-colors hover:text-white"
            >
              Explore Our Programmes
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
