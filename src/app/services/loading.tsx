export default function ServicesLoading() {
  return (
    <>
      <section className="bg-navy-950 text-white section-padding relative overflow-hidden">
        <div className="container-narrow text-center">
          <div className="h-4 w-24 bg-navy-800 rounded mx-auto mb-4 animate-pulse" />
          <div className="h-10 w-72 bg-navy-800 rounded mx-auto mb-6 animate-pulse" />
          <div className="h-5 w-96 bg-navy-800/50 rounded mx-auto animate-pulse" />
        </div>
      </section>
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-navy-100/50 p-8">
                <div className="w-12 h-12 bg-navy-100 rounded-xl animate-pulse mb-4" />
                <div className="h-5 w-40 bg-navy-100 rounded animate-pulse mb-3" />
                <div className="h-4 w-full bg-navy-50 rounded animate-pulse mb-2" />
                <div className="h-4 w-3/4 bg-navy-50 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
