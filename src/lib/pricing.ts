"server only";

export type Destination = "singapore" | "australia" | "canada" | "usa";
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
};

const DELIVERY_DAYS: Record<Destination, string> = {
  singapore: "5–8 business days",
  australia: "6–10 business days",
  canada:    "7–12 business days",
  usa:       "5–9 business days",
};

function dhlShippingRate(weightKg: number, destination: Destination): number {
  const w = Math.max(weightKg, 0.5);
  const base: Record<Destination, number> = {
    singapore: 28,
    australia: 38,
    canada:    42,
    usa:       35,
  };
  const perKg: Record<Destination, number> = {
    singapore: 12,
    australia: 16,
    canada:    18,
    usa:       14,
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
  itemPriceEur: number,
  shippingEur: number,
  destination: Destination
): number {
  if (destination === "singapore") {
    return (itemPriceEur + shippingEur) * 0.09;
  }
  if (destination === "australia") {
    const duty = itemPriceEur * 0.05;
    return (itemPriceEur + shippingEur + duty) * 0.10 + duty;
  }
  if (destination === "canada") {
    return (itemPriceEur + shippingEur) * 0.13;
  }
  if (destination === "usa") {
    return itemPriceEur < 800 ? 0 : itemPriceEur * 0.03;
  }
  return 0;
}

export function calculateEstimate(input: EstimateInput): EstimateResult {
  const { itemPriceEur, weightKg, destination, mode } = input;

  const shipping   = dhlShippingRate(weightKg, destination);
  const insurance  = itemPriceEur * 0.01;
  const fee        = serviceFee(itemPriceEur);
  const packaging  = 4.5;
  const taxes      = destinationTaxes(itemPriceEur, shipping, destination);
  const bankFees   = itemPriceEur * 0.015;
  const vat        = vatRefund(itemPriceEur);

  const ddpTotal = itemPriceEur + shipping + insurance + fee + packaging + taxes + bankFees - vat;
  const dapTotal = itemPriceEur + shipping + insurance + fee + packaging + bankFees - vat;

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
