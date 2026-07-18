import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { EASE_LUXE, Reveal, SectionHeading } from "../lib/motion";

const FAQS = [
  {
    q: "How long does it take to build my website?",
    a: "Starter sites are delivered in 3 days, Dynamic in 7, Branding in 10, and Premium in 14. We work fast without compromising quality.",
  },
  {
    q: "Do I need technical knowledge to manage the website?",
    a: "Not at all. We build user-friendly websites and provide complete training — you'll be able to update content, images, and bookings easily.",
  },
  {
    q: "Will my website work on mobile phones?",
    a: "Absolutely. Every website is fully responsive and optimised for mobile. Over 70% of Indian users browse on mobile, so we prioritise that experience.",
  },
  {
    q: "What's included in the support?",
    a: "30 days of free support after launch — bug fixes, content updates, and technical assistance. Extended support plans are available too.",
  },
  {
    q: "Can you help with Google Maps and local SEO?",
    a: "Yes. All plans include Google My Business setup and local SEO optimisation so customers find you easily in local searches.",
  },
  {
    q: "What if I want to add features later?",
    a: "You can upgrade your plan anytime or request custom features. We'll provide a clear quote and timeline for any additional functionality.",
  },
  {
    q: "Do you provide domain and hosting?",
    a: "Yes — we can help you purchase a domain and set up reliable hosting, or work with your existing domain and hosting provider.",
  },
  {
    q: "Is there a refund policy?",
    a: "We offer a 7-day satisfaction guarantee. If you're not happy with the initial design mockup, we'll provide a full refund.",
  },
];

function FaqItem({
  item,
  open,
  onToggle,
  index,
}: {
  item: (typeof FAQS)[number];
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div className="border-b border-ink-900/10">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`faq-panel-${index}`}
          className="flex w-full items-center justify-between gap-6 py-6 text-left"
        >
          <span className="text-[0.98rem] font-medium text-ink-900 sm:text-base">
            {item.q}
          </span>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.4, ease: EASE_LUXE }}
            className={`grid size-8 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${
              open
                ? "border-gold-500 bg-gold-500 text-ink-950"
                : "border-ink-900/15 text-ink-900/60"
            }`}
          >
            <Plus className="size-4" />
          </motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-panel-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE_LUXE }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-14 text-[0.95rem] leading-relaxed text-ink-900/60">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-ivory-100 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[2fr_3fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="Questions"
            title={
              <>
                Answers, before{" "}
                <em className="font-normal text-gold-600 italic">you ask.</em>
              </>
            }
            lead="Everything most clients want to know before starting a project. Anything else — just reach out."
          />
        </div>

        <Reveal delay={0.1}>
          <div className="border-t border-ink-900/10">
            {FAQS.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                index={i}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
