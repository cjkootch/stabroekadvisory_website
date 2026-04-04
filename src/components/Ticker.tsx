"use client";

const items = [
  { text: "1,300+ Registered LCA Companies", highlight: true },
  { text: "5 Mandatory Filings Per Year", highlight: false },
  { text: "$2B+ in LCA Procurement to Date", highlight: true },
  { text: "GY$50M Maximum Non-Compliance Penalty", highlight: false },
  { text: "Guyana: World's Fastest Growing Economy", highlight: true },
  { text: "Stabroek Block: 11B+ Barrels Recoverable", highlight: false },
  { text: "20+ New LCA Categories Being Added", highlight: false },
  { text: "900,000+ Barrels Per Day Production", highlight: true },
];

export default function Ticker() {
  const content = items.map((item, i) => (
    <span key={i} className="inline-flex items-center gap-3">
      <span className={`${item.highlight ? "text-accent font-medium" : "text-text-secondary"}`}>
        {item.text}
      </span>
      <span className="w-1.5 h-1.5 rounded-full bg-accent/40 flex-shrink-0" />
    </span>
  ));

  return (
    <div className="w-full bg-accent-light/50 border-y border-accent/10 overflow-hidden py-3.5">
      <div
        className="flex whitespace-nowrap items-center gap-3"
        style={{ animation: "scroll 40s linear infinite" }}
      >
        <span className="text-sm tracking-wide px-4 inline-flex items-center gap-3">
          {content}
        </span>
        <span className="text-sm tracking-wide px-4 inline-flex items-center gap-3">
          {content}
        </span>
        <span className="text-sm tracking-wide px-4 inline-flex items-center gap-3">
          {content}
        </span>
      </div>
    </div>
  );
}
