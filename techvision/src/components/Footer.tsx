import type { SVGProps } from "react";

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5V11H8.5v3H11v7h2.5Z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.5 8.8H3.9V20h2.6V8.8ZM5.2 7.6a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1ZM20 13.6c0-3-1.6-4.9-4.1-4.9-1.4 0-2.3.7-2.8 1.5V8.8H8.6V20h2.6v-5.9c0-1.4.7-2.3 1.9-2.3s1.8.9 1.8 2.3V20H20v-6.4Z" />
    </svg>
  );
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.2 4h2.7l-5.9 6.8L21 20h-5.4l-4.3-5.6L6.4 20H3.7l6.3-7.3L3.3 4h5.6l3.8 5.1L17.2 4Zm-1 14.4h1.5L8 5.5H6.4l9.8 12.9Z" />
    </svg>
  );
}

const QUICK_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { label: "Facebook", icon: FacebookIcon, href: "#" },
  { label: "Instagram", icon: InstagramIcon, href: "#" },
  { label: "LinkedIn", icon: LinkedinIcon, href: "#" },
  { label: "Twitter", icon: TwitterIcon, href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ivory-50/10 bg-ink-950">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <a href="#top" className="flex items-baseline gap-1.5">
            <span className="font-display text-2xl font-medium tracking-tight text-ivory-50">
              TechVision
            </span>
            <span className="mb-0.5 inline-block size-1.5 rounded-full bg-gold-400" />
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory-50/50">
            Empowering Indian businesses with professional web solutions —
            crafted with care, built to convert.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow text-ivory-50/40">Quick links</p>
          <ul className="mt-5 space-y-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ivory-50/65 transition-colors duration-300 hover:text-gold-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow text-ivory-50/40">Contact</p>
          <ul className="mt-5 space-y-3 text-sm text-ivory-50/65">
            <li>
              <a
                href="tel:+919876543210"
                className="transition-colors duration-300 hover:text-gold-300"
              >
                +91 98765 43210
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@techvision.com"
                className="transition-colors duration-300 hover:text-gold-300"
              >
                contact@techvision.com
              </a>
            </li>
            <li>Mumbai, Maharashtra</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-ivory-50/40">Follow us</p>
          <ul className="mt-5 flex gap-3">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="grid size-10 place-items-center rounded-full text-ivory-50/60 hairline transition-all duration-300 hover:border-gold-400/50 hover:text-gold-300"
                >
                  <social.icon className="size-4" strokeWidth={1.75} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory-50/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-ivory-50/40 sm:flex-row sm:px-8">
          <p>© 2026 TechVision Solutions. All rights reserved.</p>
          <p>Designed & built with care in India.</p>
        </div>
      </div>
    </footer>
  );
}
