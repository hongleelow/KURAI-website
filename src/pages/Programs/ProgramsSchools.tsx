/**
 * SCHOOL PARTNERSHIPS PAGE — /programs/schools
 *
 * Layout Sections:
 * ┌──────────────────────────────────────────┐
 * │  HERO                                    │
 * │  - Title: "School Partnerships"          │
 * │  - Subtitle about bringing AI            │
 * │    education to schools                  │
 * ├──────────────────────────────────────────┤
 * │  PARTNERSHIP MODELS                      │
 * │  - In-School Programs                    │
 * │    • During school hours integration     │
 * │  - After-School Programs                 │
 * │    • Extracurricular AI clubs            │
 * │  - Curriculum Integration                │
 * │    • Teacher training + materials        │
 * ├──────────────────────────────────────────┤
 * │  SCHOOL TESTIMONIALS                     │
 * │  - Quotes from partner schools           │
 * │  - Results and impact metrics            │
 * ├──────────────────────────────────────────┤
 * │  CTA                                     │
 * │  - "Partner with KURAI"                  │
 * │  - Contact form or link                  │
 * └──────────────────────────────────────────┘
 */

import { Link } from 'react-router-dom';

const partnershipModels = [
  { title: 'In-School Programs', description: 'AI and robotics modules integrated into regular school hours.' },
  { title: 'After-School Programs', description: 'Extracurricular AI clubs and enrichment activities.' },
  { title: 'Curriculum Integration', description: 'Teacher training and ready-to-use educational materials.' },
];

export default function ProgramsSchools() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-kurai-dark px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl font-bold md:text-5xl">School Partnerships</h1>
          <p className="mt-4 font-body text-lg text-kurai-light-soft">
            Bring KURAI&apos;s AI curriculum directly to your school.
          </p>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-heading text-3xl font-bold text-kurai-dark">
            Partnership Models
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {partnershipModels.map((model) => (
              <div key={model.title} className="rounded-xl border border-kurai-ice p-8">
                <h3 className="font-heading text-xl font-semibold text-kurai-dark">{model.title}</h3>
                <p className="mt-3 font-body text-sm text-kurai-dark-60">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Testimonials */}
      <section className="bg-kurai-ice px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-heading text-3xl font-bold text-kurai-dark">Partner Schools</h2>
          <p className="mt-4 font-body text-kurai-dark-60">Testimonials placeholder.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-kurai-royal px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-2xl font-bold">Partner with KURAI</h2>
          <p className="mt-3 font-body text-kurai-ice">
            Bring structured AI and Robotics learning to your school.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block rounded-lg bg-white px-8 py-3 font-body font-semibold text-kurai-royal hover:bg-kurai-ice"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
