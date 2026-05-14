import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

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
      "Browse any German manufacturer or specialist shop — Mittelstand brands, direct factory stores, niche producers, and the kind of category-defining suppliers that don't export internationally.",
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
      <section className="py-24 px-6 bg-zinc-950 text-white">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>
            The Process
          </p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6">
            Simple.<br />Transparent.<br />Reliable.
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            Three steps. No confusion. No hidden fees. We've designed the process so you always
            know exactly what's happening with your order.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="border-t border-zinc-200">
            {steps.map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 80} className="border-b border-zinc-200">
                <div className="py-14 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                  {/* Step number + title */}
                  <div className="md:col-span-4">
                    <span
                      className="font-mono font-black text-5xl leading-none block mb-4"
                      style={{ color: GOLD, opacity: 0.3 }}
                    >
                      {s.n}
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight">{s.title}</h2>
                  </div>
                  {/* Details */}
                  <div className="md:col-span-8">
                    <ul className="space-y-4">
                      {s.detail.map((d, j) => (
                        <li key={j} className="flex gap-4 text-zinc-500 leading-relaxed">
                          <span
                            className="flex-shrink-0 mt-2 w-1 h-1 rounded-full"
                            style={{ backgroundColor: GOLD }}
                          />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-zinc-950 text-white">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.3em] mb-3" style={{ color: GOLD }}>
              Common Questions
            </p>
            <h2 className="text-4xl font-bold tracking-tight">FAQ</h2>
          </ScrollReveal>
          <div className="border-t border-zinc-800">
            {faqs.map((f, i) => (
              <ScrollReveal key={f.q} delay={i * 60} className="border-b border-zinc-800">
                <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-5">
                    <p className="font-semibold text-white">{f.q}</p>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-zinc-400 leading-relaxed text-sm">{f.a}</p>
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
              READY TO<br />GET STARTED?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={120} className="flex flex-col gap-5 md:items-end">
            <p className="text-black/65 text-lg max-w-sm md:text-right">
              Use the estimator to see your all-in cost before you commit.
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
