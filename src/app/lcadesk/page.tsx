import type { Metadata } from "next";
import SoftwareContent from "./SoftwareContent";

export const metadata: Metadata = {
  title: "LCA Desk — Local Content Act Compliance Software for Guyana's Oil Sector",
  description:
    "LCA Desk is the only software built specifically for Guyana's Local Content Act. Manage all five mandatory LCA submissions — Half-Yearly Reports, Annual Plans, Master Plans, and Performance Reports — from a single dashboard. Built on the official Version 4.1 guidelines.",
  alternates: {
    canonical: "https://stabroekadvisory.com/lcadesk",
  },
  openGraph: {
    title: "LCA Desk | Local Content Compliance Software",
    description:
      "The only compliance software built for Guyana's Local Content Act. Enter your data, generate submission-ready reports, stay compliant.",
    url: "https://stabroekadvisory.com/lcadesk",
  },
};

export default function SoftwarePage() {
  return <SoftwareContent />;
}
