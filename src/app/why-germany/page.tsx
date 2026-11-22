import Image from "next/image";
import { CtaBand, PageHeader } from "@/components/Blocks";

export const metadata = {
  title: "Why buy from Germany | SourceGermany",
  description: "Why German products, new and used, are worth buying: quality, care and a large second-hand market.",
};

const reasons = [
  {
    title: "A large second-hand market",
    desc: "There are millions of private listings on eBay.de and Kleinanzeigen at any time. Cameras, car parts, tools and Hi-Fi often sell for much less than the same item new in your country.",
  },
  {
    title: "Products made to last",
    desc: "Many German products are built to tight standards and designed to last for decades, which is why they are still worth buying used.",
  },
  {
    title: "Well-kept items",
    desc: "German sellers often keep the original box, receipt and manual, and describe defects clearly in the listing.",
  },
  {
    title: "Consumer protection",
    desc: "New items sold in Germany come with a two-year statutory warranty and meet EU safety rules.",
  },
  {
    title: "Specialist makers",
    desc: "Germany has thousands of family-owned companies that focus on one type of product. Many of them don't sell outside Europe.",
  },
  {
    title: "German prices",
    desc: "Buying at German prices, new or used, is often cheaper than buying the same brand at home, even after shipping.",
  },
];

export default function WhyGermany() {
  return (
    <div>
      <PageHeader
        eyebrow="Why Germany"
        title="Why buy from Germany"
        intro="Germany makes things that last, and people tend to resell them rather than throw them away. That makes it a good place to buy, new or second-hand."
      />

      <section className="px-5 sm:px-6 py-20 md:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-paper-deep lg:sticky lg:top-24">
              <Image src="/images/why-germany-tools.jpg" alt="German precision engineering" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7 border-t border-ink/10">
            {reasons.map((r) => (
              <div key={r.title} className="py-6 border-b border-ink/10">
                <h2 className="text-lg font-semibold">{r.title}</h2>
                <p className="mt-2 text-ink/65 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Seen something on a German site?"
        text="Send us the link and we'll take care of the rest."
        secondary={{ href: "/second-hand", label: "Buying second-hand" }}
      />
    </div>
  );
}
