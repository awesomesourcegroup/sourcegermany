import ScrollReveal from "@/components/ScrollReveal";
import { CtaBand, Eyebrow, PageHeader, ShippingCards } from "@/components/Blocks";

export const metadata = {
  title: "Shipping & fees | SourceGermany",
  description: "Every fee explained, plus our two DHL shipping options: DHL Express and DHL Paket International.",
};

const fees = [
  {
    name: "Service fee",
    range: "from €25",
    desc: "For talking to the seller, buying, receiving, inspecting and managing your order. It scales with the item value and is always shown in your quote.",
  },
  {
    name: "Pickup (second-hand only)",
    range: "if needed",
    desc: "When a seller only offers collection, we either pick it up or arrange domestic shipping to us. Any cost for this is listed upfront.",
  },
  {
    name: "Shipping",
    range: "by weight & country",
    desc: "DHL Express or DHL Paket International. Your quote shows both prices so you can choose.",
  },
  {
    name: "Packaging",
    range: "€4.50",
    desc: "A new, sturdy box with padding. Combining several items into one parcel is free.",
  },
  {
    name: "Import duties & taxes",
    range: "your country's rules",
    desc: "Set by your country, not by us. Prepaid with DHL Express (DDP) for most countries, or paid by you on arrival with DHL Paket.",
  },
];

export default function PricingPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Shipping & fees"
        title={<>Clear prices. <span className="text-brand">No surprises.</span></>}
        intro="Every order gets a personal quote with every cost listed, before you pay anything. Here's what goes into it."
      />

      <section className="px-4 sm:px-6 pb-24">
        <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-ink/5 divide-y divide-ink/5">
          {fees.map((f, i) => (
            <ScrollReveal key={f.name} delay={i * 50}>
              <div className="p-6 md:p-8 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-start">
                <h2 className="sm:col-span-4 text-xl font-bold tracking-tight">{f.name}</h2>
                <p className="sm:col-span-6 text-ink/65 leading-relaxed">{f.desc}</p>
                <div className="sm:col-span-2 sm:text-right">
                  <span className="inline-block rounded-full bg-brand-soft text-brand text-xs font-semibold px-3 py-1.5 whitespace-nowrap">
                    {f.range}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="px-3 sm:px-4">
        <div className="max-w-6xl mx-auto rounded-[2rem] bg-ink text-white px-6 sm:px-12 py-16 md:py-20">
          <ScrollReveal className="max-w-2xl mb-10">
            <Eyebrow tone="light">Shipping options</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">Express or Paket.</h2>
            <p className="mt-4 text-white/65 text-lg leading-relaxed">
              Delivery times are typical, not guaranteed, and depend on your country and customs.
            </p>
          </ScrollReveal>
          <ShippingCards dark />
        </div>
      </section>

      <CtaBand
        title="Want an exact price?"
        text="Send us the link and your country. We'll reply with the full cost for both shipping options."
        primary={{ href: "/contact", label: "Get my quote" }}
      />
    </div>
  );
}
