"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/second-hand", label: "Second-hand" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Shipping & fees" },
  { href: "/shops", label: "Shops" },
  { href: "/about", label: "About" },
];

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-extrabold tracking-tight text-lg inline-flex items-center gap-2 ${className}`}>
      <span className="w-7 h-7 rounded-lg bg-brand text-white grid place-items-center text-sm">S</span>
      <span>
        Source<span className="text-coral">Germany</span>
      </span>
    </span>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 sm:px-4 pt-3">
      <div
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 ${
          scrolled || open ? "bg-white/90 backdrop-blur-md shadow-[0_4px_24px_rgba(23,25,28,0.08)]" : "bg-transparent"
        }`}
      >
        <div className="px-4 sm:px-5 h-14 flex items-center justify-between gap-4">
          <Link href="/" aria-label="SourceGermany home">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-3 py-1.5 rounded-full transition-colors ${
                    active ? "bg-brand-soft text-brand" : "text-ink/70 hover:text-ink hover:bg-ink/5"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full bg-ink text-white hover:bg-brand transition-colors"
          >
            Send a link
            <span aria-hidden>→</span>
          </Link>

          <button
            className="md:hidden p-2 rounded-full hover:bg-ink/5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden max-w-6xl mx-auto mt-2 rounded-3xl bg-white shadow-[0_8px_32px_rgba(23,25,28,0.12)] p-3 flex flex-col text-base font-medium">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-2xl hover:bg-paper"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 text-center px-4 py-3 rounded-full bg-ink text-white font-semibold"
          >
            Send a link →
          </Link>
        </div>
      )}
    </header>
  );
}
