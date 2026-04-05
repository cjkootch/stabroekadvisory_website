import type { Metadata } from "next";
import GuyanaLCAReportingContent from "./GuyanaLCAReportingContent";

export const metadata: Metadata = {
  title: "Guyana Local Content Act Reporting Services | Stabroek Advisory",
  description:
    "Expert Guyana Local Content Act reporting services. We handle all 5 mandatory LCA submissions — half-yearly reports, annual plans, performance reports, and master plans — so you stay compliant.",
  alternates: {
    canonical: "https://stabroekadvisory.com/guyana-local-content-act-reporting",
  },
  openGraph: {
    title: "Guyana Local Content Act Reporting Services | Stabroek Advisory",
    description:
      "End-to-end LCA reporting for Guyana's petroleum sector. Half-yearly reports, annual plans, performance reports, and master plans handled by compliance specialists.",
    url: "https://stabroekadvisory.com/guyana-local-content-act-reporting",
  },
};

const faqItems = [
  {
    question: "What reports are required under Guyana's Local Content Act?",
    answer:
      "The Local Content Act 2021 requires five mandatory submissions: two Half-Yearly Reports (H1 due July 30, H2 due January 30), an Annual Local Content Plan (due December 31), an Annual Performance Report (due February 14), and a Local Content Master Plan (due within 4 months of signing a petroleum agreement).",
  },
  {
    question: "Who must file LCA reports in Guyana?",
    answer:
      "All contractors, subcontractors, licensees, and other persons engaged in petroleum operations in Guyana must file LCA reports with the Local Content Secretariat. This includes operators, service companies, and their supply chain partners.",
  },
  {
    question: "What happens if you miss an LCA filing deadline in Guyana?",
    answer:
      "Non-compliance with LCA reporting obligations can result in fines of up to GY$50 million, suspension or removal from the Local Content Register, rejection of contract approvals, and public disclosure as a non-compliant entity.",
  },
  {
    question: "How can Stabroek Advisory help with LCA reporting?",
    answer:
      "Stabroek Advisory provides end-to-end LCA reporting services including data collection and validation, report preparation and narrative drafting, filing with the Local Content Secretariat, and ongoing compliance monitoring powered by the LCA Desk platform.",
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

export default function GuyanaLCAReportingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <GuyanaLCAReportingContent faqItems={faqItems} />
    </>
  );
}
