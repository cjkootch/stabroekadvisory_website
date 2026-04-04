import type { Metadata } from "next";
import ResourcesContent from "./ResourcesContent";

export const metadata: Metadata = {
  title: "LCA Compliance Resources | Guides, Deadlines & Filing Tools",
  description:
    "Guides, filing calendars, penalty references, and compliance tools for Guyana's Local Content Act. Everything you need to understand and meet your LCA obligations.",
  alternates: {
    canonical: "https://stabroekadvisory.com/resources",
  },
  openGraph: {
    title: "LCA Compliance Resources | Stabroek Advisory",
    description:
      "Guides, filing calendars, penalty references, and compliance tools for Guyana's Local Content Act.",
    url: "https://stabroekadvisory.com/resources",
  },
};

export default function ResourcesPage() {
  return <ResourcesContent />;
}
