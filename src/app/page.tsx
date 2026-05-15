import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import HeroSlideshow from "@/components/HeroSlideshow";

const GOLD = "#C9A84C";

const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);

const IconReturn = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <polyline points="1 4 1 10 7 10"/>
    <path d="M3.51 15a9 9 0 102.13-9.36L1 10"/>
  </svg>
);

const IconPackage = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
    <line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
);

const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const pillars = [
  {
    title: "Automotive & Motorsport",
    desc: "ABT, KW, Eibach, BBS, FVD Brombacher — performance parts and tuning direct from the manufacturers.",
    img: "/images/pillar-auto.jpg",
    imgAlt: "Porsche 911 sports car",
    href: "/shops#automotive",
  },
  {
    title: "Tools & Hardware",
    desc: "Stahlwille, KNIPEX, Wera, Festool — Mittelstand precision tools built to outlast everything else.",
    img: "/images/pillar-tools.jpg",
    imgAlt: "Festool track saw in workshop",
    href: "/shops#tools-hardware",
  },
  {
    title: "Electronics, Cameras & Audio",
    desc: "Leica, Zeiss, Burmester, T+A, Sennheiser — German optical and audio engineering at the reference level.",
    img: "/images/pillar-cameras.jpg",
    imgAlt: "Leica branded camera film boxes",
    href: "/shops#electronics-cameras-audio",
  },
  {
    title: "Fashion & Lifestyle",
    desc: "Bogner, MCM, Lodenfrey, UF PRO, Weleda — Made-in-Germany labels across fashion, beauty, and outdoor.",
    img: "/images/pillar-fashion.jpg",
    imgAlt: "German menswear suit",
    href: "/shops#fashion-lifestyle",
  },
];

const trustPoints = [
  {
    icon: <IconShield />,
    title: "DDP or DAP — Your Choice",
    desc: "Choose DDP (all duties pre-paid, nothing due at delivery) or DAP (lower upfront cost, you settle customs locally). Full transparency either way.",
  },
  {
    icon: <IconReturn />,
    title: "Returns Accepted",
    desc: "Changed your mind? We handle the German return process on your behalf — something our competitors don't offer.",
  },
  {
    icon: <IconPackage />,
    title: "Luxury-Grade Packaging",
    desc: "Every order ships in a double-walled DHL Packset with air-column protection. Your €1,000 purchase deserves it.",
  },
  {
    icon: <IconPin />,
    title: "German-Based Buyer",
    desc: "We are physically in Germany. We speak the language, navigate the shops, and verify authenticity before shipping.",
  },
];

const steps = [
  {
    n: "01",
    title: "You Find It",
    desc: "Send us a link to any German online shop or describe what you want. We'll confirm availability and give you a full price quote.",
  },
  {
    n: "02",
    title: "We Buy It",
    desc: "We purchase the item using our German account, inspect it, pack it securely, and handle all export documentation.",
  },
  {
    n: "03",
    title: "You Receive It",
    desc: "Your parcel arrives duties-paid at your door. Track it every step of the way. No unexpected bills.",
  },
];

