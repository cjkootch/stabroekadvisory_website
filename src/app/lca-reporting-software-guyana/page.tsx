import type { Metadata } from "next";
import LCAReportingSoftwareContent from "./LCAReportingSoftwareContent";

export const metadata: Metadata = {
  title: "LCA Reporting Software for Guyana | AI-Powered Compliance Platform",
  description:
    "LCA Desk is the only purpose-built LCA reporting software for Guyana's petroleum sector. AI-powered narrative drafting, automated gap detection, and Secretariat-ready report generation.",
  alternates: {
    canonical: "https://stabroekadvisory.com/lca-reporting-software-guyana",
  },
  openGraph: {
    title: "LCA Reporting Software for Guyana | AI-Powered Compliance Platform",
    description:
      "Purpose-built LCA compliance software for Guyana. AI narrative drafting, gap detection, deadline tracking, and automated report generation with LCA Desk.",
    url: "https://stabroekadvisory.com/lca-reporting-software-guyana",
  },
};

const faqItems = [
  {
    question: "What is LCA reporting software?",
    answer:
      "LCA reporting software is a purpose-built platform that automates the preparation and filing of Local Content Act reports required under Guyana's petroleum regulations. It replaces manual spreadsheet-based workflows with automated data collection, vendor classification, report generation, and deadline tracking.",
  },
  {
    question: "How is LCA Desk different from using spreadsheets for LCA compliance?",
    answer:
      "Spreadsheets require manual data entry, are prone to formula errors, cannot automatically classify vendors by nationality, and do not generate the comparative analysis narratives required by the Secretariat. LCA Desk automates all of these tasks, reduces errors, and generates Secretariat-ready reports in a fraction of the time.",
  },
  {
    question: "Does LCA Desk use AI for report generation?",
    answer:
      "Yes. LCA Desk uses AI to draft the comparative analysis narratives required in Half-Yearly Reports, identify data gaps and inconsistencies before they become compliance issues, and detect trends in your local content performance that may require attention. All AI-generated content is reviewed by compliance specialists before filing.",
  },
  {
    question: "Can LCA Desk handle reporting for multiple entities?",
    answer:
      "Yes. LCA Desk supports multi-entity reporting, allowing operators and service companies with multiple subsidiaries or projects in Guyana to manage all of their LCA filings from a single platform. Each entity's data is kept separate while enabling consolidated reporting and oversight.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function LCAReportingSoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <LCAReportingSoftwareContent faqItems={faqItems} />
    </>
  );
}
