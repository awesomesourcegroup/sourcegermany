import Link from "next/link";

export const metadata = {
  title: "About Us — SourceGermany",
  description: "The story behind SourceGermany — who we are and why we built this service.",
};

const GOLD = "#C9A84C";

const values = [
  { title: "Transparency First", desc: "No hidden fees. No vague \"surcharges\". Every cost is shown before you commit." },
  { title: "Slow and Steady", desc: "We'd rather serve fewer customers exceptionally well than rush volume at the cost of quality." },
  { title: "Quality as Standard", desc: "We are German-based because quality is embedded in the culture here. We hold ourselves to the same standards as the products we ship." },
  { title: "Customer Advantage", desc: "We find ways to make every order as affordable as possible — VAT refunds, optimal packaging, honest quotes." },
];

export default function AboutPage() {
  return (
    <div>
      <section className="py-24 px-6 bg-zinc-950 text-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: GOLD }}>Who We Are</p>
          <h1 className="text-4xl font-bold tracking-tight mb-5">About SourceGermany</h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            We're a small, Germany-based proxy shopping service built on a simple belief: international buyers shouldn't be locked out of the world's best products by geography or complicated import rules.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 tracking-tight">Our Story</h2>
          <div className="space-y-5 text-zinc-600 leading-relaxed">
            <p>
              SourceGermany was founded by someone who lived on both sides of the equation — a buyer abroad who struggled to access genuine German products, and a resident of Germany who understood how the system works from the inside.
            </p>
            <p>
              The frustration was always the same: German quality is globally renowned, but actually buying it from outside Europe involves a maze of shipping restrictions, customs uncertainty, and predatory third-party resellers marking up prices by 30–50%.
            </p>
            <p>
              We built SourceGermany to fix that. We are physically based in Germany, we speak the language, we have established accounts with German retailers, and we understand the export process end-to-end. What took a customer weeks of confusion, we handle in 24 hours.
            </p>
            <p>
              Our specialty isn't just shipping — it's sourcing. We know which Leica models are in stock at Foto Koch in Cologne, which Festool sets include the German market exclusive accessories, and which Hugo Boss pieces are Germany-only.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 tracking-tight">What We Stand For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-zinc-200 rounded-lg p-6">
                <div className="w-1 h-8 rounded mb-4" style={{ backgroundColor: GOLD }} />
                <h3 className="font-semibold text-zinc-900 mb-2">{v.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise note */}
      <section className="py-16 px-6 bg-white border-t border-zinc-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-4 tracking-tight">Specialist Knowledge: Cameras & Optics</h2>
          <p className="text-zinc-500 text-sm leading-relaxed">
            One member of our team is a dedicated Leica specialist with deep knowledge of the German camera and optics market. We can advise on models, authenticate serial numbers, and source limited-edition or discontinued pieces that require direct contact with dealers. If you're looking for a Leica M-system body, a Zeiss Otus lens, or a Rollei film camera — talk to us before you buy anywhere else.
          </p>
        </div>
      </section>

      <section className="py-14 px-6 text-center border-t border-zinc-100">
        <h2 className="text-2xl font-bold mb-3 tracking-tight">Want to work with us?</h2>
        <p className="text-zinc-500 mb-7">Reach out via our contact page — we typically respond within 12 hours.</p>
        <Link href="/contact" className="inline-flex px-8 py-3.5 rounded font-semibold text-black" style={{ backgroundColor: GOLD }}>
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
