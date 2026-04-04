import type { Metadata } from "next";
import AnnualReportContent from "./AnnualReportContent";

export const metadata: Metadata = {
  title: "Guyana Annual Performance Report & Local Content Plan Filing",
  description:
    "Expert filing of Guyana's Annual Performance Report (due Feb 14) and Annual Local Content Plan (due Dec 31). Understand the structure, sub-plans, and how Stabroek Advisory handles both submissions.",
  alternates: {
    canonical: "https://stabroekadvisory.com/annual-performance-report-guyana",
  },
  openGraph: {
    title: "Guyana Annual Performance Report & Local Content Plan Filing",
    description:
      "Complete guide to Guyana's Annual Performance Report and Annual Local Content Plan. Structure, deadlines, and professional filing services.",
    url: "https://stabroekadvisory.com/annual-performance-report-guyana",
  },
};

const faqItems = [
  {
    question: "When is the Annual Performance Report due in Guyana?",
    answer:
      "The Annual Performance Report must be submitted to the Local Content Secretariat by February 14 of the year following the reporting period. For example, the report covering calendar year 2025 is due by February 14, 2026.",
  },
  {
    question: "When is the Annual Local Content Plan due in Guyana?",
    answer:
      "The Annual Local Content Plan must be submitted by December 31 of the year preceding the plan period. For example, a plan covering calendar year 2026 must be filed by December 31, 2025.",
  },
  {
    question: "What is the difference between the Annual Plan and the Annual Performance Report?",
    answer:
      "The Annual Local Content Plan is forward-looking — it sets targets for employment, procurement, and capacity building for the upcoming year. The Annual Performance Report is backward-looking — it measures actual performance against the prior year's plan, explains variances, and details corrective actions taken.",
  },
  {
    question: "What sub-plans are required in the Annual Local Content Plan?",
    answer:
      "The Annual Local Content Plan must include sub-plans for employment (hiring targets by nationality and job category), procurement (projected spend with Guyanese vs. foreign vendors), capacity development (training, certifications, technology transfer), and succession planning (timeline for replacing expatriate roles with Guyanese nationals).",
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

export default function AnnualPerformanceReportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <AnnualReportContent faqItems={faqItems} />
    </>
  );
}
