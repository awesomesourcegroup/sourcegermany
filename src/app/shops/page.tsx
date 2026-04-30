import Link from "next/link";

export const metadata = {
  title: "Top German Shops — SourceGermany",
  description: "Our curated directory of the best German online shops by category.",
};

const GOLD = "#C9A84C";

const shops = [
  {
    category: "Tools & Hardware",
    icon: "🔧",
    stores: [
      { name: "Festool Shop", url: "https://www.festool.com/de", desc: "Official Festool online shop. Premium power tools for professionals." },
      { name: "Würth Online", url: "https://www.wuerth.de", desc: "Germany's largest trade supplier. Fasteners, tools, chemicals, and more." },
      { name: "Knipex", url: "https://www.knipex.com", desc: "World-famous pliers and cutting tools. German family business since 1882." },
      { name: "Bosch Professional", url: "https://www.bosch-professional.com/de/de", desc: "Blue line — the professional-grade Bosch range not sold everywhere." },
      { name: "Contorion", url: "https://www.contorion.de", desc: "Germany's specialist tool B2B marketplace. Huge selection." },
    ],
  },
  {
    category: "Automotive",
    icon: "🚗",
    stores: [
      { name: "Auto-Krause", url: "https://www.auto-krause.de", desc: "OEM and aftermarket parts. Strong on German marques." },
      { name: "ETK / TecDoc", url: "https://www.etk.de", desc: "Professional parts lookup and supply used by German workshops." },
      { name: "Liqui-Moly Shop", url: "https://shop.liqui-moly.com/de", desc: "Germany's premium motor oils, additives, and care products." },
      { name: "Louis Motorrad", url: "https://www.louis.de", desc: "Europe's largest motorcycle gear and accessories retailer." },
    ],
  },
  {
    category: "Fashion & Luxury",
    icon: "👜",
    stores: [
      { name: "Hugo Boss", url: "https://www.hugoboss.com/de", desc: "Official German store. Suits, casualwear, and accessories." },
      { name: "MCM Worldwide", url: "https://www.mcmworldwide.com/de", desc: "Munich-born luxury leather goods brand." },
      { name: "Lodenfrey", url: "https://www.lodenfrey.com", desc: "Munich's heritage department store. Loden, traditional wear, luxury brands." },
      { name: "Zalando", url: "https://www.zalando.de", desc: "Germany's largest fashion marketplace. 2,000+ brands, easy returns." },
    ],
  },
  {
    category: "Cameras & Optics",
    icon: "📷",
    stores: [
      { name: "Leica Store", url: "https://store.leica-camera.com/de", desc: "Official Leica camera and optics store. Wetzlar, Germany." },
      { name: "Calumet Photographic", url: "https://www.calumetphoto.de", desc: "Professional camera and studio equipment. Strong Zeiss selection." },
      { name: "Foto Koch", url: "https://www.fotokoch.de", desc: "Cologne-based specialist. Excellent used Leica and vintage inventory." },
      { name: "Foto Porst", url: "https://www.porst.de", desc: "One of Germany's oldest camera retailers. Broad range." },
    ],
  },
  {
    category: "Smart Home & Audio",
    icon: "🔊",
    stores: [
      { name: "Sennheiser", url: "https://de.sennheiser.com", desc: "Official German store. Headphones, microphones, and pro audio." },
      { name: "Beyerdynamic", url: "https://europe.beyerdynamic.com/de", desc: "Heilbronn-made headphones and microphones. Audiophile staple." },
      { name: "AVM Fritz!Box", url: "https://avm.de", desc: "Germany's most popular router and smart home ecosystem." },
      { name: "Conrad Electronic", url: "https://www.conrad.de", desc: "Germany's Farnell/Mouser equivalent. Electronics, components, smart home." },
    ],
  },
  {
    category: "Health & Beauty",
    icon: "🌿",
    stores: [
      { name: "Weleda Shop", url: "https://shop.weleda.de", desc: "Certified natural and biodynamic cosmetics. Globally trusted." },
      { name: "Dr. Hauschka", url: "https://www.drhauschka.de", desc: "Biodynamic skincare. Cult classic in dermatology circles." },
      { name: "DM Drogerie", url: "https://www.dm.de", desc: "Germany's pharmacy and beauty chain. Excellent own-brand products." },
      { name: "Beurer", url: "https://www.beurer.com/de", desc: "German health and wellbeing devices. Blood pressure monitors, TENS, massagers." },
    ],
  },
];

export default function ShopsPage() {
  return (
    <div>
      <section className="py-20 px-6 bg-zinc-950 text-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: GOLD }}>Curated Directory</p>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Top German Shops</h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Germany has thousands of specialist retailers that don't ship internationally — or make it difficult. We've curated the best ones by category so you know exactly where to find what you need.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-14">
          {shops.map((cat) => (
            <div key={cat.category}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h2 className="text-xl font-bold tracking-tight">{cat.category}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cat.stores.map((s) => (
                  <div key={s.name} className="border border-zinc-200 rounded-lg p-5 hover:border-zinc-400 transition-colors">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-zinc-900 text-sm">{s.name}</h3>
                      <span className="text-xs text-zinc-400 flex-shrink-0 pt-0.5">{s.url.replace("https://", "").split("/")[0]}</span>
                    </div>
                    <p className="text-xs text-zinc-500 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 px-6 bg-zinc-50 border-t border-zinc-200 text-center">
        <p className="text-zinc-600 mb-2 font-medium">Found something you want to order?</p>
        <p className="text-zinc-500 text-sm mb-7">Copy the product link and paste it into our estimator — or send it directly to us.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/estimator" className="inline-flex px-8 py-3.5 rounded font-semibold text-black" style={{ backgroundColor: GOLD }}>
            Get a Price Estimate
          </Link>
          <Link href="/contact" className="inline-flex px-8 py-3.5 rounded font-semibold text-zinc-700 border border-zinc-300 hover:border-zinc-500 bg-white transition-colors">
            Send Us the Link
          </Link>
        </div>
      </section>
    </div>
  );
}
