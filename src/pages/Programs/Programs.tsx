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
      'A structured introduction to AI for young learners. Through interactive lessons, visual coding, simple experiments, and guided projects, children develop an age-appropriate understanding of how artificial intelligence actually works.',
    learns: [
      { icon: Sparkles, text: 'How AI recognises patterns, images, and language' },
      { icon: Code, text: 'Visual and block-based programming fundamentals' },
      { icon: Bot, text: 'Training simple AI models with real datasets' },
      { icon: Lightbulb, text: 'Thinking critically about technology and AI in daily life' },
    ],
    outcomes: [
      'Can explain what AI is and how it learns — in their own words',
      'A portfolio of completed AI projects they can demonstrate',
      'Confidence engaging with technology independently',
      'Stronger computational thinking and problem-solving habits',
    ],
    cta: 'Book a Trial for AI Explorers',
    ctaPath: '/free-trial',
    image: '/images/kids-laptop.jpg',
    imageAlt: 'Children learning AI on a laptop at KURAI',
    dark: false,
  },
  {
    id: 'robotics',
    icon: Cpu,
    badge: 'Ages 5–11',
    title: 'Robotics Programme',
    overview:
      'Hands-on engineering and computational thinking, combined. Children build, programme, test, and improve real robots — learning how hardware and software work together through structured, guided projects.',
    learns: [
      { icon: Cog, text: 'Mechanical design, sensors, and how components connect' },
      { icon: Workflow, text: 'Programming robots with block-based and visual code' },
      { icon: BarChart3, text: 'Testing, debugging, and improving their own designs' },
      { icon: Wrench, text: 'Collaborative problem-solving through team engineering challenges' },
    ],
    outcomes: [
      'Can build and programme functional robots from scratch',
      'Practical understanding of the engineering design process',
      'Stronger logical reasoning and systematic problem-solving',
      'Confidence presenting and explaining their projects',
    ],
    cta: 'Book a Trial for Robotics',
    ctaPath: '/free-trial',
    image: '/images/girl-robot-proud.jpg',
    imageAlt: 'Student proudly showing her completed robot at KURAI',
    dark: true,
  },
  {
    id: 'adult-workshops',
    icon: Users,
    badge: 'Coming Soon',
    title: 'Adult AI Workshops',
    overview:
      'Practical, jargon-free AI workshops for parents, professionals, educators, and curious adults. Focused on real-world understanding and useful application — so you can make informed decisions about AI in your work and life.',
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
    image: '/images/instructor-ai-daily-life.jpg',
    imageAlt: 'KURAI instructor presenting AI in Daily Life workshop',
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
        <div className="pointer-events-none absolute -bottom-60 -left-40 h-[400px] w-[400px] rounded-full bg-kurai-light/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-kurai-light">
            What We Teach
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold md:text-6xl">Our Programmes</h1>
          <p className="mx-auto mt-5 max-w-2xl font-body text-lg leading-relaxed text-kurai-light-soft">
            Structured learning pathways that help children move from curiosity to confidence. Every programme is designed around real understanding — not just activities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {programSections.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="rounded-full border border-white/15 px-5 py-2 font-body text-sm text-white/80 transition-all hover:scale-105 hover:border-white/30 hover:text-white"
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
                  className={`font-body text-xs font-semibold uppercase tracking-[0.25em] ${
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
                  className={`mt-2 font-heading text-3xl font-bold md:text-4xl ${
                    program.dark ? '' : 'text-kurai-dark'
                  }`}
                >
                  {program.title}
                </h2>
              </div>
            </div>

            {/* Program Image */}
            {program.image && (
              <div className={`mt-10 overflow-hidden rounded-2xl md:mt-12 ${
                program.dark ? '' : 'shadow-lg shadow-kurai-dark/5'
              }`}>
                <img
                  src={program.image}
                  alt={program.imageAlt}
                  className={`h-72 w-full object-cover md:h-[22rem] ${
                    program.id === 'robotics'
                      ? 'object-top'
                      : program.id === 'adult-workshops'
                        ? 'object-[center_30%]'
                        : 'object-center'
                  }`}
                />
              </div>
            )}

            {/* Content Grid */}
            <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
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
                  className={`mt-4 font-body leading-relaxed md:text-lg ${
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
                <ul className="mt-5 space-y-5">
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
                        className={`font-body text-sm md:text-base leading-relaxed ${
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
                  className={`rounded-2xl border-l-4 p-8 md:p-10 ${
                    program.dark
                      ? 'border border-white/10 border-l-kurai-light bg-white/5'
                      : 'border border-kurai-ice border-l-kurai-royal bg-kurai-ice/30'
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
                    className={`mt-2 font-body text-sm md:text-base ${
                      program.dark ? 'text-kurai-light-soft' : 'text-kurai-dark-60'
                    }`}
                  >
                    By completing this programme, students will have:
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
                          className={`font-body text-sm leading-relaxed md:text-base ${
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
                    className={`mt-8 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-body text-sm font-semibold transition-all hover:scale-105 ${
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
      <section className="relative overflow-hidden bg-kurai-royal px-6 py-20 text-white md:py-28">
        <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold">Not sure which programme is right for your child?</h2>
          <p className="mt-5 font-body text-lg leading-relaxed text-white/80">
            We&apos;ll help you find the best starting point based on your child&apos;s age, interests, and readiness. Try a free class first &mdash; no commitment required.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/free-trial"
              className="rounded-lg bg-kurai-cream px-8 py-3.5 font-body text-sm font-bold text-kurai-dark shadow-lg shadow-kurai-dark/10 transition-all hover:scale-105 hover:bg-kurai-cream-dark hover:shadow-xl"
            >
              Try a Free Class
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-body text-sm font-semibold text-white/90 transition-all hover:scale-105 hover:border-white/40 hover:text-white"
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
