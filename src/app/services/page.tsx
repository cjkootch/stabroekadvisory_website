import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "LCA Compliance Services — Half-Yearly Reports, Annual Plans & Managed Reporting",
  description:
    "Full-service Local Content Act compliance reporting for Guyana's oil and gas sector. We prepare and submit Half-Yearly Reports, Annual Local Content Plans, Master Plans, and handle Secretariat liaison. Full service from $2,500/month.",
  alternates: {
    canonical: "https://stabroekadvisory.com/services",
  },
  openGraph: {
    title: "LCA Compliance Services | Stabroek Advisory",
    description:
      "Managed Local Content Act reporting for contractors and subcontractors in Guyana's petroleum sector. Half-Yearly Reports, Annual Plans, Master Plans.",
    url: "https://stabroekadvisory.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
