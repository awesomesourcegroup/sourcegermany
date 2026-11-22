import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { CtaBand, PageHeader } from "@/components/Blocks";

export const metadata = {
  title: "Why buy from Germany | SourceGermany",
  description: "Why German products, new and used, are worth getting: quality, care and a huge second-hand market.",
};

const qualities = [
  {
    title: "A huge second-hand market",
    desc: "Millions of private listings on eBay.de and Kleinanzeigen at any time. Cameras, car parts, tools and Hi-Fi often sell for far less than the same thing new in your country.",
    pull: "The good stuff gets resold, not thrown away.",
  },
  {
    title: "Built to last",
    desc: "German products are made to tight standards. A KNIPEX plier or a Festool sander is designed to last decades, which is exactly why it is still worth buying used.",
    pull: "Built to a standard, not a deadline.",
  },
  {
    title: "Well looked after",
    desc: "Many German sellers keep the original box, receipts and manuals, and describe defects honestly. That makes used items easier to trust.",
    pull: "Original box included, more often than not.",
  },
  {
    title: "Strong consumer protection",
    desc: "New items sold in Germany come with a two-year statutory warranty and meet strict EU safety rules.",
    pull: "A two-year warranty isn't a perk. It's the law.",
  },
  {
    title: "The Mittelstand",
    desc: "Thousands of family-owned specialist makers that have spent generations perfecting one product. Many of them don't sell outside Europe.",
    pull: "Generations spent mastering one thing.",
  },
  {
    title: "German prices",
    desc: "Buying at German prices, new or used, often costs less than the same brand at home, even after shipping.",
    pull: "Buy it where it's made.",
  },
];

export default function WhyGermany() {
  return (
    <div>
      <PageHeader
        eyebrow="Why Germany"
        title={<>Why buy <span className="text-brand">from Germany?</span></>}
        intro="Germany makes things that last, and Germans tend to resell them instead of throwing them away. That makes it one of the best places in the world to buy, new or second-hand."
      />

      <section className="px-4 sm:px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {qualities.map((q, i) => (
            <ScrollReveal key={q.title} delay={i * 60}>
              <div className={`h-full rounded-3xl p-7 border ${i === 0 ? "bg-coral text-white border-coral" : "bg-white border-ink/5"}`}>
                <span className={`font-display font-extrabold text-lg ${i === 0 ? "text-white/70" : "text-coral"}`}>0{i + 1}</span>
                <h2 className="mt-2 text-2xl font-bold tracking-tight">{q.title}</h2>
                <p className={`mt-3 leading-relaxed ${i === 0 ? "text-white/85" : "text-ink/65"}`}>{q.desc}</p>
                <p className={`mt-5 font-display font-semibold italic ${i === 0 ? "text-white" : "text-brand"}`}>
                  &ldquo;{q.pull}&rdquo;
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="px-3 sm:px-4">
        <div className="relative max-w-6xl mx-auto rounded-[2rem] overflow-hidden bg-ink py-24 md:py-32 px-6 sm:px-12">
          <Image src="/images/why-germany-tools.jpg" alt="Precision German engineering" fill sizes="100vw" className="object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
          <ScrollReveal className="relative">
            <blockquote className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.05] max-w-2xl text-white">
              Made to last. <span className="text-sun">Worth buying twice.</span>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      <CtaBand
        title="Find your German deal."
        text="Browse eBay.de or Kleinanzeigen, send us the link, and we'll handle the rest."
        secondary={{ href: "/second-hand", label: "How second-hand works" }}
      />
    </div>
  );
}
