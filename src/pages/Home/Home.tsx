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

const programs = [
  {
    icon: Brain,
    title: 'AI Explorers',
    ages: 'Ages 5–11',
    description:
      'Discover the world of artificial intelligence through interactive lessons, visual coding, and guided experiments.',
    path: '/programs#ai-explorers',
  },
  {
    icon: Cpu,
    title: 'Robotics Program',
    ages: 'Ages 5–11',
    description:
      'Build, program, and test real robots. Learn engineering thinking and computational logic through hands-on projects.',
    path: '/programs#robotics',
  },
  {
    icon: Users,
    title: 'Adult AI Workshops',
    ages: 'Coming Soon',
    description:
      'Practical, jargon-free AI workshops designed for professionals and lifelong learners ready to work smarter.',
    path: '/programs/adults',
    comingSoon: true,
  },
];

const skills = [
  { icon: Lightbulb, label: 'Creative Thinking' },
  { icon: Puzzle, label: 'Problem Solving' },
  { icon: GitBranch, label: 'Logical Reasoning' },
  { icon: ShieldCheck, label: 'Digital Confidence' },
  { icon: Handshake, label: 'Collaboration' },
];

const reasons = [
  {
    icon: UserCheck,
    title: 'Small Class Sizes',
    description: 'Maximum 8 students per class for focused, personalised attention.',
  },
  {
    icon: Layers,
    title: 'Structured Progression',
    description: 'A clear learning path from foundational concepts to advanced projects.',
  },
  {
    icon: FlaskConical,
    title: 'Project-Based Learning',
    description: 'Every module ends with a real project students can demonstrate and be proud of.',
  },
  {
    icon: Lock,
    title: 'Safe & Guided Environment',
    description: 'A trusted space where children explore technology with expert supervision.',
  },
];

const events = [
  {
    date: 'Mar 22, 2026',
    title: 'Open Day: Experience KURAI',
    description: 'Tour our center, meet instructors, and watch a live demo class.',
  },
  {
    date: 'Apr 5, 2026',
    title: 'Free Trial: AI Explorers',
    description: 'A complimentary 60-minute introductory AI class for ages 5–11.',
  },
  {
    date: 'Apr 19, 2026',
    title: 'Parent Workshop: AI & Your Child',
    description: 'Understand what AI literacy means and why it matters for your child\'s future.',
  },
];

const testimonials = [
  {
    quote: 'My son used to just play games on the tablet. Now he builds them. KURAI changed how he sees technology.',
    name: 'Sarah L.',
    detail: 'Parent of a 9-year-old',
  },
  {
    quote: 'The structured curriculum gives me confidence that my daughter is learning real skills, not just having screen time.',
    name: 'Ahmad R.',
    detail: 'Parent of a 7-year-old',
  },
  {
    quote: 'Small classes, patient instructors, and real projects. This is what tech education should look like.',
    name: 'Mei Ling T.',
    detail: 'Parent of an 11-year-old',
  },
];

