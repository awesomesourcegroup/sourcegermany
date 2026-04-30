import Link from "next/link";

const GOLD = "#C9A84C";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 text-sm">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
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

        <div>
          <p className="font-semibold text-white mb-3 uppercase tracking-widest text-xs">Follow Us</p>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.12 8.12 0 004.74 1.53V7.04a4.85 4.85 0 01-.97-.35z"/></svg>
                TikTok
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                YouTube
              </a>
            </li>
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
