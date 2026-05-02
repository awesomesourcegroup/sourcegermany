import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Top German Shops — SourceGermany",
  description: "Our curated directory of the best German online shops by category.",
};

const GOLD = "#C9A84C";

const IconWrench = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
  </svg>
);

const IconCar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="1" y="11" width="22" height="7" rx="1"/>
    <path d="M5 11l2.5-4h9l2.5 4"/>
    <circle cx="7" cy="18" r="1.5"/>
    <circle cx="17" cy="18" r="1.5"/>
  </svg>
);

const IconBag = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 01-8 0"/>
  </svg>
);

const IconCamera = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
    <circle cx="12" cy="13" r="4"/>
  </svg>
);

const IconHeadphones = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M3 18v-6a9 9 0 0118 0v6"/>
    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>
  </svg>
);

const IconLeaf = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M11 20A7 7 0 014 13c0-6 9-9 9-9s9 3 9 9a7 7 0 01-7 7z"/>
    <path d="M4 13l7 7"/>
  </svg>
);

const shops = [
  {
    category: "Tools & Hardware",
    id: "tools-hardware",
    icon: <IconWrench />,
    stores: [
      { name: "Festool Shop", url: "https://www.festool.com", desc: "Official Festool online shop. Premium power tools for professionals." },
      { name: "Würth Online", url: "https://www.wuerth.de", desc: "Germany's largest trade supplier. Fasteners, tools, chemicals, and more." },
      { name: "Knipex", url: "https://www.knipex.com", desc: "World-famous pliers and cutting tools. German family business since 1882." },
      { name: "Bosch Professional", url: "https://www.bosch-professional.com/de/de", desc: "Blue line — the professional-grade Bosch range not sold everywhere." },
      { name: "Contorion", url: "https://www.contorion.de", desc: "Germany's specialist tool B2B marketplace. Huge selection." },
    ],
  },
  {
    category: "Automotive",
    id: "automotive",
    icon: <IconCar />,
    stores: [
      { name: "ATU Auto-Teile-Unger", url: "https://www.atu.de", desc: "Germany's largest auto parts and service chain. OEM and aftermarket parts." },
      { name: "Autodoc", url: "https://www.autodoc.de", desc: "Major German online auto parts retailer. Huge catalogue, fast shipping." },
      { name: "Liqui-Moly Shop", url: "https://www.liqui-moly.com/de", desc: "Germany's premium motor oils, additives, and care products." },
      { name: "Louis Motorrad", url: "https://www.louis.de", desc: "Europe's largest motorcycle gear and accessories retailer." },
    ],
  },
  {
    category: "Fashion & Luxury",
    id: "fashion-luxury",
    icon: <IconBag />,
    stores: [
      { name: "Hugo Boss", url: "https://www.hugoboss.com/de", desc: "Official German store. Suits, casualwear, and accessories." },
      { name: "MCM Worldwide", url: "https://www.mcmworldwide.com/de", desc: "Munich-born luxury leather goods brand." },
      { name: "Lodenfrey", url: "https://www.lodenfrey.com", desc: "Munich's heritage department store. Loden, traditional wear, luxury brands." },
      { name: "Zalando", url: "https://www.zalando.de", desc: "Germany's largest fashion marketplace. 2,000+ brands, easy returns." },
    ],
  },
  {
    category: "Cameras & Optics",
    id: "cameras-optics",
    icon: <IconCamera />,
    stores: [
      { name: "Leica Store", url: "https://leica-camera.com/de-DE", desc: "Official Leica camera and optics store. Wetzlar, Germany." },
      { name: "Calumet Photographic", url: "https://www.calumet.de", desc: "Professional camera and studio equipment. Strong Zeiss selection." },
      { name: "Foto Koch", url: "https://www.fotokoch.de", desc: "Cologne-based specialist. Excellent used Leica and vintage inventory." },
      { name: "Ringfoto", url: "https://www.ringfoto.de", desc: "One of Germany's oldest camera retail networks. Broad range." },
    ],
  },
  {
    category: "Smart Home & Audio",
    id: "smart-home-audio",
    icon: <IconHeadphones />,
    stores: [
      { name: "Sennheiser", url: "https://www.sennheiser.com/de-de", desc: "Official German store. Headphones, microphones, and pro audio." },
      { name: "Beyerdynamic", url: "https://www.beyerdynamic.com", desc: "Heilbronn-made headphones and microphones. Audiophile staple." },
      { name: "AVM Fritz!Box", url: "https://www.fritz.com", desc: "Germany's most popular router and smart home ecosystem." },
      { name: "Conrad Electronic", url: "https://www.conrad.de", desc: "Germany's Farnell/Mouser equivalent. Electronics, components, smart home." },
    ],
  },
  {
    category: "Health & Beauty",
    id: "health-beauty",
    icon: <IconLeaf />,
    stores: [
      { name: "Weleda Shop", url: "https://www.weleda.de", desc: "Certified natural and biodynamic cosmetics. Globally trusted." },
      { name: "Dr. Hauschka", url: "https://www.drhauschka.de", desc: "Biodynamic skincare. Cult classic in dermatology circles." },
      { name: "DM Drogerie", url: "https://www.dm.de", desc: "Germany's pharmacy and beauty chain. Excellent own-brand products." },
      { name: "Beurer", url: "https://www.beurer.com/de", desc: "German health and wellbeing devices. Blood pressure monitors, TENS, massagers." },
    ],
  },
];

export default function ShopsPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-24 px-6 bg-zinc-950 text-white">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>
            Curated Directory
          </p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6">
            TOP GERMAN<br />SHOPS.
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            Germany has thousands of specialist retailers that don&apos;t ship internationally — or make
            it difficult. We&apos;ve curated the best ones by category so you know exactly where to find
            what you need.
          </p>
        </div>
      </section>

      {/* Shop directory */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-20">
          {shops.map((cat, ci) => (
            <ScrollReveal key={cat.category} delay={ci * 40}>
              <div id={cat.id}>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-zinc-900">
                  <span className="text-zinc-700">{cat.icon}</span>
                  <h2 className="text-xl font-bold tracking-tight">{cat.category}</h2>
                  <span className="font-mono text-xs text-zinc-400 ml-auto">
                    {cat.stores.length} shops
                  </span>
                </div>

                {/* Shop cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cat.stores.map((s, si) => (
                    <ScrollReveal key={s.name} delay={si * 50}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-zinc-200 p-5 hover:border-zinc-900 hover:shadow-sm transition-all group block"
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="font-semibold text-zinc-900 text-sm group-hover:underline underline-offset-2">
                            {s.name}
                          </h3>
                          <span className="text-zinc-400 flex-shrink-0 pt-0.5 text-xs font-mono">↗</span>
                        </div>
                        <p className="text-xs text-zinc-500 leading-relaxed">{s.desc}</p>
                      </a>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 overflow-hidden" style={{ backgroundColor: GOLD }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <h2 className="text-5xl font-black text-black leading-none tracking-tighter">
              FOUND<br />SOMETHING<br />YOU WANT?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={120} className="flex flex-col gap-4 md:items-end">
            <p className="text-black/65 text-lg max-w-sm md:text-right">
              Copy the product link and paste it into our estimator — or send it directly to us.
            </p>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href="/estimator"
                className="inline-flex items-center px-6 py-3.5 font-bold bg-black text-white hover:bg-zinc-800 transition-colors text-sm"
              >
                Get a Price Estimate
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3.5 font-bold bg-transparent text-black border-2 border-black hover:bg-black/10 transition-colors text-sm"
              >
                Send Us the Link
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
