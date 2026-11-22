import ScrollReveal from "@/components/ScrollReveal";
import { CtaBand, Eyebrow, PageHeader, PrimaryButton } from "@/components/Blocks";

export const metadata = {
  title: "Buy second-hand from eBay.de and Kleinanzeigen | SourceGermany",
  description:
    "We buy used items for you from eBay.de and Kleinanzeigen: talk to the seller in German, collect, inspect with photos and ship to any country.",
};

const marketplaces = [
  {
    name: "Kleinanzeigen",
    what: "Germany's biggest classifieds site. Private sellers, great prices, but often pickup only and German only.",
    we: [
      "Message the seller in German and negotiate if the price is “VB” (negotiable)",
      "Collect in person or arrange domestic shipping to us",
      "Use the platform's secure payment with buyer protection where the seller offers it",
    ],
  },
  {
    name: "eBay.de",
    what: "Auctions and fixed-price listings from private and business sellers. Many only ship within Germany.",
    we: [
      "Buy or bid from our German account",
      "Pay through eBay so the purchase is covered by eBay's buyer protection",
      "Receive the parcel at our German address",
    ],
  },
];

const checks = [
  "Matches the listing photos and description",
  "Powers on and works (where we can test it)",
  "Visible damage, wear and missing parts",
  "Serial numbers and accessories you asked about",
  "Signs of a fake on branded items",
  "Packed again properly before it ships",
];

const faqs = [
  {
    q: "What if the item is not as described?",
    a: "That's exactly why it comes to us first. If we find a problem we tell you before it ships. Where we paid through eBay or a protected payment method we raise a claim with the seller. Private sales without protection usually have no returns, so we always ask the seller detailed questions before buying.",
  },
  {
    q: "The listing says “Nur Abholung” (pickup only). Can you still get it?",
    a: "Usually yes. We either collect it ourselves or ask the seller to send it to us within Germany. If pickup involves travel, we include that in your quote upfront.",
  },
  {
    q: "Can you bid on eBay auctions for me?",
    a: "Yes. Tell us your maximum price and we bid up to it. You only pay if we win.",
  },
  {
    q: "Can I combine several items into one parcel?",
    a: "Yes, and it often saves a lot on shipping. We hold items until everything has arrived, then pack them together.",
  },
  {
    q: "Is there anything you can't buy?",
    a: "We don't buy items that are illegal to export from Germany or import into your country, such as weapons, certain batteries shipped loose, or restricted medicines. If in doubt, ask us first.",
  },
];

export default function SecondHandPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Our main service"
        title={<>Second-hand from Germany, <span className="text-brand">without the hassle.</span></>}
        intro="Germany has a huge used market full of well-kept cameras, car parts, tools, Hi-Fi and more. Most of it never leaves the country because sellers won't deal with foreign buyers. We are your German buyer on the ground."
      >
        <PrimaryButton href="/contact">Send us a listing <span aria-hidden>→</span></PrimaryButton>
      </PageHeader>

      {/* Marketplaces */}
      <section className="px-4 sm:px-6 pb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {marketplaces.map((m, i) => (
            <ScrollReveal key={m.name} delay={i * 100}>
              <div className="h-full rounded-3xl bg-white border border-ink/5 p-7 md:p-9">
                <h2 className="text-3xl font-extrabold tracking-tight">{m.name}</h2>
                <p className="mt-3 text-ink/65 leading-relaxed">{m.what}</p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-coral">What we do</p>
                <ul className="mt-3 space-y-3">
                  {m.we.map((w) => (
                    <li key={w} className="flex gap-3 text-ink/80 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <p className="max-w-5xl mx-auto mt-4 text-xs text-ink/45">
          We also buy from other German second-hand sites and private sellers. Just send the link.
        </p>
      </section>

      {/* Inspection */}
      <section className="px-3 sm:px-4">
        <div className="max-w-6xl mx-auto rounded-[2rem] bg-brand text-white px-6 sm:px-12 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <ScrollReveal>
            <Eyebrow tone="light">Checked before it ships</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05]">
              You see the real item, not just the listing.
            </h2>
            <p className="mt-5 text-white/75 text-lg leading-relaxed">
              Every second-hand item arrives with us first. We send you photos and a short video, and nothing
              ships until you say so.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <ul className="grid grid-cols-1 gap-3">
              {checks.map((c) => (
                <li key={c} className="flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-sun flex-shrink-0">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {c}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 sm:px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight">Buying used, answered.</h2>
          </ScrollReveal>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <ScrollReveal key={f.q} delay={i * 50}>
                <details className="group rounded-3xl bg-white border border-ink/5 px-6 py-5 open:pb-6">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-display font-bold text-lg">
                    {f.q}
                    <span className="w-8 h-8 rounded-full bg-paper grid place-items-center text-ink/60 group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                  </summary>
                  <p className="mt-3 text-ink/70 leading-relaxed">{f.a}</p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Seen something you want?"
        text="Send the link, tell us what matters to you about the item, and we'll take it from there."
        secondary={{ href: "/pricing", label: "Fees & shipping" }}
      />
    </div>
  );
}
