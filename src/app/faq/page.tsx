import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions",
  description:
    "Answers to common questions about Martha's Vineyard caretaking services, costs, hiring process, and property management on MV.",
  alternates: { canonical: "https://mvcaretaking.com/faq" },
};

const faqs = [
  {
    category: "About MVCaretaking",
    items: [
      {
        q: "What is MVCaretaking.com?",
        a: "MVCaretaking.com is a free matching service and directory that connects Martha's Vineyard second-home owners with vetted, island-based caretaking professionals. We help you find the right caretaker for your property, needs, and budget.",
      },
      {
        q: "Is it free to use MVCaretaking?",
        a: "Yes, our matching service is completely free for homeowners. There's no cost and no obligation. Caretaking providers pay to be listed in our directory and receive qualified leads.",
      },
      {
        q: "How is MVCaretaking different from hiring a caretaker directly?",
        a: "We pre-vet all providers in our directory, verify insurance and bonding, and match you based on your specific property and needs. Instead of calling around and hoping for the best, you get matched with 2-3 qualified providers who are the right fit for your situation.",
      },
      {
        q: "Is MVCaretaking affiliated with MVVacation.com?",
        a: "Yes, MVCaretaking.com is part of the MVVacation.com digital ecosystem, which also includes MVRestaurants.com and MVBoats.com. We leverage our deep Martha's Vineyard network to provide the best possible service.",
      },
    ],
  },
  {
    category: "Caretaking Services",
    items: [
      {
        q: "What does a caretaker actually do?",
        a: "A caretaker performs regular property inspections, responds to storms and emergencies, handles seasonal opening and closing of your home, coordinates with contractors, manages rental turnovers, and can provide concierge services like grocery stocking and arrival prep. Think of them as your eyes, ears, and hands on Martha's Vineyard. Learn more in our [complete guide to caretaking](/what-is-a-caretaker).",
      },
      {
        q: "How often should my property be inspected?",
        a: "Most caretakers recommend weekly inspections during the off-season (October-May) when your home is most vulnerable to weather damage. During summer, inspection frequency depends on whether you're renting the property and how often you visit. See our [maintenance calendar](/maintenance-calendar) for a month-by-month breakdown.",
      },
      {
        q: "Do I need a caretaker if I have an alarm system?",
        a: "An alarm system is great for security, but it can't check for a leaking pipe, clear ice from your gutters, or meet a contractor. A caretaker provides physical, hands-on oversight that technology alone cannot replicate. Many homeowners use both.",
      },
      {
        q: "Can a caretaker manage my rental property?",
        a: "Yes, many MV caretakers specialize in rental turnover management — inspecting after each guest departure, coordinating cleaning crews, verifying inventory, and ensuring the property is guest-ready for the next arrival.",
      },
    ],
  },
  {
    category: "Cost & Pricing",
    items: [
      {
        q: "How much does caretaking cost on Martha's Vineyard?",
        a: "Costs range widely. Basic bi-monthly inspections start at $60–$100/visit. Standard monthly retainers are $300–$600/month (the most common arrangement). Premium estate management runs $1,000–$4,000+/month. Annually, most homeowners pay $3,600–$12,000 for standard service, or $15,000–$50,000 for full luxury estate management. See our [detailed Cost Guide](/cost-guide) for a complete breakdown.",
      },
      {
        q: "Why is caretaking more expensive on MV than the mainland?",
        a: "Martha's Vineyard has an island premium of 20–35% on all services. This reflects higher cost of living, a limited labor pool, ferry/shipping costs for materials, and intense seasonal demand compression. Despite this, caretaking at 0.1–1.9% of property value annually is far less than the cost of a single major incident on a $2.6M property.",
      },
      {
        q: "Are there month-to-month options or only annual contracts?",
        a: "Both are available. Options include per-visit pricing ($60–$200/visit), monthly retainers ($120–$4,000+/month), seasonal packages (opening/closing at $500–$2,000 each), and annual contracts with the best rates. Our matching service connects you with providers that fit your preferred arrangement.",
      },
      {
        q: "What are additional costs beyond the monthly retainer?",
        a: "Storm response visits ($200–$500/call), seasonal opening and closing ($500–$2,000 each), rental turnover inspections ($150–$350/turnover), concierge arrival prep ($200–$500/visit), and emergency callouts ($300–$600/call) are typically charged separately. Hourly add-on work runs $50–$100/hour with a 1-hour minimum.",
      },
    ],
  },
  {
    category: "Hiring Process",
    items: [
      {
        q: "How quickly can I find a caretaker through MVCaretaking?",
        a: "After submitting your inquiry, we typically match you with providers within 24 hours. Most matched caretakers respond within 24-48 hours with initial proposals. The entire process from inquiry to choosing a provider usually takes 1-2 weeks.",
      },
      {
        q: "What should I look for when choosing a caretaker?",
        a: "Key factors include: bonding and insurance, years of island experience, quality of inspection reports, emergency response protocols, contractor relationships, client references, and communication style. Our [guide to choosing the right caretaker](/blog/choosing-the-right-caretaker-mv) covers this topic in detail.",
      },
      {
        q: "Should my caretaker be bonded and insured?",
        a: "Absolutely. General liability insurance is essential, and bonding provides additional protection. All providers in our directory are required to carry insurance, and we clearly label bonded providers.",
      },
      {
        q: "What if I'm not happy with my matched caretakers?",
        a: "There's zero obligation to choose any of the matched providers. If none feel right, we can expand the search or suggest alternative approaches. Your satisfaction is our priority.",
      },
    ],
  },
  {
    category: "Martha's Vineyard Specifics",
    items: [
      {
        q: "Do caretakers serve all six MV towns?",
        a: "Most caretakers serve multiple towns, but some specialize in certain areas. Our directory lets you filter by town — Edgartown, Oak Bluffs, Vineyard Haven, Chilmark, West Tisbury, and Aquinnah. We also have dedicated town pages with area-specific caretaking information for each town.",
      },
      {
        q: "What are the biggest risks to unattended MV homes?",
        a: "The top risks are: frozen/burst pipes in winter ($20,000–$150,000 in damage), storm damage from nor'easters, mold from unmanaged moisture ($15,000–$75,000), insurance claim denial from lack of documented monitoring, pest intrusion, and system failures (sump pump, heating, septic). 56–63% of MV homes are seasonal — that's 10,700+ properties sitting unattended most of the year.",
      },
      {
        q: "When is the best time to hire a caretaker?",
        a: "The best time is now — caretakers book up, especially before winter storm season (November) and before summer rental season (April-May). Spring is the busiest hiring period, so starting early gives you the best selection of providers.",
      },
      {
        q: "Will my insurance deny claims without a caretaker?",
        a: "Many insurance policies include vacancy clauses that reduce or eliminate coverage if your home is unoccupied for 30–60+ consecutive days without documented monitoring. On a property worth $2.6M (the MV average), an insurance denial is devastating. Professional caretaking provides the timestamped inspection reports insurers require as proof of monitoring.",
      },
      {
        q: "How do STR regulations affect caretaking needs?",
        a: "Every MV town is implementing different STR rules. West Tisbury now requires 30-day owner occupancy and a 2-night minimum. Vineyard Haven caps rentals at 75 nights/year. Chilmark is debating a 95-day cap. Professional caretakers help you track rental nights, manage compliance, and coordinate turnovers within these evolving regulations.",
      },
      {
        q: "What is NHWA accreditation?",
        a: "The National Home Watch Association (NHWA) sets industry standards for property monitoring: background checks, insurance minimums, reporting protocols, and professional development. NHWA accreditation signals a professional operation — only a handful of MV caretakers currently hold this designation.",
      },
    ],
  },
];

