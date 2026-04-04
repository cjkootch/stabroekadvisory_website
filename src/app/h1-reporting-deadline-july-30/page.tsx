import type { Metadata } from "next";
import H1DeadlineContent from "./H1DeadlineContent";

export const metadata: Metadata = {
  title: "H1 LCA Reporting Deadline July 30 | Guyana Half-Yearly Report",
  description:
    "The H1 Half-Yearly Report under Guyana's Local Content Act covers January to June and is due July 30. Learn what data is required, penalties for late filing, and how to meet your deadline.",
  alternates: {
    canonical: "https://stabroekadvisory.com/h1-reporting-deadline-july-30",
  },
  openGraph: {
    title: "H1 LCA Reporting Deadline July 30 | Stabroek Advisory",
    description:
      "Everything you need to know about the H1 Half-Yearly Report deadline under Guyana's Local Content Act. Due July 30 each year.",
    url: "https://stabroekadvisory.com/h1-reporting-deadline-july-30",
  },
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "When is the H1 LCA report due in Guyana?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The H1 Half-Yearly Report must be submitted to the Local Content Secretariat by July 30 of each year. It covers petroleum operations from January 1 to June 30.",
          },
        },
        {
          "@type": "Question",
          name: "What data is required for the H1 Half-Yearly Report?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The H1 report requires expenditure data broken down by local and foreign spend, employment figures including Guyanese nationals at each level, capacity development activities and spend, and a Comparative Analysis Narrative explaining variances from your Annual Local Content Plan.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if I miss the July 30 H1 deadline?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Late or non-submission of the H1 report can trigger penalties under Section 41 of the Local Content Act, ranging from GY$1 million to GY$50 million. It may also result in suspension from the Local Content Register and delays to contract approvals.",
          },
        },
      ],
    }),
  },
};

export default function H1DeadlinePage() {
  return <H1DeadlineContent />;
}
