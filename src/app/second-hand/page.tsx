import ScrollReveal from "@/components/ScrollReveal";
import { CtaBand, Faq, PageHeader, PrimaryButton, SectionHeading } from "@/components/Blocks";

export const metadata = {
  title: "Buy second-hand from eBay.de and Kleinanzeigen | SourceGermany",
  description:
    "We buy used items for you from eBay.de and Kleinanzeigen: talk to the seller in German, collect, inspect with photos and ship to any country.",
};

const marketplaces = [
  {
    name: "Kleinanzeigen",
    what: "Germany's largest classifieds site. Mostly private sellers, often pickup only and in German.",
    we: [
      "Contact the seller in German and negotiate if the price is marked VB (negotiable)",
      "Collect the item in person or arrange shipping to us within Germany",
      "Pay through the platform's secure payment where the seller offers it",
    ],
  },
  {
    name: "eBay.de",
    what: "Auctions and fixed-price listings from private and business sellers. Many ship only within Germany.",
    we: [
      "Buy or bid from our German account",
      "Pay through eBay so the purchase is covered by eBay's buyer protection",
      "Receive the parcel at our address in Germany",
    ],
  },
];

const checks = [
  "Matches the photos and description in the listing",
  "Switches on and works, where we can test it",
  "Damage, wear and missing parts",
  "Serial numbers and accessories you asked about",
  "Signs of a counterfeit on branded items",
  "Packed again properly before shipping",
];

const faqs = [
  {
    q: "What if the item is not as described?",
    a: "Because the item comes to us first, we tell you before it ships. If we paid through eBay or another protected payment method, we raise a claim with the seller. Private sales without protection usually have no returns, so we ask the seller detailed questions before buying.",
  },
  {
    q: "The listing says Nur Abholung (pickup only). Can you still get it?",
    a: "Usually yes. We either collect it ourselves or ask the seller to send it to us within Germany. If collecting involves travel, the cost is in your quote.",
  },
  {
    q: "Can you bid on eBay auctions for me?",
    a: "Yes. Tell us your maximum price and we bid up to it. You only pay if we win.",
  },
  {
    q: "Can I combine several items into one parcel?",
    a: "Yes, and it often saves a lot on shipping. We hold the items until everything has arrived and pack them together.",
  },
  {
    q: "Is there anything you can't buy?",
    a: "We don't buy items that can't legally be exported from Germany or imported into your country, for example weapons or restricted medicines. Ask us if you are unsure.",
  },
];

export default function SecondHandPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Second-hand"
        title="Buying used items from Germany"
        intro="Germany has a large second-hand market with well-kept cameras, car parts, tools, Hi-Fi and more. Most of it never leaves the country because sellers don't deal with foreign buyers. We act as your buyer in Germany."
      >
        <PrimaryButton href="/contact">Send us a listing</PrimaryButton>
      </PageHeader>

      <section className="px-5 sm:px-6 py-20 md:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {marketplaces.map((m) => (
            <ScrollReveal key={m.name}>
              <h2 className="text-2xl font-semibold tracking-tight">{m.name}</h2>
              <p className="mt-3 text-ink/65 leading-relaxed">{m.what}</p>
              <p className="mt-6 text-sm font-medium text-ink/50">What we do</p>
              <ul className="mt-2 border-t border-ink/10">
                {m.we.map((w) => (
                  <li key={w} className="py-3 border-b border-ink/10 text-ink/80 leading-relaxed">{w}</li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>
        <p className="max-w-6xl mx-auto mt-10 text-sm text-ink/50">
          We also buy from other German second-hand sites and private sellers. Send us the link.
        </p>
      </section>

      <section className="px-5 sm:px-6 py-20 md:py-24 border-t border-ink/10 bg-paper-deep/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Inspection"
              title="We check every item before it ships"
              intro="You get photos and a short video of the actual item. Nothing is sent until you confirm."
            />
          </div>
          <ul className="lg:col-span-7 border-t border-ink/10">
            {checks.map((c) => (
              <li key={c} className="py-4 border-b border-ink/10 text-ink/80">{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-20 md:py-24 border-t border-ink/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQ" title="Questions about buying used" />
          </div>
          <div className="lg:col-span-8">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Found something?"
        text="Send us the link and tell us what matters to you about the item."
        secondary={{ href: "/pricing", label: "Shipping & fees" }}
      />
    </div>
  );
}
