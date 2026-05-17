import Link from "next/link";

const GOLD = "#C9A84C";

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const IconTikTok = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.23 8.23 0 0 0 4.83 1.56V6.78a4.85 4.85 0 0 1-1.06-.09z" />
  </svg>
);

const IconYouTube = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

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

      <div className="border-t border-zinc-800 max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-600 text-xs">
        <p>© {new Date().getFullYear()} SourceGermany. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/awesomesorcegroup?igsh=eDNjOHp4MzV5ZWVp&utm_source=qr" aria-label="Instagram" target="_blank" rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors">
            <IconInstagram />
          </a>
          <a href="https://www.tiktok.com/@awesome.source7?_r=1&_t=ZG-96QqACAMrcf" aria-label="TikTok" target="_blank" rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors">
            <IconTikTok />
          </a>
          <a href="http://www.youtube.com/@AwesomeSourceGroup" aria-label="YouTube" target="_blank" rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors">
            <IconYouTube />
          </a>
        </div>
        <p>Based in Germany · Shipping Worldwide</p>
      </div>
    </footer>
  );
}
