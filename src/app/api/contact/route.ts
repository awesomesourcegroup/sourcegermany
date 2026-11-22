import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function esc(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, destination, shipping, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const dest = String(destination ?? "").trim() || "not given";

    await resend.emails.send({
      from: "SourceGermany <contact@sourcegermany.com>",
      to: ["contact@sourcegermany.com"],
      replyTo: email,
      subject: `New enquiry${name ? ` from ${String(name).slice(0, 80)}` : ""} | ${dest.slice(0, 60)}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #111;">
          <h2 style="margin-bottom: 4px;">New customer enquiry</h2>
          <hr style="border: none; border-top: 1px solid #eee; margin-bottom: 20px;" />
          ${name ? `<p><strong>Name:</strong> ${esc(name)}</p>` : ""}
          <p><strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
          <p><strong>Ship to:</strong> ${esc(dest)}</p>
          <p><strong>Shipping preference:</strong> ${esc(shipping || "not sure")}</p>
          <p style="margin-top: 16px;"><strong>Links / message:</strong></p>
          <div style="background: #f5f5f5; padding: 14px; border-radius: 6px; white-space: pre-wrap;">${esc(message)}</div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