export default function FAQPage() {
  const allFaqItems = faqs.flatMap((section) => section.items);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Header */}
      <section className="bg-navy-950 text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
        <div className="container-narrow text-center relative">
          <Breadcrumbs dark items={[{ label: "FAQ" }]} />
          <p className="section-label">Support</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-lg text-navy-300 max-w-2xl mx-auto">
            Everything you need to know about Martha&apos;s Vineyard caretaking
            services and how MVCaretaking.com works.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding">
        <div className="container-narrow max-w-3xl mx-auto">
          <div className="space-y-12">
            {faqs.map((section) => (
              <div key={section.category}>
                <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6">
                  {section.category}
                </h2>
                <div className="space-y-4">
                  {section.items.map((faq, i) => (
                    <details
                      key={i}
                      className="group bg-white rounded-2xl border border-navy-100/50 overflow-hidden"
                    >
                      <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-navy-50 transition-colors">
                        <h3 className="font-semibold text-navy-900 pr-4">
                          {faq.q}
                        </h3>
                        <span className="text-navy-400 group-open:rotate-45 transition-transform text-xl flex-shrink-0">
                          +
                        </span>
                      </summary>
                      <div className="px-6 pb-6">
                        <p className="text-navy-600 leading-relaxed">
                          {faq.a.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, j) => {
                            const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
                            if (match) return <Link key={j} href={match[2]} className="text-gold-600 underline underline-offset-2 hover:text-gold-700">{match[1]}</Link>;
                            return part;
                          })}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent" />
        <div className="container-narrow text-center relative">
          <h2 className="text-3xl font-serif font-bold text-white">
            Still Have Questions?
          </h2>
          <p className="mt-4 text-navy-300 max-w-lg mx-auto">
            Submit an inquiry and we&apos;ll personally match you with the right
            providers — or just ask us anything.
          </p>
          <Link href="/get-a-quote" className="btn-primary mt-8 text-lg px-8">
            Get in Touch →
          </Link>
        </div>
      </section>
    </>
  );
}
