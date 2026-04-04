import type { Metadata } from "next";
import LocalContentConsultantContent from "./LocalContentConsultantContent";

export const metadata: Metadata = {
  title: "Guyana Local Content Consultant | Houston-Based LCA Advisory",
  description:
    "Stabroek Advisory is a Houston-based local content consultant specializing in Guyana's LCA compliance. Expert advisory from professionals with deep petroleum-sector experience in both Houston and Georgetown.",
  alternates: {
    canonical: "https://stabroekadvisory.com/guyana-local-content-consultant",
  },
  openGraph: {
    title: "Guyana Local Content Consultant | Houston-Based LCA Advisory",
    description:
      "Houston-based LCA compliance consulting for Guyana's petroleum sector. Dedicated local content expertise from Stabroek Advisory.",
    url: "https://stabroekadvisory.com/guyana-local-content-consultant",
  },
};

const faqItems = [
  {
    question: "Why do I need a dedicated local content consultant for Guyana?",
    answer:
      "Guyana's Local Content Act has unique requirements that general compliance firms rarely understand in depth. A dedicated LCA consultant knows the Secretariat's expectations, common rejection reasons, filing nuances, and how to set realistic targets that satisfy regulators without overcommitting your operations. This specialized knowledge prevents costly errors and enforcement actions.",
  },
  {
    question: "Where is Stabroek Advisory located?",
    answer:
      "Stabroek Advisory is headquartered in Houston, Texas — the center of the global oil and gas industry — with operational presence in Georgetown, Guyana. This dual presence allows us to serve clients where their corporate offices and operational headquarters are located while maintaining direct relationships with the Local Content Secretariat.",
  },
  {
    question: "What services does a local content consultant provide?",
    answer:
      "A local content consultant provides end-to-end LCA compliance services including: assessment of your reporting obligations, preparation and filing of all mandatory reports (half-yearly, annual plan, performance report, master plan), Local Content Register applications, compliance audits, Secretariat liaison, and strategic advisory on meeting local content targets.",
  },
  {
    question: "How much does LCA consulting cost?",
    answer:
      "Consulting fees depend on the scope of your operations, number of entities requiring filings, and the level of support needed. Stabroek Advisory offers both project-based engagements (e.g., a single filing cycle) and ongoing retainer arrangements. Contact us for a tailored quote based on your specific situation.",
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

export default function GuyanaLocalContentConsultantPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <LocalContentConsultantContent faqItems={faqItems} />
    </>
  );
}
