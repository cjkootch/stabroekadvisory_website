import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Blog | Stabroek Advisory — Guyana LCA Compliance Insights",
  description:
    "Expert insights on Local Content Act compliance, filing deadlines, penalty risk, and oil sector regulatory updates for Guyana's petroleum industry.",
  openGraph: {
    title: "Blog | Stabroek Advisory",
    description: "LCA compliance insights for Guyana's oil sector.",
    url: "https://stabroekadvisory.com/blog",
    siteName: "Stabroek Advisory",
  },
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">Blog</p>
          <h1 className="font-display text-4xl md:text-5xl text-text-primary mb-4">
            Insights &amp; Analysis
          </h1>
          <p className="text-base text-text-secondary max-w-lg">
            Expert perspectives on Local Content Act compliance, regulatory risk, and Guyana&apos;s oil sector.
          </p>
        </div>

        {/* Featured post */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group block mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-medium uppercase tracking-wider bg-accent/10 text-accent px-2.5 py-1 rounded">
                  {featured.category}
                </span>
                <span className="text-xs text-text-muted">{featured.date}</span>
              </div>
              <h2 className="font-display text-xl md:text-2xl text-text-primary mb-3 group-hover:text-accent transition-colors">
                {featured.title}
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {featured.excerpt}
              </p>
              <span className="text-sm text-accent font-medium">
                Read article &rarr;
              </span>
            </div>
          </div>
        </Link>

        {/* Post grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-medium uppercase tracking-wider bg-accent/10 text-accent px-2.5 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-text-muted">{post.date} · {post.readTime}</span>
                </div>
                <h3 className="font-display text-lg text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
