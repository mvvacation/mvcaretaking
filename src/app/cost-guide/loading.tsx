export default function CostGuideLoading() {
  return (
    <>
      <section className="bg-navy-950 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-4 w-32 bg-navy-800 rounded mx-auto mb-4 animate-pulse" />
          <div className="h-10 w-80 bg-navy-800 rounded mx-auto mb-6 animate-pulse" />
          <div className="h-5 w-96 bg-navy-800/50 rounded mx-auto animate-pulse" />
        </div>
      </section>
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-navy-100/50 p-8">
                <div className="h-6 w-48 bg-navy-100 rounded animate-pulse mb-4" />
                <div className="h-4 w-full bg-navy-50 rounded animate-pulse mb-2" />
                <div className="h-4 w-2/3 bg-navy-50 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
