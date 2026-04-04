import type { Metadata } from "next";
import LocalContentCertificateContent from "./LocalContentCertificateContent";

export const metadata: Metadata = {
  title: "Local Content Certificate & Register in Guyana | How to Apply",
  description:
    "Learn how to apply for a Local Content Certificate and register on Guyana's Local Content Register. Eligibility requirements, application process, and how Stabroek Advisory helps you get registered.",
  alternates: {
    canonical: "https://stabroekadvisory.com/local-content-certificate-guyana",
  },
  openGraph: {
    title: "Local Content Certificate & Register in Guyana | How to Apply",
    description:
      "Complete guide to the Local Content Register and Certificate in Guyana. Eligibility, application process, and expert assistance from Stabroek Advisory.",
    url: "https://stabroekadvisory.com/local-content-certificate-guyana",
  },
};

const faqItems = [
  {
    question: "What is the Local Content Register in Guyana?",
    answer:
      "The Local Content Register is a registry maintained by the Local Content Secretariat under Guyana's Local Content Act 2021. It lists Guyanese nationals and Guyanese-owned companies that are eligible to provide goods and services to the petroleum sector. Registration is a prerequisite for being recognized as a local content provider.",
  },
  {
    question: "Who needs to register on the Local Content Register?",
    answer:
      "Any Guyanese national or Guyanese-owned company that wants to supply goods, services, or labour to petroleum-sector operators and contractors must register. Companies must demonstrate that they are majority Guyanese-owned (51% or more) and have a physical presence in Guyana.",
  },
  {
    question: "How long does Local Content Certificate registration take?",
    answer:
      "The application review process typically takes 4 to 8 weeks after submission of a complete application. Delays commonly occur due to incomplete documentation, missing ownership verification, or capacity evidence that does not meet Secretariat standards. Working with an advisor can help avoid these delays.",
  },
  {
    question: "What is a Local Content Certificate used for?",
    answer:
      "A Local Content Certificate confirms that a company or individual is registered on the Local Content Register and eligible to provide goods and services to the petroleum sector. Operators and contractors are required to give first consideration to certificate holders when sourcing locally, making it essential for winning petroleum-sector contracts.",
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

export default function LocalContentCertificatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <LocalContentCertificateContent faqItems={faqItems} />
    </>
  );
}
