import Link from "next/link";
import { Logo } from "@/components/Nav";

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
    <polygon fill="#17191c" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

const linkCls = "text-white/60 hover:text-white transition-colors";

export default function Footer() {
  return (
    <footer className="bg-ink text-white px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
          <div className="lg:col-span-2 max-w-sm">
            <Logo dark />
            <p className="mt-4 text-white/60 leading-relaxed">
              We buy from German sellers and shops on your behalf, mostly second-hand items from eBay.de and
              Kleinanzeigen, and ship them to you.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.instagram.com/awesomesorcegroup?igsh=eDNjOHp4MzV5ZWVp&utm_source=qr" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className={linkCls}>
                <IconInstagram />
              </a>
              <a href="https://www.tiktok.com/@awesome.source7?_r=1&_t=ZG-96QqACAMrcf" aria-label="TikTok" target="_blank" rel="noopener noreferrer" className={linkCls}>
                <IconTikTok />
              </a>
              <a href="http://www.youtube.com/@AwesomeSourceGroup" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className={linkCls}>
                <IconYouTube />
              </a>
            </div>
          </div>

          <div>
            <p className="font-medium mb-4 text-white">Service</p>
            <ul className="space-y-2.5">
              <li><Link href="/second-hand" className={linkCls}>Second-hand from eBay.de and Kleinanzeigen</Link></li>
              <li><Link href="/how-it-works" className={linkCls}>How it works</Link></li>
              <li><Link href="/pricing" className={linkCls}>Shipping & fees</Link></li>
              <li><Link href="/shops" className={linkCls}>German shops</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-medium mb-4 text-white">Company</p>
            <ul className="space-y-2.5">
              <li><Link href="/why-germany" className={linkCls}>Why Germany</Link></li>
              <li><Link href="/about" className={linkCls}>About us</Link></li>
              <li><Link href="/contact" className={linkCls}>Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} SourceGermany. All rights reserved.</p>
          <p>Not affiliated with eBay, Kleinanzeigen or DHL. Based in Germany, shipping worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
