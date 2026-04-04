import type { Metadata } from "next";
import CompleteGuideContent from "./CompleteGuideContent";

export const metadata: Metadata = {
  title: "Complete Guide to LCA Reporting in Guyana (2026) | Stabroek Advisory",
  description:
    "The definitive guide to Local Content Act reporting in Guyana for 2026. Covers all 5 mandatory submissions, filing deadlines, required data, common mistakes, penalties, and how to automate compliance.",
  alternates: {
    canonical: "https://stabroekadvisory.com/guides/complete-guide-lca-reporting-guyana-2026",
  },
  openGraph: {
    title: "Complete Guide to LCA Reporting in Guyana (2026) | Stabroek Advisory",
    description:
      "Everything you need to know about LCA compliance in Guyana. All 5 mandatory submissions, deadlines, data requirements, penalties, and automation options.",
    url: "https://stabroekadvisory.com/guides/complete-guide-lca-reporting-guyana-2026",
  },
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the Local Content Act in Guyana?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Local Content Act 2021 (No. 18 of 2021) is Guyana's legislation governing the participation of Guyanese nationals and companies in the petroleum sector. It requires all contractors, subcontractors, and licensees to submit regular reports and plans demonstrating local employment, procurement, and capacity development.",
          },
        },
        {
          "@type": "Question",
          name: "Who must file reports under Guyana's Local Content Act?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "All contractors, subcontractors, and licensees engaged in petroleum operations in Guyana must file. This includes operators, service companies, and any entity in the petroleum supply chain. Both Guyanese and foreign-owned companies are subject to the same requirements.",
          },
        },
        {
          "@type": "Question",
          name: "What are the 5 mandatory LCA submissions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The five mandatory submissions are: (1) Local Content Master Plan, due within 4 months of entering a petroleum agreement; (2) Annual Local Content Plan, due before the start of each calendar year; (3) H1 Half-Yearly Report, due July 30; (4) H2 Half-Yearly Report, due January 30; and (5) Annual Performance Report summarizing full-year compliance.",
          },
        },
        {
          "@type": "Question",
          name: "What data do I need for LCA reports in Guyana?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "LCA reports require three categories of data: expenditure (local vs. foreign procurement of goods and services), employment (headcount of Guyanese nationals vs. expatriates by job level), and capacity development (training programmes, scholarships, technology transfer, and associated spend). You also need a Comparative Analysis Narrative explaining variances from your plan.",
          },
        },
        {
          "@type": "Question",
          name: "What are the penalties for LCA non-compliance in Guyana?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Penalties range from GY$1 million to GY$50 million per offence under Section 41 of the Act. False or misleading submissions are a criminal offence. Additional consequences include suspension from the Local Content Register, contract approval delays, and negative impact on bid evaluations.",
          },
        },
      ],
    }),
  },
};

export default function CompleteGuidePage() {
  return <CompleteGuideContent />;
}
