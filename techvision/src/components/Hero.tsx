import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, CalendarCheck, Star } from "lucide-react";
import { CountUp, EASE_LUXE } from "../lib/motion";

const STATS = [
  { value: 500, suffix: "+", label: "Businesses online" },
  { value: 4.9, suffix: "/5", decimals: 1, label: "Client rating" },
  { value: 8, suffix: "+", label: "Years of craft" },
  { value: 3, suffix: "-day", label: "Fastest delivery" },
];

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: EASE_LUXE },
});

/** Friendly flat illustration of a little local shop coming online. */
function Storefront() {
  return (
    <svg
      viewBox="0 0 520 430"
      role="img"
      aria-label="Illustration of a friendly local shop"
      className="w-full max-w-lg"
    >
      {/* warm backdrop blob + sun */}
      <ellipse cx="265" cy="250" rx="240" ry="175" fill="var(--color-ink-800)" />
      <circle cx="452" cy="72" r="26" fill="var(--color-gold-400)" opacity="0.9" />
      <g stroke="var(--color-gold-400)" strokeWidth="4" strokeLinecap="round" opacity="0.7">
        <path d="M452 30v-12M452 126v-12M494 72h12M398 72h12M482 42l8-8M414 110l8-8M482 102l8 8M414 34l8 8" />
      </g>

      {/* ground */}
      <ellipse cx="262" cy="398" rx="215" ry="14" fill="var(--color-ink-950)" opacity="0.55" />

      {/* building */}
      <rect x="96" y="150" width="330" height="240" rx="10" fill="var(--color-ivory-100)" />
      <rect x="96" y="150" width="330" height="26" rx="10" fill="var(--color-ivory-200)" />

      {/* awning */}
      <g>
        <rect x="78" y="118" width="366" height="34" rx="8" fill="var(--color-gold-500)" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <g key={i}>
            <rect
              x={82 + i * 60}
              y="146"
              width="56"
              height="22"
              fill={i % 2 === 0 ? "var(--color-gold-500)" : "var(--color-ivory-100)"}
            />
            <circle
              cx={110 + i * 60}
              cy="168"
              r="28"
              fill={i % 2 === 0 ? "var(--color-gold-500)" : "var(--color-ivory-100)"}
            />
          </g>
        ))}
      </g>

      {/* sign */}
      <rect x="196" y="76" width="130" height="40" rx="20" fill="var(--color-ink-950)" />
      <circle cx="218" cy="96" r="7" fill="var(--color-gold-400)" />
      <rect x="234" y="90" width="74" height="5" rx="2.5" fill="var(--color-ivory-100)" />
      <rect x="234" y="101" width="48" height="5" rx="2.5" fill="var(--color-ivory-100)" opacity="0.55" />

      {/* window */}
      <rect x="128" y="210" width="150" height="120" rx="10" fill="var(--color-ink-900)" />
      <rect x="128" y="210" width="150" height="120" rx="10" fill="none" stroke="var(--color-ivory-300)" strokeWidth="6" />
      {/* steaming cup in window */}
      <rect x="176" y="282" width="52" height="34" rx="8" fill="var(--color-ivory-100)" />
      <path d="M228 290h10a10 10 0 0 1 0 20h-10" fill="none" stroke="var(--color-ivory-100)" strokeWidth="7" />
      <g stroke="var(--color-gold-400)" strokeWidth="5" strokeLinecap="round" fill="none">
        <path d="M188 268c0-8 6-8 6-16" />
        <path d="M204 268c0-8 6-8 6-16" />
      </g>

      {/* door */}
      <rect x="310" y="228" width="82" height="162" rx="8" fill="var(--color-gold-500)" />
      <rect x="322" y="242" width="58" height="58" rx="6" fill="var(--color-ivory-100)" opacity="0.85" />
      <circle cx="378" cy="322" r="6" fill="var(--color-ink-950)" />
      {/* OPEN tag on door */}
      <rect x="326" y="248" width="50" height="20" rx="6" fill="var(--color-ink-950)" transform="rotate(-4 351 258)" />
      <rect x="334" y="256" width="34" height="4" rx="2" fill="var(--color-gold-300)" transform="rotate(-4 351 258)" />

      {/* plants */}
      <g>
        <path d="M76 352c0-18 10-30 22-36-2 14-8 24-8 36Z" fill="var(--color-gold-500)" />
        <path d="M108 352c0-18-10-30-22-36 2 14 8 24 8 36Z" fill="var(--color-gold-600)" />
        <rect x="70" y="352" width="46" height="38" rx="6" fill="var(--color-ink-800)" />
      </g>
      <g>
        <path d="M416 356c0-16 8-26 18-31-1 12-6 21-6 31Z" fill="var(--color-gold-500)" />
        <path d="M444 356c0-16-8-26-18-31 1 12 6 21 6 31Z" fill="var(--color-gold-600)" />
        <rect x="410" y="356" width="42" height="34" rx="6" fill="var(--color-ink-800)" />
      </g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink-950">
      <div className="absolute inset-0 -z-10 grid-lines" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 glow-gold" aria-hidden="true" />

      <div className="mx-auto flex min-h-svh max-w-7xl flex-col justify-center px-5 pt-32 pb-16 sm:px-8 sm:pt-36">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <motion.p {...rise(0.35)} className="eyebrow text-gold-400">
              TechVision Solutions · Web Design Studio, India
            </motion.p>

            <motion.h1
              {...rise(0.5)}
              className="mt-6 font-display text-[2.75rem] leading-[1.04] font-light tracking-tight text-balance text-ivory-50 sm:text-6xl"
            >
              Websites that turn visitors into{" "}
              <em className="font-normal text-gold-300 italic">
                loyal customers.
              </em>
            </motion.h1>

            <motion.p
              {...rise(0.65)}
              className="mt-7 max-w-xl text-base leading-relaxed text-ivory-50/65 sm:text-lg"
            >
              Whether you run a café, a gym, a clinic, or the corner boutique —
              we give your business a warm, welcoming home online that quietly
              brings in more customers.
            </motion.p>

            <motion.div {...rise(0.8)} className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-medium text-ink-950 transition-all duration-300 hover:bg-gold-300"
              >
                Book a free call
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-medium text-ivory-50 hairline transition-colors duration-300 hover:border-ivory-50/30 hover:bg-ivory-50/5"
              >
                See our work
              </a>
            </motion.div>

            <motion.p
              {...rise(0.9)}
              className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-ivory-50/45"
            >
              <span>✓ Free 15-min consultation</span>
              <span>✓ Hindi or English</span>
              <span>✓ No obligation</span>
            </motion.p>
          </div>

          {/* Illustration with floating "live" cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.6, ease: EASE_LUXE }}
            className="relative mx-auto hidden w-full max-w-lg sm:block"
          >
            <Storefront />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute top-16 -left-2 flex items-center gap-3 rounded-2xl bg-ivory-50 px-4 py-3 shadow-xl shadow-ink-950/40"
            >
              <span className="grid size-9 place-items-center rounded-full bg-gold-200 text-gold-600">
                <CalendarCheck className="size-4.5" strokeWidth={2} />
              </span>
              <span>
                <span className="block text-xs font-semibold text-ink-900">
                  New booking!
                </span>
                <span className="block text-[0.7rem] text-ink-900/55">
                  Priya · 2 min ago
                </span>
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 9, 0] }}
              transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut", delay: 0.8 }}
              className="absolute right-0 bottom-24 flex items-center gap-3 rounded-2xl bg-ivory-50 px-4 py-3 shadow-xl shadow-ink-950/40"
            >
              <span className="grid size-9 place-items-center rounded-full bg-gold-200 text-gold-600">
                <Star className="size-4.5 fill-gold-500 text-gold-500" />
              </span>
              <span>
                <span className="block text-xs font-semibold text-ink-900">
                  ★★★★★ 5.0
                </span>
                <span className="block text-[0.7rem] text-ink-900/55">
                  "Best chai in town!"
                </span>
              </span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          {...rise(1)}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-ivory-50/10 hairline sm:mt-24 lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-ink-950/80 px-6 py-6 backdrop-blur sm:py-7">
              <p className="font-display text-3xl font-light text-ivory-50 sm:text-4xl">
                <CountUp
                  to={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                />
              </p>
              <p className="mt-1.5 text-xs tracking-wide text-ivory-50/50 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#services"
        aria-label="Scroll to services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-ivory-50/40 transition-colors hover:text-gold-300 md:block"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown className="size-5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
