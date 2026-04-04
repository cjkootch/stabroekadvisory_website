import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Stabroek Advisory | The US-Guyana Compliance Bridge",
  description:
    "Houston-based compliance technology and advisory firm serving Guyana's oil sector. Founded by US Gulf Coast energy professionals.",
  openGraph: {
    title: "About | Stabroek Advisory",
    description:
      "Houston expertise. Georgetown presence. Built for Guyana's oil boom.",
    url: "https://stabroekadvisory.com/about",
    siteName: "Stabroek Advisory",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
