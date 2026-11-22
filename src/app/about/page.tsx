import { CtaBand, PageHeader, SectionHeading } from "@/components/Blocks";

export const metadata = {
  title: "About us | SourceGermany",
  description: "Who we are and why we help people abroad buy from German sellers and shops.",
};

const story = [
  "SourceGermany was started by two people who saw the problem from both sides: a buyer abroad who kept finding good offers in Germany they couldn't get, and a resident of Germany who knew how buying and shipping work here.",
  "The best prices are often on eBay.de and Kleinanzeigen, but sellers want local pickup, reply only in German and won't ship abroad. Resellers who do ship often add 30 to 50 percent.",
  "So we started buying for people abroad. We are based in Germany, speak the language, can pick things up, and know how to get a parcel out of the country safely.",
  "Today most requests are for second-hand items: cameras, car parts, Hi-Fi, tools and collectibles. We still buy new items from German shops too.",
];

const facts = [
  { label: "Registered business", detail: "Registered in Germany. VAT ID available on request." },
  { label: "Shipping", detail: "DHL Express and DHL Paket International, always tracked." },
  { label: "No dropshipping", detail: "We buy, collect and check items ourselves." },
  { label: "Quotes", detail: "Every cost is listed before you pay." },
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="About us"
        title="A small team in Germany"
        intro="We help people outside Germany buy from German sellers, whether that's a used lens on Kleinanzeigen or something new from a specialist shop."
      />

      <section className="px-5 sm:px-6 py-20 md:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Our story" title="How it started" />
          </div>
          <div className="lg:col-span-8 space-y-5 text-lg text-ink/70 leading-relaxed">
            {story.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-20 md:py-24 border-t border-ink/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Facts" title="Who you're dealing with" />
          </div>
          <dl className="lg:col-span-8 border-t border-ink/10">
            {facts.map((f) => (
              <div key={f.label} className="py-5 border-b border-ink/10 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-8">
                <dt className="font-medium">{f.label}</dt>
                <dd className="sm:col-span-2 text-ink/65">{f.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand title="Questions?" text="Send us a link or just a question. We reply personally." primary={{ href: "/contact", label: "Contact us" }} />
    </div>
  );
}
