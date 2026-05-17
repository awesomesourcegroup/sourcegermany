import Link from "next/link";

const GOLD = "#C9A84C";


export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 text-sm">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <p className="font-semibold text-white text-base mb-3">
            <span className="text-white">Source</span>
            <span style={{ color: GOLD }}>Germany</span>
          </p>
          <p className="leading-relaxed text-zinc-500">
            Your direct line to premium German products — shipped worldwide with no hidden fees.
          </p>
        </div>

        <div>
          <p className="font-semibold text-white mb-3 uppercase tracking-widest text-xs">Service</p>
          <ul className="space-y-2">
            <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
            <li><Link href="/estimator" className="hover:text-white transition-colors">Cost Estimator</Link></li>
            <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing & Fees</Link></li>
            <li><Link href="/shops" className="hover:text-white transition-colors">Top German Shops</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white mb-3 uppercase tracking-widest text-xs">Company</p>
          <ul className="space-y-2">
            <li><Link href="/why-germany" className="hover:text-white transition-colors">Why Germany</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

      </div>

      <div className="border-t border-zinc-800 max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-zinc-600 text-xs">
        <p>© {new Date().getFullYear()} SourceGermany. All rights reserved.</p>
        <p>Based in Germany · Shipping Worldwide</p>
      </div>
    </footer>
  );
}
