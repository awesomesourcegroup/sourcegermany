import EstimatorForm from "@/components/EstimatorForm";

export const metadata = {
  title: "Cost Estimator — SourceGermany",
  description: "Get an instant shipping cost estimate for your German order — DDP or DAP, fully transparent.",
};

const GOLD = "#C9A84C";

export default function EstimatorPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-24 px-6 bg-zinc-950 text-white">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>
            No Surprises
          </p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6">
            COST<br />ESTIMATOR.
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            Enter the retail price and weight of your item and we&apos;ll show you an estimated
            all-in cost to your door. All taxes, shipping, and our service fee — included.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <EstimatorForm />
        </div>
      </section>

      {/* Info footer */}
      <section className="py-16 px-6 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 mb-3">
              What&apos;s included
            </p>
            <ul className="text-zinc-500 space-y-1.5 text-sm leading-relaxed">
              <li>German retail item price</li>
              <li>DHL international shipping</li>
              <li>Insurance (1% of item value)</li>
              <li>Our service fee</li>
              <li>Premium packaging (€4.50)</li>
              <li>Destination taxes (DDP mode)</li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 mb-3">
              DDP vs DAP
            </p>
            <p className="text-zinc-500 leading-relaxed text-sm">
              <strong className="text-zinc-700">DDP</strong> — we pre-pay all customs duties
              and taxes. You pay more upfront but nothing at delivery.
              <br /><br />
              <strong className="text-zinc-700">DAP</strong> — you pay duties directly to DHL
              when the parcel arrives. Lower upfront cost, unpredictable total.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 mb-3">
              Accuracy
            </p>
            <p className="text-zinc-500 leading-relaxed text-sm">
              Uses real 2026 DHL rates, current German VAT (19%), and destination tax rules for
              each country. A reliable ballpark — your confirmed quote is locked in after item
              verification.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
