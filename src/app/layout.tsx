import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Inter } from "next/font/google";
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

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-tech",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stabroekadvisory.com"),
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  title: {
    default: "Stabroek Advisory | Local Content Act Compliance Software & Advisory — Guyana Oil Sector",
    template: "%s | Stabroek Advisory",
  },
  description:
    "Stabroek Advisory provides Local Content Act (LCA) compliance software and managed reporting services for contractors, subcontractors, and licensees in Guyana's oil and gas sector. Based in Houston, Texas.",
  keywords: [
    "Guyana local content act",
    "local content act compliance",
    "LCA compliance Guyana",
    "LCA half-yearly report",
    "local content secretariat",
    "Guyana oil sector compliance",
    "LCA Desk",
    "local content reporting software",
    "Guyana petroleum compliance",
    "local content register Guyana",
    "LCA annual plan",
    "LCA master plan",
    "Guyana oil and gas",
    "local content act penalties",
    "Stabroek Advisory",
    "compliance software Guyana",
    "half-yearly report Guyana",
    "local content act 2021",
    "Guyana contractor compliance",
    "oil sector reporting Guyana",
  ],
  authors: [{ name: "Stabroek Advisory LLC" }],
  creator: "Stabroek Advisory LLC",
  publisher: "Stabroek Advisory LLC",
  alternates: {
    canonical: "https://stabroekadvisory.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Stabroek Advisory | Guyana LCA Compliance Software & Advisory",
    description:
      "Local Content Act compliance software (LCA Desk) and managed reporting for contractors and subcontractors in Guyana's petroleum sector.",
    url: "https://stabroekadvisory.com",
    siteName: "Stabroek Advisory",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stabroek Advisory | Guyana LCA Compliance",
    description:
      "Compliance software and advisory services for Guyana's Local Content Act. Built for the oil and gas sector.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://stabroekadvisory.com/#organization",
      name: "Stabroek Advisory LLC",
      url: "https://stabroekadvisory.com",
      description:
        "US-based compliance technology and advisory firm serving Guyana's oil and gas sector under the Local Content Act.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Houston",
        addressRegion: "TX",
        addressCountry: "US",
      },
      email: "info@stabroekadvisory.com",
      sameAs: [],
      knowsAbout: [
        "Guyana Local Content Act",
        "Oil and Gas Compliance",
        "LCA Half-Yearly Report",
        "Local Content Secretariat",
        "Petroleum Sector Compliance",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://stabroekadvisory.com/#website",
      url: "https://stabroekadvisory.com",
      name: "Stabroek Advisory",
      publisher: { "@id": "https://stabroekadvisory.com/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://stabroekadvisory.com/#lcadesk",
      name: "LCA Desk",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "The only compliance software built specifically for Guyana's Local Content Act. Manage all five mandatory LCA submissions from a single dashboard.",
      url: "https://stabroekadvisory.com/lcadesk",
      offers: [
        {
          "@type": "Offer",
          name: "Lite",
          price: "149",
          priceCurrency: "USD",
          billingIncrement: "P1M",
        },
        {
          "@type": "Offer",
          name: "Pro",
          price: "599",
          priceCurrency: "USD",
          billingIncrement: "P1M",
        },
        {
          "@type": "Offer",
          name: "Enterprise",
          price: "1999",
          priceCurrency: "USD",
          billingIncrement: "P1M",
        },
      ],
      provider: { "@id": "https://stabroekadvisory.com/#organization" },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://stabroekadvisory.com/#service",
      name: "Stabroek Advisory — Managed LCA Compliance",
      description:
        "Full-service Local Content Act compliance reporting for contractors and subcontractors in Guyana's oil sector. Half-Yearly Reports, Annual Plans, Master Plans.",
      url: "https://stabroekadvisory.com/services",
      provider: { "@id": "https://stabroekadvisory.com/#organization" },
      areaServed: [
        { "@type": "Country", name: "Guyana" },
        { "@type": "Country", name: "United States" },
      ],
      serviceType: [
        "LCA Half-Yearly Report",
        "Annual Local Content Plan",
        "Local Content Master Plan",
        "Compliance Advisory",
        "US Market Entry Advisory",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-bg font-sans text-text-primary antialiased">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
