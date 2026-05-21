import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Stabroek Advisory: Bid Services for LCA-Registered Guyanese Companies",
  description:
    "Stabroek Advisory helps LCA-registered Guyanese companies win local content bids in the petroleum sector, backed by an integrated execution suite: LCA Desk compliance software and Vector Trade Capital supply execution.",
  alternates: {
    canonical: "https://stabroekadvisory.com/about",
  },
  openGraph: {
    title: "About Stabroek Advisory | Built so Guyanese companies win",
    description:
      "Bid services and local content advisory, backed by a coordinated execution suite for Guyana's petroleum sector.",
    url: "https://stabroekadvisory.com/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
