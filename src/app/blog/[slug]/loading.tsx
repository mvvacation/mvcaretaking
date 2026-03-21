export default function BlogPostLoading() {
  return (
    <>
      <section className="bg-navy-950 text-white section-padding relative overflow-hidden">
        <div className="container-narrow text-center">
          <div className="h-4 w-20 bg-navy-800 rounded mx-auto mb-4 animate-pulse" />
          <div className="h-10 w-96 bg-navy-800 rounded mx-auto mb-6 animate-pulse" />
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-3 w-24 bg-navy-800/50 rounded animate-pulse" />
            <div className="h-3 w-16 bg-navy-800/50 rounded animate-pulse" />
          </div>
        </div>
      </section>
      <article className="section-padding">
        <div className="container-narrow max-w-3xl mx-auto space-y-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-3">
              {i % 3 === 0 && (
                <div className="h-7 w-64 bg-navy-100 rounded animate-pulse" />
              )}
              <div className="h-4 w-full bg-navy-50 rounded animate-pulse" />
              <div className="h-4 w-11/12 bg-navy-50 rounded animate-pulse" />
              <div className="h-4 w-4/5 bg-navy-50 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
