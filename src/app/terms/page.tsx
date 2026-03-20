import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for MVCaretaking.com — our free matching and directory service connecting Martha's Vineyard homeowners with independent caretaking professionals.",
  alternates: { canonical: "https://mvcaretaking.com/terms" },
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-navy-950 text-white section-padding pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
        <div className="container-narrow text-center relative">
          <p className="section-label">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold">Terms of Service</h1>
          <p className="mt-4 text-navy-300">Last updated: March 2026</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto prose-navy">
            <div className="space-y-8 text-navy-700 leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                  1. Agreement to Terms
                </h2>
                <p>
                  By accessing or using MVCaretaking.com (&ldquo;the
                  Site&rdquo;), you agree to be bound by these Terms of Service.
                  If you do not agree, please do not use the Site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                  2. Nature of Our Service
                </h2>
                <p>
                  MVCaretaking.com is a <strong>free matching and directory
                  service</strong>. We connect Martha&apos;s Vineyard property
                  owners with independent caretaking professionals. Important
                  disclaimers:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>
                    We <strong>do not provide</strong> caretaking, property
                    management, or any home-maintenance services directly.
                  </li>
                  <li>
                    We <strong>do not employ, supervise, or control</strong> any
                    caretaker or service provider listed on the Site.
                  </li>
                  <li>
                    Listed caretakers are independent businesses. Any agreement
                    you enter is solely between you and the provider.
                  </li>
                  <li>
                    We do not guarantee the quality, safety, legality, or
                    suitability of any listed provider&apos;s services.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                  3. User Responsibilities
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    You are solely responsible for evaluating, selecting, and
                    hiring any caretaking professional.
                  </li>
                  <li>
                    You should independently verify credentials, insurance,
                    bonding, references, and suitability before engaging any
                    provider.
                  </li>
                  <li>
                    You agree to provide accurate information in any form
                    submissions.
                  </li>
                  <li>
                    You agree not to misuse the Site or engage in fraudulent
                    activity.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                  4. No Warranties
                </h2>
                <p>
                  The Site and all information, content, and services are
                  provided <strong>&ldquo;as is&rdquo;</strong> and{" "}
                  <strong>&ldquo;as available&rdquo;</strong> without any
                  warranties of any kind, express or implied. We make no
                  representations about the accuracy, reliability, or
                  completeness of any content on the Site, including but not
                  limited to pricing estimates, market data, and provider
                  profiles.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                  5. Limitation of Liability
                </h2>
                <p>
                  To the fullest extent permitted by law, MVCaretaking.com, its
                  owners, operators, and affiliates shall not be liable for any
                  direct, indirect, incidental, special, consequential, or
                  punitive damages arising from:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Your use of or inability to use the Site</li>
                  <li>
                    Any transaction or relationship between you and any
                    caretaker or provider
                  </li>
                  <li>
                    Any actions, omissions, or negligence by listed providers
                  </li>
                  <li>
                    Any property damage, personal injury, or financial loss
                    resulting from services arranged through the Site
                  </li>
                  <li>Unauthorized access to or alteration of your data</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                  6. Indemnification
                </h2>
                <p>
                  You agree to indemnify and hold harmless MVCaretaking.com, its
                  owners, operators, and affiliates from any claims, damages,
                  losses, or expenses (including legal fees) arising from your
                  use of the Site or any dispute between you and a caretaking
                  provider.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                  7. Intellectual Property
                </h2>
                <p>
                  All content on the Site — including text, graphics, logos,
                  and design — is the property of MVCaretaking.com and is
                  protected by applicable intellectual property laws.
                  Unauthorized reproduction or distribution is prohibited.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                  8. Pricing & Market Data Disclaimer
                </h2>
                <p>
                  Pricing information, market statistics, and cost estimates
                  presented on the Site are for general informational purposes
                  only. They are based on publicly available data and estimated
                  market ranges. Actual costs vary based on property specifics,
                  provider, seasonality, and scope of work. MVCaretaking does not
                  set, negotiate, or guarantee any pricing.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                  9. Modifications
                </h2>
                <p>
                  We reserve the right to modify these Terms at any time.
                  Changes take effect immediately upon posting. Continued use of
                  the Site after changes constitutes acceptance of the revised
                  Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                  10. Governing Law
                </h2>
                <p>
                  These Terms are governed by and construed in accordance with
                  the laws of the Commonwealth of Massachusetts, without regard
                  to conflict of law principles. Any disputes shall be resolved
                  in the courts of Dukes County, Massachusetts.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                  11. Contact
                </h2>
                <p>
                  Questions about these Terms? Contact us at{" "}
                  <a
                    href="mailto:legal@mvcaretaking.com"
                    className="text-gold-600 hover:underline"
                  >
                    legal@mvcaretaking.com
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-navy-100 text-center">
              <Link href="/" className="text-gold-600 font-medium hover:underline">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
