import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Stabroek Advisory — Houston-Based LCA Compliance Firm for Guyana's Oil Sector",
  description:
    "Stabroek Advisory is a Houston-based compliance technology and advisory firm serving Guyana's oil and gas sector. Founded by US Gulf Coast energy professionals to bridge the compliance gap for 1,300+ companies filing under the Local Content Act.",
  alternates: {
    canonical: "https://stabroekadvisory.com/about",
  },
  openGraph: {
    title: "About Stabroek Advisory | The US-Guyana Compliance Bridge",
    description:
      "Houston expertise. Georgetown presence. Built for Guyana's oil boom.",
    url: "https://stabroekadvisory.com/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
