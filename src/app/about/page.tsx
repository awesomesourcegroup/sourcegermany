import ScrollReveal from "@/components/ScrollReveal";
import { CtaBand, Eyebrow, PageHeader } from "@/components/Blocks";

export const metadata = {
  title: "About us | SourceGermany",
  description: "Who we are and why we help people abroad buy from German sellers and shops.",
};

const values = [
  { title: "Honest quotes", desc: "Every cost is shown before you pay. No vague surcharges added later." },
  { title: "Real checks", desc: "We look at every second-hand item with our own eyes and show you what we see." },
  { title: "Personal service", desc: "You talk to the people who actually buy and pack your item, not a call centre." },
  { title: "Your budget first", desc: "We negotiate with sellers, combine parcels and suggest the cheaper shipping option when it makes sense." },
];

const story = [
  "SourceGermany was started by two people who saw the problem from both sides: a buyer abroad who kept finding great deals in Germany they couldn't get, and a resident of Germany who knew how the system works from the inside.",
  "The frustration was always the same. The best prices are on eBay.de and Kleinanzeigen, but sellers want local pickup, reply only in German and won't ship abroad. Resellers who do ship often add 30 to 50 percent on top.",
  "So we became the German buyer for people abroad. We are physically in Germany, we speak the language, we can pick things up, and we know how to get a parcel out of the country safely.",
  "Today most of our requests are for second-hand items: cameras, car parts, Hi-Fi, tools, collectibles. We still buy new from German shops too, for anything you can't get where you live.",
];

const trustBadges = [
  { label: "Registered business in Germany", detail: "Legally registered in the Federal Republic of Germany" },
  { label: "VAT registered", detail: "Umsatzsteuer-ID available on request" },
  { label: "DHL shipping", detail: "DHL Express and DHL Paket International, tracked" },
  { label: "We buy in person", detail: "We buy, collect and check items ourselves, no dropshipping" },
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="About us"
        title={<>Your buyer <span className="text-brand">in Germany.</span></>}
        intro="A small, Germany-based team that helps people anywhere buy from German sellers, whether that's a used lens on Kleinanzeigen or something new from a specialist shop."
      />

      <section className="px-4 sm:px-6 pb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <ScrollReveal className="md:col-span-4">
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight">How it started.</h2>
          </ScrollReveal>
          <div className="md:col-span-8 space-y-5 text-lg">
            {story.map((p, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <p className="text-ink/70 leading-relaxed">{p}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <Eyebrow>Why you can trust us</Eyebrow>
          </ScrollReveal>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {trustBadges.map((b, i) => (
              <ScrollReveal key={b.label} delay={i * 60}>
                <div className="h-full flex items-start gap-4 rounded-3xl bg-white border border-ink/5 p-6">
                  <span className="w-9 h-9 rounded-full bg-brand-soft text-brand grid place-items-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <polyline points="9 12 11 14 15 10" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold">{b.label}</p>
                    <p className="text-sm text-ink/60 mt-0.5">{b.detail}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-3 sm:px-4">
        <div className="max-w-6xl mx-auto rounded-[2rem] bg-ink text-white px-6 sm:px-12 py-16 md:py-20">
          <ScrollReveal className="mb-10">
            <Eyebrow tone="light">What we stand for</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">Our values.</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 70}>
                <div className="h-full rounded-3xl bg-white/5 border border-white/10 p-7">
                  <span className="font-display font-extrabold text-sun text-lg">0{i + 1}</span>
                  <h3 className="mt-2 text-xl font-bold">{v.title}</h3>
                  <p className="mt-2 text-white/65 leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Want to work with us?" text="Send us a link or just a question. We reply personally." primary={{ href: "/contact", label: "Get in touch" }} />
    </div>
  );
}
