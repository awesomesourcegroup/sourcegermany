import Link from "next/link";
import type { ReactNode } from "react";
import ScrollReveal from "@/components/ScrollReveal";

/** Small plain label shown above section headings. */
export function Eyebrow({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  return (
    <p className={`text-sm font-medium ${tone === "light" ? "text-white/60" : "text-brand"}`}>{children}</p>
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
    <section className="px-5 sm:px-6 pt-16 pb-14 md:pt-24 md:pb-20 border-b border-ink/10">
      <div className="max-w-6xl mx-auto">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1] max-w-3xl">{title}</h1>
        <p className="mt-5 text-lg text-ink/65 leading-relaxed max-w-2xl">{intro}</p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

export function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center px-5 py-3 rounded-md bg-ink text-white font-medium text-sm hover:bg-brand transition-colors"
    >
      {children}
    </Link>
  );
}

export function SecondaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center px-5 py-3 rounded-md text-ink font-medium text-sm border border-ink/20 hover:border-ink/50 transition-colors"
    >
      {children}
    </Link>
  );
}

/** Section heading block. */
export function SectionHeading({ eyebrow, title, intro }: { eyebrow?: string; title: ReactNode; intro?: ReactNode }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight leading-tight">{title}</h2>
      {intro && <p className="mt-4 text-ink/65 text-lg leading-relaxed">{intro}</p>}
    </div>
  );
}

/** Closing call-to-action at the bottom of pages. */
export function CtaBand({
  title,
  text,
  primary = { href: "/contact", label: "Get a quote" },
  secondary,
}: {
  title: ReactNode;
  text: ReactNode;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="px-5 sm:px-6 py-20 md:py-24 border-t border-ink/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">{title}</h2>
          <p className="mt-4 text-ink/65 text-lg leading-relaxed">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <PrimaryButton href={primary.href}>{primary.label}</PrimaryButton>
          {secondary && <SecondaryButton href={secondary.href}>{secondary.label}</SecondaryButton>}
        </div>
      </div>
    </section>
  );
}

/** Question and answer list with dividers. */
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="border-t border-ink/10">
      {items.map((f) => (
        <details key={f.q} className="group border-b border-ink/10 py-5">
          <summary className="cursor-pointer list-none flex items-start justify-between gap-6 font-medium text-lg">
            {f.q}
            <span className="text-ink/40 text-xl leading-none group-open:rotate-45 transition-transform">+</span>
          </summary>
          <p className="mt-3 text-ink/65 leading-relaxed max-w-3xl">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/** The two DHL shipping options. Edit them here, they are shown on several pages. */
export const shippingOptions = [
  {
    name: "DHL Express",
    speed: "Usually 2 to 6 business days",
    duties: "Can be prepaid for most countries, nothing to pay on delivery",
    best: "Valuable, urgent or fragile items",
  },
  {
    name: "DHL Paket International",
    speed: "Usually 1 to 4 weeks, depending on the country",
    duties: "Paid by you on arrival, if your country charges any",
    best: "Larger, heavier or less urgent orders, at a much lower price",
  },
];

export function ShippingTable() {
  const rows: { label: string; key: "speed" | "duties" | "best" }[] = [
    { label: "Delivery time", key: "speed" },
    { label: "Import duties", key: "duties" },
    { label: "Good for", key: "best" },
  ];
  return (
    <ScrollReveal>
      {/* Desktop: comparison table */}
      <table className="hidden md:table w-full text-left border-t border-ink/10">
        <thead>
          <tr className="border-b border-ink/10">
            <th className="py-4 pr-6 w-1/5 font-normal text-sm text-ink/50" />
            {shippingOptions.map((o) => (
              <th key={o.name} className="py-4 pr-6 font-semibold text-lg">{o.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.key} className="border-b border-ink/10 align-top">
              <td className="py-4 pr-6 text-sm text-ink/50">{r.label}</td>
              {shippingOptions.map((o) => (
                <td key={o.name} className="py-4 pr-6 text-ink/80">{o[r.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile: stacked */}
      <div className="md:hidden border-t border-ink/10">
        {shippingOptions.map((o) => (
          <div key={o.name} className="py-6 border-b border-ink/10">
            <p className="font-semibold text-lg">{o.name}</p>
            <dl className="mt-3 space-y-2 text-sm">
              {rows.map((r) => (
                <div key={r.key}>
                  <dt className="text-ink/50">{r.label}</dt>
                  <dd className="text-ink/80">{o[r.key]}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
