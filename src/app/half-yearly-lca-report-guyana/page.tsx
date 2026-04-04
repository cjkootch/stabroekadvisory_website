import type { Metadata } from "next";
import HalfYearlyReportContent from "./HalfYearlyReportContent";

export const metadata: Metadata = {
  title: "Half-Yearly LCA Report Filing Software & Services | LCA Desk",
  description:
    "File your Guyana Half-Yearly LCA Report on time with LCA Desk. Automated data collection, expenditure/employment/capacity sub-reports, comparative analysis narratives, and deadline tracking for H1 (Jul 30) and H2 (Jan 30).",
  alternates: {
    canonical: "https://stabroekadvisory.com/half-yearly-lca-report-guyana",
  },
  openGraph: {
    title: "Half-Yearly LCA Report Filing Software & Services | LCA Desk",
    description:
      "Automate your Guyana Half-Yearly Local Content Report with LCA Desk. Expenditure, employment, and capacity sub-reports prepared accurately and filed on time.",
    url: "https://stabroekadvisory.com/half-yearly-lca-report-guyana",
  },
};

const faqItems = [
  {
    question: "When are Guyana's Half-Yearly LCA Reports due?",
    answer:
      "The H1 report covering January through June is due by July 30. The H2 report covering July through December is due by January 30 of the following year. Both must be filed with the Local Content Secretariat.",
  },
  {
    question: "What data is required for a Half-Yearly LCA Report?",
    answer:
      "Each Half-Yearly Report requires three sub-reports: an Expenditure Sub-Report (local vs. foreign procurement spend), an Employment Sub-Report (Guyanese vs. non-Guyanese headcount and wages), and a Capacity Development Sub-Report (training programs, certifications, and technology transfer activities). A comparative analysis narrative must also accompany the data.",
  },
  {
    question: "What is the comparative analysis narrative in an LCA Half-Yearly Report?",
    answer:
      "The comparative analysis narrative is a written section that accompanies the quantitative data. It explains period-over-period trends in local content performance, identifies reasons for variances against targets, and outlines corrective actions. The Secretariat uses this narrative to assess whether companies are making genuine progress toward local content goals.",
  },
  {
    question: "How does LCA Desk automate Half-Yearly Report filing?",
    answer:
      "LCA Desk connects to your procurement, HR, and finance systems to pull expenditure, employment, and training data automatically. It categorizes vendors by nationality, calculates local content percentages, drafts the comparative analysis narrative using AI, flags data gaps before deadlines, and generates Secretariat-ready reports in the required format.",
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

export default function HalfYearlyReportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HalfYearlyReportContent faqItems={faqItems} />
    </>
  );
}
