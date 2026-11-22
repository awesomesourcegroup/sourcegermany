import ScrollReveal from "@/components/ScrollReveal";
import { CtaBand, Eyebrow, PageHeader, ShippingCards } from "@/components/Blocks";

export const metadata = {
  title: "How it works | SourceGermany",
  description: "From a link on eBay.de, Kleinanzeigen or any German shop to a parcel at your door, step by step.",
};

const steps = [
  {
    n: "1",
    title: "Send us the link",
    detail: [
      "Paste a listing from eBay.de, Kleinanzeigen or any German online shop into our contact form. Several links at once is fine.",
      "Tell us where it should go and anything you want us to ask or check, like size, condition or included accessories.",
      "Can't find it? Describe what you want and we'll search German marketplaces for you.",
    ],
  },
  {
    n: "2",
    title: "We contact the seller and quote",
    detail: [
      "We message the seller in German, confirm the item is still there and ask your questions.",
      "If the price is negotiable, we try to get it down.",
      "You get one clear quote: item price, our fee, any pickup costs, and the price for both shipping options.",
    ],
  },
  {
    n: "3",
    title: "We buy, collect and check",
    detail: [
      "Once you approve and pay, we buy the item as a German buyer.",
      "For pickup-only listings we collect in person or arrange shipping to us within Germany.",
      "We inspect the item and send you photos and a short video. Nothing ships until you're happy.",
    ],
  },
  {
    n: "4",
    title: "We pack and ship to you",
    detail: [
      "We repack it properly with padding and a sturdy box, and handle the export paperwork.",
      "It ships with DHL Express or DHL Paket International, your choice, with a tracking number.",
      "Buying several things? We hold them and send everything in one parcel to save on shipping.",
    ],
  },
];

const faqs = [
  {
    q: "Which countries do you ship to?",
    a: "Anywhere DHL delivers. If you're unsure about your country, just ask in the contact form.",
  },
  {
    q: "What if the item is sold before we buy it?",
    a: "We tell you straight away. We can look for a similar listing, or you simply don't pay anything.",
  },
  {
    q: "Can I return an item?",
    a: "For new items from German shops, yes. We handle the return with the shop for a small handling fee. Private second-hand sales usually have no returns, which is why we inspect everything before it ships.",
  },
  {
    q: "How do I pay?",
    a: "By international bank transfer or card. All prices are in euros and fixed in your quote.",
  },
  {
    q: "Who pays import duties?",
    a: "With DHL Express we can prepay duties for most countries, so nothing is due at your door. With DHL Paket International you pay any duties to your local customs or post office when it arrives.",
  },
];

export default function HowItWorks() {
  return (
    <div>
      <PageHeader
        eyebrow="How it works"
        title={<>From a link to <span className="text-brand">your door.</span></>}
        intro="Whether it's a used lens on Kleinanzeigen or a new tool from a German shop, the process is the same. You always know what's happening and what it costs."
      />

      <section className="px-4 sm:px-6 pb-24">
        <div className="max-w-5xl mx-auto space-y-4">
          {steps.map((s, i) => (
            <ScrollReveal key={s.n} delay={i * 60}>
              <div className="rounded-3xl bg-white border border-ink/5 p-7 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
                <div className="md:col-span-4 flex md:flex-col items-center md:items-start gap-4">
                  <span className="w-12 h-12 rounded-full bg-coral text-white grid place-items-center font-display font-extrabold text-xl flex-shrink-0">
                    {s.n}
                  </span>
                  <h2 className="text-2xl font-bold tracking-tight">{s.title}</h2>
                </div>
                <ul className="md:col-span-8 space-y-3">
                  {s.detail.map((d) => (
                    <li key={d} className="flex gap-3 text-ink/70 leading-relaxed">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="mb-10">
            <Eyebrow>Shipping options</Eyebrow>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight">Two ways to ship.</h2>
          </ScrollReveal>
          <ShippingCards />
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-8">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight">Common questions.</h2>
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

      <CtaBand title="Ready when you are." text="Send us a link and we'll come back with availability and a full quote." />
    </div>
  );
}
