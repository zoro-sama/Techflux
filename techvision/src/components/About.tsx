import { Reveal } from "../lib/motion";

export default function About() {
  return (
    <section id="about" className="relative isolate overflow-hidden bg-ink-950 py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 grid-lines" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow text-gold-400">About the studio</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-4xl leading-[1.08] font-light tracking-tight text-balance text-ivory-50 sm:text-5xl">
              Craft, care, and a genuine stake in{" "}
              <em className="font-normal text-gold-300 italic">
                your success.
              </em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <blockquote className="mt-10 border-l-2 border-gold-500 pl-6">
              <p className="font-display text-xl leading-relaxed font-light text-ivory-50/85 italic">
                “Every website we create is crafted with care, optimised for
                Indian users, and designed to generate real business results —
                not just look pretty.”
              </p>
              <footer className="mt-5">
                <p className="text-sm font-semibold text-ivory-50">Akash Rao</p>
                <p className="mt-1 text-sm text-ivory-50/50">
                  Founder, TechVision Solutions
                </p>
              </footer>
            </blockquote>
          </Reveal>
        </div>

        <div className="space-y-6 text-[0.98rem] leading-relaxed text-ivory-50/60 lg:pt-14">
          <Reveal delay={0.12}>
            <figure className="relative overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1000&q=60"
                alt="A smiling small-business owner serving a customer at the counter"
                loading="lazy"
                className="h-56 w-full object-cover sm:h-64"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/85 to-transparent px-6 pt-10 pb-4 text-xs tracking-wide text-ivory-50/80">
                The businesses we build for — local, hardworking, and loved by
                their customers.
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              Founded by Akash Rao, TechVision Solutions is on a mission to
              digitally empower Indian local businesses. With over eight years
              of experience in web development and digital transformation, we
              understand the unique challenges faced by small and medium
              businesses.
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <p>
              We've helped more than 500 businesses across India establish
              their online presence — from bustling Mumbai gyms to
              neighbourhood clinics in Bangalore. Our approach combines
              cutting-edge technology with a deep understanding of how local
              businesses actually win customers.
            </p>
          </Reveal>
          <Reveal delay={0.36}>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-ivory-50/10 hairline">
              {[
                ["8+", "Years of experience"],
                ["500+", "Businesses served"],
                ["12+", "Cities across India"],
                ["30-day", "Free support included"],
              ].map(([value, label]) => (
                <div key={label} className="bg-ink-900/70 px-6 py-6">
                  <p className="font-display text-3xl font-light text-gold-300">
                    {value}
                  </p>
                  <p className="mt-1.5 text-xs tracking-wide text-ivory-50/50 uppercase">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
