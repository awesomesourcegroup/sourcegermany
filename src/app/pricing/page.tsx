import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Pricing & Transparency — SourceGermany",
  description: "Understand every fee you pay — service fee, shipping, packaging, and taxes. No hidden charges.",
};

const GOLD = "#C9A84C";

const fees = [
  {
    name: "Service Fee",
    range: "€25 – €75+",
    desc: "Our fee for purchasing, inspecting, and managing your order. Scales with item value. For items over €1,200 we charge ~6.5% of item price.",
  },
  {
    name: "DHL International Shipping",
    range: "€40 – €120",
    desc: "Based on item weight and destination. We use DHL Express for reliable tracking and fast delivery. Exact rate calculated at quote time.",
  },
  {
    name: "Insurance",
    range: "1–1.5% of item value",
    desc: "All shipments are insured against loss or damage in transit. Rate depends on item category and declared value. Mandatory for items over €200.",
  },
  {
    name: "Premium Packaging",
    range: "€4.50 flat",
    desc: "Every order ships in a new DHL Packset with air-column protection. Non-negotiable — we don't use old Amazon boxes.",
  },
  {
    name: "Destination Taxes (DDP mode only)",
    range: "Varies by country",
    desc: "Singapore: 9% GST. Australia: 10% GST + 5% import duty. Canada: ~13% HST. USA: federal de minimis $800 (0–3%); note that US state sales tax varies by state and may apply separately. Japan: 10% JCT (Japan Consumption Tax).",
  },
  {
    name: "Payment Processing",
    range: "~1.5% of total",
    desc: "International card and bank transfer fees. Included in your quote — not added at checkout.",
  },
];

export default function PricingPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-24 px-6 bg-zinc-950 text-white">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>
            Full Transparency
          </p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6">
            PRICING<br />&amp; FEES.
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            We believe you should know exactly what you&apos;re paying and why. Here&apos;s every fee, explained plainly.
          </p>
        </div>
      </section>

      {/* Fee breakdown — numbered rows */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Every Fee Explained</h2>
          </ScrollReveal>
          <div className="border-t border-zinc-200">
            {fees.map((f, i) => (
              <ScrollReveal key={f.name} delay={i * 60} className="border-b border-zinc-200">
                <div className="py-8 grid grid-cols-12 gap-6 items-start">
                  <div className="col-span-1 pt-1">
                    <span
                      className="font-mono text-2xl font-black leading-none"
                      style={{ color: GOLD, opacity: 0.3 }}
                    >
                      0{i + 1}
                    </span>
                  </div>
                  <div className="col-span-8 md:col-span-9">
                    <h3 className="font-semibold text-zinc-900 mb-1.5">{f.name}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
                  </div>
                  <div className="col-span-3 md:col-span-2 text-right">
                    <span
                      className="inline-block font-mono font-semibold text-xs px-2.5 py-1.5 bg-zinc-100 text-zinc-800"
                    >
                      {f.range}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* DDP vs DAP */}
      <section className="py-20 px-6 bg-zinc-950 text-white">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.3em] mb-3" style={{ color: GOLD }}>
              Shipping modes
            </p>
            <h2 className="text-4xl font-bold tracking-tight">DDP vs DAP</h2>
            <p className="text-zinc-400 mt-2">Which is right for you?</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* DDP */}
            <ScrollReveal>
              <div className="p-8 border-2 h-full" style={{ borderColor: GOLD, backgroundColor: "rgba(201,168,76,0.06)" }}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-white text-lg">DDP</h3>
                </div>
                <p className="font-mono text-xs text-zinc-400 mb-6">Delivered Duty Paid</p>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-3 text-zinc-300">
                    <span className="font-bold flex-shrink-0" style={{ color: GOLD }}>✓</span>
                    All customs duties pre-paid
                  </li>
                  <li className="flex gap-3 text-zinc-300">
                    <span className="font-bold flex-shrink-0" style={{ color: GOLD }}>✓</span>
                    Zero charges at delivery
                  </li>
                  <li className="flex gap-3 text-zinc-300">
                    <span className="font-bold flex-shrink-0" style={{ color: GOLD }}>✓</span>
                    No interaction with customs
                  </li>
                  <li className="flex gap-3 text-zinc-500">
                    <span className="flex-shrink-0">—</span>
                    Higher upfront cost
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* DAP */}
            <ScrollReveal delay={100}>
              <div className="p-8 border border-zinc-800 h-full">
                <h3 className="font-bold text-white text-lg mb-2">DAP</h3>
                <p className="font-mono text-xs text-zinc-500 mb-6">Delivered At Place</p>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-3 text-zinc-300">
                    <span className="text-zinc-400 font-bold flex-shrink-0">✓</span>
                    Lower price from us
                  </li>
                  <li className="flex gap-3 text-zinc-500">
                    <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                    You pay customs to courier at delivery
                  </li>
                  <li className="flex gap-3 text-zinc-500">
                    <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                    Can be held at customs
                  </li>
                  <li className="flex gap-3 text-zinc-500">
                    <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                    Unpredictable total cost
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 overflow-hidden" style={{ backgroundColor: GOLD }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <h2 className="text-5xl font-black text-black leading-none tracking-tighter">
              SEE YOUR<br />SPECIFIC<br />COST.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={120} className="flex flex-col gap-5 md:items-end">
            <p className="text-black/65 text-lg max-w-sm md:text-right">
              Enter your item and we&apos;ll calculate the all-in total — service, shipping, taxes, everything.
            </p>
            <Link
              href="/estimator"
              className="inline-flex items-center px-8 py-4 font-bold bg-black text-white hover:bg-zinc-800 transition-colors text-sm tracking-wide"
            >
              Open the Cost Estimator →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
