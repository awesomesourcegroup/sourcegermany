"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const GOLD = "#C9A84C";

const links = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/why-germany", label: "Why Germany" },
  { href: "/shops", label: "Top Shops" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-zinc-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold tracking-tight text-lg">
          <span className={`transition-colors duration-300 ${scrolled ? "text-black" : "text-white"}`}>
            Source
          </span>
          <span style={{ color: GOLD }}>Germany</span>
        </Link>

        <nav
          className={`hidden md:flex items-center gap-7 text-sm font-medium transition-colors duration-300 ${
            scrolled ? "text-zinc-600" : "text-zinc-300"
          }`}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition-colors duration-200 ${scrolled ? "hover:text-black" : "hover:text-white"}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/estimator"
          className={`hidden md:inline-flex items-center text-sm font-semibold px-4 py-2 transition-all duration-300 ${
            scrolled
              ? "bg-black text-white hover:bg-zinc-800"
              : "bg-white/10 text-white border border-white/25 hover:bg-white/20"
          }`}
        >
          Get a Quote
        </Link>

        <button
          className={`md:hidden p-2 transition-colors duration-300 ${scrolled ? "text-zinc-700" : "text-white"}`}
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
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950 px-6 py-4 flex flex-col gap-4 text-sm font-medium text-zinc-300">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/estimator"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center items-center px-4 py-2.5 bg-white text-black font-semibold text-sm"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
