import { Check, ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "../lib/motion";

type Tier = {
  name: string;
  price: string;
  delivery: string;
  featured?: boolean;
  features: string[];
};

const TIERS: Tier[] = [
  {
    name: "Starter",
    price: "₹2,000",
    delivery: "3-day delivery",
    features: [
      "3–5 page website",
      "Mobile responsive",
      "Contact form",
      "Google Maps integration",
      "Basic SEO setup",
      "30 days support",
    ],
  },
  {
    name: "Dynamic",
    price: "₹10,000",
    delivery: "7-day delivery",
    featured: true,
    features: [
      "Everything in Starter",
      "Booking / appointment system",
      "Customer testimonials",
      "Image gallery",
      "WhatsApp integration",
      "Social media links",
      "Email notifications",
    ],
  },
  {
    name: "Branding",
    price: "₹15,000",
    delivery: "10-day delivery",
    features: [
      "Everything in Dynamic",
      "Blog / news section",
      "Advanced SEO",
      "Content writing (5 pages)",
      "Newsletter integration",
      "Analytics dashboard",
    ],
  },
  {
    name: "Premium",
    price: "₹30,000",
    delivery: "14-day delivery",
    features: [
      "Everything in Branding",
      "Live chat support",
      "Customer dashboard",
      "Payment gateway",
      "Multi-language support",
      "Advanced security",
      "90 days premium support",
    ],
  },
];

function TierCard({ tier, index }: { tier: Tier; index: number }) {
  const featured = tier.featured;
  return (
    <Reveal delay={0.08 * index} className="h-full">
      <article
        className={`relative flex h-full flex-col rounded-2xl p-8 transition-transform duration-500 hover:-translate-y-1.5 ${
          featured
            ? "bg-ink-950 text-ivory-50 shadow-2xl shadow-ink-900/30"
            : "bg-ivory-50 text-ink-900 hairline-dark"
        }`}
      >
        {featured && (
          <span className="absolute -top-3.5 left-8 rounded-full bg-gold-400 px-3.5 py-1 text-[0.65rem] font-semibold tracking-[0.18em] text-ink-950 uppercase">
            Most popular
          </span>
        )}
        <h3
          className={`eyebrow ${featured ? "text-gold-300" : "text-gold-600"}`}
        >
          {tier.name}
        </h3>
        <p className="mt-5 flex items-baseline gap-2">
          <span className="font-display text-5xl font-light tracking-tight">
            {tier.price}
          </span>
        </p>
        <p
          className={`mt-2 text-xs tracking-wide uppercase ${
            featured ? "text-ivory-50/50" : "text-ink-900/50"
          }`}
        >
          {tier.delivery}
        </p>

        <ul
          className={`mt-8 space-y-3.5 border-t pt-8 text-[0.9rem] ${
            featured
              ? "border-ivory-50/12 text-ivory-50/80"
              : "border-ink-900/10 text-ink-900/75"
          }`}
        >
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <Check
                className={`mt-0.5 size-4 shrink-0 ${
                  featured ? "text-gold-300" : "text-gold-600"
                }`}
                strokeWidth={2.5}
              />
              {feature}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={`group mt-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 pt-3 text-sm font-medium transition-all duration-300 ${
            featured
              ? "mt-10 bg-gold-400 text-ink-950 hover:bg-gold-300"
              : "mt-10 border border-ink-900/15 text-ink-900 hover:border-ink-900 hover:bg-ink-950 hover:text-ivory-50"
          }`}
        >
          Get started
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </article>
    </Reveal>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-ivory-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Transparent plans,{" "}
              <em className="font-normal text-gold-600 italic">no surprises.</em>
            </>
          }
          lead="Every plan includes design, development, and launch — pick the level of sophistication your business needs today."
        />

        <div className="mt-16 grid items-stretch gap-6 pt-2 md:grid-cols-2 xl:grid-cols-4">
          {TIERS.map((tier, i) => (
            <TierCard key={tier.name} tier={tier} index={i} />
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-sm text-ink-900/50">
            7-day satisfaction guarantee on every plan — full refund if the
            initial mockup isn't right for you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
