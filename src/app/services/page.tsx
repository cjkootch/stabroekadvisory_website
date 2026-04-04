import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Compliance Services | Stabroek Advisory — Guyana LCA Reporting",
  description:
    "Full-service Local Content Act compliance reporting for Guyana's oil sector. Half-Yearly Reports, Annual Plans, Master Plans, and monthly retainer services.",
  openGraph: {
    title: "Compliance Services | Stabroek Advisory",
    description:
      "LCA compliance services for contractors and subcontractors in Guyana's petroleum sector.",
    url: "https://stabroekadvisory.com/services",
    siteName: "Stabroek Advisory",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