export default function Home() {
  return (
    <div>
      {/* ─── 1. HERO ─── */}
      <section className="relative overflow-hidden bg-kurai-dark px-6 py-28 text-white md:py-36">
        {/* Decorative gradient orb */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-kurai-royal/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-60 -left-40 h-[400px] w-[400px] rounded-full bg-kurai-light/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="font-body text-sm font-medium uppercase tracking-[0.2em] text-kurai-light">
            AI Education Center&ensp;·&ensp;Johor, Malaysia
          </p>
          <h1 className="mt-6 font-heading text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl">
            WHERE CURIOSITY
            <br />
            <span className="bg-gradient-to-r from-kurai-light to-kurai-royal-light bg-clip-text text-transparent">
              MEETS AI
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-kurai-light-soft md:text-xl">
            Building future-ready thinkers through structured AI &amp; Robotics education.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/free-trial"
              className="rounded-lg bg-kurai-royal px-8 py-3.5 font-body text-sm font-semibold text-white shadow-lg shadow-kurai-royal/30 transition-all hover:bg-kurai-royal-light hover:shadow-kurai-royal/40"
            >
              Book a Free Trial
            </Link>
            <Link
              to="/programs"
              className="rounded-lg border border-white/20 px-8 py-3.5 font-body text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              View Programs
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 2. WHAT IS KURAI? ─── */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-kurai-royal">
              About Us
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-kurai-dark md:text-4xl">
              What is KURAI?
            </h2>
            <p className="mt-5 font-body leading-relaxed text-kurai-dark-60">
              KURAI is Johor&apos;s dedicated AI and Robotics education center for young learners.
              We help children understand technology — not just use it — through guided, hands-on learning
              designed for ages 5 to 11.
            </p>
            <p className="mt-4 font-body leading-relaxed text-kurai-dark-60">
              Every lesson is structured, every project is purposeful, and every child leaves with real
              skills they can carry into the future.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-kurai-royal transition-colors hover:text-kurai-dark"
            >
              Learn more about our approach
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          {/* Visual placeholder */}
          <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-kurai-ice to-kurai-light/10 p-12">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <p className="font-heading text-3xl font-bold text-kurai-royal">5–11</p>
                <p className="mt-1 font-body text-xs text-kurai-dark-60">Age Range</p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <p className="font-heading text-3xl font-bold text-kurai-royal">8</p>
                <p className="mt-1 font-body text-xs text-kurai-dark-60">Max Class Size</p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <p className="font-heading text-3xl font-bold text-kurai-royal">3</p>
                <p className="mt-1 font-body text-xs text-kurai-dark-60">Programs</p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <p className="font-heading text-3xl font-bold text-kurai-royal">JB</p>
                <p className="mt-1 font-body text-xs text-kurai-dark-60">Johor Bahru</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. OUR PROGRAMS ─── */}
      <section className="bg-kurai-ice/50 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-kurai-royal">
              Programs
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-kurai-dark md:text-4xl">
              Our Programs
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-kurai-dark-60">
              Structured learning paths designed to take students from curiosity to competence.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {programs.map((program) => (
              <Link
                key={program.title}
                to={program.path}
                className="group relative rounded-2xl border border-kurai-ice bg-white p-8 transition-all hover:border-kurai-royal/20 hover:shadow-lg"
              >
                {program.comingSoon && (
                  <span className="absolute right-6 top-6 rounded-full bg-kurai-royal/10 px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-wider text-kurai-royal">
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
                <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60">
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
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-kurai-royal">
              Beyond Coding
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-kurai-dark md:text-4xl">
              Skills We Develop
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-kurai-dark-60">
              Technical knowledge is just the beginning. Our programs build the thinking skills that matter most.
            </p>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-6">
            {skills.map((skill) => (
              <div
                key={skill.label}
                className="flex items-center gap-3 rounded-full border border-kurai-ice bg-white px-6 py-4 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-kurai-royal/10 text-kurai-royal">
                  <skill.icon className="h-5 w-5" />
                </div>
                <span className="font-heading text-sm font-semibold text-kurai-dark">
                  {skill.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. WHY CHOOSE KURAI ─── */}
      <section className="bg-kurai-dark px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-kurai-light">
              The KURAI Difference
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
              Why Choose KURAI
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-kurai-light-soft">
              We don&apos;t just teach AI. We create an environment where children thrive.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <div key={reason.title} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-kurai-royal/20 text-kurai-light">
                  <reason.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold">{reason.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-kurai-light-soft">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. UPCOMING EVENTS ─── */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-kurai-royal">
              Mark Your Calendar
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-kurai-dark md:text-4xl">
              Upcoming Events
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {events.map((event) => (
              <div
                key={event.title}
                className="rounded-2xl border border-kurai-ice bg-white p-8 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-kurai-royal">
                  <CalendarDays className="h-4 w-4" />
                  <span className="font-body text-xs font-semibold uppercase tracking-wider">
                    {event.date}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-kurai-dark">
                  {event.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-kurai-dark-60">
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
      <section className="bg-kurai-ice/50 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-kurai-royal">
              Trusted by Parents
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-kurai-dark md:text-4xl">
              What Parents Say
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="relative rounded-2xl border border-kurai-ice bg-white p-8"
              >
                <Quote className="absolute right-6 top-6 h-8 w-8 text-kurai-ice" />
                <div className="flex gap-1 text-kurai-royal">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 font-body text-sm italic leading-relaxed text-kurai-dark-60">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-kurai-ice pt-4">
                  <p className="font-heading text-sm font-semibold text-kurai-dark">{t.name}</p>
                  <p className="font-body text-xs text-kurai-dark-60">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. FINAL CTA ─── */}
      <section className="relative overflow-hidden bg-kurai-royal px-6 py-20 text-white md:py-28">
        <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Give your child the skills of tomorrow — today.
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg text-white/80">
            Join KURAI and let your child explore AI and Robotics in a structured, safe, and inspiring environment.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/free-trial"
              className="rounded-lg bg-white px-8 py-3.5 font-body text-sm font-semibold text-kurai-royal shadow-lg transition-all hover:bg-kurai-ice hover:shadow-xl"
            >
              Book a Free Trial
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
