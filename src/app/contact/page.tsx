"use client";

import { useState } from "react";
import { PageHeader } from "@/components/Blocks";

const EMPTY = { name: "", email: "", destination: "", shipping: "not sure", message: "" };

const inputCls =
  "w-full rounded-2xl border border-ink/15 bg-paper px-4 py-3 text-base focus:outline-none focus:border-brand focus:bg-white transition-colors placeholder:text-ink/35";

export default function ContactPage() {
  const [form, setForm] = useState(EMPTY);
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
      <PageHeader
        eyebrow="Get a quote"
        title={<>Send us <span className="text-brand">the link.</span></>}
        intro="Paste a listing from eBay.de, Kleinanzeigen or any German shop. We reply personally, usually within 12 hours, with availability and a full quote."
      />

      <section className="px-4 sm:px-6 pb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Side info */}
          <aside className="md:col-span-4 space-y-4">
            <div className="rounded-3xl bg-brand text-white p-7">
              <p className="font-display font-bold text-xl">Prefer email?</p>
              <a href="mailto:contact@sourcegermany.com" className="mt-2 block text-sun font-medium break-all hover:underline">
                contact@sourcegermany.com
              </a>
              <p className="mt-3 text-sm text-white/70">We answer Monday to Saturday.</p>
            </div>
            <div className="rounded-3xl bg-white border border-ink/5 p-7">
              <p className="font-display font-bold text-lg">Tips for a fast quote</p>
              <ul className="mt-3 space-y-2 text-sm text-ink/70 leading-relaxed">
                <li>Paste the full link to each listing</li>
                <li>Tell us your country and postcode</li>
                <li>Mention anything we should ask the seller</li>
                <li>Say if you want Express or Paket, or let us suggest</li>
              </ul>
            </div>
          </aside>

          {/* Form */}
          <div className="md:col-span-8 rounded-3xl bg-white border border-ink/5 p-7 md:p-10">
            {status === "success" ? (
              <div className="text-center py-10">
                <span className="mx-auto w-14 h-14 rounded-full bg-brand-soft text-brand grid place-items-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <p className="mt-5 font-display font-bold text-2xl">Got it, thanks!</p>
                <p className="mt-2 text-ink/65">We&apos;ll get back to you within 12 hours.</p>
                <button
                  onClick={() => { setStatus("idle"); setForm(EMPTY); }}
                  className="mt-6 text-sm font-semibold text-brand hover:text-coral"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-1.5">Your name</label>
                    <input id="name" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-1.5">
                      Email <span className="text-coral">*</span>
                    </label>
                    <input id="email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@email.com" required className={inputCls} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="destination" className="block text-sm font-semibold mb-1.5">
                      Ship to (country) <span className="text-coral">*</span>
                    </label>
                    <input id="destination" type="text" name="destination" value={form.destination} onChange={handleChange} placeholder="e.g. Japan, Brazil, Kenya" required className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="shipping" className="block text-sm font-semibold mb-1.5">Shipping preference</label>
                    <select id="shipping" name="shipping" value={form.shipping} onChange={handleChange} className={inputCls}>
                      <option value="not sure">Not sure, show me both</option>
                      <option value="DHL Express">DHL Express (fast)</option>
                      <option value="DHL Paket International">DHL Paket (cheaper)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-1.5">
                    Link(s) and details <span className="text-coral">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Paste the eBay.de, Kleinanzeigen or shop link here. Add anything we should ask the seller or check."
                    required
                    className={`${inputCls} resize-none`}
                  />
                </div>
                {status === "error" && (
                  <p className="text-sm text-coral">
                    Something went wrong. Please email us directly at contact@sourcegermany.com
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 rounded-full bg-coral text-white font-semibold hover:bg-ink transition-colors disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send request →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
