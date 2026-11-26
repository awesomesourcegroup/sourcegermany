import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { CtaBand, Eyebrow, PrimaryButton, SecondaryButton, ShippingCards } from "@/components/Blocks";

const IconChat = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
);
const IconCar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M5 17h14M3 17v-5l2-5h14l2 5v5" />
    <circle cx="7.5" cy="17.5" r="1.5" />
    <circle cx="16.5" cy="17.5" r="1.5" />
  </svg>
);
const IconCard = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <line x1="2" y1="10" x2="22" y2="10" />
  </svg>
);
const IconEye = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const problems = [
  {
    icon: <IconChat />,
    problem: "The seller only speaks German",
    fix: "We message and call sellers in German, ask the questions you care about and negotiate the price for you.",
  },
  {
    icon: <IconCar />,
    problem: "“Nur Abholung”, pickup only",
    fix: "Lots of the best deals are collection only. We pick the item up in person or arrange a German domestic shipment to us.",
  },
  {
    icon: <IconCard />,
    problem: "No shipping abroad, no foreign payment",
    fix: "We buy as a local German buyer with a German address and German payment, so every listing is open to you.",
  },
  {
    icon: <IconEye />,
    problem: "Is it really as described?",
    fix: "Everything comes to us first. We check it, send you photos and a short video, and only ship once you are happy.",
  },
];

const popular = [
  "Cameras & lenses",
  "Car parts & wheels",
  "Hi-Fi & vinyl",
  "Power tools",
  "Watches",
  "Designer bags",
  "Lego & collectibles",
  "Bikes & parts",
  "Retro consoles",
  "Musical instruments",
  "Vintage furniture",
  "Outdoor gear",
];

const steps = [
  { n: "1", title: "Send us the listing", desc: "Paste a link from eBay.de, Kleinanzeigen or any German shop. Several links are fine too." },
  { n: "2", title: "We talk to the seller", desc: "We confirm it's available, ask your questions and send you a full quote before anything is bought." },
  { n: "3", title: "We buy, collect & check", desc: "Item arrives with us in Germany. You get photos and a video of the real thing." },
  { n: "4", title: "You choose the shipping", desc: "Fast DHL Express or cheaper DHL Paket International, to any country DHL delivers to." },
];

const pillars = [
  { title: "Automotive", img: "/images/pillar-auto.jpg", alt: "Porsche 911 sports car", href: "/shops#automotive" },
  { title: "Tools & hardware", img: "/images/pillar-tools.jpg", alt: "Track saw in a workshop", href: "/shops#tools-hardware" },
  { title: "Cameras & audio", img: "/images/pillar-cameras.jpg", alt: "Camera film boxes", href: "/shops#electronics-cameras-audio" },
  { title: "Fashion & beauty", img: "/images/pillar-fashion.jpg", alt: "German menswear suit", href: "/shops#fashion-lifestyle" },
];

