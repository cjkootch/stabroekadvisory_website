"use client";

const items = [
  "1,300+ Registered LCA Companies",
  "5 Mandatory Filings Per Year",
  "$2B+ in LCA Procurement to Date",
  "GY$50M Maximum Non-Compliance Penalty",
  "Guyana: World's Fastest Growing Economy",
  "Stabroek Block: 11B+ Barrels Recoverable",
  "20+ New LCA Categories Being Added",
  "900,000+ Barrels Per Day Production",
];

export default function Ticker() {
  const content = items.join("  \u00B7  ");

  return (
    <div className="w-full bg-surface border-y border-border overflow-hidden py-3">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "scroll 40s linear infinite" }}
      >
        <span className="text-sm text-text-secondary tracking-wide px-4">
          {content}
        </span>
        <span className="text-sm text-text-secondary tracking-wide px-4">
          {content}
        </span>
        <span className="text-sm text-text-secondary tracking-wide px-4">
          {content}
        </span>
      </div>
    </div>
  );
}
