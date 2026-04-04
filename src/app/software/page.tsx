import type { Metadata } from "next";
import SoftwareContent from "./SoftwareContent";

export const metadata: Metadata = {
  title: "LCA Desk — Local Content Compliance Software | Stabroek Advisory",
  description:
    "The only software built specifically for Guyana's Local Content Act. Manage all five mandatory LCA submissions from a single dashboard.",
  openGraph: {
    title: "LCA Desk | Stabroek Advisory",
    description:
      "Compliance software for Guyana's Local Content Act. Built on the official Version 4.1 guidelines.",
    url: "https://stabroekadvisory.com/software",
    siteName: "Stabroek Advisory",
  },
};

export default function SoftwarePage() {
  return <SoftwareContent />;
}
