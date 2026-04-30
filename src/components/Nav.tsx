"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/why-germany", label: "Why Germany" },
  { href: "/shops", label: "Top Shops" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-lg">
          <span className="text-black">Source</span><span style={{ color: "#C9A84C" }}>Germany</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-600">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-black transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/estimator"
          className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded bg-black text-white hover:bg-zinc-800 transition-colors"
        >
          Get a Quote
        </Link>

        <button
          className="md:hidden p-2 rounded text-zinc-600"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-zinc-200 bg-white px-6 py-4 flex flex-col gap-4 text-sm font-medium text-zinc-700">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-black">
              {l.label}
            </Link>
          ))}
          <Link
            href="/estimator"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center items-center px-4 py-2 rounded bg-black text-white font-semibold text-sm"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
