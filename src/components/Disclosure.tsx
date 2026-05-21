import { Scale } from "lucide-react";

interface DisclosureProps {
  variant?: "full" | "compact";
  className?: string;
}

const FULL_TEXT =
  "Stabroek Advisory LLC and Vector Trade Capital LLC are affiliated entities under common ownership. When Stabroek's advisory engagements result in trade execution work performed by VTC, Stabroek may receive a referral fee from VTC. Clients retain full discretion in selecting trade execution partners and are under no obligation to use VTC. All relationships are governed by the engagement letter signed at the start of each project.";

export default function Disclosure({
  variant = "full",
  className = "",
}: DisclosureProps) {
  if (variant === "compact") {
    return (
      <p className={`text-xs text-text-muted leading-relaxed ${className}`}>
        <span className="font-medium text-text-secondary">
          Affiliated-party disclosure.
        </span>{" "}
        {FULL_TEXT}
      </p>
    );
  }

  return (
    <div
      className={`bg-surface border border-border rounded-xl p-6 md:p-8 ${className}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-gold-light flex items-center justify-center flex-shrink-0">
          <Scale size={18} className="text-gold" />
        </div>
        <h3 className="font-display text-base md:text-lg text-text-primary">
          Affiliated-Party Disclosure
        </h3>
      </div>
      <p className="text-sm text-text-secondary leading-relaxed">{FULL_TEXT}</p>
    </div>
  );
}
