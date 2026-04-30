"use client";

import { useState } from "react";

const GOLD = "#C9A84C";

const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
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
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
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
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
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
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
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
      <section className="py-20 px-6 bg-zinc-950 text-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: GOLD }}>Get in Touch</p>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Have a product link? A question about an order? Want advice on sourcing something specific? Reach out — we're a small team and we respond personally.
          </p>
        </div>
      </section>

      {/* Channels */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {channels.map((c) => (
              <div key={c.title} className="border border-zinc-200 rounded-lg p-6 hover:border-zinc-400 transition-colors">
                <div className="text-2xl mb-4">{c.icon}</div>
                <h3 className="font-semibold text-zinc-900 mb-1">{c.title}</h3>
                <p className="font-mono text-sm text-zinc-700 mb-1">{c.detail}</p>
                <p className="text-xs text-zinc-400 mb-5">{c.note}</p>
                <a href={c.link} className="inline-flex items-center text-sm font-semibold underline underline-offset-4 hover:no-underline" style={{ color: GOLD }}>
                  {c.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section className="py-16 px-6 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 tracking-tight">Send Us a Product Link</h2>
          <p className="text-zinc-500 text-sm mb-8">
            Paste any German product URL below and describe what you need. We'll come back with availability and a full quote.
          </p>

          {status === "success" ? (
            <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 mx-auto mb-3 text-green-600"><polyline points="20 6 9 17 4 12"/></svg>
              <p className="font-semibold text-green-800 mb-1">Message sent!</p>
              <p className="text-sm text-green-700">We'll get back to you within 12 hours.</p>
              <button
                onClick={() => { setStatus("idle"); setForm({ name: "", email: "", destination: "singapore", message: "" }); }}
                className="mt-5 text-sm underline underline-offset-4 text-green-700"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1.5">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full border border-zinc-300 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1.5">Email Address <span className="text-red-400">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full border border-zinc-300 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1.5">Destination Country</label>
                <select
                  name="destination"
                  value={form.destination}
                  onChange={handleChange}
                  className="w-full border border-zinc-300 rounded px-3.5 py-2.5 text-sm focus:outline-none bg-white"
                >
                  <option value="singapore">Singapore</option>
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="usa">United States</option>
                  <option value="other">Other — I'll specify in message</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1.5">Product Link(s) & Message <span className="text-red-400">*</span></label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Paste your German shop URL here, along with any details (size, variant, quantity)…"
                  required
                  className="w-full border border-zinc-300 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:border-transparent resize-none"
                />
              </div>
              {status === "error" && (
                <p className="text-sm text-red-500">Something went wrong. Please email us directly at contact@sourcegermany.com</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3.5 rounded font-semibold text-black disabled:opacity-60 transition-opacity"
                style={{ backgroundColor: GOLD }}
              >
                {status === "sending" ? "Sending…" : "Send Enquiry"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
