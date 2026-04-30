import Link from "next/link";

export const metadata = {
  title: "Why German Products — SourceGermany",
  description: "German engineering, craftsmanship, and quality standards — why the world trusts Made in Germany.",
};

const GOLD = "#C9A84C";

const qualities = [
  {
    icon: "⚙️",
    title: "Precision Engineering",
    desc: "German manufacturing standards are among the tightest in the world. DIN norms and ISO certifications are baseline requirements, not exceptions. A Festool sander or a Knipex plier is engineered to last decades, not years.",
  },
  {
    icon: "🔬",
    title: "Material Standards",
    desc: "Germany's strict material sourcing regulations mean products are built from high-grade steel, real leather, and durable composites. What others call \"premium\", Germany calls standard.",
  },
  {
    icon: "📋",
    title: "Consumer Protection",
    desc: "German consumer law is some of the strongest globally. Two-year statutory warranty on every product. Strict product liability. If something is sold in Germany, it meets the EU's highest safety standards.",
  },
  {
    icon: "🏭",
    title: "The Mittelstand",
    desc: "Germany's economic backbone is its Mittelstand — thousands of family-owned, specialist manufacturers who have spent generations perfecting one product category. You won't find these brands on Amazon Global.",
  },
  {
    icon: "🎨",
    title: "Design Heritage",
    desc: "From Braun to Leica to Porsche Design, Germany gave the world functional minimalism. Design that serves the object's purpose — not just marketing.",
  },
  {
    icon: "🌍",
    title: "Export Prices",
    desc: "Buying direct from Germany at German retail prices — with the 19% VAT refunded on export — means you often pay less than you would buying the same brand in Singapore, Australia, or Canada.",
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
      <section className="py-24 px-6 bg-zinc-950 text-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: GOLD }}>Made in Germany</p>
          <h1 className="text-4xl font-bold tracking-tight mb-5">Why German Products</h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            "Made in Germany" is the most trusted product label in the world — not because of marketing, but because of a century of manufacturing culture built around precision, accountability, and longevity.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualities.map((q) => (
              <div key={q.title} className="border border-zinc-100 rounded-lg p-6 hover:border-zinc-300 transition-colors">
                <div className="text-3xl mb-4">{q.icon}</div>
                <h3 className="font-semibold text-zinc-900 mb-2">{q.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-16 px-6" style={{ backgroundColor: GOLD }}>
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl font-bold text-black leading-snug tracking-tight">
            "German quality is not a marketing claim. It's a legal obligation."
          </blockquote>
          <p className="mt-4 text-black/60 text-sm">— EU Product Liability Directive, enforced since 1985</p>
        </div>
      </section>

      {/* Brand categories */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-3 tracking-tight">Brands Worth Sourcing</h2>
          <p className="text-zinc-500 mb-10 text-sm">
            A small selection of the brands we regularly source. Don't see yours? Just ask.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((b) => (
              <div key={b.cat} className="bg-white border border-zinc-200 rounded-lg p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">{b.cat}</p>
                <div className="flex flex-wrap gap-2">
                  {b.names.map((n) => (
                    <span key={n} className="text-xs px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700 font-medium">
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 text-center border-t border-zinc-100">
        <h2 className="text-2xl font-bold mb-3 tracking-tight">Ready to order from Germany?</h2>
        <p className="text-zinc-500 mb-7">Get your free cost estimate in under a minute.</p>
        <Link href="/estimator" className="inline-flex px-8 py-3.5 rounded font-semibold text-black" style={{ backgroundColor: GOLD }}>
          Get a Price Estimate
        </Link>
      </section>
    </div>
  );
}