function RecentOrderCard() {
  return (
    <div className="float-card relative w-full max-w-md mx-auto">
      <div className="rounded-3xl bg-white shadow-[0_24px_60px_rgba(23,25,28,0.14)] overflow-hidden border border-ink/5">
        <div className="relative aspect-[1024/351] bg-paper-deep">
          <Image
            src="/images/deal-berlin-prints.jpg"
            alt="Three Berlin lithographs: Brandenburger Tor, Gedächtniskirche and Reichstag"
            fill
            sizes="(max-width: 640px) 90vw, 448px"
            className="object-cover"
            priority
          />
        </div>
        <div className="p-5 flex gap-4">
          <div className="relative w-28 shrink-0 aspect-[4/3] rounded-xl overflow-hidden bg-paper-deep">
            <Image
              src="/images/deal-berlin-parcel.jpg"
              alt="The order packed in a DHL Express box with its customs form"
              fill
              sizes="112px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs text-ink/50">From our recent orders</p>
            <p className="mt-1 font-display font-bold text-lg leading-snug">Three Berlin lithographs</p>
            <p className="mt-1 text-sm text-ink/65 leading-relaxed">
              Brandenburger Tor, Gedächtniskirche and Reichstag. We bought them in Germany for a customer in the
              USA, packed them and sent them with DHL Express.
            </p>
          </div>
        </div>
      </div>
      {/* Stickers */}
      <div className="absolute -right-4 -bottom-10 sm:-right-8 rotate-6 rounded-2xl bg-coral text-white px-4 py-3 shadow-lg">
        <p className="text-[11px] font-semibold uppercase tracking-wide opacity-80">Recent orders</p>
        <p className="font-display font-extrabold leading-tight">Shipped to the USA</p>
      </div>
      <div className="absolute -left-4 -top-4 sm:-left-8 -rotate-6 rounded-2xl bg-sun text-ink px-3 py-2 shadow-md">
        <p className="font-display font-bold text-sm">Our own photos ✓</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="px-4 sm:px-6 pt-10 pb-20 md:pt-16 md:pb-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          <div>
            <div className="hero-in">
              <Eyebrow tone="coral">Second-hand from Germany, shipped worldwide</Eyebrow>
            </div>
            <h1
              className="hero-in mt-6 text-[2.6rem] sm:text-6xl lg:text-[4.2rem] font-extrabold tracking-tight leading-[1.02]"
              style={{ animationDelay: "0.08s" }}
            >
              Found it on <span className="scribble">eBay.de</span> or <span className="scribble">Kleinanzeigen</span>?
              <span className="block text-brand mt-2">We&apos;ll get it to you.</span>
            </h1>
            <p
              className="hero-in mt-7 text-lg md:text-xl text-ink/65 leading-relaxed max-w-xl"
              style={{ animationDelay: "0.16s" }}
            >
              German sellers often don&apos;t ship abroad, only reply in German or want local pickup. We
              handle the seller, collect the item, check it and send it to your door, in any country.
            </p>
            <div className="hero-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: "0.24s" }}>
              <PrimaryButton href="/contact">Send us a listing <span aria-hidden>→</span></PrimaryButton>
              <SecondaryButton href="/second-hand">How second-hand buying works</SecondaryButton>
            </div>
            <p className="hero-in mt-6 text-sm text-ink/50" style={{ animationDelay: "0.32s" }}>
              New items from any German online shop too.
            </p>
          </div>

          <div className="hero-in px-6 sm:px-10" style={{ animationDelay: "0.2s" }}>
            <RecentOrderCard />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="bg-ink text-white py-5 overflow-hidden" aria-label="What we buy">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap font-display font-bold text-lg">
          {[...popular, ...popular].map((p, i) => (
            <span key={i} className="flex items-center gap-10">
              {p}
              <span className="w-2 h-2 rounded-full bg-coral" />
            </span>
          ))}
        </div>
      </section>

      {/* PROBLEMS WE SOLVE */}
      <section className="px-4 sm:px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="max-w-2xl">
            <Eyebrow>Why people ask us</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05]">
              The best deals in Germany are on second-hand marketplaces. Getting them abroad is the hard part.
            </h2>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problems.map((p, i) => (
              <ScrollReveal key={p.problem} delay={i * 80}>
                <div className="h-full rounded-3xl bg-white border border-ink/5 p-7 md:p-8">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-coral-soft text-coral grid place-items-center">{p.icon}</span>
                    <p className="font-display font-bold text-lg line-through decoration-coral decoration-2 text-ink/60">
                      {p.problem}
                    </p>
                  </div>
                  <p className="mt-4 text-ink/75 leading-relaxed">{p.fix}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FACTS STRIP */}
      <section className="px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            ["Any country", "DHL delivers to"],
            ["2 options", "DHL Express or DHL Paket"],
            ["Photos first", "before anything ships"],
            ["In German", "we deal with every seller"],
          ].map(([big, small], i) => (
            <ScrollReveal key={big} delay={i * 60}>
              <div className="rounded-3xl bg-brand-soft p-6 h-full">
                <p className="font-display font-extrabold text-2xl md:text-3xl text-brand">{big}</p>
                <p className="mt-1 text-sm text-ink/60">{small}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-4 sm:px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>How it works</Eyebrow>
              <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">Four steps, no stress.</h2>
            </div>
            <Link href="/how-it-works" className="text-sm font-semibold text-brand hover:text-coral transition-colors">
              Read the full process →
            </Link>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 90}>
                <div className="h-full rounded-3xl bg-white border border-ink/5 p-6">
                  <span className="w-10 h-10 rounded-full bg-ink text-white grid place-items-center font-display font-bold">
                    {s.n}
                  </span>
                  <h3 className="mt-5 text-xl font-bold tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink/65 leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SHIPPING */}
      <section className="px-3 sm:px-4">
        <div className="max-w-6xl mx-auto rounded-[2rem] bg-ink text-white px-6 sm:px-12 py-16 md:py-20">
          <ScrollReveal className="max-w-2xl mb-10">
            <Eyebrow tone="light">Shipping</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">Fast or cheap. You pick.</h2>
            <p className="mt-4 text-white/65 text-lg leading-relaxed">
              Every order ships tracked with DHL. Choose the speed that fits the item and your budget.
            </p>
          </ScrollReveal>
          <ShippingCards dark />
        </div>
      </section>

      {/* NEW ITEMS TOO */}
      <section className="px-4 sm:px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <Eyebrow>Buying new?</Eyebrow>
              <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">Any German shop works too.</h2>
              <p className="mt-4 text-ink/65 text-lg leading-relaxed">
                Specialist stores and Made-in-Germany brands that don&apos;t ship to you. Send the link, we do the rest.
              </p>
            </div>
            <Link href="/shops" className="text-sm font-semibold text-brand hover:text-coral transition-colors">
              Browse our shop list →
            </Link>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 70}>
                <Link href={p.href} className="group block relative h-56 md:h-72 rounded-3xl overflow-hidden bg-paper-deep">
                  <Image
                    src={p.img}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                  <p className="absolute left-4 right-4 bottom-4 text-white font-display font-bold text-lg flex items-center justify-between">
                    {p.title}
                    <span className="w-8 h-8 rounded-full bg-white/20 grid place-items-center text-sm group-hover:bg-coral transition-colors">→</span>
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={<>Got a link? <span className="text-sun">Send it over.</span></>}
        text="Paste the eBay.de or Kleinanzeigen listing and tell us where it's going. We'll reply with a full quote, usually within 12 hours."
        secondary={{ href: "/pricing", label: "See fees & shipping" }}
      />
    </div>
  );
}
