import Link from "next/link";

const GOLD = "#C9A84C";

const pillars = [
  {
    icon: "🔧",
    title: "Tools & Hardware",
    desc: "Festool, Bosch Professional, Knipex — German precision tools built to last a lifetime.",
  },
  {
    icon: "🚗",
    title: "Automotive",
    desc: "OEM parts, accessories, and performance upgrades direct from German suppliers.",
  },
  {
    icon: "👜",
    title: "Fashion & Luxury",
    desc: "Hugo Boss, Adidas originals, MCM, and boutique German labels — authenticated, at retail.",
  },
  {
    icon: "📷",
    title: "Cameras & Optics",
    desc: "Leica, Zeiss, and Rollei — specialist sourcing for collectors and professionals.",
  },
];

const trustPoints = [
  {
    icon: "✓",
    title: "DDP Shipping — Zero Surprises",
    desc: "All customs duties and taxes are paid before your parcel leaves Germany. What you see is what you pay.",
  },
  {
    icon: "↩",
    title: "Returns Accepted",
    desc: "Changed your mind? We handle the German return process on your behalf — something our competitors don't offer.",
  },
  {
    icon: "📦",
    title: "Luxury-Grade Packaging",
    desc: "Every order ships in a double-walled DHL Packset with air-column protection. Your €1,000 purchase deserves it.",
  },
  {
    icon: "🇩🇪",
    title: "German-Based Buyer",
    desc: "We are physically in Germany. We speak the language, navigate the shops, and verify authenticity before shipping.",
  },
];

const steps = [
  {
    n: "01",
    title: "You Find It",
    desc: "Send us a link to any German online shop or describe what you want. We'll confirm availability and give you a full price quote.",
  },
  {
    n: "02",
    title: "We Buy It",
    desc: "We purchase the item using our German account, inspect it, pack it securely, and handle all export documentation.",
  },
  {
    n: "03",
    title: "You Receive It",
    desc: "Your parcel arrives duties-paid at your door. Track it every step of the way. No unexpected bills.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-zinc-950 text-white py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.25em] mb-5" style={{ color: GOLD }}>
            Germany → Worldwide
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
            Your Direct Line<br />to Germany
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            We buy any product from Germany and ship it to your door — customs paid,
            premium packaging, no hidden fees. Ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/estimator"
              className="px-8 py-3.5 rounded font-semibold text-black transition-colors"
              style={{ backgroundColor: GOLD }}
            >
              Get a Price Estimate
            </Link>
            <Link
              href="/how-it-works"
              className="px-8 py-3.5 rounded font-semibold text-white border border-zinc-600 hover:border-zinc-400 transition-colors"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-zinc-900 text-white border-y border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm">
          {[
            ["5–8 days", "to Singapore"],
            ["6–10 days", "to Australia"],
            ["19% VAT", "refunded on export"],
            ["DDP", "duties always included"],
          ].map(([val, label]) => (
            <div key={val}>
              <p className="text-xl font-bold" style={{ color: GOLD }}>{val}</p>
              <p className="text-zinc-400 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Pillars */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2 text-center">Specialisations</p>
          <h2 className="text-3xl font-bold text-center mb-3 tracking-tight">Our Expertise Pillars</h2>
          <p className="text-zinc-500 text-center mb-14 max-w-xl mx-auto">
            We don't ship everything — we ship it right. Depth over breadth, every time.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="border border-zinc-200 rounded-lg p-6 hover:border-zinc-400 transition-colors group"
              >
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-semibold text-zinc-900 mb-2 text-sm uppercase tracking-wide">{p.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2 text-center">Why SourceGermany</p>
          <h2 className="text-3xl font-bold text-center mb-14 tracking-tight">Built Different</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {trustPoints.map((t) => (
              <div key={t.title} className="flex gap-4">
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-black"
                  style={{ backgroundColor: GOLD }}
                >
                  {t.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1">{t.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works (mini) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2 text-center">The Process</p>
          <h2 className="text-3xl font-bold text-center mb-14 tracking-tight">Simple. Transparent. Reliable.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((s) => (
              <div key={s.n} className="text-center">
                <p className="text-6xl font-bold mb-4" style={{ color: GOLD, opacity: 0.3 }}>{s.n}</p>
                <h3 className="font-semibold text-zinc-900 mb-2 text-lg">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/how-it-works" className="text-sm font-medium underline underline-offset-4 text-zinc-600 hover:text-black">
              Read the full process →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 px-6" style={{ backgroundColor: GOLD }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-4 tracking-tight">Ready to order from Germany?</h2>
          <p className="text-black/70 mb-8 text-lg">
            Use our free cost estimator to see exactly what you'll pay — before you commit.
          </p>
          <Link
            href="/estimator"
            className="inline-flex items-center px-8 py-3.5 rounded font-semibold bg-black text-white hover:bg-zinc-800 transition-colors"
          >
            Calculate My Shipping Cost
          </Link>
        </div>
      </section>

    </div>
  );
}
