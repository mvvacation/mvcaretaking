export default function CaretakersLoading() {
  return (
    <>
      <section className="bg-navy-950 text-white section-padding relative overflow-hidden">
        <div className="container-narrow text-center">
          <div className="h-4 w-28 bg-navy-800 rounded mx-auto mb-4 animate-pulse" />
          <div className="h-10 w-72 bg-navy-800 rounded mx-auto mb-6 animate-pulse" />
          <div className="h-5 w-96 bg-navy-800/50 rounded mx-auto animate-pulse" />
        </div>
      </section>
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-navy-100/50 p-8 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="h-6 w-40 bg-navy-100 rounded animate-pulse" />
                  <div className="h-6 w-20 bg-gold-50 rounded-full animate-pulse" />
                </div>
                <div className="h-4 w-56 bg-navy-50 rounded animate-pulse" />
                <div className="flex gap-2 flex-wrap">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <div key={j} className="h-7 w-20 bg-navy-50 rounded-lg animate-pulse" />
                  ))}
                </div>
                <div className="h-10 w-full bg-navy-50 rounded-xl animate-pulse mt-4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
