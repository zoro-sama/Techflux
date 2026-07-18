const INDUSTRIES = [
  "Gyms & Fitness",
  "Clinics & Healthcare",
  "Tuition Centres",
  "Restaurants & Cafés",
  "Salons & Studios",
  "Boutiques & Retail",
  "Real Estate",
  "Professional Services",
];

export default function Marquee() {
  const row = [...INDUSTRIES, ...INDUSTRIES];
  return (
    <section
      aria-label="Industries we serve"
      className="overflow-hidden border-y border-ivory-50/10 bg-ink-950 py-5"
    >
      <div className="flex w-max animate-marquee items-center motion-reduce:animate-none">
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="text-sm font-medium tracking-[0.14em] whitespace-nowrap text-ivory-50/45 uppercase">
              {item}
            </span>
            <span
              className="mx-8 inline-block size-1.5 rotate-45 bg-gold-500/70"
              aria-hidden="true"
            />
          </span>
        ))}
      </div>
    </section>
  );
}
