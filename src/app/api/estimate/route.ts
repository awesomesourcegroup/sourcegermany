export const runtime = "edge";

import { NextRequest, NextResponse } from "next/server";
import { calculateEstimate, type Destination, type ShippingMode } from "@/lib/pricing";

const VALID_DESTINATIONS: Destination[] = ["singapore", "australia", "canada", "usa"];
const VALID_MODES: ShippingMode[] = ["ddp", "dap"];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { itemPriceEur, weightKg, destination, mode } = body;

    if (
      typeof itemPriceEur !== "number" || itemPriceEur < 10 || itemPriceEur > 50000 ||
      typeof weightKg !== "number" || weightKg < 0.1 || weightKg > 70 ||
      !VALID_DESTINATIONS.includes(destination) ||
      !VALID_MODES.includes(mode)
    ) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const result = calculateEstimate({ itemPriceEur, weightKg, destination, mode });
    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
