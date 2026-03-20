import Link from "next/link";

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
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/get-a-quote" className="btn-outline border-white/20 text-white hover:bg-white/10">
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
