import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Three simple steps to get matched with a trusted Martha's Vineyard caretaker. Tell us about your property, we match you with vetted providers, and you choose the best fit.",
  alternates: { canonical: "https://mvcaretaking.com/how-it-works" },
};

const steps = [
  {
    number: "01",
    title: "Tell Us About Your Property",
    description:
      "Start by filling out our quick property questionnaire. We'll ask about your home's location, size, the services you need, and any specific concerns. The form takes about 2 minutes to complete.",
    details: [
      "Property location (town and neighborhood)",
      "Home type and approximate size",
      "Services you're interested in",
      "Current situation — do you have a caretaker? What's missing?",
      "Your preferred budget range",
      "Any special requirements or concerns",
    ],
  },
  {
    number: "02",
    title: "We Match You With Vetted Caretakers",
    description:
      "Based on your property details and needs, we identify the best-fit caretaking professionals from our vetted network. Every provider in our directory meets strict criteria: island residency, insurance/bonding, verified references, and proven track record.",
    details: [
      "We review your submission within 24 hours",
      "Match based on town, services needed, and budget",
      "Only providers who pass our vetting criteria",
      "We verify bonding, insurance, and references",
      "Typically 2-3 matched providers per inquiry",
      "All matching is free — no obligation",
    ],
  },
  {
    number: "03",
    title: "Get Proposals & Choose Your Partner",
    description:
      "Matched caretakers will reach out with personalized proposals. You compare services, pricing, and communication style, then choose the partner that feels right. There's no pressure and no commitment until you decide.",
    details: [
      "Receive personalized proposals from matched providers",
      "Compare services, pricing, and approach side-by-side",
      "Ask questions directly to each provider",
      "Schedule property walk-throughs if desired",
      "Choose your caretaker on your timeline",
      "We follow up to make sure you're happy",
    ],
  },
];

const faqs = [
  {
    q: "How much does it cost to use MVCaretaking?",
    a: "Our matching service is completely free for homeowners. Caretaking providers pay to be listed and receive qualified leads.",
  },
  {
    q: "How quickly will I hear from caretakers?",
    a: "Most matched caretakers respond within 24-48 hours of receiving your inquiry. During peak season (April-June), response times may be slightly longer.",
  },
  {
    q: "What if I don't like any of the matched providers?",
    a: "No problem. There's zero obligation. We can also expand our search or recommend alternative approaches for your specific needs.",
  },
  {
    q: "Are all caretakers bonded and insured?",
    a: "We require proof of liability insurance and encourage bonding for all directory listings. Each provider profile clearly states their credentials.",
  },
];

export default function HowItWorksPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://mvcaretaking.com" },
      { "@type": "ListItem", position: 2, name: "How It Works", item: "https://mvcaretaking.com/how-it-works" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Header */}
      <section className="bg-navy-950 text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
        <div className="container-narrow text-center relative">
          <p className="section-label">Simple Process</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold">
            How MVCaretaking Works
          </h1>
          <p className="mt-6 text-lg text-navy-300 max-w-2xl mx-auto">
            Getting matched with the right caretaker for your Martha&apos;s
            Vineyard home is simple, free, and takes less than 2 minutes.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="space-y-20">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start"
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 text-white text-2xl font-bold mb-6">
                    {step.number}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900">
                    {step.title}
                  </h2>
                  <p className="mt-4 text-navy-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div
                  className={`bg-navy-50 rounded-2xl p-6 ${
                    i % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <h3 className="text-xs font-semibold text-gold-600 uppercase tracking-luxe mb-4">
                    What happens in this step
                  </h3>
                  <ul className="space-y-3">
                    {step.details.map((detail, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm text-navy-700"
                      >
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick FAQs */}
      <section className="section-padding bg-sand-50">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            Common Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-navy-100/50"
              >
                <h3 className="font-semibold text-navy-900">{faq.q}</h3>
                <p className="mt-2 text-sm text-navy-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/faq" className="text-sm text-gold-600 font-medium">
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent" />
        <div className="container-narrow text-center relative">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Ready to Find Your Caretaker?
          </h2>
          <p className="mt-4 text-navy-300 max-w-xl mx-auto">
            It takes less than 2 minutes. No cost, no commitment.
          </p>
          <Link href="/get-a-quote" className="btn-primary mt-8 text-lg px-8">
            Get Started →
          </Link>
        </div>
      </section>
    </>
  );
}
