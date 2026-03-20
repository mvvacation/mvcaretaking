import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for MVCaretaking.com — how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://mvcaretaking.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-navy-950 text-white section-padding pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
        <div className="container-narrow text-center relative">
          <p className="section-label">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold">Privacy Policy</h1>
          <p className="mt-4 text-navy-300">Last updated: March 2026</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto prose-navy">
            <div className="space-y-8 text-navy-700 leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                  1. Introduction
                </h2>
                <p>
                  MVCaretaking.com (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
                  &ldquo;us&rdquo;) is a free matching and directory service
                  that connects Martha&apos;s Vineyard homeowners with
                  independent caretaking professionals. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your
                  information when you visit our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                  2. Information We Collect
                </h2>
                <h3 className="text-lg font-semibold text-navy-800 mb-2">
                  Information You Provide
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Name, email address, and phone number submitted through our
                    quote request form
                  </li>
                  <li>
                    Property details including town, property type, and
                    caretaking services requested
                  </li>
                  <li>Any additional details you voluntarily share</li>
                </ul>

                <h3 className="text-lg font-semibold text-navy-800 mb-2 mt-4">
                  Information Collected Automatically
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Browser type, operating system, and device information
                  </li>
                  <li>IP address and approximate geographic location</li>
                  <li>Pages visited, time spent, and referral sources</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                  3. How We Use Your Information
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    To match you with appropriate caretaking professionals based
                    on your property needs
                  </li>
                  <li>To share your contact information with matched providers so they can reach out with proposals</li>
                  <li>To improve our website and matching service</li>
                  <li>To send relevant service-related communications</li>
                  <li>
                    To analyze website usage and optimize user experience
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                  4. Information Sharing
                </h2>
                <p>
                  We share your information only with caretaking professionals
                  matched to your inquiry. We do not sell, rent, or trade your
                  personal information to third parties for marketing purposes.
                  We may disclose information if required by law or to protect
                  our rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                  5. Data Security
                </h2>
                <p>
                  We implement reasonable security measures to protect your
                  personal information. However, no method of transmission over
                  the internet or electronic storage is 100% secure, and we
                  cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                  6. Cookies
                </h2>
                <p>
                  We use cookies and similar technologies to enhance your browsing
                  experience, analyze site traffic, and understand how visitors
                  interact with our website. You can control cookie preferences
                  through your browser settings.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                  7. Third-Party Links
                </h2>
                <p>
                  Our website may contain links to third-party websites
                  (including caretaker profiles and partner sites). We are not
                  responsible for the privacy practices or content of these
                  external sites.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                  8. Your Rights
                </h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Request access to your personal information</li>
                  <li>Request correction or deletion of your data</li>
                  <li>Opt out of marketing communications</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                  9. Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. Changes
                  will be posted on this page with an updated revision date. Your
                  continued use of the site constitutes acceptance of any
                  modifications.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                  10. Contact Us
                </h2>
                <p>
                  If you have questions about this Privacy Policy, please contact
                  us at{" "}
                  <a
                    href="mailto:privacy@mvcaretaking.com"
                    className="text-gold-600 hover:underline"
                  >
                    privacy@mvcaretaking.com
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
