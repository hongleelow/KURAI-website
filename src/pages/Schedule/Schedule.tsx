import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';

type Availability = 'Open' | 'Limited' | 'Full';

interface ClassSlot {
  program: string;
  ageGroup: string;
  day: string;
  time: string;
  availability: Availability;
}

const schedule: ClassSlot[] = [
  // AI Explorers
  { program: 'AI Explorers', ageGroup: 'Ages 5–7', day: 'Saturday', time: '9:00 AM – 10:30 AM', availability: 'Limited' },
  { program: 'AI Explorers', ageGroup: 'Ages 8–9', day: 'Saturday', time: '11:00 AM – 12:30 PM', availability: 'Open' },
  { program: 'AI Explorers', ageGroup: 'Ages 10–11', day: 'Saturday', time: '2:00 PM – 3:30 PM', availability: 'Open' },
  { program: 'AI Explorers', ageGroup: 'Ages 5–7', day: 'Sunday', time: '9:00 AM – 10:30 AM', availability: 'Full' },
  { program: 'AI Explorers', ageGroup: 'Ages 8–9', day: 'Sunday', time: '11:00 AM – 12:30 PM', availability: 'Limited' },
  // Robotics
  { program: 'Robotics Program', ageGroup: 'Ages 5–7', day: 'Saturday', time: '9:00 AM – 10:30 AM', availability: 'Open' },
  { program: 'Robotics Program', ageGroup: 'Ages 8–9', day: 'Saturday', time: '11:00 AM – 12:30 PM', availability: 'Limited' },
  { program: 'Robotics Program', ageGroup: 'Ages 10–11', day: 'Saturday', time: '2:00 PM – 3:30 PM', availability: 'Open' },
  { program: 'Robotics Program', ageGroup: 'Ages 5–7', day: 'Sunday', time: '9:00 AM – 10:30 AM', availability: 'Open' },
  { program: 'Robotics Program', ageGroup: 'Ages 10–11', day: 'Sunday', time: '11:00 AM – 12:30 PM', availability: 'Full' },
];

const availabilityStyles: Record<Availability, { bg: string; text: string; dot: string }> = {
  Open: { bg: 'bg-emerald-50', text: 'text-emerald-700', dot: 'bg-emerald-500' },
  Limited: { bg: 'bg-amber-50', text: 'text-amber-700', dot: 'bg-amber-500' },
  Full: { bg: 'bg-red-50', text: 'text-red-700', dot: 'bg-red-500' },
};

const programs = [...new Set(schedule.map((s) => s.program))];

export default function Schedule() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-kurai-dark px-6 py-24 text-white md:py-32">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full bg-kurai-royal/15 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-kurai-light">
            Plan Your Week
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold md:text-5xl">Class Schedule</h1>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-kurai-light-soft">
            Find the right class time for your child. All classes run in small groups of up to 8 students.
          </p>
        </div>
      </section>

      {/* Legend */}
      <section className="border-b border-kurai-ice px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6">
          {(['Open', 'Limited', 'Full'] as Availability[]).map((status) => {
            const style = availabilityStyles[status];
            return (
              <div key={status} className="flex items-center gap-2">
                <span className={`h-2.5 w-2.5 rounded-full ${style.dot}`} />
                <span className="font-body text-sm text-kurai-dark-60">
                  {status === 'Open' && 'Open — Spots available'}
                  {status === 'Limited' && 'Limited — Few spots left'}
                  {status === 'Full' && 'Full — Join waitlist'}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Schedule Tables */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-16">
          {programs.map((programName) => {
            const slots = schedule.filter((s) => s.program === programName);
            return (
              <div key={programName}>
                <h2 className="font-heading text-2xl font-bold text-kurai-dark">{programName}</h2>
                <p className="mt-1 font-body text-sm text-kurai-dark-60">
                  Ages 5–11 · 90-minute sessions · Max 8 students
                </p>

                {/* Desktop Table */}
                <div className="mt-6 hidden overflow-hidden rounded-xl border border-kurai-ice md:block">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-kurai-ice/50">
                        <th className="px-6 py-4 text-left font-heading text-xs font-semibold uppercase tracking-wider text-kurai-dark-60">
                          Age Group
                        </th>
                        <th className="px-6 py-4 text-left font-heading text-xs font-semibold uppercase tracking-wider text-kurai-dark-60">
                          Day
                        </th>
                        <th className="px-6 py-4 text-left font-heading text-xs font-semibold uppercase tracking-wider text-kurai-dark-60">
                          Time
                        </th>
                        <th className="px-6 py-4 text-left font-heading text-xs font-semibold uppercase tracking-wider text-kurai-dark-60">
                          Availability
                        </th>
                        <th className="px-6 py-4" />
                      </tr>
                    </thead>
                    <tbody>
                      {slots.map((slot, i) => {
                        const style = availabilityStyles[slot.availability];
                        return (
                          <tr key={i} className="border-t border-kurai-ice transition-colors hover:bg-kurai-ice/20">
                            <td className="px-6 py-4 font-body text-sm font-medium text-kurai-dark">
                              {slot.ageGroup}
                            </td>
                            <td className="px-6 py-4 font-body text-sm text-kurai-dark-60">
                              {slot.day}
                            </td>
                            <td className="px-6 py-4">
                              <span className="inline-flex items-center gap-1.5 font-body text-sm text-kurai-dark-60">
                                <Clock className="h-3.5 w-3.5" />
                                {slot.time}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <span
                                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-body text-xs font-medium ${style.bg} ${style.text}`}
                              >
                                <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
                                {slot.availability}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <Link
                                to="/contact"
                                className="font-body text-sm font-semibold text-kurai-royal transition-colors hover:text-kurai-dark"
                              >
                                {slot.availability === 'Full' ? 'Join the Waitlist' : 'Contact Us'}
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="mt-6 space-y-3 md:hidden">
                  {slots.map((slot, i) => {
                    const style = availabilityStyles[slot.availability];
                    return (
                      <div key={i} className="rounded-xl border border-kurai-ice bg-white p-5">
                        <div className="flex items-center justify-between">
                          <span className="font-heading text-sm font-semibold text-kurai-dark">
                            {slot.ageGroup}
                          </span>
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-body text-[10px] font-medium ${style.bg} ${style.text}`}
                          >
                            <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
                            {slot.availability}
                          </span>
                        </div>
                        <div className="mt-2 flex items-center gap-3 font-body text-sm text-kurai-dark-60">
                          <span>{slot.day}</span>
                          <span className="text-kurai-ice">|</span>
                          <span className="inline-flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {slot.time}
                          </span>
                        </div>
                        <Link
                          to="/contact"
                          className="mt-3 inline-flex items-center gap-1 font-body text-sm font-semibold text-kurai-royal"
                        >
                          {slot.availability === 'Full' ? 'Join the Waitlist' : 'Contact Us'}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-kurai-ice px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold text-kurai-dark">
            Can&apos;t find a suitable time?
          </h2>
          <p className="mt-3 font-body text-kurai-dark-60">
            Contact us and we&apos;ll work with you to find the best option for your child.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-kurai-royal px-8 py-3.5 font-body text-sm font-semibold text-white transition-all hover:bg-kurai-dark"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
