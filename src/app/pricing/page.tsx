import Link from "next/link";

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
    range: "1% of item value",
    desc: "All shipments are insured against loss or damage in transit. Mandatory for items over €200.",
  },
  {
    name: "Premium Packaging",
    range: "€4.50 flat",
    desc: "Every order ships in a new DHL Packset with air-column protection. Non-negotiable — we don't use old Amazon boxes.",
  },
  {
    name: "Destination Taxes (DDP mode only)",
    range: "Varies by country",
    desc: "Singapore: 9% GST. Australia: 10% GST + 5% import duty. Canada: ~13% HST. USA: 0–3% (most items under $800 are duty-free).",
  },
  {
    name: "Payment Processing",
    range: "~1.5% of total",
    desc: "International card and bank transfer fees. Included in your quote — not added at checkout.",
  },
];

const vatExplained = [
  { label: "You buy a €1,190 item in Germany", note: "Price includes 19% German VAT" },
  { label: "We export it — Germany refunds us 19% VAT", note: "€190 back to us on export" },
  { label: "We pass this saving to you in the quote", note: "Your price is lower than you'd pay domestically" },
];

export default function PricingPage() {
  return (
    <div>
      <section className="py-20 px-6 bg-zinc-950 text-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: GOLD }}>Full Transparency</p>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Pricing & Fees</h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            We believe you should know exactly what you're paying and why. Here's every fee, explained plainly.
          </p>
        </div>
      </section>

      {/* Fee breakdown */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 tracking-tight">Every Fee Explained</h2>
          <div className="space-y-0 divide-y divide-zinc-100">
            {fees.map((f) => (
              <div key={f.name} className="py-7 flex flex-col sm:flex-row sm:justify-between gap-3">
                <div className="sm:w-2/3">
                  <h3 className="font-semibold text-zinc-900 mb-1">{f.name}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
                </div>
                <div className="sm:text-right flex-shrink-0">
                  <span className="inline-block font-semibold text-sm px-3 py-1.5 rounded bg-zinc-100 text-zinc-800">
                    {f.range}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VAT advantage */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 tracking-tight">The German VAT Advantage</h2>
          <p className="text-zinc-500 mb-10 text-sm leading-relaxed">
            Germany charges 19% VAT on all retail purchases. When goods are exported, Germany refunds that VAT to the exporter. This is a legitimate structural saving — not a discount — and it's why buying through us can be cheaper than buying the same item in your home country.
          </p>
          <div className="space-y-4">
            {vatExplained.map((v, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-black"
                  style={{ backgroundColor: GOLD }}
                >
                  {i + 1}
                </div>
                <div>
                  <p className="font-medium text-zinc-900 text-sm">{v.label}</p>
                  <p className="text-xs text-zinc-500 mt-0.5">{v.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DDP vs DAP */}
      <section className="py-20 px-6 bg-white border-t border-zinc-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 tracking-tight">DDP vs DAP — Which Is Right for You?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div className="border-2 rounded-lg p-6" style={{ borderColor: GOLD, backgroundColor: "#FBF4E3" }}>
              <h3 className="font-bold text-zinc-900 mb-1">DDP — Recommended</h3>
              <p className="text-xs text-zinc-500 mb-4">Delivered Duty Paid</p>
              <ul className="space-y-2 text-sm text-zinc-700">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> All customs duties pre-paid</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Zero charges at delivery</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> No interaction with customs</li>
                <li className="flex gap-2"><span className="text-zinc-400">—</span> Higher upfront cost</li>
              </ul>
            </div>
            <div className="border border-zinc-200 rounded-lg p-6">
              <h3 className="font-bold text-zinc-900 mb-1">DAP</h3>
              <p className="text-xs text-zinc-500 mb-4">Delivered At Place</p>
              <ul className="space-y-2 text-sm text-zinc-700">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Lower price from us</li>
                <li className="flex gap-2"><span className="text-red-500 font-bold">✗</span> You pay customs to courier at delivery</li>
                <li className="flex gap-2"><span className="text-red-500 font-bold">✗</span> Can be held at customs</li>
                <li className="flex gap-2"><span className="text-red-500 font-bold">✗</span> Unpredictable total cost</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-6 text-center border-t border-zinc-100">
        <p className="text-zinc-500 mb-5">Want to see your specific cost?</p>
        <Link
          href="/estimator"
          className="inline-flex px-8 py-3.5 rounded font-semibold text-black"
          style={{ backgroundColor: GOLD }}
        >
          Open the Cost Estimator
        </Link>
      </section>
    </div>
  );
}
