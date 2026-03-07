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
      'A guided introduction to how AI works — from pattern recognition to visual coding — designed to build real understanding, not just screen time.',
    path: '/programs#ai-explorers',
  },
  {
    icon: Cpu,
    title: 'Robotics Program',
    ages: 'Ages 5–11',
    description:
      'Children build, program, and test real robots — learning how hardware and software come together through hands-on projects.',
    path: '/programs#robotics',
  },
  {
    icon: Users,
    title: 'Adult AI Workshops',
    ages: 'Coming Soon',
    description:
      'Practical, jargon-free AI workshops for professionals and parents. Understand what AI really is — and how it applies to your work and life.',
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
    title: 'Small Groups, Real Guidance',
    description: 'With a maximum of 8 students per class, every child gets the attention they need to truly understand.',
  },
  {
    icon: Layers,
    title: 'Structured Pathways',
    description: 'Each programme follows a clear progression — so children build on what they know, step by step.',
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
    description: 'A thoughtful session on what AI literacy means and how it applies to your child\'s education.',
  },
];

const testimonials = [
  {
    quote: 'Wow this place is amazing. My kid enjoy it so much. From robotic to AI and he\'s giving more information than I would imagined. I would strongly recommend to just drop by and see for yourself.',
    name: 'Deddy M.',
    detail: 'Google Review · 5 stars',
  },
  {
    quote: 'Fun & interactive place to learn AI/robotic. The teachers are fun, kind, attentive, have a lot of knowledge in the AI subjects. My kids love to join their classes.',
    name: 'Amy M.',
    detail: 'Google Review · 5 stars',
  },
  {
    quote: 'My child really enjoys attending KURAI classes. The lessons are fun, interactive, and not boring. The teacher Ms. Joanne is very kind and helpful. Very happy with this centre.',
    name: 'Kangting',
    detail: 'Google Review · 5 stars',
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
            Structured, hands-on AI and Robotics classes for children aged 5–11 in Johor Bahru. Guided learning that builds real understanding.
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
              KURAI is a premium AI and Robotics learning centre in Johor Bahru, designed
              specifically for children aged 5 to 11. We go beyond passive screen time — every
              class is structured, guided, and built around real projects that children can
              understand and be proud of.
            </p>
            <p className="mt-4 font-body leading-relaxed text-kurai-dark-60">
              Small groups. Expert instructors. A learning experience parents can trust.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-kurai-royal transition-colors hover:text-kurai-dark"
            >
              Learn more about our approach
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          {/* Classroom photo */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="/images/classroom.jpg"
              alt="Students learning AI and robotics at KURAI education center"
              className="h-full w-full object-cover"
            />
            {/* Stats overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-kurai-dark/80 to-transparent p-6">
              <div className="grid grid-cols-4 gap-2 text-center text-white">
                <div>
                  <p className="font-heading text-2xl font-bold">5–11</p>
                  <p className="font-body text-[10px] uppercase tracking-wider text-white/70">Ages</p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold">8</p>
                  <p className="font-body text-[10px] uppercase tracking-wider text-white/70">Max Students</p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold leading-tight text-lg md:text-2xl">PBL</p>
                  <p className="font-body text-[10px] uppercase tracking-wider text-white/70">Project-Based</p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold">JB</p>
                  <p className="font-body text-[10px] uppercase tracking-wider text-white/70">Johor Bahru</p>
                </div>
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
              Each programme is structured around clear learning goals — so children progress with purpose, not just participation.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {programs.map((program) => (
              <Link
                key={program.title}
                to={program.path}
                className="group relative rounded-2xl border border-kurai-ice bg-white p-8 shadow-sm transition-all hover:border-kurai-royal/20 hover:shadow-lg"
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
              Our programmes go beyond coding. Children develop thinking habits that strengthen how they learn, reason, and communicate — in every subject.
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
      <section className="relative overflow-hidden bg-gradient-to-br from-kurai-dark to-kurai-dark-80 px-6 py-20 text-white md:py-28">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full bg-kurai-royal/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-kurai-light">
              The KURAI Difference
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
              Why Choose KURAI
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-kurai-light-soft">
              What makes KURAI different isn&apos;t just what we teach — it&apos;s how we teach it.
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
              What&apos;s Coming Up
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-kurai-dark md:text-4xl">
              Upcoming Events
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-kurai-dark-60">
              Join us for open days, free trial classes, and parent sessions. Come see what KURAI is all about.
            </p>
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
                className="relative rounded-2xl border border-kurai-ice bg-white p-8 shadow-sm"
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
            Give your child a stronger start with AI and Robotics.
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg text-white/80">
            Book a free trial and experience how KURAI helps children learn with curiosity, confidence, and structure.
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
