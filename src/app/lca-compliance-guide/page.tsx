import type { Metadata } from "next";
import LCAComplianceGuideContent from "./LCAComplianceGuideContent";

export const metadata: Metadata = {
  title: "Guyana LCA Compliance Guide: Everything Contractors Need to Know (2026)",
  description:
    "The definitive guide to Guyana Local Content Act compliance for contractors, subcontractors, and licensees. Covers all 5 mandatory filings, deadlines, penalties, the 40 reserved service categories, audit processes, and registration requirements.",
  alternates: {
    canonical: "https://stabroekadvisory.com/lca-compliance-guide",
  },
  openGraph: {
    title: "Guyana LCA Compliance Guide: Everything Contractors Need to Know (2026)",
    description:
      "The definitive guide to Guyana Local Content Act compliance. All 5 mandatory filings, deadlines, penalties, 40 reserved categories, audit processes, and registration.",
    url: "https://stabroekadvisory.com/lca-compliance-guide",
  },
};

const faqItems = [
  {
    question: "What is the Local Content Act 2021 in Guyana?",
    answer:
      "The Local Content Act 2021 (No. 18 of 2021) is Guyana's primary legislation governing the participation of Guyanese nationals and companies in the petroleum sector. It requires all contractors, subcontractors, and licensees to submit 5 mandatory filings per year covering employment, procurement, and capacity development metrics.",
  },
  {
    question: "Who must file reports under Guyana's Local Content Act?",
    answer:
      "All contractors, subcontractors, and licensees engaged in petroleum operations in Guyana must file. This includes operators like ExxonMobil Guyana, service companies such as Halliburton and SLB, shore base operators, catering and logistics firms, marine vessel operators, and any entity in the petroleum supply chain registered on the Local Content Register.",
  },
  {
    question: "What are the deadlines for LCA reports in Guyana?",
    answer:
      "There are 5 mandatory deadlines: H1 Half-Yearly Report due July 30, H2 Half-Yearly Report due January 30, Annual Local Content Plan due 60 days before January 1 (November 1), Local Content Master Plan due within 4 months of a new contract, and Annual Performance Report due 45 days after December 31 (February 14).",
  },
  {
    question: "What are the penalties for non-compliance with Guyana's LCA?",
    answer:
      "Penalties range from GY$1 million to GY$50 million per offence. Additional consequences include suspension or removal from the Local Content Register, rejection or delay of contract approvals, potential revocation of petroleum agreement benefits, and public disclosure as a non-compliant entity.",
  },
  {
    question: "How many reserved service categories are there under the Local Content Act?",
    answer:
      "The Local Content Act designates 40 reserved service categories where Guyanese companies must be given first consideration. These span sectors from Accommodation and Food Services to Waste Management and Remediation, covering the full range of goods and services required in petroleum operations.",
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

export default function LCAComplianceGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <LCAComplianceGuideContent />
    </>
  );
}
