import { Link } from 'react-router-dom';
import {
  Brain,
  Cpu,
  Users,
  Sparkles,
  Code,
  Bot,
  Lightbulb,
  Cog,
  BarChart3,
  Workflow,
  Presentation,
  Wrench,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const programSections = [
  {
    id: 'ai-explorers',
    icon: Brain,
    badge: 'Ages 5–11',
    title: 'AI Explorers',
    overview:
      'A structured introduction to artificial intelligence for young learners. Students explore how AI works through interactive lessons, visual coding environments, and guided experiments — building real understanding, not just screen time.',
    learns: [
      { icon: Sparkles, text: 'How AI recognises patterns, images, and language' },
      { icon: Code, text: 'Visual and block-based programming fundamentals' },
      { icon: Bot, text: 'Training simple AI models with real datasets' },
      { icon: Lightbulb, text: 'Ethical thinking about technology and AI in society' },
    ],
    outcomes: [
      'Ability to explain what AI is and how it learns',
      'A portfolio of completed AI projects',
      'Confidence working with technology independently',
      'Foundational computational thinking skills',
    ],
    cta: 'Enroll in AI Explorers',
    ctaPath: '/contact',
    dark: false,
  },
  {
    id: 'robotics',
    icon: Cpu,
    badge: 'Ages 5–11',
    title: 'Robotics Program',
    overview:
      'Hands-on engineering meets computational thinking. Students design, build, and program real robots — learning how hardware and software work together to solve problems in the physical world.',
    learns: [
      { icon: Cog, text: 'Mechanical design and sensor integration' },
      { icon: Workflow, text: 'Programming robots with block-based and text-based code' },
      { icon: BarChart3, text: 'Testing, debugging, and iterating on designs' },
      { icon: Wrench, text: 'Teamwork through collaborative engineering challenges' },
    ],
    outcomes: [
      'Ability to build and program functional robots',
      'Engineering design process and prototyping skills',
      'Logical reasoning and systematic problem solving',
      'Experience presenting and demonstrating projects',
    ],
    cta: 'Enroll in Robotics',
    ctaPath: '/contact',
    dark: true,
  },
  {
    id: 'adult-workshops',
    icon: Users,
    badge: 'Coming Soon',
    title: 'Adult AI Workshops',
    overview:
      'Practical, jargon-free AI workshops for professionals, educators, and curious adults. Gain hands-on confidence with modern AI tools and learn to make informed decisions about how to use them.',
    learns: [
      { icon: Presentation, text: 'Core AI concepts explained without technical jargon' },
      { icon: Sparkles, text: 'Hands-on practice with generative AI tools' },
      { icon: BarChart3, text: 'AI applications for business, education, and productivity' },
      { icon: Lightbulb, text: 'Critical evaluation of AI outputs and limitations' },
    ],
    outcomes: [
      'Confident understanding of how AI works',
      'Practical skills with industry-standard AI tools',
      'Ability to identify AI opportunities in your field',
      'Framework for responsible AI adoption',
    ],
    cta: 'Join the Waitlist',
    ctaPath: '/programs/adults',
    comingSoon: true,
    dark: false,
  },
];

export default function Programs() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-kurai-dark px-6 py-24 text-white md:py-32">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-kurai-royal/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-kurai-light">
            What We Teach
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold md:text-6xl">Our Programs</h1>
          <p className="mx-auto mt-5 max-w-2xl font-body text-lg leading-relaxed text-kurai-light-soft">
            Each programme follows a structured, age-appropriate curriculum. Children build real understanding through guided, project-based learning.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {programSections.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="rounded-full border border-white/15 px-5 py-2 font-body text-sm text-white/80 transition-colors hover:border-white/30 hover:text-white"
              >
                {p.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Program Sections */}
      {programSections.map((program) => (
        <section
          key={program.id}
          id={program.id}
          className={`px-6 py-20 md:py-28 ${program.dark ? 'bg-kurai-dark text-white' : ''}`}
        >
          <div className="mx-auto max-w-7xl">
            {/* Header */}
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                  program.dark ? 'bg-kurai-royal/20 text-kurai-light' : 'bg-kurai-royal/10 text-kurai-royal'
                }`}
              >
                <program.icon className="h-7 w-7" />
              </div>
              <div>
                <span
                  className={`font-body text-xs font-semibold uppercase tracking-[0.15em] ${
                    program.comingSoon
                      ? 'rounded-full bg-kurai-royal/10 px-3 py-1 text-kurai-royal'
                      : program.dark
                        ? 'text-kurai-light'
                        : 'text-kurai-royal'
                  }`}
                >
                  {program.badge}
                </span>
                <h2
                  className={`mt-1 font-heading text-3xl font-bold md:text-4xl ${
                    program.dark ? '' : 'text-kurai-dark'
                  }`}
                >
                  {program.title}
                </h2>
              </div>
            </div>

            {/* Content Grid */}
            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              {/* Left: Overview + What Students Learn */}
              <div>
                <h3
                  className={`font-heading text-lg font-semibold ${
                    program.dark ? '' : 'text-kurai-dark'
                  }`}
                >
                  Overview
                </h3>
                <p
                  className={`mt-3 font-body leading-relaxed ${
                    program.dark ? 'text-kurai-light-soft' : 'text-kurai-dark-60'
                  }`}
                >
                  {program.overview}
                </p>

                <h3
                  className={`mt-10 font-heading text-lg font-semibold ${
                    program.dark ? '' : 'text-kurai-dark'
                  }`}
                >
                  What Students Learn
                </h3>
                <ul className="mt-4 space-y-4">
                  {program.learns.map((item) => (
                    <li key={item.text} className="flex items-start gap-4">
                      <div
                        className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                          program.dark
                            ? 'bg-white/5 text-kurai-light'
                            : 'bg-kurai-royal/10 text-kurai-royal'
                        }`}
                      >
                        <item.icon className="h-4.5 w-4.5" />
                      </div>
                      <span
                        className={`font-body text-sm leading-relaxed ${
                          program.dark ? 'text-kurai-light-soft' : 'text-kurai-dark-60'
                        }`}
                      >
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Outcomes + CTA */}
              <div>
                <div
                  className={`rounded-2xl p-8 ${
                    program.dark ? 'border border-white/10 bg-white/5' : 'border border-kurai-ice bg-kurai-ice/30'
                  }`}
                >
                  <h3
                    className={`font-heading text-lg font-semibold ${
                      program.dark ? '' : 'text-kurai-dark'
                    }`}
                  >
                    Outcomes
                  </h3>
                  <p
                    className={`mt-2 font-body text-sm ${
                      program.dark ? 'text-kurai-light-soft' : 'text-kurai-dark-60'
                    }`}
                  >
                    By completing this program, students will have:
                  </p>
                  <ul className="mt-5 space-y-3">
                    {program.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-3">
                        <CheckCircle2
                          className={`mt-0.5 h-5 w-5 shrink-0 ${
                            program.dark ? 'text-kurai-light' : 'text-kurai-royal'
                          }`}
                        />
                        <span
                          className={`font-body text-sm ${
                            program.dark ? 'text-kurai-light-soft' : 'text-kurai-dark-60'
                          }`}
                        >
                          {outcome}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={program.ctaPath}
                    className={`mt-8 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-body text-sm font-semibold transition-all ${
                      program.dark
                        ? 'bg-kurai-royal text-white hover:bg-kurai-royal-light'
                        : 'bg-kurai-royal text-white shadow-lg shadow-kurai-royal/20 hover:bg-kurai-dark'
                    }`}
                  >
                    {program.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="bg-kurai-royal px-6 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold">Not sure which programme is right?</h2>
          <p className="mt-4 font-body text-lg text-white/80">
            Try a class first — our free trial lets your child experience KURAI with no commitment.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/free-trial"
              className="rounded-lg bg-white px-8 py-3.5 font-body text-sm font-semibold text-kurai-royal transition-all hover:bg-kurai-ice"
            >
              Book a Free Trial
            </Link>
            <Link
              to="/schedule"
              className="rounded-lg border border-white/30 px-8 py-3.5 font-body text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/10"
            >
              View Class Schedule
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
