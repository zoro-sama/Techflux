import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

export const EASE_LUXE = [0.22, 1, 0.36, 1] as const;

/** Fade-and-rise reveal, triggered once when scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-72px" }}
      transition={{ duration: 0.8, delay, ease: EASE_LUXE }}
    >
      {children}
    </motion.div>
  );
}

/** Animated number that counts up when it enters the viewport. */
export function CountUp({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.9,
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: EASE_LUXE,
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/** Standard section header: eyebrow label + serif display heading + optional lead. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  dark = false,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  dark?: boolean;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <p className={`eyebrow ${dark ? "text-gold-400" : "text-gold-600"}`}>
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`mt-4 font-display text-4xl leading-[1.08] font-light tracking-tight text-balance sm:text-5xl ${
            dark ? "text-ivory-50" : "text-ink-900"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.16}>
          <p
            className={`mt-5 text-base leading-relaxed sm:text-lg ${
              dark ? "text-ivory-50/60" : "text-ink-900/60"
            }`}
          >
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}
