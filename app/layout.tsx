import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Partha Sarathy Aila — Senior UI/UX Designer",
  description:
    "Senior UI/UX Designer based in Hyderabad. Designing thoughtful interfaces and product experiences for ambitious teams.",
  metadataBase: new URL("https://parthasarathy934@gmail.com"),
  openGraph: {
    title: "Partha Sarathy Aila — Senior UI/UX Designer",
    description:
      "Selected work, case studies and design experiments by Partha Sarathy Aila.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
