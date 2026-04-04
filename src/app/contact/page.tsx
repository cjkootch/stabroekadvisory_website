import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Stabroek Advisory — Book a Consultation for LCA Compliance",
  description:
    "Get in touch with Stabroek Advisory for Local Content Act compliance services, LCA Desk software demos, or US market entry advisory. Houston, Texas headquarters. Response within 1 business day.",
  alternates: {
    canonical: "https://stabroekadvisory.com/contact",
  },
  openGraph: {
    title: "Contact Stabroek Advisory | Book a Consultation",
    description:
      "Book a consultation for LCA compliance services and software.",
    url: "https://stabroekadvisory.com/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
