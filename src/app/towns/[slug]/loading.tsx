export default function TownLoading() {
  return (
    <>
      <section className="bg-navy-950 text-white section-padding relative overflow-hidden">
        <div className="container-narrow text-center">
          <div className="h-4 w-16 bg-navy-800 rounded mx-auto mb-4 animate-pulse" />
          <div className="h-10 w-72 bg-navy-800 rounded mx-auto mb-6 animate-pulse" />
          <div className="h-5 w-96 bg-navy-800/50 rounded mx-auto animate-pulse" />
        </div>
      </section>
      <section className="section-padding">
        <div className="container-narrow space-y-10">
          <div className="grid md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-navy-100/50 p-6 space-y-3">
                <div className="w-10 h-10 bg-navy-100 rounded-lg animate-pulse" />
                <div className="h-5 w-32 bg-navy-100 rounded animate-pulse" />
                <div className="h-4 w-full bg-navy-50 rounded animate-pulse" />
                <div className="h-4 w-3/4 bg-navy-50 rounded animate-pulse" />
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <div className="h-6 w-48 bg-navy-100 rounded animate-pulse" />
            <div className="h-4 w-full bg-navy-50 rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-navy-50 rounded animate-pulse" />
          </div>
        </div>
      </section>
    </>
  );
}