function PillarCard({
  pillar,
  index,
  className = "",
}: {
  pillar: typeof pillars[0];
  index: number;
  className?: string;
}) {
  return (
    <Link
      href={pillar.href}
      className={`relative overflow-hidden block group bg-zinc-200 ${className}`}
    >
      <Image
        src={pillar.img}
        alt={pillar.imgAlt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent" />
      <div className="absolute inset-0 p-5 flex flex-col justify-end">
        <span className="font-mono text-xs mb-1.5" style={{ color: GOLD }}>
          0{index + 1}
        </span>
        <h3 className="text-white font-bold text-lg leading-tight">{pillar.title}</h3>
        <p className="text-zinc-300 text-sm leading-relaxed mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-xs">
          {pillar.desc}
        </p>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* ── HERO ── */}
      <section className="relative bg-zinc-950 text-white min-h-screen flex items-center overflow-hidden">
        {/* Subtle texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",
            backgroundSize: "12px 12px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 w-full py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            <p
              className="hero-label font-mono text-xs uppercase tracking-[0.3em] mb-8"
              style={{ color: GOLD }}
            >
              Germany → Worldwide
            </p>
            <h1 className="leading-none font-black mb-10">
              <span className="hero-word-1 block text-7xl md:text-8xl lg:text-[8.5rem] tracking-tighter">
                YOUR
              </span>
              <span className="hero-word-2 block text-7xl md:text-8xl lg:text-[8.5rem] tracking-tighter">
                DIRECT
              </span>
              <span
                className="hero-word-3 block text-7xl md:text-8xl lg:text-[8.5rem] tracking-tighter"
                style={{ color: GOLD }}
              >
                LINE.
              </span>
            </h1>
            <div
              className="hero-sub border-l-2 pl-6 mb-10"
              style={{ borderColor: GOLD }}
            >
              <p className="text-zinc-300 text-lg md:text-xl leading-relaxed max-w-md">
                We buy any product from German retailers and ship it to your door —
                customs paid, premium packaging, no hidden fees.
              </p>
            </div>
            <div className="hero-cta flex flex-wrap gap-4">
              <Link
                href="/estimator"
                className="px-8 py-4 font-bold text-black text-sm tracking-wide transition-opacity hover:opacity-85"
                style={{ backgroundColor: GOLD }}
              >
                Get a Price Estimate
              </Link>
              <Link
                href="/how-it-works"
                className="px-8 py-4 font-semibold text-white text-sm border border-zinc-600 hover:border-zinc-400 transition-colors"
              >
                How It Works →
              </Link>
            </div>
          </div>

          {/* Right: Slideshow panel with gold corner accents */}
          <div className="hero-image hidden lg:block relative">
            <HeroSlideshow />
            <div
              className="absolute -top-3 -right-3 w-10 h-10 border-t-2 border-r-2 pointer-events-none"
              style={{ borderColor: GOLD }}
            />
            <div
              className="absolute -bottom-3 -left-3 w-10 h-10 border-b-2 border-l-2 pointer-events-none"
              style={{ borderColor: GOLD }}
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-8 hidden md:flex flex-col items-center gap-3">
          <span
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600"
            style={{ writingMode: "vertical-rl" }}
          >
            Scroll
          </span>
          <div className="w-px h-14 bg-gradient-to-b from-zinc-600 to-transparent" />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-white border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-100">
            {[
              ["5–8", "days to Singapore"],
              ["6–10", "days to Australia"],
              ["5", "regions served"],
              ["DDP", "duties always included"],
            ].map(([val, label], i) => (
              <ScrollReveal key={val} delay={i * 60} className="py-10 px-6 text-center">
                <p className="text-3xl md:text-4xl font-bold font-mono text-zinc-900">
                  {val}
                </p>
                <p className="font-mono text-xs uppercase tracking-widest text-zinc-400 mt-2">
                  {label}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE PILLARS ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="mb-12">
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-400 mb-2">
                  Specialisations
                </p>
                <h2 className="text-4xl font-bold tracking-tight">
                  Our Expertise Pillars
                </h2>
              </div>
              <Link
                href="/shops"
                className="text-sm font-medium text-zinc-500 hover:text-black transition-colors flex items-center gap-1.5"
              >
                Browse all shops
                <span style={{ color: GOLD }}>→</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Bento grid — 2 rows, asymmetric */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Row 1: Automotive wide, Tools narrow */}
            <ScrollReveal className="md:col-span-2">
              <PillarCard pillar={pillars[0]} index={0} className="h-72 md:h-96" />
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <PillarCard pillar={pillars[1]} index={1} className="h-72 md:h-96" />
            </ScrollReveal>
            {/* Row 2: Electronics narrow, Fashion wide */}
            <ScrollReveal delay={120}>
              <PillarCard pillar={pillars[2]} index={2} className="h-64 md:h-80" />
            </ScrollReveal>
            <ScrollReveal delay={160} className="md:col-span-2">
              <PillarCard pillar={pillars[3]} index={3} className="h-64 md:h-80" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── QUOTE BREAK ── */}
      <section className="relative bg-zinc-950 text-white py-24 md:py-32 overflow-hidden">
        {/* Right-side image fading in */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2">
          <Image
            src="/images/banner-porsche.jpg"
            alt="Porsche 911"
            fill
            sizes="50vw"
            className="object-cover opacity-25 lg:opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent lg:via-zinc-950/50" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] mb-6" style={{ color: GOLD }}>
              Made in Germany
            </p>
            <blockquote className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-2xl">
              Engineered to a standard,{" "}
              <span style={{ color: GOLD }}>not a price.</span>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-24 px-6 bg-zinc-950 text-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.3em] mb-3" style={{ color: GOLD }}>
              Why SourceGermany
            </p>
            <h2 className="text-4xl font-bold tracking-tight">Built Different.</h2>
          </ScrollReveal>

          <div className="border-t border-zinc-800">
            {trustPoints.map((t, i) => (
              <ScrollReveal key={t.title} delay={i * 80} className="border-b border-zinc-800">
                <div className="py-8 grid grid-cols-12 items-start gap-4 md:gap-6 group cursor-default hover:bg-white/[0.02] transition-colors -mx-4 px-4">
                  <div className="col-span-2 md:col-span-1">
                    <span
                      className="font-mono text-2xl md:text-3xl font-black"
                      style={{ color: GOLD, opacity: 0.35 }}
                    >
                      0{i + 1}
                    </span>
                  </div>
                  <div className="col-span-1 pt-0.5">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: GOLD, color: "black" }}
                    >
                      {t.icon}
                    </div>
                  </div>
                  <div className="col-span-9 md:col-span-10">
                    <h3 className="font-semibold text-white text-base md:text-lg mb-1.5 group-hover:text-[#C9A84C] transition-colors">
                      {t.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-400 mb-3">
              The Process
            </p>
            <h2 className="text-4xl font-bold tracking-tight">
              Simple. Transparent. Reliable.
            </h2>
          </ScrollReveal>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Connecting line — desktop only */}
            <div
              className="hidden md:block absolute h-px bg-zinc-300"
              style={{ top: "2.625rem", left: "20%", right: "20%" }}
            />
            {steps.map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 130} className="flex flex-col items-center text-center">
                <div
                  className="relative z-10 w-[3.25rem] h-[3.25rem] rounded-full border-2 flex items-center justify-center bg-zinc-50 mb-6"
                  style={{ borderColor: GOLD }}
                >
                  <span className="font-mono font-bold text-base" style={{ color: GOLD }}>
                    {s.n}
                  </span>
                </div>
                <h3 className="font-bold text-xl mb-3 text-zinc-900">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400} className="text-center mt-12">
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-zinc-400 hover:text-black transition-colors border-b border-zinc-300 hover:border-black pb-0.5"
            >
              Read the full process →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 overflow-hidden" style={{ backgroundColor: GOLD }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <h2 className="text-5xl md:text-6xl font-black text-black leading-none tracking-tighter">
              READY TO<br />
              ORDER FROM<br />
              GERMANY?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={120} className="flex flex-col gap-5 md:items-end">
            <p className="text-black/65 text-lg leading-relaxed max-w-sm md:text-right">
              Use our free cost estimator to see exactly what you&apos;ll pay — before you commit.
            </p>
            <Link
              href="/estimator"
              className="inline-flex items-center px-8 py-4 font-bold bg-black text-white hover:bg-zinc-800 transition-colors text-sm tracking-wide"
            >
              Calculate My Cost →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
