import { Reveal, SectionHeading } from "../lib/motion";

const STEPS = [
  {
    number: "01",
    title: "Discovery",
    body: "We sit down with you to understand your business, your goals, and exactly who your customers are.",
  },
  {
    number: "02",
    title: "Design",
    body: "Stunning mockups aligned with your brand identity — refined with you until every detail feels right.",
  },
  {
    number: "03",
    title: "Build",
    body: "A fully functional, fast, search-optimised website engineered to modern standards.",
  },
  {
    number: "04",
    title: "Launch",
    body: "We go live together, train your team, and stay close with ongoing support after launch.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative isolate overflow-hidden bg-ink-950 py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 grid-lines" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          dark
          eyebrow="How it works"
          title={
            <>
              A calm, considered process —{" "}
              <em className="font-normal text-gold-300 italic">start to launch.</em>
            </>
          }
          lead="Four clear stages. You always know where your project stands and what happens next."
        />

        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((step, i) => (
            <li key={step.number} className="relative">
              <Reveal delay={0.1 * i} className="h-full">
                <div className="h-full border-t border-ivory-50/15 pt-8">
                  <span
                    className="font-display text-6xl leading-none font-light text-gold-400/25"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-medium text-ivory-50">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ivory-50/55">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
