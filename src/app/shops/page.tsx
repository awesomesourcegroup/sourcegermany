import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { CtaBand, PageHeader } from "@/components/Blocks";

export const metadata = {
  title: "German shops & marketplaces | SourceGermany",
  description: "Second-hand marketplaces and specialist German shops we buy from for you, by category.",
};

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

const IconRecycle = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <polyline points="1 4 1 10 7 10" />
    <polyline points="23 20 23 14 17 14" />
    <path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15" />
  </svg>
);

const IconVoltage = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0 mt-0.5">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

type Store = { name: string; url: string; desc: string; tag?: string; logo?: string };

function ShopCard({ s }: { s: Store }) {
  return (
    <a
      href={s.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group h-full flex flex-col rounded-lg bg-white border border-ink/10 hover:border-ink/30 transition-colors overflow-hidden"
    >
      <div className="relative h-20 flex items-center justify-center border-b border-ink/5 px-6">
        {s.logo ? (
          <Image
            src={s.logo}
            alt={s.name}
            fill
            sizes="144px"
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <span className="text-xl font-semibold tracking-tight">{s.name}</span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-medium leading-snug">{s.name}</h3>
          <span className="text-ink/30 group-hover:text-ink transition-colors text-sm">↗</span>
        </div>
        {s.tag && (
          <span className="mt-1 self-start text-xs text-ink/50">
            {s.tag}
          </span>
        )}
        <p className="text-sm text-ink/60 leading-relaxed mt-auto pt-3">{s.desc}</p>
      </div>
    </a>
  );
}

const L = (name: string) => `/images/shops/${name}.png`;

const shops: {
  category: string;
  id: string;
  icon: React.ReactNode;
  note?: React.ReactNode;
  stores: Store[];
}[] = [
  {
    category: "Second-hand marketplaces",
    id: "second-hand",
    icon: <IconRecycle />,
    note: (
      <p className="text-sm text-ink/70 border-l-2 border-brand pl-4 py-1 mb-6">
        Most of our orders come from these two sites. Send us any listing and we deal with the seller,
        collect the item, check it and ship it to you.
      </p>
    ),
    stores: [
      { name: "Kleinanzeigen", url: "https://www.kleinanzeigen.de", desc: "Germany's largest classifieds site. Private sellers, often pickup only. We collect for you.", tag: "Classifieds" },
      { name: "eBay.de",       url: "https://www.ebay.de",          desc: "Auctions and fixed-price listings. We buy or bid from our German account with eBay buyer protection.", tag: "Auctions" },
    ],
  },
  {
    category: "Automotive & Motorsport",
    id: "automotive",
    icon: <IconCar />,
    stores: [
      { name: "ABT Sportsline",       url: "https://www.abt-sportsline.de",         desc: "Ingolstadt-based Audi/VW Group specialist. Factory-approved ECU tunes, aerokit, and suspension upgrades.",                  tag: "Tuning",      logo: L("abt") },
      { name: "AC Schnitzer",         url: "https://www.ac-schnitzer.de",           desc: "Aachen-based BMW and MINI specialist. Aerodynamics, ECU maps, lightweight wheels, and sport exhausts.",                      tag: "Tuning",      logo: L("ac_schnitzer") },
      { name: "KW Automotive",        url: "https://www.kwsuspensions.net/de",       desc: "Fichtenberg-made adjustable coilovers. Fitted OEM on BMW M, Porsche GT3, and Audi RS models.",                             tag: "Suspension",  logo: L("kw") },
      { name: "Eibach",               url: "https://www.eibach.de",                 desc: "Pro-Kit and Sport-Line springs. OEM supplier to Porsche, BMW, and VW. Made in Finnentrop.",                                  tag: "Suspension",  logo: L("eibach") },
      { name: "H&R Spezialfedern",    url: "https://www.h-r.com/de",                desc: "Lennestadt-based coilover and spring specialist since 1981. TÜV-approved for all German marques.",                           tag: "Suspension",  logo: L("hr") },
      { name: "Rieger Tuning",        url: "https://www.rieger-tuning.biz/",          desc: "Body kits, front splitters, and sideskirts for VW, Audi, BMW, and Mercedes. European Certificate approved.",                 tag: "Aerokit",     logo: L("rieger_tuning") },
      { name: "Friedrich Motorsport", url: "https://www.friedrich-motorsport.de",   desc: "Sport exhausts built to TÜV specification in Germany. Notable for VW Golf GTI and Porsche fitments.",                        tag: "Exhaust",     logo: L("friedrich_motorsport") },
      { name: "BBS Germany",          url: "https://www.bbs.com/de",                desc: "Schiltach-forged alloys. Factory fitment on BMW M, Porsche GT, and Mercedes AMG competition cars.",                          tag: "Wheels",      logo: L("bbs") },
      { name: "HMS Performance",      url: "https://hms-performance.com/",          desc: "Hamburg-based performance specialists covering BMW, Mercedes, and VW Group vehicles.",                                        tag: "Tuning",      logo: L("hms") },
      { name: "FVD Brombacher",       url: "https://www.fvd.de",                    desc: "Stuttgart. The definitive Porsche specialist — rare factory options, NOS parts, and authorised servicing.",                   tag: "Porsche",     logo: L("fvd") },
      { name: "Liqui-Moly",           url: "https://www.liqui-moly.com/de",         desc: "Ulm-made premium motor oils, additives, and care products. OEM-approved for BMW, Mercedes, VW, and Audi.",                   tag: "Fluids",      logo: L("liquimoly") },
    ],
  },
  {
    category: "Tools & Hardware",
    id: "tools-hardware",
    icon: <IconWrench />,
    note: (
      <div className="flex items-start gap-2 text-sm text-ink/70 border-l-2 border-ink/20 pl-4 py-1 mb-6">
        <IconVoltage />
        <span>
          <strong>Voltage notice:</strong> Germany uses 230V / 50Hz. Check your local mains voltage and frequency before ordering power tools — a transformer or frequency converter may be required.
        </span>
      </div>
    ),
    stores: [
      { name: "Stahlwille",         url: "https://www.stahlwille.com/de_de",    desc: "Precision torque tools and wrenches trusted in aerospace, motorsport, and automotive manufacturing.",                         logo: L("stahlwille") },
      { name: "HAZET",              url: "https://www.hazet.de/en",             desc: "Remscheid-made hand tools since 1868. Official OEM tool kit supplier to VW Group, BMW, and Porsche.",                         logo: L("hazet") },
      { name: "Contorion",          url: "https://www.contorion.de",            desc: "Germany's specialist tool B2B marketplace. 300,000+ SKUs across all major brands at trade prices.",                           logo: L("contorion") },
      { name: "Walter-Schroeder",   url: "https://www.walter-schroeder.de/en/", desc: "Premium precision measuring instruments, gauges, and calibration equipment for industry and workshops.",        logo: L("walter_schroeder") },
      { name: "Bessey",             url: "https://bessey.de/en-gb",             desc: "Ottenau-made clamping tools since 1889. The global market leader for woodworking and fabrication clamps.",                     logo: L("bessey") },
      { name: "KNIPEX",             url: "https://www.knipex.com",              desc: "Wuppertal-made pliers since 1882. Exported to 100+ countries. The benchmark for grip tools worldwide.",          logo: L("knipex") },
      { name: "Wera Tool Rebels",   url: "https://www.wera.de",                 desc: "Wuppertal-based screwdrivers, bits, and wrenches. Known for ergonomic Kraftform handles and Joker spanners.",  logo: L("wera") },
      { name: "Metabo",             url: "https://www.metabo.com/de",           desc: "Nürtingen. Professional-grade brushless cordless power tools. Strong in metal fabrication and construction.",                 logo: L("metabo") },
      { name: "Festool",            url: "https://www.festool.de",              desc: "Wendlingen. The gold standard in woodworking and construction power tools. Modular systainer ecosystem.",                     logo: L("festool") },
      { name: "Würth",              url: "https://www.wuerth.de",               desc: "Germany's largest trade supplier. Fasteners, chemicals, electrical, and workshop consumables across 80,000+ items.", logo: L("wurth") },
    ],
  },
  {
    category: "Electronics, Cameras & Audio",
    id: "electronics-cameras-audio",
    icon: <IconCamera />,
    note: (
      <div className="flex items-start gap-2 text-sm text-ink/70 border-l-2 border-ink/20 pl-4 py-1 mb-6">
        <IconVoltage />
        <span>
          <strong>Voltage notice:</strong> Germany uses 230V / 50Hz. Check your local mains voltage and frequency before ordering electronics — a transformer or frequency converter may be required.
        </span>
      </div>
    ),
    stores: [
      { name: "Loewe",                  url: "https://www.loewe.tv",                        desc: "Kronach-made premium OLED and QLED televisions. Handcrafted in Bavaria since 1923.",                                                         tag: "TV & Display",  logo: L("loewe") },
      { name: "Lindemann Audio",        url: "https://lindemann-audio.de/en/",              desc: "Munich. High-end streaming DACs and amplifiers. Built in Germany for the most discerning listeners.",                                         tag: "Hi-Fi",         logo: L("lindemann") },
      { name: "Canton",                 url: "https://www.canton.de",                       desc: "Weilrod speaker manufacturer since 1972. From bookshelf to full home cinema, including Smart and Atmos series.",                              tag: "Speakers",      logo: L("canton") },
      { name: "T+A Elektroakustik",     url: "https://www.ta-hifi.de/en/audiosystems/",                     desc: "Herford. Reference-class amplifiers, streamers, and loudspeakers. Built entirely in Germany.",                                                tag: "Hi-Fi",         logo: L("ta") },
      { name: "Loxone",                 url: "https://www.loxone.com",                      desc: "Complete smart home automation. German-engineered Miniserver ecosystem — lighting, HVAC, security, and AV.",                                  tag: "Smart Home",    logo: L("loxone") },
      { name: "Gira",                   url: "https://www.gira.de",                         desc: "Radevormwald. Architect-grade smart switches, door intercoms, and KNX building control systems.",                                             tag: "Smart Home",    logo: L("gira") },
      { name: "Sennheiser",             url: "https://www.sennheiser.com/de-de",            desc: "Wedemark. Audiophile over-ear headphones, in-ear monitors, and professional microphones.",                                                   tag: "Audio",         logo: L("sennheiser") },
      { name: "Nubert",                 url: "https://www.nubert.de",                       desc: "Schwäbisch Gmünd. Direct-sale studio monitors and hi-fi speakers with exceptional price-to-performance.",                                     tag: "Speakers",      logo: L("nubert") },
      { name: "Burmester Audiosysteme", url: "https://www.burmester.de",                    desc: "Berlin. Reference-grade amplifiers and speakers. OEM audio partner for Porsche and Mercedes-Benz.",                                           tag: "Hi-Fi",         logo: L("burmester") },
      { name: "Clearaudio Electronic",  url: "https://www.clearaudio.de",                   desc: "Erlangen. Precision turntables, tonearms, and cartridges for dedicated vinyl enthusiasts.",                                                   tag: "Turntables",    logo: L("clearaudio") },
      { name: "Leica Camera",           url: "https://leica-camera.com/de-DE",              desc: "Wetzlar. The world's most iconic precision camera and optics brand since 1913.",                                                              tag: "Camera",        logo: L("leica") },
      { name: "Zeiss",                  url: "https://www.zeiss.com/consumer-products",     desc: "Oberkochen. Legendary optical precision — camera lenses, binoculars, and sports optics.",                                                    tag: "Optics",        logo: L("zeiss") },
      { name: "Steiner-Optik",          url: "https://www.steiner-optik.de",                desc: "Bayreuth. Military-specification binoculars and hunting optics. Used by armed forces in 50+ countries.",                                     tag: "Optics",        logo: L("steiner") },
      { name: "Minox",                  url: "https://www.minox.com",                       desc: "Wetzlar. Compact cameras and precision optics. Pioneer of subminiature photography, now a premium binocular brand.",                          tag: "Camera",        logo: L("minox") },
      { name: "Rodenstock",             url: "https://www.rodenstock.com/",               desc: "Munich. Precision optical lenses for large format and technical photography. Trusted by studio photographers.",                               tag: "Optics",        logo: L("rodenstock") },
      { name: "Allied Vision",          url: "https://www.alliedvision.com/",             desc: "Stadtroda. Industrial and scientific cameras for machine vision, life sciences, and research applications.",                                      tag: "Camera",        logo: L("allied_vision") },
    ],
  },
  {
    category: "Fashion & Lifestyle",
    id: "fashion-lifestyle",
    icon: <IconBag />,
    stores: [
      { name: "MCM Worldwide",url: "https://www.mcmworldwide.com/de",    desc: "Munich-born luxury leather goods. Visetos monogram bags, wallets, and accessories.",                                                 tag: "Luxury",      logo: L("mcm") },
      { name: "Lodenfrey",    url: "https://www.lodenfrey.com",          desc: "Munich heritage department store since 1842. Loden coats, Trachten, and curated luxury brands.",                                     tag: "Heritage",    logo: L("lodenfrey") },
      { name: "Bogner",       url: "https://www.bogner.com/de-de",       desc: "Munich luxury sportswear since 1932. Performance ski fashion and premium activewear with German craftsmanship.",                     tag: "Sportswear",  logo: L("bogner") },
      { name: "Marc O'Polo",  url: "https://www.marc-o-polo.com/de-de",  desc: "Stephanskirchen. Natural materials and relaxed Scandinavian-German aesthetics. Sustainable contemporary fashion.",                   tag: "Fashion",     logo: L("marc_o_polo") },
      { name: "Drykorn",      url: "https://www.drykorn.com",            desc: "Karlsruhe-based contemporary German fashion brand. Clean tailoring and elevated casualwear.",                                        tag: "Fashion",     logo: L("drykorn") },
      { name: "UF PRO",       url: "https://ufpro.com/de",               desc: "Tactical and outdoor clothing engineered for extreme conditions. Made-in-Germany performance fabric systems.",                       tag: "Tactical",    logo: L("ufpro") },
      { name: "Hessnatur",    url: "https://www.hessnatur.com",          desc: "Butzbach. Germany's leading certified organic and sustainable fashion label. GOTS and Fairtrade certified.",                         tag: "Sustainable", logo: L("hessnatur") },
      { name: "Weleda",       url: "https://www.weleda.de",              desc: "Certified biodynamic cosmetics. Skin Food cult product. Manufactured in Schwäbisch Gmünd since 1921.",                              tag: "Beauty",      logo: L("weleda") },
      { name: "Dr. Hauschka", url: "https://www.drhauschka.de",          desc: "Bad Boll. Biodynamic skincare formulated with Demeter-certified plant extracts. Used by dermatologists worldwide.",                  tag: "Beauty",      logo: L("dr_hauschka") },
      { name: "Beurer",       url: "https://www.beurer.com/de",          desc: "Ulm. German health devices — blood pressure monitors, TENS units, infrared therapy, and wellness products.",                         tag: "Health",      logo: L("beurer") },
    ],
  },
];

export default function ShopsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Where we buy"
        title="Marketplaces and shops"
        intro="Most people ask us for second-hand items from eBay.de and Kleinanzeigen. We also buy new from any German online shop. Below are some we know well."
      >
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {shops.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="text-sm text-ink/60 hover:text-ink underline underline-offset-4 decoration-ink/20">
              {c.category}
            </a>
          ))}
        </div>
      </PageHeader>

      <section className="px-5 sm:px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto space-y-20">
          {shops.map((cat) => (
            <div key={cat.category} id={cat.id} className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-ink/10">
                <span className="text-ink/50">{cat.icon}</span>
                <h2 className="text-2xl font-semibold tracking-tight">{cat.category}</h2>
                <span className="ml-auto text-sm text-ink/45">{cat.stores.length} {cat.stores.length === 1 ? "site" : "sites"}</span>
              </div>

              {cat.note && cat.note}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {cat.stores.map((s, si) => (
                  <ScrollReveal key={s.name} delay={(si % 3) * 50} className="h-full">
                    <ShopCard s={s} />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        title="Found something?"
        text="Send us the link, new or used, and we'll reply with a full quote."
      />
    </div>
  );
}
