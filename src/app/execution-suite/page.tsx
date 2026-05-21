import type { Metadata } from "next";
import ExecutionSuiteContent from "./ExecutionSuiteContent";

export const metadata: Metadata = {
  title: "The Execution Suite: Bid Services, Compliance Software, and Trade Execution",
  description:
    "Stabroek Advisory is the front door to a three-brand execution suite under common ownership: Stabroek Advisory for bid services, LCA Desk for compliance software, and Vector Trade Capital for principal trade and supply execution. Engage one or all, at arm's length.",
  alternates: {
    canonical: "https://stabroekadvisory.com/execution-suite",
  },
  openGraph: {
    title: "The Execution Suite | Stabroek Advisory",
    description:
      "One front door to bid services, compliance software, and principal trade execution for Guyana's petroleum sector.",
    url: "https://stabroekadvisory.com/execution-suite",
  },
};

export default function ExecutionSuitePage() {
  return <ExecutionSuiteContent />;
}
