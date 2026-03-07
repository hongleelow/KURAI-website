/**
 * KIDS PROGRAM PAGE — /programs/kids
 *
 * Layout Sections:
 * ┌──────────────────────────────────────────┐
 * │  HERO                                    │
 * │  - Title: "AI & Robotics for Kids"       │
 * │  - Subtitle: Ages 5-11                   │
 * │  - Hero image / illustration             │
 * ├──────────────────────────────────────────┤
 * │  AGE GROUP TIERS                         │
 * │  - Explorers (Ages 5-7)                  │
 * │    • Focus: Introduction to logic,       │
 * │      basic robotics, visual coding       │
 * │  - Builders (Ages 8-9)                   │
 * │    • Focus: Block-based programming,     │
 * │      robotics projects, AI basics        │
 * │  - Innovators (Ages 10-11)               │
 * │    • Focus: Text-based coding, AI        │
 * │      concepts, advanced robotics         │
 * ├──────────────────────────────────────────┤
 * │  CURRICULUM OVERVIEW                     │
 * │  - Module breakdown                      │
 * │  - Skills progression chart              │
 * │  - Tools and platforms used              │
 * ├──────────────────────────────────────────┤
 * │  LEARNING OUTCOMES                       │
 * │  - What students will achieve            │
 * │  - Skills developed                      │
 * │  - Portfolio / project showcase           │
 * ├──────────────────────────────────────────┤
 * │  SCHEDULE & PRICING                      │
 * │  - Class schedule                        │
 * │  - Pricing tiers                         │
 * │  - What's included                       │
 * ├──────────────────────────────────────────┤
 * │  CTA                                     │
 * │  - Enroll Now / Book a Trial Class       │
 * └──────────────────────────────────────────┘
 */

import { Link } from 'react-router-dom';

const ageTiers = [
  { name: 'Explorers', ages: 'Ages 5–7', focus: 'Introduction to logic, basic robotics, visual coding' },
  { name: 'Builders', ages: 'Ages 8–9', focus: 'Block-based programming, robotics projects, AI basics' },
  { name: 'Innovators', ages: 'Ages 10–11', focus: 'Text-based coding, AI concepts, advanced robotics' },
];

export default function ProgramsKids() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-kurai-dark px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <span className="font-body text-sm font-medium uppercase tracking-wider text-kurai-light">
            Ages 5–11
          </span>
          <h1 className="mt-2 font-heading text-4xl font-bold md:text-5xl">
            AI & Robotics for Kids
          </h1>
          <p className="mt-4 font-body text-lg text-kurai-light-soft">
            Structured, hands-on AI education designed for young minds.
          </p>
        </div>
      </section>

      {/* Age Tiers */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-heading text-3xl font-bold text-kurai-dark">
            Learning Paths by Age
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {ageTiers.map((tier) => (
              <div key={tier.name} className="rounded-xl border border-kurai-ice p-8 text-center">
                <h3 className="font-heading text-xl font-semibold text-kurai-royal">{tier.name}</h3>
                <p className="mt-1 font-body text-sm font-medium text-kurai-dark-60">{tier.ages}</p>
                <p className="mt-4 font-body text-sm text-kurai-dark-60">{tier.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="bg-kurai-ice px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-heading text-3xl font-bold text-kurai-dark">Curriculum Overview</h2>
          <p className="mt-4 font-body text-kurai-dark-60">Content placeholder.</p>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-heading text-3xl font-bold text-kurai-dark">Learning Outcomes</h2>
          <p className="mt-4 font-body text-kurai-dark-60">Content placeholder.</p>
        </div>
      </section>

      {/* Schedule & Pricing */}
      <section className="bg-kurai-ice px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-heading text-3xl font-bold text-kurai-dark">Schedule & Pricing</h2>
          <p className="mt-4 font-body text-kurai-dark-60">Content placeholder.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-kurai-royal px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-2xl font-bold">Start Your Child&apos;s AI Journey</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-lg bg-white px-8 py-3 font-body font-semibold text-kurai-royal hover:bg-kurai-ice"
            >
              Enroll Now
            </Link>
            <Link
              to="/contact"
              className="rounded-lg border border-white/30 px-8 py-3 font-body font-semibold text-white hover:bg-white/10"
            >
              Book a Trial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
