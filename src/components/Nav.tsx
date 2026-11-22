"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/second-hand", label: "Second-hand" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Shipping & fees" },
  { href: "/shops", label: "Shops" },
  { href: "/about", label: "About" },
];

export function Logo({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  return (
    <span className={`font-semibold tracking-tight text-[17px] ${className}`}>
      Source<span className={dark ? "text-white/55" : "text-brand"}>Germany</span>
    </span>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-ink/10 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto h-16 flex items-center justify-between gap-6">
        <Link href="/" aria-label="SourceGermany home">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname === l.href ? "text-ink font-medium" : "text-ink/60 hover:text-ink transition-colors"}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex text-sm font-medium px-4 py-2 rounded-md bg-ink text-white hover:bg-brand transition-colors"
        >
          Get a quote
        </Link>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeWidth={1.75} d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink/10 py-3 flex flex-col">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 border-b border-ink/5">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="py-3 font-medium text-brand">
            Get a quote
          </Link>
        </div>
      )}
    </header>
  );
}
