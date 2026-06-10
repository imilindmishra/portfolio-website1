import type { Metadata } from "next";
import { Instrument_Serif, Archivo, Azeret_Mono } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const sans = Archivo({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = Azeret_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Milind Mishra — Software Engineer",
  description:
    "Software engineer building workflow engines, full-stack products and on-chain systems. SDE @ HyperVerge. 8× hackathon winner. Open to SDE roles — June 2026.",
  openGraph: {
    title: "Milind Mishra — Software Engineer",
    description:
      "Workflow engines, 0→1 products, production ops. 93% API cost reduction. 8× hackathon winner.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
