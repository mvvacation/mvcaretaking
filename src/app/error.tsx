"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error for monitoring — replace with Sentry/external service in production
    if (error) {
      console.error("[MVCaretaking Error]", {
        message: error.message,
        digest: error.digest,
        timestamp: new Date().toISOString(),
        url: typeof window !== "undefined" ? window.location.href : "unknown",
      });
    }
  }, [error]);

  return (
    <section className="bg-navy-950 text-white min-h-[70vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
      <div className="text-center relative px-4">
        <p className="text-gold-500 text-sm font-medium uppercase tracking-luxe mb-4">
          Something Went Wrong
        </p>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
          Unexpected Error
        </h1>
        <p className="text-navy-300 text-lg max-w-md mx-auto mb-2">
          We apologize for the inconvenience. Please try again or return to the
          homepage.
        </p>
        {error?.digest && (
          <p className="text-navy-500 text-xs mb-6">Reference: {error.digest}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={reset} className="btn-primary">
            Try Again
          </button>
          <Link
            href="/"
            className="btn-outline border-white/20 text-white hover:bg-white/10"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
