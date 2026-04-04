import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

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
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
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
