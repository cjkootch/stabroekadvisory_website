import type { Metadata } from "next";
import ExecutionSuiteContent from "./ExecutionSuiteContent";

export const metadata: Metadata = {
  title: "The Execution Suite: Bid Services, Compliance Software, and Trade Execution",
  description:
    "Stabroek Advisory is the front door to a coordinated execution suite: Stabroek Advisory for bid services, the LCA Desk compliance platform it is licensed to resell and implement, and its affiliate Vector Trade Capital for principal trade and supply execution. Engage one or all, at arm's length.",
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
