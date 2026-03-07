import { Link } from 'react-router-dom';
import {
  Heart,
  Target,
  Eye,
  Sparkles,
  Users,
  BookOpen,
  Shield,
  Lightbulb,
  ArrowRight,
  Award,
  GraduationCap,
  Rocket,
  Quote,
} from 'lucide-react';

const coreValues = [
  {
    icon: Lightbulb,
    title: 'Curiosity First',
    description:
      'Every lesson starts with a question. We channel children\'s natural curiosity into hands-on learning that builds real understanding.',
  },
  {
    icon: BookOpen,
    title: 'Structured Excellence',
    description:
      'Engaging doesn\'t mean unstructured. Our curriculum is progressive, purposeful, and designed to build genuine competence over time.',
  },
  {
    icon: Shield,
    title: 'Safe Exploration',
    description:
      'Children explore technology in a guided, age-appropriate environment — with patience, supervision, and clear boundaries.',
  },
  {
    icon: Users,
    title: 'Community & Belonging',
    description:
      'Every child belongs here. We foster an inclusive space where young learners support each other and grow together.',
  },
];

const milestones = [
  { year: '2025', label: 'KURAI founded in Johor Bahru', icon: Sparkles },
  { year: '2025', label: 'First cohort of AI Explorers launched', icon: Rocket },
  { year: '2026', label: 'Robotics Program introduced', icon: Award },
  { year: '2026', label: 'School partnership programme begins', icon: GraduationCap },
];

