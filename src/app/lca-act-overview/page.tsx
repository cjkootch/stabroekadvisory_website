import type { Metadata } from "next";
import LCAActOverviewContent from "./LCAActOverviewContent";

export const metadata: Metadata = {
  title: "LCA Act Overview — Understanding Guyana's Local Content Act 2021",
  description:
    "A comprehensive overview of Guyana's Local Content Act 2021 (No. 18 of 2021). Understand who must comply, what reports are required, penalties for non-compliance, and key provisions of the Act.",
  alternates: {
    canonical: "https://stabroekadvisory.com/lca-act-overview",
  },
  openGraph: {
    title: "LCA Act Overview | Stabroek Advisory",
    description:
      "Everything you need to know about Guyana's Local Content Act 2021 — obligations, reporting requirements, and penalties.",
    url: "https://stabroekadvisory.com/lca-act-overview",
  },
};

export default function LCAActOverviewPage() {
  return <LCAActOverviewContent />;
}
