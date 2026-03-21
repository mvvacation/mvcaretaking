export default function WhatIsACaretakerLoading() {
  return (
    <>
      <section className="bg-navy-950 text-white section-padding relative overflow-hidden">
        <div className="container-narrow text-center">
          <div className="h-4 w-20 bg-navy-800 rounded mx-auto mb-4 animate-pulse" />
          <div className="h-10 w-96 bg-navy-800 rounded mx-auto mb-6 animate-pulse" />
          <div className="h-5 w-80 bg-navy-800/50 rounded mx-auto animate-pulse" />
        </div>
      </section>
      <section className="section-padding">
        <div className="container-narrow space-y-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <div className="h-6 w-56 bg-navy-100 rounded animate-pulse" />
              <div className="h-4 w-full bg-navy-50 rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-navy-50 rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-navy-50 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
