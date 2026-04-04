import type { Metadata } from "next";
import LCAFilingCalendarContent from "./LCAFilingCalendarContent";

export const metadata: Metadata = {
  title: "LCA Filing Calendar — Key Deadlines for Local Content Act Compliance in Guyana",
  description:
    "Complete filing calendar for Guyana's Local Content Act. Know your deadlines for Half-Yearly Reports, Annual Local Content Plans, and Master Plans. Never miss a submission.",
  alternates: {
    canonical: "https://stabroekadvisory.com/lca-filing-calendar",
  },
  openGraph: {
    title: "LCA Filing Calendar | Stabroek Advisory",
    description:
      "All mandatory Local Content Act filing deadlines in one place. Half-Yearly Reports, Annual Plans, and Master Plans.",
    url: "https://stabroekadvisory.com/lca-filing-calendar",
  },
};

export default function LCAFilingCalendarPage() {
  return <LCAFilingCalendarContent />;
}
