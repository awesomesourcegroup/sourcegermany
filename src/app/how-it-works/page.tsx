import ScrollReveal from "@/components/ScrollReveal";
import { CtaBand, Faq, PageHeader, SectionHeading, ShippingTable } from "@/components/Blocks";

export const metadata = {
  title: "How it works | SourceGermany",
  description: "From a link on eBay.de, Kleinanzeigen or any German shop to a parcel at your door, step by step.",
};

const steps = [
  {
    title: "Send us the link",
    detail: [
      "Paste a listing from eBay.de, Kleinanzeigen or any German online shop into the contact form. Several links at once are fine.",
      "Tell us where it should go and anything you want us to ask or check, like size, condition or included accessories.",
      "If you can't find what you want, describe it and we'll search German marketplaces for you.",
    ],
  },
  {
    title: "We contact the seller and send a quote",
    detail: [
      "We message the seller in German, confirm the item is still available and ask your questions.",
      "If the price is negotiable, we try to bring it down.",
      "You get one quote with the item price, our fee, any pickup cost and the price for both shipping options.",
    ],
  },
  {
    title: "We buy, collect and check",
    detail: [
      "Once you approve and pay, we buy the item.",
      "For pickup-only listings we collect in person or arrange shipping to us within Germany.",
      "We inspect the item and send you photos and a short video. Nothing ships until you confirm.",
    ],
  },
  {
    title: "We pack and ship",
    detail: [
      "We repack the item with proper padding and handle the export paperwork.",
      "It ships with DHL Express or DHL Paket International, with tracking.",
      "If you are buying several things, we hold them and send everything in one parcel.",
    ],
  },
];

const faqs = [
  { q: "Which countries do you ship to?", a: "Any country DHL delivers to. If you're unsure about yours, ask us in the contact form." },
  { q: "What if the item sells before we buy it?", a: "We let you know straight away. We can look for a similar listing, otherwise you pay nothing." },
  {
    q: "Can I return an item?",
    a: "New items from German shops, yes. We handle the return with the shop for a small handling fee. Private second-hand sales usually have no returns, which is why we inspect everything before it ships.",
  },
  { q: "How do I pay?", a: "By international bank transfer or card. Prices are in euros and fixed in your quote." },
  {
    q: "Who pays import duties?",
    a: "With DHL Express we can prepay duties for most countries, so nothing is due on delivery. With DHL Paket International you pay any duties to your local customs or post office on arrival.",
  },
];

export default function HowItWorks() {
  return (
    <div>
      <PageHeader
        eyebrow="How it works"
        title="From a link to your door"
        intro="The process is the same for a used lens on Kleinanzeigen and a new tool from a German shop. You see the full price before you pay."
      />

      <section className="px-5 sm:px-6 py-20 md:py-24">
        <div className="max-w-6xl mx-auto border-t border-ink/10">
          {steps.map((s, i) => (
            <ScrollReveal key={s.title}>
              <div className="py-10 border-b border-ink/10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10">
                <div className="md:col-span-4">
                  <p className="text-sm text-ink/45">Step {i + 1}</p>
                  <h2 className="mt-1 text-xl font-semibold tracking-tight">{s.title}</h2>
                </div>
                <ul className="md:col-span-8 space-y-3">
                  {s.detail.map((d) => (
                    <li key={d} className="text-ink/70 leading-relaxed">{d}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-6 py-20 md:py-24 border-t border-ink/10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Shipping" title="Two DHL options" />
          <div className="mt-10">
            <ShippingTable />
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-20 md:py-24 border-t border-ink/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQ" title="Common questions" />
          </div>
          <div className="lg:col-span-8">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      <CtaBand title="Have a link?" text="Send it to us and we'll come back with availability and a full quote." />
    </div>
  );
}
