import { useState } from "react";
import {
  ArrowRight,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  Timer,
} from "lucide-react";
import { Reveal } from "../lib/motion";

const CHANNELS = [
  {
    icon: MessageCircle,
    label: "WhatsApp us",
    value: "+91 98765 43210",
    note: "Online now · replies in minutes",
    // Demo-only placeholder — set the real wa.me link before launch
    href: "#contact",
    live: true,
  },
  {
    icon: Phone,
    label: "Call us",
    value: "+91 98765 43210",
    note: "9 AM – 9 PM, all days",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "contact@techvision.com",
    note: "Replies within a few hours",
    href: "mailto:contact@techvision.com",
  },
];

/* July 2026 — the 1st falls on a Wednesday (Mon-first grid → 2 leading blanks). */
const WEEKDAYS = ["M", "T", "W", "T", "F", "S", "S"];
const LEADING_BLANKS = 2;
const DAYS_IN_MONTH = 31;
const TODAY = 18;
const SUNDAYS = [5, 12, 19, 26];

const SLOTS = ["10:00 AM", "11:30 AM", "1:00 PM", "4:30 PM", "6:00 PM", "8:00 PM"];

function dayStatus(day: number): "past" | "off" | "open" {
  if (day < TODAY) return "past";
  if (SUNDAYS.includes(day)) return "off";
  return "open";
}

/** Visual booking calendar — availability at a glance, zero form-filling. */
function BookingCard() {
  const [selectedDay, setSelectedDay] = useState(21);
  const [selectedSlot, setSelectedSlot] = useState("11:30 AM");

  return (
    <div className="rounded-3xl bg-ivory-50 p-6 shadow-2xl shadow-ink-950/40 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-xl bg-gold-200/80 text-gold-600">
          <CalendarCheck className="size-5" strokeWidth={1.75} />
        </span>
        <div>
          <p className="text-base font-semibold text-ink-900">
            Pick a time for your free call
          </p>
          <p className="text-xs text-ink-900/50">
            15 minutes · Hindi or English · no obligation
          </p>
        </div>
      </div>

      {/* Month header */}
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm font-semibold text-ink-900">July 2026</p>
        <div className="flex gap-1">
          <button
            type="button"
            aria-label="Previous month"
            className="grid size-8 place-items-center rounded-lg text-ink-900/40 transition-colors hover:bg-ink-900/5 hover:text-ink-900"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next month"
            className="grid size-8 place-items-center rounded-lg text-ink-900/40 transition-colors hover:bg-ink-900/5 hover:text-ink-900"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      {/* Calendar grid */}
      <div className="mt-3 grid grid-cols-7 gap-1 text-center">
        {WEEKDAYS.map((wd, i) => (
          <span
            key={wd + i}
            className="py-1 text-[0.65rem] font-semibold tracking-wide text-ink-900/40 uppercase"
          >
            {wd}
          </span>
        ))}
        {Array.from({ length: LEADING_BLANKS }).map((_, i) => (
          <span key={`blank-${i}`} />
        ))}
        {Array.from({ length: DAYS_IN_MONTH }, (_, i) => i + 1).map((day) => {
          const status = dayStatus(day);
          const selected = day === selectedDay;
          return (
            <button
              key={day}
              type="button"
              disabled={status !== "open"}
              onClick={() => setSelectedDay(day)}
              aria-pressed={selected}
              aria-label={`${day} July${status !== "open" ? " — unavailable" : ""}`}
              className={`relative mx-auto grid size-9 place-items-center rounded-full text-sm transition-colors ${
                selected
                  ? "bg-gold-500 font-semibold text-white"
                  : status === "open"
                    ? "font-medium text-ink-900 hover:bg-gold-200/70"
                    : "text-ink-900/25"
              }`}
            >
              {day}
              {status === "open" && !selected && (
                <span
                  className="absolute bottom-1 size-1 rounded-full bg-gold-500"
                  aria-hidden="true"
                />
              )}
              {day === TODAY && !selected && (
                <span
                  className="absolute inset-0 rounded-full border border-gold-500/50"
                  aria-hidden="true"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Time slots */}
      <p className="mt-5 text-xs font-semibold tracking-wide text-ink-900/50 uppercase">
        Available on {selectedDay} July
      </p>
      <div className="mt-2 grid grid-cols-3 gap-2">
        {SLOTS.map((slot) => (
          <button
            key={slot}
            type="button"
            onClick={() => setSelectedSlot(slot)}
            aria-pressed={selectedSlot === slot}
            className={`rounded-xl border py-2 text-sm font-medium transition-colors ${
              selectedSlot === slot
                ? "border-gold-500 bg-gold-500 text-white"
                : "border-ink-900/10 text-ink-900/70 hover:border-gold-400"
            }`}
          >
            {slot}
          </button>
        ))}
      </div>

      {/* Demo-only: wire this to the real WhatsApp number / booking flow before launch */}
      <button
        type="button"
        className="group mt-6 flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-ink-950 py-4 text-sm font-semibold text-ivory-50 transition-colors duration-300 hover:bg-ink-800"
      >
        Book my free call — {selectedDay} July, {selectedSlot}
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
      <p className="mt-3 flex items-center justify-center gap-4 text-[0.7rem] text-ink-900/45">
        <span className="flex items-center gap-1">
          <Timer className="size-3" /> Takes 60 seconds
        </span>
        <span className="flex items-center gap-1">
          <ShieldCheck className="size-3" /> No payment needed
        </span>
        <span>Reschedule anytime</span>
      </p>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-ink-950 py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 glow-gold" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 grid-lines" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow text-gold-400">Let's talk</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-4xl leading-[1.06] font-light tracking-tight text-balance text-ivory-50 sm:text-5xl lg:text-6xl">
              Your free call.{" "}
              <em className="font-normal text-gold-300 italic">
                No pressure, ever.
              </em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ivory-50/60 sm:text-lg">
              Tell us about your shop, café, or clinic — we'll show you exactly
              what your website could look like and what it would cost. If it's
              not for you, no hard feelings.
            </p>
          </Reveal>

          <div className="mt-10 space-y-3">
            {CHANNELS.map((channel, i) => (
              <Reveal key={channel.label} delay={0.2 + 0.07 * i}>
                <a
                  href={channel.href}
                  className="group flex items-center gap-4 rounded-2xl bg-ink-900/70 px-5 py-4 hairline backdrop-blur transition-colors duration-300 hover:border-gold-400/40"
                >
                  <span className="relative grid size-11 shrink-0 place-items-center rounded-full bg-gold-200/15 text-gold-300">
                    <channel.icon className="size-5" strokeWidth={1.75} />
                    {channel.live && (
                      <span className="absolute top-0 right-0 size-2.5 rounded-full bg-emerald-400 ring-2 ring-ink-950" aria-hidden="true" />
                    )}
                  </span>
                  <span className="min-w-0 grow">
                    <span className="block text-sm font-semibold text-ivory-50">
                      {channel.label}
                      <span className="ml-2 font-normal text-ivory-50/60">
                        {channel.value}
                      </span>
                    </span>
                    <span className="block text-xs text-ivory-50/45">
                      {channel.note}
                    </span>
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-ivory-50/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold-300" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.25}>
          <BookingCard />
        </Reveal>
      </div>
    </section>
  );
}
