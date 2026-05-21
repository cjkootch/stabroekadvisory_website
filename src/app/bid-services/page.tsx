import type { Metadata } from "next";
import BidServicesContent from "./BidServicesContent";

export const metadata: Metadata = {
  title: "Bid Services for Guyana's Petroleum Sector: Win Local Content Bids",
  description:
    "Stabroek Advisory provides paid bid services for LCA-registered Guyanese companies competing in Guyana's petroleum sector. Bid Readiness Review from $2,500, Bid Strategy and Pricing from $10,000, and a Full Bid Retainer from $4,500/month.",
  alternates: {
    canonical: "https://stabroekadvisory.com/bid-services",
  },
  openGraph: {
    title: "Bid Services | Stabroek Advisory",
    description:
      "Bid strategy, pricing analysis, and document preparation for LCA-registered Guyanese companies bidding in the petroleum sector.",
    url: "https://stabroekadvisory.com/bid-services",
  },
};

export default function BidServicesPage() {
  return <BidServicesContent />;
}
