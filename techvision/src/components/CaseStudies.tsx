import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type ReactNode,
} from "react";
import { EASE_LUXE, Reveal, SectionHeading } from "../lib/motion";
import FitProSite from "./showcase/FitProSite";
import BrightFutureSite from "./showcase/BrightFutureSite";
import CarePlusSite from "./showcase/CarePlusSite";

type Showcase = {
  id: string;
  client: string;
  city: string;
  industry: string;
  url: string;
  Site: ComponentType;
};

const SHOWCASES: Showcase[] = [
  {
    id: "fitpro",
    client: "FitPro Gym",
    city: "Mumbai",
    industry: "Fitness studio",
    url: "fitprogym.in",
    Site: FitProSite,
  },
  {
    id: "brightfuture",
    client: "Bright Future Tuitions",
    city: "Delhi",
    industry: "Tuition centre",
    url: "brightfuture.co.in",
    Site: BrightFutureSite,
  },
  {
    id: "careplus",
    client: "Care Plus Clinic",
    city: "Bangalore",
    industry: "Family clinic",
    url: "careplusclinic.in",
    Site: CarePlusSite,
  },
];

const PREVIEW_WIDTH = 1024;

/** Renders children at desktop width, scaled down to fit its container. */
function ScaledPreview({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / PREVIEW_WIDTH);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none relative aspect-[16/11] select-none overflow-hidden bg-white"
    >
      {scale > 0 && (
        <div
          className="absolute top-0 left-0 origin-top-left"
          style={{ width: PREVIEW_WIDTH, transform: `scale(${scale})` }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

/** Mac-style browser chrome bar with a fake address pill. */
function ChromeBar({
  url,
  onClose,
}: {
  url: string;
  onClose?: () => void;
}) {
  return (
    <div className="flex items-center gap-3 border-b border-ink-900/10 bg-ivory-100 px-4 py-2.5">
      <span className="flex gap-1.5" aria-hidden="true">
        <span className="size-2.5 rounded-full bg-[#f2695c]" />
        <span className="size-2.5 rounded-full bg-[#f5bd4f]" />
        <span className="size-2.5 rounded-full bg-[#62c554]" />
      </span>
      <span className="flex min-w-0 grow items-center justify-center gap-1.5 rounded-md bg-white px-3 py-1 text-[0.7rem] text-ink-900/60 ring-1 ring-ink-900/5">
        <span className="size-2.5 shrink-0 rounded-full bg-emerald-500/80" aria-hidden="true" />
        <span className="truncate">{url}</span>
      </span>
      {onClose ? (
        <button
          type="button"
          onClick={onClose}
          aria-label="Close website preview"
          className="grid size-7 shrink-0 place-items-center rounded-md text-ink-900/60 transition-colors hover:bg-ink-900/10 hover:text-ink-900"
        >
          <X className="size-4" />
        </button>
      ) : (
        <span className="w-4 shrink-0" aria-hidden="true" />
      )}
    </div>
  );
}

export default function CaseStudies() {
  const [active, setActive] = useState<Showcase | null>(null);

  // Close on Escape + lock page scroll while the window is open
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="work" className="relative isolate overflow-hidden bg-ink-950 py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 glow-gold" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          dark
          eyebrow="Selected work"
          title={
            <>
              Don't take our word —{" "}
              <em className="font-normal text-gold-300 italic">
                browse their sites.
              </em>
            </>
          }
          lead="Three real local businesses, three very different personalities. Click any preview to explore the full homepage right here."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {SHOWCASES.map((showcase, i) => (
            <Reveal key={showcase.id} delay={0.1 * i} className="h-full">
              <div className="group relative h-full">
                <div className="overflow-hidden rounded-2xl bg-white shadow-2xl shadow-ink-950/50 ring-1 ring-ivory-50/15 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-gold-500/15 group-hover:ring-gold-400/40">
                  <ChromeBar url={showcase.url} />
                  <div className="relative">
                    <ScaledPreview>
                      <showcase.Site />
                    </ScaledPreview>
                    {/* hover veil */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 grid place-items-center bg-ink-950/0 transition-colors duration-500 group-hover:bg-ink-950/45"
                    >
                      <span className="flex translate-y-2 items-center gap-2 rounded-full bg-gold-400 px-5 py-2.5 text-sm font-medium text-ink-950 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        <ExternalLink className="size-4" />
                        Browse the site
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-3 px-1">
                  <div>
                    <p className="font-display text-xl font-medium text-ivory-50">
                      {showcase.client}
                    </p>
                    <p className="mt-1 text-sm text-ivory-50/50">
                      {showcase.industry} · {showcase.city}
                    </p>
                  </div>
                  <p className="text-xs font-medium tracking-wide text-gold-300/80 uppercase transition-colors group-hover:text-gold-300">
                    View live →
                  </p>
                </div>
                {/* Full-card click target — a sibling, not a parent, of the
                    mini-site's own buttons, so the HTML stays valid. */}
                <button
                  type="button"
                  onClick={() => setActive(showcase)}
                  aria-haspopup="dialog"
                  aria-label={`Browse the ${showcase.client} website`}
                  className="absolute inset-0 z-10 cursor-pointer rounded-2xl"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* In-page browser window */}
      <AnimatePresence>
        {active && (
          <div
            className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-6 lg:p-10"
            role="dialog"
            aria-modal="true"
            aria-label={`${active.client} website preview`}
          >
            <motion.button
              type="button"
              aria-label="Close website preview"
              onClick={() => setActive(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 cursor-default bg-ink-950/85 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: EASE_LUXE }}
              className="relative flex h-[88vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              <ChromeBar url={active.url} onClose={() => setActive(null)} />
              <div className="grow overflow-y-auto overscroll-contain">
                <active.Site />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
