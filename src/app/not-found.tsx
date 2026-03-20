import Link from "next/link";

const suggestions = [
  { name: "Services", href: "/services" },
  { name: "Get a Quote", href: "/get-a-quote" },
  { name: "Cost Guide", href: "/cost-guide" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "FAQ", href: "/faq" },
  { name: "Blog", href: "/blog" },
];

export default function NotFound() {
  return (
    <section className="bg-navy-950 text-white min-h-[70vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
      <div className="text-center relative px-4">
        <p className="text-gold-500 text-sm font-medium uppercase tracking-luxe mb-4">
          Page Not Found
        </p>
        <h1 className="text-6xl sm:text-8xl font-serif font-bold mb-4">404</h1>
        <p className="text-navy-300 text-lg max-w-md mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/get-a-quote" className="btn-outline border-white/20 text-white hover:bg-white/10">
            Get a Quote
          </Link>
        </div>
        <div className="max-w-md mx-auto">
          <p className="text-navy-400 text-sm uppercase tracking-luxe mb-4">Popular Pages</p>
          <div className="flex flex-wrap justify-center gap-2">
            {suggestions.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="px-4 py-2 text-sm rounded-lg border border-white/10 text-navy-300 hover:text-white hover:border-white/30 transition-colors"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
