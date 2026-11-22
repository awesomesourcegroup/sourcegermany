"use client";

import { useState } from "react";
import { PageHeader } from "@/components/Blocks";

const EMPTY = { name: "", email: "", destination: "", shipping: "not sure", message: "" };

const inputCls =
  "w-full rounded-md border border-ink/20 bg-white px-3.5 py-2.5 text-base focus:outline-none focus:border-ink transition-colors placeholder:text-ink/35";

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
        title="Get a quote"
        intro="Paste a listing from eBay.de, Kleinanzeigen or any German shop. We usually reply within 12 hours with availability and a full quote."
      />

      <section className="px-5 sm:px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Side info */}
          <aside className="lg:col-span-4 lg:order-2 space-y-8 text-sm">
            <div>
              <p className="font-medium">Email</p>
              <a href="mailto:contact@sourcegermany.com" className="mt-1 block text-brand break-all hover:underline">
                contact@sourcegermany.com
              </a>
              <p className="mt-1 text-ink/55">Monday to Saturday</p>
            </div>
            <div>
              <p className="font-medium">For a faster quote</p>
              <ul className="mt-2 space-y-1.5 text-ink/65 leading-relaxed">
                <li>Paste the full link to each listing</li>
                <li>Tell us your country and postcode</li>
                <li>Mention anything we should ask the seller</li>
                <li>Say if you want Express or Paket, or let us suggest</li>
              </ul>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-8 lg:order-1">
            {status === "success" ? (
              <div className="text-center py-10">
                <span className="mx-auto w-12 h-12 rounded-full bg-brand-soft text-brand grid place-items-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <p className="mt-5 font-semibold text-xl">Thanks, we received your request</p>
                <p className="mt-2 text-ink/65">We&apos;ll get back to you within 12 hours.</p>
                <button
                  onClick={() => { setStatus("idle"); setForm(EMPTY); }}
                  className="mt-6 text-sm font-medium text-brand hover:underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5">Your name</label>
                    <input id="name" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                      Email <span className="text-ink/40">*</span>
                    </label>
                    <input id="email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@email.com" required className={inputCls} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="destination" className="block text-sm font-medium mb-1.5">
                      Ship to (country) <span className="text-ink/40">*</span>
                    </label>
                    <input id="destination" type="text" name="destination" value={form.destination} onChange={handleChange} placeholder="e.g. Japan, Brazil, Kenya" required className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="shipping" className="block text-sm font-medium mb-1.5">Shipping preference</label>
                    <select id="shipping" name="shipping" value={form.shipping} onChange={handleChange} className={inputCls}>
                      <option value="not sure">Not sure, show me both</option>
                      <option value="DHL Express">DHL Express (fast)</option>
                      <option value="DHL Paket International">DHL Paket (cheaper)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                    Link(s) and details <span className="text-ink/40">*</span>
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
                  <p className="text-sm text-red-700">
                    Something went wrong. Please email us directly at contact@sourcegermany.com
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="px-6 py-3 rounded-md bg-ink text-white font-medium hover:bg-brand transition-colors disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send request"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
