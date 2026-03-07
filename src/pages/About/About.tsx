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
      'We believe every great innovation starts with a question. We nurture the natural curiosity in every child and channel it into meaningful learning.',
  },
  {
    icon: BookOpen,
    title: 'Structured Excellence',
    description:
      'Fun without structure is just play. We combine engaging experiences with a rigorous, progressive curriculum that builds real competence.',
  },
  {
    icon: Shield,
    title: 'Safe Exploration',
    description:
      'Technology should empower, not overwhelm. We create a guided environment where children explore AI safely and responsibly.',
  },
  {
    icon: Users,
    title: 'Community & Belonging',
    description:
      'Every child belongs here. We foster an inclusive, supportive community where diverse thinkers collaborate and grow together.',
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
            Shaping the Next Generation of{' '}
            <span className="bg-gradient-to-r from-kurai-light to-kurai-royal-light bg-clip-text text-transparent">
              AI-Literate Thinkers
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-kurai-light-soft">
            From a simple belief that every child deserves to understand the technology
            shaping their world, KURAI was born in the heart of Johor Bahru.
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
              In a world increasingly shaped by artificial intelligence, most children are
              consumers of technology — swiping, watching, and playing. Very few are given
              the chance to understand how it actually works.
            </p>
            <p className="mt-4 font-body leading-relaxed text-kurai-dark-60">
              KURAI was founded to change that. Based in Johor Bahru, Malaysia, we created
              a dedicated learning space where children aged 5 to 11 don&apos;t just interact
              with technology — they learn to think like the people who build it.
            </p>
            <p className="mt-4 font-body leading-relaxed text-kurai-dark-60">
              Our name, KURAI, reflects our mission: illuminating the path between curiosity
              and capability. Through structured, hands-on programmes in AI and Robotics,
              we equip young learners with the skills, confidence, and mindset to thrive in
              an AI-powered future.
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
      <section className="bg-kurai-dark px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Mission */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-kurai-royal/20 text-kurai-light">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-heading text-2xl font-bold">Our Mission</h3>
              <p className="mt-4 font-body leading-relaxed text-kurai-light-soft">
                To provide structured, engaging, and age-appropriate AI and Robotics education
                that empowers children in Johor to become confident, creative, and critical
                thinkers — ready for a technology-driven world.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-kurai-royal/20 text-kurai-light">
                <Eye className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-heading text-2xl font-bold">Our Vision</h3>
              <p className="mt-4 font-body leading-relaxed text-kurai-light-soft">
                A Malaysia where every child has the opportunity to understand AI — not just
                as users, but as informed, capable thinkers who can shape the future of
                technology with creativity, ethics, and confidence.
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
              Everything we do at KURAI is guided by four fundamental principles that shape
              our curriculum, our culture, and our commitment to every student.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-kurai-ice bg-white p-8 transition-shadow hover:shadow-lg"
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
                Every lesson involves hands-on activities. Students don&apos;t just hear about AI
                — they build, test, and iterate on real projects that bring concepts to life.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <p className="font-heading text-4xl font-bold text-kurai-royal">02</p>
              <h3 className="mt-4 font-heading text-lg font-semibold text-kurai-dark">
                Age-Appropriate Progression
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60">
                Our curriculum is designed in tiers — each stage builds on the last, ensuring
                children are challenged at the right level without feeling overwhelmed.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <p className="font-heading text-4xl font-bold text-kurai-royal">03</p>
              <h3 className="mt-4 font-heading text-lg font-semibold text-kurai-dark">
                Small Groups, Big Impact
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-kurai-dark-60">
                With a maximum of 8 students per class, every child receives personalised
                guidance, feedback, and encouragement from our trained instructors.
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
              &ldquo;I started KURAI because I saw a gap — children in Johor had access to
              devices but not to understanding. I wanted to build a place where young minds
              could go beyond swiping and scrolling, to actually grasp the intelligence behind
              the screen. KURAI is that place — where every child can discover that technology
              isn&apos;t magic; it&apos;s something they can learn, build, and shape.&rdquo;
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
            Visit our center in Johor Bahru, meet our team, and discover why parents
            trust KURAI to prepare their children for the future.
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
