import type { Metadata } from "next";
import H2DeadlineContent from "./H2DeadlineContent";

export const metadata: Metadata = {
  title: "H2 LCA Reporting Deadline January 30 | Guyana Half-Yearly Report",
  description:
    "The H2 Half-Yearly Report under Guyana's Local Content Act covers July to December and is due January 30. Learn what data is required, year-end reconciliation notes, and how to meet your deadline.",
  alternates: {
    canonical: "https://stabroekadvisory.com/h2-reporting-deadline-january-30",
  },
  openGraph: {
    title: "H2 LCA Reporting Deadline January 30 | Stabroek Advisory",
    description:
      "Everything you need to know about the H2 Half-Yearly Report deadline under Guyana's Local Content Act. Due January 30 each year.",
    url: "https://stabroekadvisory.com/h2-reporting-deadline-january-30",
  },
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "When is the H2 LCA report due in Guyana?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The H2 Half-Yearly Report must be submitted to the Local Content Secretariat by January 30 of the following year. It covers petroleum operations from July 1 to December 31.",
          },
        },
        {
          "@type": "Question",
          name: "How does the H2 report differ from the H1 report?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The H2 report covers the July-December period and includes year-end reconciliation. Because it closes out the calendar year, your Comparative Analysis Narrative must address full-year variances against the Annual Local Content Plan, not just the half-year figures.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if I miss the January 30 H2 deadline?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Late or non-submission of the H2 report can trigger penalties under Section 41 of the Local Content Act, ranging from GY$1 million to GY$50 million. It may also result in suspension from the Local Content Register and delays to contract approvals.",
          },
        },
      ],
    }),
  },
};

export default function H2DeadlinePage() {
  return <H2DeadlineContent />;
}
