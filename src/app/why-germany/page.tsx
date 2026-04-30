import Link from "next/link";
import Image from "next/image";

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
      <section className="relative py-36 px-6 bg-zinc-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/why-germany-hero.jpg"
            alt="German industrial precision engineering"
            fill
            sizes="100vw"
            className="object-cover opacity-25"
            priority
          />
        </div>
        <div className="relative max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: GOLD }}>Made in Germany</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
            Why German<br />Products
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            "Made in Germany" is the most trusted product label in the world — not because of marketing, but because of a century of manufacturing culture built around precision, accountability, and longevity.
          </p>
        </div>
      </section>

      {/* Editorial qualities — no panels */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {qualities.map((q, i) => (
            <div
              key={q.num}
              className={`py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start ${
                i < qualities.length - 1 ? "border-b border-zinc-100" : ""
              }`}
            >
              {/* Left: number + title + pull quote */}
              <div>
                <span
                  className="text-7xl font-bold leading-none block mb-4 select-none"
                  style={{ color: GOLD, opacity: 0.2 }}
                >
                  {q.num}
                </span>
                <h2 className="text-2xl font-bold tracking-tight mb-4">{q.title}</h2>
                <p className="text-base font-semibold text-zinc-800 leading-snug italic">
                  "{q.pull}"
                </p>
              </div>
              {/* Right: description */}
              <div className="md:pt-2">
                <p className="text-zinc-500 leading-relaxed">{q.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full-width image strip */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src="/images/why-germany-tools.jpg"
          alt="Precision German manufacturing"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-zinc-950/60 flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] mb-4" style={{ color: GOLD }}>
              The German Standard
            </p>
            <p className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Precision is not a feature.<br />
              <span style={{ color: GOLD }}>It's the baseline.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-20 px-6 bg-zinc-950 text-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-8 text-zinc-500">On record</p>
          <blockquote className="text-3xl md:text-4xl font-bold leading-snug tracking-tight">
            "German quality is not a marketing claim.
            <span style={{ color: GOLD }}> It's a legal obligation."</span>
          </blockquote>
          <p className="mt-6 text-zinc-500 text-sm">— EU Product Liability Directive, enforced since 1985</p>
        </div>
      </section>

      {/* Brands */}
      <section className="py-20 px-6 bg-white border-t border-zinc-100">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">What we source</p>
            <h2 className="text-3xl font-bold tracking-tight">Brands Worth Having</h2>
            <p className="text-zinc-500 mt-3 text-sm max-w-lg">
              A selection of the brands we regularly source. Don't see yours? Just ask.
            </p>
          </div>
          <div className="space-y-0 divide-y divide-zinc-100">
            {brands.map((b) => (
              <div key={b.cat} className="py-6 flex flex-col sm:flex-row sm:items-center gap-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 sm:w-44 flex-shrink-0">
                  {b.cat}
                </p>
                <div className="flex flex-wrap gap-2">
                  {b.names.map((n) => (
                    <span
                      key={n}
                      className="text-sm font-medium text-zinc-800 px-3 py-1 bg-zinc-100 rounded-full"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-zinc-950 text-white text-center">
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: GOLD }}>Ready?</p>
        <h2 className="text-3xl font-bold mb-3 tracking-tight">Find your German product.</h2>
        <p className="text-zinc-400 mb-8 max-w-md mx-auto">
          Get a full cost estimate in under a minute — no commitment required.
        </p>
        <Link
          href="/estimator"
          className="inline-flex px-8 py-3.5 rounded font-semibold text-black"
          style={{ backgroundColor: GOLD }}
        >
          Get a Price Estimate
        </Link>
      </section>
    </div>
  );
}
