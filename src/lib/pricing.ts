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

function serviceFee(itemPriceEur: number): number {
  if (itemPriceEur < 100)  return 25;
  if (itemPriceEur < 300)  return 35;
  if (itemPriceEur < 600)  return 50;
  if (itemPriceEur < 1200) return 75;
  return Math.round(itemPriceEur * 0.065);
}

function vatRefund(itemPriceEur: number): number {
  return (itemPriceEur / 1.19) * 0.19;
}

function destinationTaxes(
  cifEur: number,
  itemPriceEur: number,
  destination: Destination
): number {
  if (destination === "singapore") {
    return cifEur * 0.09;
  }
  if (destination === "australia") {
    const duty = itemPriceEur * 0.05;
    const processing = itemPriceEur > 610 ? 59 : 0;
    return (cifEur + duty) * 0.10 + duty + processing;
  }
  if (destination === "canada") {
    return cifEur * 0.13;
  }
  if (destination === "usa") {
    return itemPriceEur * 0.25;
  }
  if (destination === "japan") {
    return cifEur * 0.10;
  }
  return 0;
}

export function calculateEstimate(input: EstimateInput): EstimateResult {
  const { itemPriceEur, weightKg, destination, mode } = input;

  const shipping  = dhlShippingRate(weightKg, destination);
  const insurance = itemPriceEur * 0.01;
  const fee       = serviceFee(itemPriceEur);
  const packaging = 4.5;
  const cif       = itemPriceEur + shipping + insurance;
  const taxes     = destinationTaxes(cif, itemPriceEur, destination);
  const brokerage = BROKERAGE_FEE[destination];
  const vat       = vatRefund(itemPriceEur);

  const ddpTotal = itemPriceEur + shipping + insurance + fee + packaging + taxes + brokerage - vat;
  const dapTotal = itemPriceEur + shipping + insurance + fee + packaging - vat;

  const totalEur = mode === "ddp" ? ddpTotal : dapTotal;
  const fxInfo   = FX[destination];
  const localAmt = (totalEur * fxInfo.rate).toFixed(0);

  const ddpNote  = "All customs duties & taxes included — no surprise fees at delivery.";
  const dapNote  = `You will pay customs fees (~${fxInfo.symbol}${Math.round(taxes * fxInfo.rate).toLocaleString()} ${fxInfo.currency}) separately to the courier at delivery.`;

  return {
    estimatedTotalEur: Math.round(totalEur),
    estimatedTotalLocal: `${fxInfo.symbol}${Number(localAmt).toLocaleString()} ${fxInfo.currency}`,
    serviceFeeEur: fee,
    deliveryDays: DELIVERY_DAYS[destination],
    mode,
    currency: fxInfo.currency,
    note: mode === "ddp" ? ddpNote : dapNote,
  };
}