export default function About() {
  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-kurai-dark px-6 py-28 text-white md:py-36">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-kurai-royal/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-60 -left-40 h-[400px] w-[400px] rounded-full bg-kurai-light/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="font-body text-sm font-medium uppercase tracking-[0.2em] text-kurai-light">
            About KURAI
          </p>
          <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
            Why{' '}
            <span className="bg-gradient-to-r from-kurai-light to-kurai-royal-light bg-clip-text text-transparent">
              KURAI Exists
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-kurai-light-soft">
            Children today are surrounded by technology — but very few are taught how it works.
            KURAI offers a more thoughtful, structured, and age-appropriate way to explore AI
            and Robotics in Johor Bahru.
          </p>
        </div>
      </section>

      {/* ─── OUR STORY ─── */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-kurai-royal">
              Our Story
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-kurai-dark md:text-4xl">
              Why KURAI Exists
            </h2>
            <p className="mt-6 font-body leading-relaxed text-kurai-dark-60">
              Children use technology every day — but very few understand what happens
              behind the screen. They swipe, watch, and play, yet rarely get the chance
              to learn how it all works.
            </p>
            <p className="mt-4 font-body leading-relaxed text-kurai-dark-60">
              KURAI was created to bridge that gap. Based in Johor Bahru, we provide
              structured AI and Robotics education for children aged 5 to 11 — through
              guided, hands-on lessons designed for how young minds actually learn.
            </p>
            <p className="mt-4 font-body leading-relaxed text-kurai-dark-60">
              Our goal is simple: nurture curiosity, build confidence, and give children
              a stronger foundation for engaging with technology thoughtfully.
            </p>
          </div>

          {/* Timeline */}
          <div className="rounded-2xl bg-kurai-ice p-8 md:p-10">
            <h3 className="font-heading text-lg font-semibold text-kurai-dark">Our Journey</h3>
            <div className="mt-6 space-y-6">
              {milestones.map((m, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-kurai-royal/10 text-kurai-royal">
                    <m.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-body text-xs font-semibold uppercase tracking-wider text-kurai-royal">
                      {m.year}
                    </p>
                    <p className="mt-1 font-body text-sm text-kurai-dark-60">{m.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-kurai-dark to-kurai-dark-80 px-6 py-20 text-white md:py-28">
        <div className="pointer-events-none absolute -right-40 -bottom-40 h-[400px] w-[400px] rounded-full bg-kurai-light/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Mission */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-kurai-royal/20 text-kurai-light">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-heading text-2xl font-bold">Our Mission</h3>
              <p className="mt-4 font-body leading-relaxed text-kurai-light-soft">
                To provide structured, engaging, and age-appropriate AI and Robotics education
                that helps children become confident, creative, and critical thinkers — ready
                to understand and engage with technology on their own terms.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-kurai-royal/20 text-kurai-light">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-heading text-2xl font-bold">Our Vision</h3>
              <p className="mt-4 font-body leading-relaxed text-kurai-light-soft">
                A future where children don&apos;t just use technology — they understand it.
                Where every young learner has the opportunity to engage with AI thoughtfully,
                creatively, and responsibly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CORE VALUES ─── */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-kurai-royal">
              What We Stand For
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-kurai-dark md:text-4xl">
              Our Core Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-kurai-dark-60">
              These principles guide how we teach, how we design our programmes,
              and how we show up for every child who walks through our doors.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-kurai-ice bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-kurai-royal/10 text-kurai-royal">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-kurai-dark">
                  {value.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR APPROACH ─── */}
      <section className="bg-kurai-ice/50 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-kurai-royal">
              How We Teach
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-kurai-dark md:text-4xl">
              The KURAI Approach
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <p className="font-heading text-4xl font-bold text-kurai-royal">01</p>
              <h3 className="mt-4 font-heading text-lg font-semibold text-kurai-dark">
                Learn by Doing
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60">
                Children don&apos;t just hear about AI — they build, test, and create.
                Every lesson is designed around real projects that make abstract concepts tangible.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <p className="font-heading text-4xl font-bold text-kurai-royal">02</p>
              <h3 className="mt-4 font-heading text-lg font-semibold text-kurai-dark">
                Age-Appropriate Progression
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60">
                Our curriculum is structured in stages — each one builds on the last, so
                children are always challenged at the right level without feeling overwhelmed.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <p className="font-heading text-4xl font-bold text-kurai-royal">03</p>
              <h3 className="mt-4 font-heading text-lg font-semibold text-kurai-dark">
                Small Groups, Meaningful Attention
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60">
                With a maximum of 8 students per class, every child receives the guidance,
                feedback, and encouragement they need to truly understand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOUNDER MESSAGE ─── */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-2xl border border-kurai-ice bg-white p-10 md:p-14">
            <Quote className="absolute right-8 top-8 h-12 w-12 text-kurai-ice" />
            <div className="flex items-center gap-2 text-kurai-royal">
              <Heart className="h-5 w-5" />
              <span className="font-body text-xs font-semibold uppercase tracking-[0.2em]">
                From the Founder
              </span>
            </div>
            <blockquote className="mt-6 font-body text-lg leading-relaxed text-kurai-dark-60 md:text-xl">
              &ldquo;I started KURAI because I noticed something: children in Johor had plenty
              of access to devices, but not enough opportunity to understand the technology
              behind them. I wanted to build a place where they could explore, question, and
              create with technology — not just consume it. That&apos;s what KURAI is.&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <img
                src="/images/founder.jpg"
                alt="Founder of KURAI Education"
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <p className="font-heading text-base font-semibold text-kurai-dark">
                  Founder, KURAI Education
                </p>
                <p className="font-body text-sm text-kurai-dark-60">Johor Bahru, Malaysia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden bg-kurai-royal px-6 py-20 text-white md:py-28">
        <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Come See Where Curiosity Meets AI
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg text-white/80">
            Visit our centre in Johor Bahru, meet the team, and see for yourself
            why parents trust KURAI with their children&apos;s learning.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/free-trial"
              className="rounded-lg bg-white px-8 py-3.5 font-body text-sm font-semibold text-kurai-royal shadow-lg transition-all hover:bg-kurai-ice hover:shadow-xl"
            >
              Book a Free Trial
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-8 py-3.5 font-body text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/10"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
