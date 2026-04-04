import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "../posts";
import BlogArticle from "./BlogArticle";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Stabroek Advisory Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://stabroekadvisory.com/blog/${post.slug}`,
      siteName: "Stabroek Advisory",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="mx-auto max-w-3xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-text-muted mb-8">
          <Link href="/blog" className="hover:text-accent transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-text-secondary">{post.category}</span>
        </div>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-medium uppercase tracking-wider bg-accent/10 text-accent px-2.5 py-1 rounded">
              {post.category}
            </span>
            <span className="text-xs text-text-muted">{post.date} · {post.readTime}</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl text-text-primary leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-base text-text-secondary leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Featured image */}
        <div className="relative rounded-xl overflow-hidden mb-12 shadow-md">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>

        {/* Article body */}
        <BlogArticle content={post.content} />

        {/* CTA */}
        <div className="mt-16 bg-surface border border-border rounded-xl p-8 text-center">
          <h3 className="font-display text-xl text-text-primary mb-3">
            Need help with your LCA compliance?
          </h3>
          <p className="text-sm text-text-secondary mb-6 max-w-md mx-auto">
            Stabroek Advisory handles mandatory filings for contractors and subcontractors across Guyana&apos;s oil sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="rounded-md bg-accent px-6 py-2.5 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
            >
              Book a Consultation
            </Link>
            <Link
              href="/lcadesk"
              className="rounded-md border border-border px-6 py-2.5 text-sm font-medium text-text-primary hover:border-accent hover:text-accent transition-colors"
            >
              Explore LCA Desk
            </Link>
          </div>
        </div>

        {/* Related posts */}
        {otherPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="font-display text-xl text-text-primary mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group block bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-text-muted">{p.date}</span>
                    <h4 className="text-sm font-medium text-text-primary mt-1 group-hover:text-accent transition-colors">
                      {p.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
