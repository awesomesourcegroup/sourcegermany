import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Why German Products — SourceGermany",
  description: "German engineering, craftsmanship, and quality standards — why the world trusts Made in Germany.",
};

const GOLD = "#C9A84C";

const qualities = [
  {
    num: "01",
    title: "Precision Engineering",
    desc: "German manufacturing standards are among the tightest in the world. DIN norms and ISO certifications are baseline requirements, not exceptions. A Festool sander or a Knipex plier is engineered to last decades, not years.",
    pull: "Built to a standard, not a deadline.",
  },
  {
    num: "02",
    title: "Material Standards",
    desc: "Germany's strict material sourcing regulations mean products are built from high-grade steel, real leather, and durable composites. What others call \"premium\", Germany calls standard.",
    pull: "If it carries a German label, the material earned it.",
  },
  {
    num: "03",
    title: "Consumer Protection",
    desc: "German consumer law is some of the strongest globally. Two-year statutory warranty on every product. Strict product liability. If something is sold in Germany, it meets the EU's highest safety standards.",
    pull: "A two-year warranty isn't a perk. It's the law.",
  },
  {
    num: "04",
    title: "The Mittelstand",
    desc: "Germany's economic backbone is its Mittelstand — thousands of family-owned, specialist manufacturers who have spent generations perfecting one product category. You won't find these brands on Amazon Global.",
    pull: "Generations spent mastering one thing.",
  },
  {
    num: "05",
    title: "Design Heritage",
    desc: "From Braun to Leica to Porsche Design, Germany gave the world functional minimalism. Design that serves the object's purpose — not just marketing.",
    pull: "Form follows function. Always has.",
  },
  {
    num: "06",
    title: "Export Prices",
    desc: "Buying direct from Germany at German retail prices means you often pay less than you would buying the same brand in Singapore, Australia, or Canada.",
    pull: "Source it where it's made.",
  },
];

const brands = [
  { cat: "Tools & Hardware", names: ["Festool", "Bosch Professional", "Knipex", "Wiha", "Metabo", "Würth"] },
  { cat: "Automotive", names: ["Bilstein", "Sachs", "Brembo DE", "Mann-Filter", "ATE", "Liqui-Moly"] },
  { cat: "Fashion & Luxury", names: ["Hugo Boss", "MCM", "Escada", "Joop!", "Bogner", "Adidas Originals"] },
  { cat: "Cameras & Optics", names: ["Leica", "Zeiss", "Rollei", "Metz", "Kaiser Fototechnik"] },
  { cat: "Smart Home & Tech", names: ["Sennheiser", "Beyerdynamic", "Miele", "Braun", "Loewe", "AVM Fritz!Box"] },
  { cat: "Health & Wellbeing", names: ["Weleda", "Dr. Hauschka", "Eucerin", "Hansaplast", "Beurer", "Omron DE"] },
];

export default function WhyGermany() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 md:py-32 px-6 bg-zinc-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/why-germany-hero.jpg"
            alt="German industrial precision engineering"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
        </div>
        <div className="relative max-w-5xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.3em] mb-6" style={{ color: GOLD }}>
            Made in Germany
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6 max-w-2xl">
            WHY GERMAN<br />PRODUCTS.
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            "Made in Germany" is the most trusted product label in the world — not because of
            marketing, but because of a century of manufacturing culture built around precision,
            accountability, and longevity.
          </p>
        </div>
      </section>

      {/* Editorial qualities */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="border-t border-zinc-100">
            {qualities.map((q, i) => (
              <ScrollReveal key={q.num} delay={i * 60} className="border-b border-zinc-100">
                <div className="py-14 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                  {/* Left: number + title + pull */}
                  <div className="md:col-span-5">
                    <span
                      className="font-mono font-black text-5xl leading-none block mb-4 select-none"
                      style={{ color: GOLD, opacity: 0.25 }}
                    >
                      {q.num}
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight mb-4">{q.title}</h2>
                    <p className="text-base font-semibold text-zinc-500 leading-snug italic">
                      &ldquo;{q.pull}&rdquo;
                    </p>
                  </div>
                  {/* Right: description */}
                  <div className="md:col-span-7 md:pt-2">
                    <p className="text-zinc-500 leading-relaxed">{q.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width image strip */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-zinc-950">
        <div className="absolute inset-0">
          <Image
            src="/images/why-germany-tools.jpg"
            alt="Precision German manufacturing"
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/60 to-transparent" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] mb-6" style={{ color: GOLD }}>
              The German Standard
            </p>
            <blockquote className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-2xl">
              Precision is not a feature.{" "}
              <span style={{ color: GOLD }}>It&apos;s the baseline.</span>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-20 px-6 bg-zinc-900 text-white">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] mb-8 text-zinc-500">
              On record
            </p>
            <blockquote className="text-3xl md:text-4xl font-bold leading-snug tracking-tight">
              &ldquo;German quality is not a marketing claim.
              <span style={{ color: GOLD }}> It&apos;s a legal obligation.&rdquo;</span>
            </blockquote>
            <p className="mt-6 text-zinc-500 text-sm font-mono">
              — EU Product Liability Directive, enforced since 1985
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Brands */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-400 mb-2">
              What we source
            </p>
            <h2 className="text-4xl font-bold tracking-tight">Brands Worth Having</h2>
            <p className="text-zinc-500 mt-3 max-w-lg">
              A selection of the brands we regularly source. Don&apos;t see yours? Just ask.
            </p>
          </ScrollReveal>
          <div className="border-t border-zinc-100">
            {brands.map((b, i) => (
              <ScrollReveal key={b.cat} delay={i * 60} className="border-b border-zinc-100">
                <div className="py-6 flex flex-col sm:flex-row sm:items-center gap-4">
                  <p className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-400 sm:w-48 flex-shrink-0">
                    {b.cat}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {b.names.map((n) => (
                      <span
                        key={n}
                        className="text-sm font-medium text-zinc-800 px-3 py-1 bg-zinc-100"
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 overflow-hidden" style={{ backgroundColor: GOLD }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <h2 className="text-5xl font-black text-black leading-none tracking-tighter">
              FIND YOUR<br />GERMAN<br />PRODUCT.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={120} className="flex flex-col gap-5 md:items-end">
            <p className="text-black/65 text-lg max-w-sm md:text-right">
              Get a full cost estimate in under a minute — no commitment required.
            </p>
            <Link
              href="/estimator"
              className="inline-flex items-center px-8 py-4 font-bold bg-black text-white hover:bg-zinc-800 transition-colors text-sm tracking-wide"
            >
              Get a Price Estimate →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
