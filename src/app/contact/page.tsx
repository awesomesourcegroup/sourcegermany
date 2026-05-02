"use client";

import { useState } from "react";

const GOLD = "#C9A84C";

const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const channels = [
  {
    icon: <IconMail />,
    title: "Email",
    detail: "contact@sourcegermany.com",
    note: "We respond within 12 hours (Mon–Sat).",
    link: "mailto:contact@sourcegermany.com",
    cta: "Send Email",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.12 8.12 0 004.74 1.53V7.04a4.85 4.85 0 01-.97-.35z" />
      </svg>
    ),
    title: "TikTok",
    detail: "@sourcegermany",
    note: "Product showcases, German shop tours, and tips.",
    link: "#",
    cta: "Follow on TikTok",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    title: "Instagram",
    detail: "@sourcegermany",
    note: "Behind the scenes, product drops, and community.",
    link: "#",
    cta: "Follow on Instagram",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    title: "YouTube",
    detail: "SourceGermany",
    note: "In-depth product reviews, German market guides.",
    link: "#",
    cta: "Subscribe",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", destination: "singapore", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      {/* Header */}
      <section className="py-24 px-6 bg-zinc-950 text-white">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>
            Get in Touch
          </p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6">
            CONTACT US.
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            Have a product link? A question about an order? Want advice on sourcing something
            specific? Reach out — we&apos;re a small team and we respond personally.
          </p>
        </div>
      </section>

      {/* Channels */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="border-t border-zinc-200">
            {channels.map((c) => (
              <div key={c.title} className="border-b border-zinc-200">
                <div className="py-7 grid grid-cols-12 items-center gap-4 group">
                  <div className="col-span-1">
                    <div
                      className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: GOLD, color: "black" }}
                    >
                      {c.icon}
                    </div>
                  </div>
                  <div className="col-span-7 md:col-span-8">
                    <p className="font-semibold text-zinc-900">{c.title}</p>
                    <p className="font-mono text-sm text-zinc-600">{c.detail}</p>
                    <p className="text-xs text-zinc-400 mt-0.5">{c.note}</p>
                  </div>
                  <div className="col-span-4 md:col-span-3 text-right">
                    <a
                      href={c.link}
                      className="inline-flex items-center text-sm font-semibold transition-colors hover:opacity-70"
                      style={{ color: GOLD }}
                    >
                      {c.cta} →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section className="py-20 px-6 bg-zinc-950 text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left: header */}
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.3em] mb-3" style={{ color: GOLD }}>
              Product Enquiry
            </p>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Send Us a<br />Product Link.</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Paste any German product URL and describe what you need. We&apos;ll come back with
              availability and a full quote.
            </p>
          </div>

          {/* Right: form */}
          <div className="md:col-span-8">
            {status === "success" ? (
              <div className="border border-zinc-700 p-10 text-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 mx-auto mb-4" style={{ color: GOLD }}>
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <p className="font-semibold text-white mb-1">Message sent!</p>
                <p className="text-sm text-zinc-400">We&apos;ll get back to you within 12 hours.</p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ name: "", email: "", destination: "singapore", message: "" }); }}
                  className="mt-5 text-sm underline underline-offset-4 text-zinc-400 hover:text-white transition-colors"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full border border-zinc-700 bg-zinc-900 text-white px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors placeholder:text-zinc-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-1.5">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full border border-zinc-700 bg-zinc-900 text-white px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors placeholder:text-zinc-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-1.5">
                    Destination Country
                  </label>
                  <select
                    name="destination"
                    value={form.destination}
                    onChange={handleChange}
                    className="w-full border border-zinc-700 bg-zinc-900 text-white px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
                  >
                    <option value="singapore">Singapore</option>
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">United States</option>
                    <option value="other">Other — I&apos;ll specify in message</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-1.5">
                    Product Link(s) &amp; Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Paste your German shop URL here, along with any details (size, variant, quantity)…"
                    required
                    className="w-full border border-zinc-700 bg-zinc-900 text-white px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors resize-none placeholder:text-zinc-600"
                  />
                </div>
                {status === "error" && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Please email us directly at contact@sourcegermany.com
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 font-bold text-black disabled:opacity-60 transition-opacity hover:opacity-85 text-sm tracking-wide"
                  style={{ backgroundColor: GOLD }}
                >
                  {status === "sending" ? "Sending…" : "Send Enquiry →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
