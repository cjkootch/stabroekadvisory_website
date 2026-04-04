import Link from "next/link";

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
    <section className="bg-accent py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-2xl md:text-3xl text-bg mb-4">{headline}</h2>
        <p className="text-bg/80 text-sm md:text-base mb-8 max-w-xl mx-auto">{body}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryCTA.href}
            className="rounded-md bg-bg px-7 py-3 text-sm font-medium text-accent hover:bg-bg/90 transition-colors"
          >
            {primaryCTA.label}
          </Link>
          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className="rounded-md border border-bg px-7 py-3 text-sm font-medium text-bg hover:bg-bg/10 transition-colors"
            >
              {secondaryCTA.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
