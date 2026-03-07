/**
 * ADULT WORKSHOPS PAGE — /programs/adults
 *
 * Layout Sections:
 * ┌──────────────────────────────────────────┐
 * │  HERO                                    │
 * │  - Title: "Adult AI Workshops"           │
 * │  - "Coming Soon" badge                   │
 * │  - Subtitle about practical AI skills    │
 * │    for professionals                     │
 * ├──────────────────────────────────────────┤
 * │  WORKSHOP CATEGORIES PREVIEW             │
 * │  - AI Fundamentals                       │
 * │  - AI for Business                       │
 * │  - Hands-on AI Tools                     │
 * │  - (Greyed out / teaser style)           │
 * ├──────────────────────────────────────────┤
 * │  WAITLIST / PRE-REGISTRATION             │
 * │  - Email signup form                     │
 * │  - "Be the first to know" messaging      │
 * │  - Expected launch info                  │
 * └──────────────────────────────────────────┘
 */

const workshopPreviews = [
  { title: 'AI Fundamentals', description: 'Understand the core concepts behind artificial intelligence and machine learning.' },
  { title: 'AI for Business', description: 'Learn how to leverage AI tools to enhance productivity and decision-making.' },
  { title: 'Hands-on AI Tools', description: 'Practical workshops on using modern AI platforms and applications.' },
];

export default function ProgramsAdults() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-kurai-dark px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full bg-kurai-royal px-4 py-1 font-body text-xs font-semibold uppercase tracking-wider">
            Coming Soon
          </span>
          <h1 className="mt-4 font-heading text-4xl font-bold md:text-5xl">Adult AI Workshops</h1>
          <p className="mt-4 font-body text-lg text-kurai-light-soft">
            Practical AI skills for professionals and lifelong learners.
          </p>
        </div>
      </section>

      {/* Workshop Previews */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-heading text-3xl font-bold text-kurai-dark">
            What to Expect
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {workshopPreviews.map((workshop) => (
              <div key={workshop.title} className="rounded-xl border border-kurai-ice p-8 opacity-75">
                <h3 className="font-heading text-xl font-semibold text-kurai-dark">{workshop.title}</h3>
                <p className="mt-3 font-body text-sm text-kurai-dark-60">{workshop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section className="bg-kurai-ice px-6 py-20">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-heading text-3xl font-bold text-kurai-dark">Join the Waitlist</h2>
          <p className="mt-4 font-body text-kurai-dark-60">
            Be the first to know when our adult workshops launch.
          </p>
          {/* Waitlist form placeholder */}
          <div className="mt-8 flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border border-kurai-dark-60/20 px-4 py-3 font-body text-sm focus:border-kurai-royal focus:outline-none"
            />
            <button className="rounded-lg bg-kurai-royal px-6 py-3 font-body text-sm font-semibold text-white hover:bg-kurai-dark">
              Notify Me
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
