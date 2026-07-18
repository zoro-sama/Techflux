import { useState } from "react";
import {
  ArrowRight,
  Check,
  Clock,
  Dumbbell,
  Flame,
  MapPin,
  Phone,
  Users,
} from "lucide-react";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;

const SCHEDULE: Record<(typeof DAYS)[number], { time: string; name: string; coach: string }[]> = {
  Mon: [
    { time: "6:00 AM", name: "HIIT Blast", coach: "Coach Vikram" },
    { time: "8:00 AM", name: "Strength & Power", coach: "Coach Neha" },
    { time: "6:30 PM", name: "Boxing Basics", coach: "Coach Arjun" },
  ],
  Tue: [
    { time: "6:00 AM", name: "Spin Studio", coach: "Coach Neha" },
    { time: "7:30 AM", name: "Yoga Flow", coach: "Coach Divya" },
    { time: "7:00 PM", name: "CrossTraining", coach: "Coach Vikram" },
  ],
  Wed: [
    { time: "6:00 AM", name: "HIIT Blast", coach: "Coach Vikram" },
    { time: "9:00 AM", name: "Core & Mobility", coach: "Coach Divya" },
    { time: "6:30 PM", name: "Powerlifting Club", coach: "Coach Arjun" },
  ],
  Thu: [
    { time: "6:30 AM", name: "Boxing Basics", coach: "Coach Arjun" },
    { time: "8:00 AM", name: "Strength & Power", coach: "Coach Neha" },
    { time: "7:00 PM", name: "Zumba Night", coach: "Coach Divya" },
  ],
  Fri: [
    { time: "6:00 AM", name: "Spin Studio", coach: "Coach Neha" },
    { time: "9:00 AM", name: "Yoga Flow", coach: "Coach Divya" },
    { time: "6:30 PM", name: "Friday Burnout", coach: "Coach Vikram" },
  ],
  Sat: [
    { time: "7:00 AM", name: "Outdoor Bootcamp", coach: "Coach Vikram" },
    { time: "10:00 AM", name: "Family Fitness", coach: "Coach Divya" },
    { time: "5:00 PM", name: "Open Mat", coach: "All coaches" },
  ],
};

const PLANS = [
  { name: "Monthly", price: "₹1,499", perks: ["All classes", "Gym floor access"] },
  { name: "Quarterly", price: "₹3,999", perks: ["All classes", "1 PT session/mo", "Diet plan"], hot: true },
  { name: "Annual", price: "₹12,999", perks: ["Everything", "4 PT sessions/mo", "Guest passes"] },
];

