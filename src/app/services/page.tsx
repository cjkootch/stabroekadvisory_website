import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Advisory and Compliance Services: Support for Your Bid Pipeline",
  description:
    "Advisory and compliance services that support bid services for LCA-registered Guyanese companies: local content advisory, bid post-mortems, operator relationship support, and managed LCA compliance from $2,500/month.",
  alternates: {
    canonical: "https://stabroekadvisory.com/services",
  },
  openGraph: {
    title: "Advisory and Compliance Services | Stabroek Advisory",
    description:
      "Local content advisory, bid post-mortems, operator relationship support, and managed Local Content Act compliance for Guyana's petroleum sector.",
    url: "https://stabroekadvisory.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
