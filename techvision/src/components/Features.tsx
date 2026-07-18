import {
  Zap,
  Wallet,
  Smartphone,
  MapPin,
  Target,
  LifeBuoy,
} from "lucide-react";
import { Reveal, SectionHeading } from "../lib/motion";

const FEATURES = [
  {
    icon: Zap,
    title: "Fast delivery",
    body: "Your website live in 3 to 14 days depending on the plan — no lengthy delays, no missed deadlines.",
  },
  {
    icon: Wallet,
    title: "Honest pricing",
    body: "Enterprise-quality craft at prices Indian businesses can actually afford, with nothing hidden.",
  },
  {
    icon: Smartphone,
    title: "Mobile first",
    body: "Over 70% of your customers browse on a phone. Every layout is tuned for a flawless mobile experience.",
  },
  {
    icon: MapPin,
    title: "Found locally",
    body: "Google My Business and local SEO baked in, so nearby customers discover you the moment they search.",
  },
  {
    icon: Target,
    title: "Built to convert",
    body: "Strategic structure and calls-to-action designed to turn casual visitors into paying customers.",
  },
  {
    icon: LifeBuoy,
    title: "Real support",
    body: "30 days of free support with hands-on training, plus ongoing assistance whenever you need it.",
  },
];

export default function Features() {
  return (
    <section id="services" className="bg-ivory-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why TechVision"
          title={
            <>
              Everything a serious business{" "}
              <em className="font-normal text-gold-600 italic">expects.</em>
            </>
          }
          lead="Six commitments we make on every single project — whether it's a three-page starter site or a full premium build."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-ink-900/10 hairline-dark sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={0.06 * i} className="h-full">
              <article className="group h-full bg-ivory-50 p-8 transition-colors duration-500 hover:bg-ivory-100 sm:p-10">
                <span className="grid size-12 place-items-center rounded-2xl bg-gold-200/70 text-gold-600 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-3">
                  <feature.icon className="size-5.5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-6 font-display text-xl font-medium text-ink-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-900/60">
                  {feature.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
