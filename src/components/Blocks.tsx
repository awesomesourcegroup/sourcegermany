import Link from "next/link";
import type { ReactNode } from "react";
import ScrollReveal from "@/components/ScrollReveal";

/** Small pill label shown above section headings. */
export function Eyebrow({ children, tone = "brand" }: { children: ReactNode; tone?: "brand" | "coral" | "light" }) {
  const cls =
    tone === "coral"
      ? "bg-coral-soft text-coral"
      : tone === "light"
        ? "bg-white/10 text-white"
        : "bg-brand-soft text-brand";
  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${cls}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}

/** Standard page header used by every inner page. */
export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="px-4 sm:px-6 pt-14 pb-16 md:pt-20 md:pb-20">
      <div className="max-w-5xl mx-auto">
        <div className="hero-in">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h1
          className="hero-in mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] max-w-3xl"
          style={{ animationDelay: "0.08s" }}
        >
          {title}
        </h1>
        <p
          className="hero-in mt-6 text-lg text-ink/65 leading-relaxed max-w-2xl"
          style={{ animationDelay: "0.16s" }}
        >
          {intro}
        </p>
        {children && (
          <div className="hero-in mt-8" style={{ animationDelay: "0.24s" }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

export function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-coral text-white font-semibold text-sm hover:bg-ink transition-colors"
    >
      {children}
    </Link>
  );
}

export function SecondaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-ink font-semibold text-sm border border-ink/10 hover:border-ink/40 transition-colors"
    >
      {children}
    </Link>
  );
}

/** Closing call-to-action band used at the bottom of pages. */
export function CtaBand({
  title,
  text,
  primary = { href: "/contact", label: "Send us the link" },
  secondary,
}: {
  title: ReactNode;
  text: ReactNode;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="px-3 sm:px-4 py-16">
      <ScrollReveal className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand text-white px-6 sm:px-12 py-14 md:py-20">
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-sun/25" />
          <div className="absolute right-24 -bottom-20 w-48 h-48 rounded-full bg-coral/30" />
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8 items-end">
            <div className="md:col-span-3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05]">{title}</h2>
              <p className="mt-4 text-white/75 text-lg leading-relaxed max-w-lg">{text}</p>
            </div>
            <div className="md:col-span-2 flex flex-wrap gap-3 md:justify-end">
              <Link
                href={primary.href}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-ink font-semibold text-sm hover:bg-sun transition-colors"
              >
                {primary.label} <span aria-hidden>→</span>
              </Link>
              {secondary && (
                <Link
                  href={secondary.href}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
                >
                  {secondary.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

/** The two DHL shipping options, shown on home, how-it-works and pricing. */
export const shippingOptions = [
  {
    name: "DHL Express",
    tag: "Fastest",
    speed: "Usually 2 to 6 business days",
    points: [
      "Door-to-door express with live tracking",
      "Duties can be prepaid (DDP) for most countries, so nothing is due at your door",
      "Best for valuable, urgent or fragile items",
    ],
  },
  {
    name: "DHL Paket International",
    tag: "Cheapest",
    speed: "Usually 1 to 4 weeks, depending on country",
    points: [
      "Tracked standard parcel at a much lower price",
      "Import duties, if any, are paid by you on arrival",
      "Best for bigger, heavier or less urgent orders",
    ],
  },
];

export function ShippingCards({ dark = false }: { dark?: boolean }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {shippingOptions.map((o, i) => {
        const highlight = i === 0;
        return (
          <ScrollReveal key={o.name} delay={i * 100}>
            <div
              className={`h-full rounded-3xl p-7 md:p-8 border ${
                dark
                  ? highlight
                    ? "bg-white text-ink border-white"
                    : "bg-white/5 text-white border-white/15"
                  : highlight
                    ? "bg-white border-ink/10 shadow-[0_8px_30px_rgba(23,25,28,0.06)]"
                    : "bg-paper-deep/60 border-ink/10"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-2xl font-bold tracking-tight">{o.name}</h3>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    highlight ? "bg-coral text-white" : "bg-sun text-ink"
                  }`}
                >
                  {o.tag}
                </span>
              </div>
              <p className={`mt-2 text-sm font-medium ${dark && !highlight ? "text-white/70" : "text-ink/60"}`}>
                {o.speed}
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {o.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`w-4 h-4 mt-0.5 flex-shrink-0 ${highlight ? "text-coral" : dark ? "text-sun" : "text-brand"}`}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className={dark && !highlight ? "text-white/85" : "text-ink/80"}>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
