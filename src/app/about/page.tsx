import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "About Us — SourceGermany",
  description: "The story behind SourceGermany — who we are and why we built this service.",
};

const GOLD = "#C9A84C";

const IconVerified = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);

const values = [
  { title: "Transparency First", desc: "No hidden fees. No vague \"surcharges\". Every cost is shown before you commit." },
  { title: "Reliable", desc: "We'd rather serve fewer customers exceptionally well than rush volume at the cost of quality." },
  { title: "Quality as Standard", desc: "We are German-based because quality is embedded in the culture here. We hold ourselves to the same standards as the products we ship." },
  { title: "Customer Advantage", desc: "We find ways to make every order as affordable as possible — VAT refunds, optimal packaging, honest quotes." },
];

const story = [
  "SourceGermany was founded by two people who lived on both sides of the equation — a buyer abroad who struggled to access genuine German products, and a resident of Germany who understood how the system works from the inside.",
  "The frustration was always the same: German quality is globally renowned, but actually buying it from outside Europe involves a maze of shipping restrictions, customs uncertainty, and predatory third-party resellers marking up prices by 30–50%.",
  "We built SourceGermany to fix that. We are physically based in Germany, we speak the language, we have established accounts with German retailers, and we understand the export process end-to-end. What took a customer weeks of confusion, we handle in 24 hours.",
  "Our specialty isn't just shipping — it's sourcing. We know which Leica models are in stock at Foto Koch in Cologne, which Festool sets include the German market exclusive accessories, and which Hugo Boss pieces are Germany-only.",
];

const trustBadges = [
  { label: "Registered Business — Germany", detail: "Legally registered in the Federal Republic of Germany" },
  { label: "VAT Registered", detail: "Umsatzsteuer-ID: DE [number on request]" },
  { label: "DHL Registered Shipper", detail: "Commercial DHL Express account — tracked, insured shipments" },
  { label: "German-Based Buyers", detail: "We physically purchase from German retailers — no dropshipping" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-24 px-6 bg-zinc-950 text-white">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>
            Who We Are
          </p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6">
            ABOUT<br />SOURCEGERMANY.
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            We&apos;re a small, Germany-based concierge sourcing service built on a simple belief:
            international buyers shouldn&apos;t be locked out of the world&apos;s best products by
            geography or complicated import rules.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <ScrollReveal className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-400 mb-3">Our Story</p>
            <h2 className="text-3xl font-bold tracking-tight">How it started.</h2>
          </ScrollReveal>
          <div className="md:col-span-8 space-y-5">
            {story.map((p, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <p className="text-zinc-500 leading-relaxed">{p}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-400 mb-3">Verified Business</p>
            <h2 className="text-2xl font-bold tracking-tight">Why You Can Trust Us.</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trustBadges.map((b, i) => (
              <ScrollReveal key={b.label} delay={i * 60}>
                <div className="flex items-start gap-4 border border-zinc-200 p-5">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: GOLD, color: "black" }}
                  >
                    <IconVerified />
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900 text-sm mb-0.5">{b.label}</p>
                    <p className="text-xs text-zinc-500">{b.detail}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values — dark numbered rows */}
      <section className="py-20 px-6 bg-zinc-950 text-white">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.3em] mb-3" style={{ color: GOLD }}>
              What We Stand For
            </p>
            <h2 className="text-4xl font-bold tracking-tight">Our Values.</h2>
          </ScrollReveal>
          <div className="border-t border-zinc-800">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 80} className="border-b border-zinc-800">
                <div className="py-8 grid grid-cols-12 items-start gap-4 md:gap-6 group hover:bg-white/[0.02] transition-colors -mx-4 px-4">
                  <div className="col-span-2 md:col-span-1">
                    <span
                      className="font-mono text-2xl md:text-3xl font-black"
                      style={{ color: GOLD, opacity: 0.35 }}
                    >
                      0{i + 1}
                    </span>
                  </div>
                  <div className="col-span-10 md:col-span-11">
                    <h3 className="font-semibold text-white text-lg mb-1.5 group-hover:text-[#C9A84C] transition-colors">
                      {v.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{v.desc}</p>
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
              WANT TO<br />WORK WITH<br />US?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={120} className="flex flex-col gap-5 md:items-end">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 font-bold bg-black text-white hover:bg-zinc-800 transition-colors text-sm tracking-wide"
            >
              Get in Touch →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
