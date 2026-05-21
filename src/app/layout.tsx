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
  title: {
    default: "Stabroek Advisory | Bid Services for LCA-Registered Guyanese Companies in the Petroleum Sector",
    template: "%s | Stabroek Advisory",
  },
  description:
    "Stabroek Advisory helps LCA-registered Guyanese companies win local content bids in Guyana's petroleum sector. Bid strategy, pricing analysis, and document preparation, backed by an integrated execution suite (LCA Desk and Vector Trade Capital).",
  keywords: [
    "Guyana local content bid services",
    "petroleum bid services Guyana",
    "local content bid strategy",
    "LCA bid preparation",
    "Guyana oil bid consultant",
    "local content act bid evaluation",
    "Guyana local content act",
    "local content act compliance",
    "LCA compliance Guyana",
    "local content secretariat",
    "LCA Desk",
    "Vector Trade Capital",
    "execution suite Guyana",
    "Guyana petroleum sector",
    "local content register Guyana",
    "Stabroek Advisory",
    "local content advisory Guyana",
    "Guyanese supplier petroleum bids",
    "local content act 2021",
    "Guyana oil and gas",
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
    title: "Stabroek Advisory | Bid Services for Guyana's Petroleum Sector",
    description:
      "Bid strategy, pricing analysis, and document preparation for LCA-registered Guyanese companies, backed by an integrated execution suite (LCA Desk and Vector Trade Capital).",
    url: "https://stabroekadvisory.com",
    siteName: "Stabroek Advisory",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stabroek Advisory | Bid Services for Guyana's Petroleum Sector",
    description:
      "We help LCA-registered Guyanese companies win local content bids, and the execution suite delivers when they win.",
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
        "Bid services and local content advisory firm helping LCA-registered Guyanese companies win bids in Guyana's petroleum sector. Part of a three-brand execution suite under common ownership with LCA Desk and Vector Trade Capital LLC.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Houston",
        addressRegion: "TX",
        addressCountry: "US",
      },
      email: "info@stabroekadvisory.com",
      sameAs: ["https://lcadesk.com", "https://vectortradecapital.com"],
      knowsAbout: [
        "Local Content Act Bid Services",
        "Bid Strategy and Pricing",
        "Guyana Local Content Act",
        "Petroleum Sector Procurement",
        "Local Content Secretariat",
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
          name: "Standard",
          price: "500",
          priceCurrency: "USD",
          billingIncrement: "P1M",
        },
        {
          "@type": "Offer",
          name: "Professional",
          price: "750",
          priceCurrency: "USD",
          billingIncrement: "P1M",
        },
      ],
      provider: { "@id": "https://stabroekadvisory.com/#organization" },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://stabroekadvisory.com/#service",
      name: "Stabroek Advisory Bid Services",
      description:
        "Paid bid services for LCA-registered Guyanese companies competing in Guyana's petroleum sector. Bid Readiness Review, Bid Strategy and Pricing, and a Full Bid Retainer, plus local content advisory and managed compliance.",
      url: "https://stabroekadvisory.com/bid-services",
      provider: { "@id": "https://stabroekadvisory.com/#organization" },
      areaServed: [
        { "@type": "Country", name: "Guyana" },
      ],
      serviceType: [
        "Bid Readiness Review",
        "Bid Strategy and Pricing",
        "Full Bid Retainer",
        "Local Content Advisory",
        "Managed LCA Compliance",
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
