"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";

const GOLD = "#C9A84C";

type Destination = "singapore" | "australia" | "canada" | "usa";
type Mode = "ddp" | "dap";

interface Result {
  estimatedTotalEur: number;
  estimatedTotalLocal: string;
  serviceFeeEur: number;
  deliveryDays: string;
  mode: Mode;
  currency: string;
  note: string;
}

const destinations: { key: Destination; label: string; short: string }[] = [
  { key: "singapore", label: "Singapore", short: "SG" },
  { key: "australia", label: "Australia", short: "AU" },
  { key: "canada", label: "Canada", short: "CA" },
  { key: "usa", label: "United States", short: "US" },
];

export default function EstimatorForm() {
  const [itemPrice, setItemPrice] = useState("");
  const [weight, setWeight] = useState("");
  const [destination, setDestination] = useState<Destination>("singapore");
  const [mode, setMode] = useState<Mode>("ddp");
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setResult(null);

    const price = parseFloat(itemPrice);
    const kg = parseFloat(weight);

    if (isNaN(price) || price < 10) {
      setError("Please enter a valid item price (minimum €10).");
      return;
    }
    if (isNaN(kg) || kg < 0.1) {
      setError("Please enter a valid weight (minimum 0.1 kg).");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemPriceEur: price, weightKg: kg, destination, mode }),
      });
      if (!res.ok) throw new Error("Server error");
      const data: Result = await res.json();
      setResult(data);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-7">
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1.5">
            Item Retail Price in Germany (€)
          </label>
          <Input
            type="number"
            min="10"
            max="50000"
            step="1"
            placeholder="e.g. 890"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            required
            className="text-base rounded-none border-zinc-300 focus-visible:ring-[#C9A84C]"
          />
          <p className="text-xs text-zinc-400 mt-1.5">
            The price listed on the German website, including German VAT.
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1.5">
            Estimated Item Weight (kg)
          </label>
          <Input
            type="number"
            min="0.1"
            max="70"
            step="0.1"
            placeholder="e.g. 1.2"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
            className="text-base rounded-none border-zinc-300 focus-visible:ring-[#C9A84C]"
          />
          <p className="text-xs text-zinc-400 mt-1.5">
            Product weight, not including packaging. Check the product page.
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">Destination</label>
          <div className="grid grid-cols-2 gap-2">
            {destinations.map((d) => (
              <button
                key={d.key}
                type="button"
                onClick={() => setDestination(d.key)}
                className={`px-3 py-3 border text-sm font-medium transition-all text-left ${
                  destination === d.key
                    ? "border-2 text-black"
                    : "border-zinc-200 text-zinc-600 hover:border-zinc-400"
                }`}
                style={destination === d.key ? { borderColor: GOLD, backgroundColor: "#FBF4E3" } : {}}
              >
                <span className="font-mono text-xs text-zinc-400 block mb-0.5">{d.short}</span>
                {d.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">Shipping Mode</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setMode("ddp")}
              className={`px-3 py-3.5 border text-sm font-medium transition-all text-left ${
                mode === "ddp" ? "border-2 text-black" : "border-zinc-200 text-zinc-600 hover:border-zinc-400"
              }`}
              style={mode === "ddp" ? { borderColor: GOLD, backgroundColor: "#FBF4E3" } : {}}
            >
              <div className="font-bold mb-0.5">DDP</div>
              <div className="text-xs font-normal opacity-70">All taxes pre-paid</div>
            </button>
            <button
              type="button"
              onClick={() => setMode("dap")}
              className={`px-3 py-3.5 border text-sm font-medium transition-all text-left ${
                mode === "dap" ? "border-2 text-black" : "border-zinc-200 text-zinc-600 hover:border-zinc-400"
              }`}
              style={mode === "dap" ? { borderColor: GOLD, backgroundColor: "#FBF4E3" } : {}}
            >
              <div className="font-bold mb-0.5">DAP</div>
              <div className="text-xs font-normal opacity-70">You pay customs locally</div>
            </button>
          </div>
          <p className="text-xs text-zinc-400 mt-1.5">
            DDP = Delivered Duty Paid. No charges at your door. Recommended.
          </p>
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 font-bold text-black transition-opacity disabled:opacity-50 hover:opacity-85 text-sm tracking-wide"
          style={{ backgroundColor: GOLD }}
        >
          {loading ? "Calculating…" : "Calculate My Estimate →"}
        </button>
      </form>

      {/* Result panel */}
      <div className="min-h-[320px] flex items-start">
        {!result && !loading && (
          <div className="w-full border-2 border-dashed border-zinc-200 p-10 text-center text-zinc-400">
            <div className="w-10 h-10 border border-zinc-300 mx-auto mb-4 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
            </div>
            <p className="text-sm">Fill in the form to see your estimated cost</p>
          </div>
        )}
        {loading && (
          <div className="w-full border border-zinc-200 p-10 text-center text-zinc-400">
            <div className="inline-block w-6 h-6 border-2 border-zinc-300 border-t-zinc-700 rounded-full animate-spin mb-3" />
            <p className="text-sm">Calculating your estimate…</p>
          </div>
        )}
        {result && !loading && (
          <div className="w-full border border-zinc-200 overflow-hidden">
            {/* Dark top */}
            <div className="px-6 py-6" style={{ backgroundColor: "#0D0D0D" }}>
              <p className="font-mono text-xs uppercase tracking-[0.25em] mb-2" style={{ color: GOLD }}>
                Your Estimate
              </p>
              <p className="text-4xl font-black text-white tracking-tighter">{result.estimatedTotalLocal}</p>
              <p className="text-zinc-400 text-sm mt-1 font-mono">
                ≈ €{result.estimatedTotalEur.toLocaleString()} EUR
              </p>
            </div>
            {/* White bottom */}
            <div className="px-6 py-5 bg-white space-y-3">
              <div className="flex justify-between text-sm border-b border-zinc-100 pb-3">
                <span className="text-zinc-500">Service fee</span>
                <span className="font-medium font-mono">€{result.serviceFeeEur}</span>
              </div>
              <div className="flex justify-between text-sm border-b border-zinc-100 pb-3">
                <span className="text-zinc-500">Shipping mode</span>
                <span className="font-medium font-mono uppercase">{result.mode}</span>
              </div>
              <div className="flex justify-between text-sm border-b border-zinc-100 pb-3">
                <span className="text-zinc-500">Estimated delivery</span>
                <span className="font-medium">{result.deliveryDays}</span>
              </div>
              <div className="bg-zinc-50 p-3 text-xs text-zinc-500 leading-relaxed">
                {result.note}
              </div>
              <p className="text-xs text-zinc-400">
                * Estimate only. Final quote provided after item confirmation. Exchange rates are indicative.
              </p>
              <a
                href="/contact"
                className="block w-full text-center py-3.5 font-bold text-white text-sm tracking-wide transition-colors hover:opacity-85"
                style={{ backgroundColor: "#0D0D0D" }}
              >
                Proceed to Order →
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
