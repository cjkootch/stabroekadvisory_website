import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Stabroek Advisory | LCA Compliance Software & Advisory for Guyana's Oil Sector",
  description:
    "Stabroek Advisory provides Local Content Act compliance software (LCA Desk) and managed reporting services for contractors and subcontractors in Guyana's oil and gas sector.",
  openGraph: {
    title: "Stabroek Advisory | Guyana LCA Compliance",
    description:
      "Local Content Act compliance software and managed reporting for Guyana's oil sector.",
    url: "https://stabroekadvisory.com",
    siteName: "Stabroek Advisory",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-bg font-sans text-text-primary antialiased">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
