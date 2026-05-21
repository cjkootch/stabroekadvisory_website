import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Stabroek Advisory: Book a Consultation for Bid Services",
  description:
    "Get in touch with Stabroek Advisory for bid services, local content advisory, LCA Desk software, or trade execution through Vector Trade Capital. Response within 1 business day.",
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
