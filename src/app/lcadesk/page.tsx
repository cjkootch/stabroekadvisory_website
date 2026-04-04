import type { Metadata } from "next";
import SoftwareContent from "./SoftwareContent";

export const metadata: Metadata = {
  title: "LCA Desk | AI-Powered Local Content Compliance Software for Guyana",
  description:
    "LCA Desk uses AI to draft compliance narratives, detect filing risks, and automate data extraction for Guyana's Local Content Act reporting. The only AI-native LCA compliance platform.",
  alternates: {
    canonical: "https://stabroekadvisory.com/lcadesk",
  },
  openGraph: {
    title: "LCA Desk | AI-Powered Local Content Compliance Software",
    description:
      "The first AI-native compliance platform built for Guyana's Local Content Act. AI narrative drafting, risk detection, and automated data extraction.",
    url: "https://stabroekadvisory.com/lcadesk",
  },
};

export default function SoftwarePage() {
  return <SoftwareContent />;
}
