import Link from "next/link";
import Image from "next/image";

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
    title: "Tools & Hardware",
    desc: "Festool, Bosch Professional, Knipex — German precision tools built to last a lifetime.",
    img: "/images/pillar-tools.jpg",
    imgAlt: "Modern professional cordless power drills",
    href: "/shops#tools-hardware",
  },
  {
    title: "Automotive",
    desc: "OEM parts, accessories, and performance upgrades direct from German suppliers.",
    img: "/images/pillar-auto.jpg",
    imgAlt: "Porsche 911 sports car",
    href: "/shops#automotive",
  },
  {
    title: "Fashion & Luxury",
    desc: "Hugo Boss, Adidas originals, MCM, and boutique German labels — authenticated, at retail.",
    img: "/images/pillar-fashion.jpg",
    imgAlt: "German menswear suit",
    href: "/shops#fashion-luxury",
  },
  {
    title: "Cameras & Optics",
    desc: "Leica, Zeiss, and Rollei — specialist sourcing for collectors and professionals.",
    img: "/images/pillar-cameras.jpg",
    imgAlt: "Leica branded camera film boxes",
    href: "/shops#cameras-optics",
  },
  {
    title: "Smart Home & Audio",
    desc: "Sennheiser, Beyerdynamic, and AVM — German-engineered audio and smart home technology.",
    img: "/images/pillar-smarthome.jpg",
    imgAlt: "Premium over-ear headphones",
    href: "/shops#smart-home-audio",
  },
  {
    title: "Health & Beauty",
    desc: "Weleda, Dr. Hauschka, and DM — certified natural skincare and health products.",
    img: "/images/pillar-health.jpg",
    imgAlt: "Natural beauty and skincare products",
    href: "/shops#health-beauty",
  },
];

const trustPoints = [
  {
    icon: <IconShield />,
    title: "DDP Shipping — Zero Surprises",
    desc: "All customs duties and taxes are paid before your parcel leaves Germany. What you see is what you pay.",
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

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-zinc-950 text-white py-28 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-industry.jpg"
            alt="German industrial engineering machinery"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.25em] mb-5" style={{ color: GOLD }}>
            Germany → Worldwide
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
            Your Direct Line<br />to Germany
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            We buy any product from Germany and ship it to your door — customs paid,
            premium packaging, no hidden fees. Ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/estimator"
              className="px-8 py-3.5 rounded font-semibold text-black transition-colors"
              style={{ backgroundColor: GOLD }}
            >
              Get a Price Estimate
            </Link>
            <Link
              href="/how-it-works"
              className="px-8 py-3.5 rounded font-semibold text-white border border-zinc-600 hover:border-zinc-400 transition-colors"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-zinc-900 text-white border-y border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm">
          {[
            ["5–8 days", "to Singapore"],
            ["6–10 days", "to Australia"],
            ["4 regions", "Singapore, AU, CA, USA"],
            ["DDP", "duties always included"],
          ].map(([val, label]) => (
            <div key={val}>
              <p className="text-xl font-bold" style={{ color: GOLD }}>{val}</p>
              <p className="text-zinc-400 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Pillars */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2 text-center">Specialisations</p>
          <h2 className="text-3xl font-bold text-center mb-3 tracking-tight">Our Expertise Pillars</h2>
          <p className="text-zinc-500 text-center mb-14 max-w-xl mx-auto">
            We don't ship everything — we ship it right. Depth over breadth, every time.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="border border-zinc-200 rounded-lg overflow-hidden hover:border-zinc-400 transition-colors group block"
              >
                <div className="relative h-44 bg-zinc-100">
                  <Image
                    src={p.img}
                    alt={p.imgAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-zinc-900 mb-2 text-sm uppercase tracking-wide">{p.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width image break */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src="/images/banner-porsche.jpg"
          alt="Porsche 911 Turbo S"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-zinc-950/60 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <p className="text-xs uppercase tracking-[0.25em] mb-3" style={{ color: GOLD }}>Made in Germany</p>
            <p className="text-2xl md:text-4xl font-bold tracking-tight max-w-2xl">
              Engineered to a standard, not a price.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2 text-center">Why SourceGermany</p>
          <h2 className="text-3xl font-bold text-center mb-14 tracking-tight">Built Different</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {trustPoints.map((t) => (
              <div key={t.title} className="flex gap-4">
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-black"
                  style={{ backgroundColor: GOLD }}
                >
                  {t.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-1">{t.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works (mini) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2 text-center">The Process</p>
          <h2 className="text-3xl font-bold text-center mb-14 tracking-tight">Simple. Transparent. Reliable.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((s) => (
              <div key={s.n} className="text-center">
                <p className="text-6xl font-bold mb-4" style={{ color: GOLD, opacity: 0.3 }}>{s.n}</p>
                <h3 className="font-semibold text-zinc-900 mb-2 text-lg">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/how-it-works" className="text-sm font-medium underline underline-offset-4 text-zinc-600 hover:text-black">
              Read the full process →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 px-6" style={{ backgroundColor: GOLD }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-4 tracking-tight">Ready to order from Germany?</h2>
          <p className="text-black/70 mb-8 text-lg">
            Use our free cost estimator to see exactly what you'll pay — before you commit.
          </p>
          <Link
            href="/estimator"
            className="inline-flex items-center px-8 py-3.5 rounded font-semibold bg-black text-white hover:bg-zinc-800 transition-colors"
          >
            Calculate My Shipping Cost
          </Link>
        </div>
      </section>
    </div>
  );
}
