import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { CtaBand, PrimaryButton, SecondaryButton, SectionHeading, ShippingTable } from "@/components/Blocks";

const problems = [
  {
    q: "The seller only speaks German",
    a: "We message and call the seller in German, ask the questions you have and negotiate the price where possible.",
  },
  {
    q: "The listing says pickup only",
    a: "Many good offers on Kleinanzeigen are collection only. We pick the item up ourselves or arrange shipping to us within Germany.",
  },
  {
    q: "The seller won't ship abroad",
    a: "We buy as a local buyer with a German address and German payment, so the listing is open to you.",
  },
  {
    q: "You can't see the item before buying",
    a: "Everything comes to us first. We check it, send you photos and a short video, and only ship once you are happy with it.",
  },
];

const steps = [
  { title: "Send us the link", desc: "A listing from eBay.de, Kleinanzeigen or any German shop. Several links at once are fine." },
  { title: "Get a quote", desc: "We check availability with the seller and send you the full price before anything is bought." },
  { title: "We buy and inspect", desc: "The item comes to us in Germany. You get photos and a video of the actual item." },
  { title: "We ship it", desc: "With DHL Express or DHL Paket International, to any country DHL delivers to." },
];

const categories = [
  { title: "Automotive", img: "/images/pillar-auto.jpg", alt: "Porsche 911 sports car", href: "/shops#automotive" },
  { title: "Tools & hardware", img: "/images/pillar-tools.jpg", alt: "Track saw in a workshop", href: "/shops#tools-hardware" },
  { title: "Cameras & audio", img: "/images/pillar-cameras.jpg", alt: "Camera film boxes", href: "/shops#electronics-cameras-audio" },
  { title: "Fashion & beauty", img: "/images/pillar-fashion.jpg", alt: "German menswear suit", href: "/shops#fashion-lifestyle" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="px-5 sm:px-6 pt-14 pb-16 md:pt-24 md:pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <p className="text-sm font-medium text-brand">Second-hand from Germany, shipped worldwide</p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold tracking-tight leading-[1.08]">
              Buy from eBay.de and Kleinanzeigen, wherever you live.
            </h1>
            <p className="mt-6 text-lg text-ink/65 leading-relaxed max-w-xl">
              Many German sellers don&apos;t ship abroad, only reply in German or want local pickup. We deal
              with the seller, collect the item, check it and send it to you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton href="/contact">Send us a listing</PrimaryButton>
              <SecondaryButton href="/second-hand">How it works</SecondaryButton>
            </div>
            <p className="mt-5 text-sm text-ink/50">We also buy new items from any German online shop.</p>
          </div>
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-paper-deep">
              <Image
                src="/images/hero-leica.jpg"
                alt="Used rangefinder camera"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="px-5 sm:px-6 py-20 md:py-24 border-t border-ink/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Why people use us"
              title="Buying second-hand in Germany from abroad"
            />
          </div>
          <div className="lg:col-span-8 border-t border-ink/10">
            {problems.map((p, i) => (
              <ScrollReveal key={p.q} delay={i * 60}>
                <div className="py-6 border-b border-ink/10 grid grid-cols-1 sm:grid-cols-5 gap-2 sm:gap-8">
                  <h3 className="sm:col-span-2 font-medium">{p.q}</h3>
                  <p className="sm:col-span-3 text-ink/65 leading-relaxed">{p.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="px-5 sm:px-6 py-20 md:py-24 border-t border-ink/10 bg-paper-deep/60">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="How it works" title="From link to delivery" />
            <Link href="/how-it-works" className="text-sm font-medium text-brand hover:underline underline-offset-4">
              Full process
            </Link>
          </div>
          <ol className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 60}>
                <li>
                  <p className="text-sm text-ink/45">Step {i + 1}</p>
                  <h3 className="mt-2 text-lg font-medium">{s.title}</h3>
                  <p className="mt-2 text-ink/65 leading-relaxed">{s.desc}</p>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Shipping */}
      <section className="px-5 sm:px-6 py-20 md:py-24 border-t border-ink/10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Shipping"
            title="Two DHL options"
            intro="Every parcel is tracked. Your quote shows the price for both, so you can decide per order."
          />
          <div className="mt-10">
            <ShippingTable />
          </div>
        </div>
      </section>

      {/* New items */}
      <section className="px-5 sm:px-6 py-20 md:py-24 border-t border-ink/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Buying new"
              title="Any German shop works too"
              intro="Specialist stores and German brands that don't ship to your country."
            />
            <Link href="/shops" className="text-sm font-medium text-brand hover:underline underline-offset-4">
              See shop list
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((c) => (
              <Link key={c.title} href={c.href} className="group">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-paper-deep">
                  <Image
                    src={c.img}
                    alt={c.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <p className="mt-3 font-medium group-hover:text-brand transition-colors">{c.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Send us the listing"
        text="Paste the link and tell us which country it should go to. We usually reply within 12 hours with a full quote."
        secondary={{ href: "/pricing", label: "Shipping & fees" }}
      />
    </div>
  );
}
