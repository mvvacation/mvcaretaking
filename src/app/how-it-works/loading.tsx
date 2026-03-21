export default function HowItWorksLoading() {
  return (
    <>
      <section className="bg-navy-950 text-white section-padding relative overflow-hidden">
        <div className="container-narrow text-center">
          <div className="h-4 w-28 bg-navy-800 rounded mx-auto mb-4 animate-pulse" />
          <div className="h-10 w-80 bg-navy-800 rounded mx-auto mb-6 animate-pulse" />
          <div className="h-5 w-96 bg-navy-800/50 rounded mx-auto animate-pulse" />
        </div>
      </section>
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 bg-navy-100 rounded-full mx-auto animate-pulse" />
                <div className="h-5 w-32 bg-navy-100 rounded mx-auto animate-pulse" />
                <div className="h-4 w-48 bg-navy-50 rounded mx-auto animate-pulse" />
                <div className="h-4 w-40 bg-navy-50 rounded mx-auto animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
