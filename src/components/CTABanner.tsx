import Link from "next/link";
import GeometricBg from "./GeometricBg";

interface CTABannerProps {
  headline: string;
  body: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

export default function CTABanner({
  headline,
  body,
  primaryCTA,
  secondaryCTA,
}: CTABannerProps) {
  return (
    <section className="relative py-20 overflow-hidden bg-emerald-950">
      <GeometricBg variant="nodes" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-2xl md:text-3xl text-white mb-4">{headline}</h2>
        <p className="text-white/80 text-sm md:text-base mb-8 max-w-xl mx-auto">{body}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryCTA.href}
            className="rounded-md bg-white px-7 py-3 text-sm font-medium text-emerald-900 hover:bg-white/90 transition-colors shadow-lg"
          >
            {primaryCTA.label}
          </Link>
          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className="rounded-md border border-white/40 px-7 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              {secondaryCTA.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
