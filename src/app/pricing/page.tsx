import { CtaBand, PageHeader, SectionHeading, ShippingTable } from "@/components/Blocks";

export const metadata = {
  title: "Shipping & fees | SourceGermany",
  description: "Every fee explained, plus our two DHL shipping options: DHL Express and DHL Paket International.",
};

const fees = [
  {
    name: "Service fee",
    range: "From €25",
    desc: "Covers contacting the seller, buying, receiving, inspecting and managing your order. It depends on the item value and is always in your quote.",
  },
  {
    name: "Pickup",
    range: "Only if needed",
    desc: "For second-hand items the seller won't post. We collect or arrange shipping to us within Germany, and list the cost upfront.",
  },
  {
    name: "Shipping",
    range: "By weight and country",
    desc: "DHL Express or DHL Paket International. Your quote shows both prices.",
  },
  {
    name: "Packaging",
    range: "€4.50",
    desc: "A new box with proper padding. Combining several items into one parcel costs nothing extra.",
  },
  {
    name: "Import duties and taxes",
    range: "Set by your country",
    desc: "Prepaid with DHL Express for most countries, or paid by you on arrival with DHL Paket.",
  },
];

export default function PricingPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Shipping & fees"
        title="What you pay"
        intro="Every order gets its own quote with each cost listed, before you pay anything."
      />

      <section className="px-5 sm:px-6 py-20 md:py-24">
        <div className="max-w-6xl mx-auto border-t border-ink/10">
          {fees.map((f) => (
            <div key={f.name} className="py-6 border-b border-ink/10 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-10">
              <h2 className="md:col-span-3 font-semibold">{f.name}</h2>
              <p className="md:col-span-3 text-ink/80">{f.range}</p>
              <p className="md:col-span-6 text-ink/65 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-6 py-20 md:py-24 border-t border-ink/10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Shipping"
            title="DHL Express or DHL Paket"
            intro="Delivery times are typical, not guaranteed, and depend on your country and customs."
          />
          <div className="mt-10">
            <ShippingTable />
          </div>
        </div>
      </section>

      <CtaBand
        title="Want an exact price?"
        text="Send us the link and your country. We'll reply with the full cost for both shipping options."
      />
    </div>
  );
}
