import Link from "next/link";

export const metadata = {
  title: "How It Works — SourceGermany",
  description: "A simple three-step process to get any German product shipped to your door.",
};

const GOLD = "#C9A84C";

const steps = [
  {
    n: "01",
    title: "Find Your Item",
    detail: [
      "Browse any German online shop — Otto, Zalando, Saturn, MediaMarkt, specialist retailers, or even small boutiques.",
      "Copy the product link and send it to us via our contact form or WhatsApp. Not sure where to find it? Describe the product and we'll source it for you.",
      "We'll confirm availability, check the current price, and send you a full itemised quote within 24 hours.",
    ],
  },
  {
    n: "02",
    title: "We Purchase & Prepare",
    detail: [
      "Once you approve the quote and submit payment, we purchase the item using our German account.",
      "We inspect the item on arrival — verifying condition, authenticity, and completeness before anything leaves Germany.",
      "We repack your item in a professional DHL Packset with air-column protection. Luxury-grade, every time.",
      "We handle all German export documentation, customs paperwork, and DHL shipping label.",
    ],
  },
  {
    n: "03",
    title: "You Receive It",
    detail: [
      "We ship via DHL Express. You'll receive a tracking number and can monitor your parcel every step of the way.",
      "For DDP orders — the most popular option — all customs duties and taxes are pre-paid. Your parcel clears customs without any courier charges at delivery.",
      "For DAP orders, you will pay your country's customs authority directly when the parcel arrives.",
      "Typical delivery: 5–8 business days to Singapore, 6–10 to Australia.",
    ],
  },
];

const faqs = [
  {
    q: "What happens if the item is out of stock?",
    a: "We notify you immediately and either source it from an alternative German retailer at the same or better price, or issue a full refund.",
  },
  {
    q: "Can I return an item?",
    a: "Yes — unlike most competitors, we accept returns. We handle the German return process on your behalf for a flat handling fee. Refunds are processed after the retailer confirms receipt.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept international bank transfers and credit/debit cards via Stripe. All payments are in Euros at the locked quote rate.",
  },
  {
    q: "Do you buy from any German shop?",
    a: "Almost. We can buy from any shop that ships to a German address and accepts standard payment methods. Some limited-edition or store-only items may require additional time.",
  },
  {
    q: "What's the maximum order value you handle?",
    a: "We regularly process orders up to €5,000 per item. For larger orders (e.g., Leica cameras, professional tools), please contact us directly for a tailored quote.",
  },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Header */}
      <section className="py-20 px-6 bg-zinc-950 text-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: GOLD }}>The Process</p>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Simple. Transparent. Reliable.</h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Three steps. No confusion. No hidden fees. We've designed the process so you always know exactly what's happening with your order.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-16">
          {steps.map((s, i) => (
            <div key={s.n} className="flex gap-8">
              <div className="flex-shrink-0">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold text-sm"
                  style={{ backgroundColor: GOLD }}
                >
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px h-full mt-4 mx-auto ml-6 bg-zinc-200" />
                )}
              </div>
              <div className="pb-8">
                <p className="text-xs font-mono text-zinc-400 mb-1">{s.n}</p>
                <h2 className="text-2xl font-bold mb-5 tracking-tight">{s.title}</h2>
                <ul className="space-y-3">
                  {s.detail.map((d, j) => (
                    <li key={j} className="flex gap-3 text-zinc-600 text-sm leading-relaxed">
                      <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-zinc-400 mt-1.5" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight mb-10">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-zinc-200 pb-8">
                <h3 className="font-semibold text-zinc-900 mb-2">{f.q}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-white border-t border-zinc-100 text-center">
        <h2 className="text-2xl font-bold mb-3 tracking-tight">Ready to get started?</h2>
        <p className="text-zinc-500 mb-7">Use the estimator to see your all-in cost before you commit.</p>
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
