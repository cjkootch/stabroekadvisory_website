import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Stabroek Advisory | Book a Consultation",
  description:
    "Get in touch with Stabroek Advisory for LCA compliance services, LCA Desk software, or US market entry advisory. Houston, Texas headquarters.",
  openGraph: {
    title: "Contact | Stabroek Advisory",
    description:
      "Book a consultation for LCA compliance services and software.",
    url: "https://stabroekadvisory.com/contact",
    siteName: "Stabroek Advisory",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
