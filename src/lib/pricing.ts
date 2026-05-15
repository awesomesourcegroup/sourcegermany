"server only";

export type Destination = "singapore" | "australia" | "canada" | "usa" | "japan";
export type ShippingMode = "ddp" | "dap";

interface EstimateInput {
  itemPriceEur: number;
  weightKg: number;
  destination: Destination;
  mode: ShippingMode;
}

interface EstimateResult {
  estimatedTotalEur: number;
  estimatedTotalLocal: string;
  serviceFeeEur: number;
  deliveryDays: string;
  mode: ShippingMode;
  currency: string;
  note: string;
}

const FX: Record<Destination, { rate: number; currency: string; symbol: string }> = {
  singapore: { rate: 1.44, currency: "SGD", symbol: "S$" },
  australia: { rate: 1.65, currency: "AUD", symbol: "A$" },
  canada:    { rate: 1.50, currency: "CAD", symbol: "C$" },
  usa:       { rate: 1.10, currency: "USD", symbol: "$"  },
  japan:     { rate: 160,  currency: "JPY", symbol: "¥"  },
};

const DELIVERY_DAYS: Record<Destination, string> = {
  singapore: "5–8 business days",
  australia: "6–10 business days",
  canada:    "7–12 business days",
  usa:       "5–9 business days",
  japan:     "5–9 business days",
};

const BROKERAGE_FEE: Record<Destination, number> = {
  singapore: 20,
  australia: 20,
  canada:    15,
  usa:       20,
  japan:     20,
};

const SERVICE_FEE = 10;

function dhlShippingRate(weightKg: number, destination: Destination): number {
  const w = Math.max(weightKg, 0.5);
  const base: Record<Destination, number> = {
    singapore: 28,
    australia: 38,
    canada:    42,
    usa:       35,
    japan:     30,
  };
  const perKg: Record<Destination, number> = {
    singapore: 12,
    australia: 16,
    canada:    18,
    usa:       14,
    japan:     13,
  };
  return base[destination] + w * perKg[destination];
}

function destinationDutyAndTax(
  goodsNet: number,
  cif: number,
  destination: Destination
): { duty: number; tax: number; processing: number } {
  if (destination === "singapore") {
    return { duty: 0, tax: cif * 0.09, processing: 0 };
  }
  if (destination === "australia") {
    const duty = goodsNet * 0.05;
    const processing = goodsNet > 610 ? 59 : 0;
    return { duty, tax: (cif + duty) * 0.10, processing };
  }
  if (destination === "canada") {
    return { duty: 0, tax: cif * 0.13, processing: 0 };
  }
  if (destination === "usa") {
    return { duty: goodsNet * 0.25, tax: 0, processing: 8.4 };
  }
  if (destination === "japan") {
    return { duty: 0, tax: cif * 0.10, processing: 0 };
  }
  return { duty: 0, tax: 0, processing: 0 };
}

export function calculateEstimate(input: EstimateInput): EstimateResult {
  const { itemPriceEur, weightKg, destination, mode } = input;

  const shipping  = dhlShippingRate(weightKg, destination);
  const goodsNet  = itemPriceEur + SERVICE_FEE;
  const insurance = itemPriceEur > 500 ? goodsNet * 0.01 : 0;
  const cif       = goodsNet + shipping + insurance;
  const { duty, tax, processing } = destinationDutyAndTax(goodsNet, cif, destination);
  const brokerage = BROKERAGE_FEE[destination];

  const ddpTotal = goodsNet + shipping + insurance + duty + tax + processing + brokerage;
  const dapTotal = goodsNet + shipping + insurance;

  const totalEur = mode === "ddp" ? ddpTotal : dapTotal;
  const fxInfo   = FX[destination];
  const localAmt = (totalEur * fxInfo.rate).toFixed(0);

  const ddpNote = "All customs duties & taxes included — no surprise fees at delivery.";
  const dapNote = `You will pay customs fees (~${fxInfo.symbol}${Math.round((duty + tax + processing) * fxInfo.rate).toLocaleString()} ${fxInfo.currency}) separately to the courier at delivery.`;

  return {
    estimatedTotalEur: Math.round(totalEur),
    estimatedTotalLocal: `${fxInfo.symbol}${Number(localAmt).toLocaleString()} ${fxInfo.currency}`,
    serviceFeeEur: SERVICE_FEE,
    deliveryDays: DELIVERY_DAYS[destination],
    mode,
    currency: fxInfo.currency,
    note: mode === "ddp" ? ddpNote : dapNote,
  };
}
