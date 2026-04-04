import type { Metadata } from "next";
import PenaltiesContent from "./PenaltiesContent";

export const metadata: Metadata = {
  title: "Local Content Act Penalties & Fines in Guyana | What You Risk",
  description:
    "Full breakdown of penalties under Guyana's Local Content Act 2021. Fines from GY$1M to GY$50M, criminal offence provisions, enforcement triggers, and how to avoid non-compliance consequences.",
  alternates: {
    canonical: "https://stabroekadvisory.com/local-content-act-penalties-guyana",
  },
  openGraph: {
    title: "LCA Penalties & Fines in Guyana | Stabroek Advisory",
    description:
      "Understand the penalty structure under Guyana's Local Content Act. Fines up to GY$50 million, criminal provisions, and real consequences for non-compliance.",
    url: "https://stabroekadvisory.com/local-content-act-penalties-guyana",
  },
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What are the penalties for non-compliance with Guyana's Local Content Act?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Under Section 41 of the Local Content Act 2021, penalties range from GY$1 million to GY$50 million per offence. False or misleading submissions constitute a criminal offence that can result in prosecution.",
          },
        },
        {
          "@type": "Question",
          name: "Can you go to jail for LCA non-compliance in Guyana?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The Local Content Act includes criminal offence provisions. Submitting false or misleading information to the Local Content Secretariat is a criminal offence that can result in prosecution beyond financial penalties.",
          },
        },
        {
          "@type": "Question",
          name: "What triggers enforcement action under the Local Content Act?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Enforcement can be triggered by late or non-submission of mandatory reports (Half-Yearly Reports, Annual Plans, Master Plans), providing false or misleading data, failing to give first consideration to Guyanese nationals and companies, or non-compliance with approved Local Content Plans.",
          },
        },
        {
          "@type": "Question",
          name: "How can I avoid LCA penalties in Guyana?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Avoid penalties by submitting all reports on time, ensuring data accuracy through internal validation, maintaining documentation for audit readiness, tracking compliance against your Annual Local Content Plan throughout the year, and working with compliance specialists like Stabroek Advisory.",
          },
        },
      ],
    }),
  },
};

export default function PenaltiesPage() {
  return <PenaltiesContent />;
}
