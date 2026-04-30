export const runtime = "edge";

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const DEST_LABELS: Record<string, string> = {
  singapore: "🇸🇬 Singapore",
  australia: "🇦🇺 Australia",
  canada: "🇨🇦 Canada",
  usa: "🇺🇸 United States",
  other: "Other",
};

export async function POST(req: NextRequest) {
  try {
    const { name, email, destination, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "SourceGermany Enquiries <enquiries@sourcegermany.com>",
      to: ["hello@sourcegermany.com"],
      replyTo: email,
      subject: `New Enquiry${name ? ` from ${name}` : ""} — ${DEST_LABELS[destination] ?? destination}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #111;">
          <h2 style="margin-bottom: 4px;">New Customer Enquiry</h2>
          <hr style="border: none; border-top: 1px solid #eee; margin-bottom: 20px;" />
          ${name ? `<p><strong>Name:</strong> ${name}</p>` : ""}
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Destination:</strong> ${DEST_LABELS[destination] ?? destination}</p>
          <p style="margin-top: 16px;"><strong>Message / Product Link:</strong></p>
          <div style="background: #f5f5f5; padding: 14px; border-radius: 6px; white-space: pre-wrap;">${message}</div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
