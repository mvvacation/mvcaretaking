import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogContent } from "@/lib/blog-content";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://mvcaretaking.com/blog/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [
        {
          url: "https://mvcaretaking.com/opengraph-image",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const content = blogContent[params.slug] || "";

  // Estimate reading time from content
  const wordCount = content.split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 250));

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: "https://mvcaretaking.com/opengraph-image",
    author: { "@type": "Person", name: post.author },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    wordCount,
    publisher: {
      "@type": "Organization",
      name: "MVCaretaking",
      url: "https://mvcaretaking.com",
      logo: {
        "@type": "ImageObject",
        url: "https://mvcaretaking.com/opengraph-image",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://mvcaretaking.com/blog/${params.slug}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://mvcaretaking.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://mvcaretaking.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://mvcaretaking.com/blog/${params.slug}` },
    ],
  };

  // Simple markdown-like rendering
  const renderContent = (text: string) => {
    return text
      .trim()
      .split("\n\n")
      .map((block, i) => {
        const trimmed = block.trim();
        if (trimmed.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="text-2xl font-serif font-bold text-navy-900 mt-10 mb-4"
            >
              {trimmed.slice(3)}
            </h2>
          );
        }
        if (trimmed.startsWith("### ")) {
          return (
            <h3
              key={i}
              className="text-xl font-semibold text-navy-900 mt-8 mb-3"
            >
              {trimmed.slice(4)}
            </h3>
          );
        }
        if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
          return (
            <p key={i} className="font-semibold text-navy-900 mt-4 mb-2">
              {trimmed.slice(2, -2)}
            </p>
          );
        }
        if (trimmed.startsWith("- ") || trimmed.startsWith("- [ ]")) {
          const items = trimmed.split("\n").map((line) => line.replace(/^- (\[ \] )?/, "").trim());
          return (
            <ul key={i} className="space-y-1.5 my-3">
              {items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-navy-700">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        if (/^\d+\.\s/.test(trimmed)) {
          const items = trimmed.split("\n").map((line) => line.replace(/^\d+\.\s+/, "").trim());
          return (
            <ol key={i} className="space-y-1.5 my-3 list-decimal list-inside">
              {items.map((item, j) => {
                const parts = item.split(/(\*\*[^*]+\*\*)/g);
                return (
                  <li key={j} className="text-navy-700 leading-relaxed">
                    {parts.map((part, k) =>
                      part.startsWith("**") && part.endsWith("**") ? (
                        <strong key={k} className="font-semibold text-navy-900">
                          {part.slice(2, -2)}
                        </strong>
                      ) : (
                        part
                      )
                    )}
                  </li>
                );
              })}
            </ol>
          );
        }
        // Bold text processing
        const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
        return (
          <p key={i} className="text-navy-700 leading-relaxed mb-4">
            {parts.map((part, j) =>
              part.startsWith("**") && part.endsWith("**") ? (
                <strong key={j} className="font-semibold text-navy-900">
                  {part.slice(2, -2)}
                </strong>
              ) : (
                part
              )
            )}
          </p>
        );
      });
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Header */}
      <section className="bg-navy-950 text-white section-padding pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
        <div className="container-narrow max-w-3xl mx-auto relative">
          <Breadcrumbs dark items={[
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]} />
          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-navy-400">
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            · {post.author} · {readingTime} min read
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-narrow max-w-3xl mx-auto">
          {content ? (
            <div className="prose-like">{renderContent(content)}</div>
          ) : (
            <p className="text-navy-500 italic">
              Full article content coming soon.
            </p>
          )}

          {/* CTA */}
          <div className="mt-16 bg-gold-50/50 rounded-2xl p-8 border border-gold-200/50 text-center">
            <h3 className="text-xl font-serif font-bold text-navy-900">
              Need a Caretaker for Your MV Home?
            </h3>
            <p className="mt-2 text-sm text-navy-600">
              Get matched with vetted providers for free — no obligation.
            </p>
            <Link href="/get-a-quote" className="btn-primary mt-4">
              Get a Free Quote →
            </Link>
          </div>

          {/* Related Articles */}
          {(() => {
            const currentPost = BLOG_POSTS.find((p) => p.slug === params.slug);
            const currentTags = currentPost?.tags || [];
            const related = BLOG_POSTS
              .filter((p) => p.slug !== params.slug)
              .map((p) => ({
                ...p,
                relevance: p.tags?.filter((t) => currentTags.includes(t)).length || 0,
              }))
              .sort((a, b) => b.relevance - a.relevance)
              .slice(0, 3);
            return (
              <div className="mt-16">
                <h3 className="text-xl font-serif font-bold text-navy-900 mb-6">
                  Read Next
                </h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/blog/${r.slug}`}
                      className="group rounded-xl border border-navy-100/50 p-5 hover:shadow-luxury transition-shadow duration-300"
                    >
                      <h4 className="text-sm font-bold text-navy-900 group-hover:text-gold-700 transition-colors leading-snug">
                        {r.title}
                      </h4>
                      <p className="mt-2 text-xs text-navy-500">
                        {r.readingTime} min read
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })()}

          {/* Disclaimer */}
          <p className="mt-8 text-xs text-navy-400 leading-relaxed">
            This article is for informational purposes only and does not
            constitute professional, legal, insurance, or financial advice.
            Consult qualified professionals for guidance specific to your
            property and situation. MVCaretaking.com is a matching service — we
            do not provide caretaking services directly.
          </p>
        </div>
      </section>
    </>
  );
}
