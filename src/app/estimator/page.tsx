import EstimatorForm from "@/components/EstimatorForm";

export const metadata = {
  title: "Cost Estimator — SourceGermany",
  description: "Get an instant shipping cost estimate for your German order — DDP or DAP, fully transparent.",
};

export default function EstimatorPage() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">No surprises</p>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Cost Estimator</h1>
          <p className="text-zinc-500 text-lg leading-relaxed">
            Enter the retail price and weight of your item and we'll show you an estimated
            all-in cost to your door. All taxes, shipping, and our service fee — included.
          </p>
        </div>
        <EstimatorForm />
        <div className="mt-16 pt-12 border-t border-zinc-200 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-semibold mb-2">What's included in the estimate?</h3>
            <ul className="text-zinc-500 space-y-1 text-sm leading-relaxed">
              <li>• German retail item price</li>
              <li>• DHL international shipping</li>
              <li>• Insurance (1% of item value)</li>
              <li>• Our service fee</li>
              <li>• Premium packaging (€4.50)</li>
              <li>• Destination taxes (DDP mode)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">DDP vs DAP — which should I choose?</h3>
            <p className="text-zinc-500 leading-relaxed">
              <strong className="text-zinc-700">DDP</strong> means we pre-pay all customs duties
              and taxes. You pay more upfront but nothing at delivery — no courier surprise charges.<br /><br />
              <strong className="text-zinc-700">DAP</strong> means you pay duties directly to DHL
              when the parcel arrives. Lower upfront cost, but you must pay customs at the border.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">How accurate is this?</h3>
            <p className="text-zinc-500 leading-relaxed">
              The estimate uses real 2026 DHL rates, current German VAT (19%), and destination
              tax rules for each country. It's a reliable ballpark — your confirmed quote will
              be locked in after we verify the item with you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
