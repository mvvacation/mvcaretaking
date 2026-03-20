import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog — Martha's Vineyard Caretaking Tips & Guides",
  description:
    "Expert guides on Martha's Vineyard property care: storm prep, seasonal checklists, cost breakdowns, and caretaker hiring tips for MV second-home owners.",
  alternates: { canonical: "https://mvcaretaking.com/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy-950 text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
        <div className="container-narrow text-center relative">
          <p className="section-label">Insights & Guides</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold">
            MV Caretaking Blog
          </h1>
          <p className="mt-6 text-lg text-navy-300 max-w-2xl mx-auto">
            Expert guides and tips for Martha&apos;s Vineyard second-home
            owners. Storm prep, seasonal checklists, cost breakdowns, and more.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-navy-100/50 overflow-hidden hover:shadow-luxury transition-shadow duration-300"
              >
                {/* Image placeholder */}
                <div className="aspect-[16/9] bg-gradient-to-br from-navy-50 via-navy-100 to-gold-50 flex flex-col items-center justify-center text-navy-300">
                  <BookOpen className="w-8 h-8 mb-1" />
                  <span className="text-xs">Featured Image</span>
                </div>

                <div className="p-6">
                  <p className="text-xs text-navy-400">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    · {post.author}
                  </p>
                  <h2 className="mt-2 text-xl font-serif font-bold text-navy-900">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-gold-600 transition-colors duration-300"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm text-navy-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-block text-sm font-medium text-gold-600 hover:text-gold-700"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-50">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-serif font-bold text-navy-900">
            Need Help With Your MV Property?
          </h2>
          <p className="mt-3 text-navy-600">
            Get matched with a trusted caretaker in less than 2 minutes.
          </p>
          <Link href="/get-a-quote" className="btn-primary mt-6">
            Get a Free Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
