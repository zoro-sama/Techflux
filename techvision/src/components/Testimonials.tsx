import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { CountUp, EASE_LUXE, Reveal, SectionHeading } from "../lib/motion";

const QUOTES = [
  {
    quote:
      "Parents can now register online and check their child's progress. Our enrollment doubled in just three months.",
    name: "Priya Sharma",
    role: "Bright Future Tuitions, Delhi",
  },
  {
    quote:
      "Members book classes at midnight, at lunch, whenever suits them. The website paid for itself within the first month.",
    name: "Rahul Mehta",
    role: "FitPro Gym, Mumbai",
  },
  {
    quote:
      "Our front desk finally breathes. Appointments arrive organised, reminders go out automatically, and patients notice the difference.",
    name: "Dr. Anita Rao",
    role: "Care Plus Clinic, Bangalore",
  },
];

const BAND = [
  { value: 500, suffix: "+", label: "Happy clients" },
  { value: 4.9, suffix: "", decimals: 1, label: "Average rating" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % QUOTES.length),
      6500,
    );
    return () => clearInterval(timer);
  }, []);

  const active = QUOTES[index];

  return (
    <section className="bg-ivory-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Client voices"
          title={
            <>
              Trusted by businesses{" "}
              <em className="font-normal text-gold-600 italic">across India.</em>
            </>
          }
        />

        <div className="mx-auto mt-14 max-w-3xl text-center">
          <Reveal>
            <div
              className="flex items-center justify-center gap-1"
              role="img"
              aria-label="Rated 5 out of 5 stars"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-gold-500 text-gold-500" />
              ))}
            </div>
          </Reveal>

          <div className="relative mt-8 min-h-56 sm:min-h-44" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.6, ease: EASE_LUXE }}
              >
                <p className="font-display text-2xl leading-snug font-light text-balance text-ink-900 sm:text-3xl">
                  “{active.quote}”
                </p>
                <footer className="mt-7 flex flex-col items-center">
                  <span
                    className="grid size-11 place-items-center rounded-full bg-gold-200 font-display text-base font-medium text-gold-600"
                    aria-hidden="true"
                  >
                    {active.name
                      .split(" ")
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <p className="mt-3 text-sm font-semibold text-ink-900">
                    {active.name}
                  </p>
                  <p className="mt-1 text-sm text-ink-900/50">{active.role}</p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex justify-center gap-2.5">
            {QUOTES.map((q, i) => (
              <button
                key={q.name}
                type="button"
                aria-label={`Show testimonial from ${q.name}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index
                    ? "w-8 bg-gold-500"
                    : "w-2.5 bg-ink-900/15 hover:bg-ink-900/30"
                }`}
              />
            ))}
          </div>
        </div>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-2xl bg-ink-900/10 hairline-dark sm:grid-cols-3">
            {BAND.map((stat) => (
              <div key={stat.label} className="bg-ivory-100 px-8 py-8 text-center">
                <p className="font-display text-4xl font-light text-ink-900">
                  <CountUp
                    to={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals ?? 0}
                  />
                </p>
                <p className="mt-2 text-[0.7rem] font-medium tracking-[0.22em] text-ink-900/50 uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