/** Demo homepage for FitPro Gym — bold, dark, high-energy fitness brand. */
export default function FitProSite() {
  const [day, setDay] = useState<(typeof DAYS)[number]>("Mon");

  return (
    <div className="bg-zinc-950 font-sans text-white">
      {/* Nav */}
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-zinc-950/90 px-6 py-4 backdrop-blur sm:px-10">
        <p className="flex items-center gap-2 text-lg font-black tracking-tight uppercase italic">
          <Dumbbell className="size-5 text-red-500" strokeWidth={2.5} />
          FitPro
        </p>
        <nav className="hidden gap-7 text-xs font-semibold tracking-widest uppercase sm:flex">
          <span className="text-red-500">Home</span>
          <span className="text-white/60">Classes</span>
          <span className="text-white/60">Trainers</span>
          <span className="text-white/60">Pricing</span>
        </nav>
        <button
          type="button"
          className="rounded-sm bg-red-600 px-4 py-2 text-xs font-bold tracking-widest uppercase transition-colors hover:bg-red-500"
        >
          Join now
        </button>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=60"
          alt="Gym floor with rows of equipment"
          className="absolute inset-0 size-full object-cover opacity-40"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent" />
        <div className="relative px-6 py-20 sm:px-10 sm:py-28">
          <p className="text-xs font-bold tracking-[0.3em] text-red-500 uppercase">
            Andheri West · Mumbai
          </p>
          <h1 className="mt-4 max-w-xl text-5xl leading-[0.95] font-black tracking-tight uppercase italic sm:text-6xl">
            Stronger every <span className="text-red-500">single</span> day.
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
            Mumbai's friendliest serious gym. 40+ weekly classes, expert
            coaches, and a community that shows up for you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              className="flex items-center gap-2 rounded-sm bg-red-600 px-6 py-3.5 text-xs font-bold tracking-widest uppercase transition-colors hover:bg-red-500"
            >
              Book a free trial <ArrowRight className="size-4" />
            </button>
            <button
              type="button"
              className="rounded-sm border border-white/25 px-6 py-3.5 text-xs font-bold tracking-widest uppercase transition-colors hover:border-white/60"
            >
              View classes
            </button>
          </div>
          <div className="mt-10 flex flex-wrap gap-8 text-sm">
            {[
              [<Users key="i" className="size-4 text-red-500" />, "1,200+ members"],
              [<Flame key="i" className="size-4 text-red-500" />, "40+ classes / week"],
              [<Clock key="i" className="size-4 text-red-500" />, "Open 5 AM – 11 PM"],
            ].map(([icon, label], i) => (
              <span key={i} className="flex items-center gap-2 font-semibold text-white/85">
                {icon}
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Live class schedule — interactive day tabs */}
      <section className="border-t border-white/10 px-6 py-14 sm:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-red-500 uppercase">
              This week
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight uppercase italic">
              Class schedule
            </h2>
          </div>
          <p className="text-xs text-white/50">
            Book any class from your phone — 24/7.
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {DAYS.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDay(d)}
              aria-pressed={day === d}
              className={`rounded-sm px-4 py-2 text-xs font-bold tracking-widest uppercase transition-colors ${
                day === d
                  ? "bg-red-600 text-white"
                  : "bg-white/5 text-white/60 hover:bg-white/10"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <ul className="mt-5 divide-y divide-white/10 border-y border-white/10">
          {SCHEDULE[day].map((cls) => (
            <li
              key={cls.time + cls.name}
              className="flex flex-wrap items-center justify-between gap-3 py-4"
            >
              <div className="flex items-center gap-5">
                <span className="w-20 text-sm font-black text-red-500">{cls.time}</span>
                <div>
                  <p className="text-sm font-bold uppercase">{cls.name}</p>
                  <p className="text-xs text-white/50">{cls.coach}</p>
                </div>
              </div>
              <button
                type="button"
                className="rounded-sm border border-red-600/60 px-4 py-1.5 text-[0.65rem] font-bold tracking-widest text-red-400 uppercase transition-colors hover:bg-red-600 hover:text-white"
              >
                Book spot
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Membership */}
      <section className="px-6 pb-14 sm:px-10">
        <h2 className="text-3xl font-black tracking-tight uppercase italic">
          Membership
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-md border p-6 ${
                plan.hot
                  ? "border-red-600 bg-red-600/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {plan.hot && (
                <p className="mb-2 text-[0.6rem] font-black tracking-[0.25em] text-red-500 uppercase">
                  Best value
                </p>
              )}
              <p className="text-xs font-bold tracking-widest text-white/60 uppercase">
                {plan.name}
              </p>
              <p className="mt-2 text-3xl font-black">{plan.price}</p>
              <ul className="mt-4 space-y-2 text-xs text-white/70">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2">
                    <Check className="size-3.5 text-red-500" strokeWidth={3} />
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 bg-zinc-900 px-6 py-6 text-xs text-white/50 sm:px-10">
        <p className="flex items-center gap-2">
          <MapPin className="size-3.5 text-red-500" /> 21 Link Road, Andheri West
        </p>
        <p className="flex items-center gap-2">
          <Phone className="size-3.5 text-red-500" /> +91 98200 11223
        </p>
        <p className="font-bold tracking-widest uppercase">
          FitPro © 2026
        </p>
      </footer>
    </div>
  );
}
