import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "SourceGermany | Buy second-hand from eBay.de and Kleinanzeigen, shipped worldwide",
  description:
    "Found something on eBay.de or Kleinanzeigen? We deal with the German seller, pick it up, check it and ship it to any country with DHL Express or DHL Paket. New items from any German shop too.",
  keywords: [
    "buy from Kleinanzeigen abroad",
    "eBay.de international shipping",
    "German second-hand proxy",
    "Kleinanzeigen shipping service",
    "buy used items from Germany",
    "German proxy shopping",
    "ship from Germany",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
