// src/app/(site)/legal/terms/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Terms of Service | Dombrowski Technologies LLC",
  description:
    "Terms of Service for web development and IT consulting services provided by Dombrowski Technologies LLC.",
};

export default function TermsPage() {
  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              href="/legal"
              className="text-orange hover:text-orange/80 transition-colors"
            >
              ← Back to Legal
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 text-navy">
                Terms of Service
              </h1>
              <div className="h-1 w-20 bg-orange mb-6 mx-auto"></div>
              <p className="text-lg text-navy/80">
                <strong>Effective Date:</strong>{" "}
                {new Date().toLocaleDateString()} <br />
                <strong>Website:</strong> dylanjdombrowski.com
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-navy mb-4">
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-navy/80">
                    By accessing and using this website, you accept and agree to
                    be bound by the terms and provision of this agreement.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-navy mb-4">
                    2. Services
                  </h2>
                  <p className="text-navy/80">
                    Dombrowski Technologies LLC provides web development,
                    software development, and technology consulting services.
                    Specific service terms are outlined in separate service
                    agreements.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-navy mb-4">
                    3. Payment Terms
                  </h2>
                  <ul className="space-y-2 text-navy/80">
                    <li>
                      • Payment is due within 30 days of invoice date unless
                      otherwise specified
                    </li>
                    <li>
                      • Late payments may incur a 1.5% monthly service charge
                    </li>
                    <li>
                      • All payments processed through secure third-party
                      payment processors
                    </li>
                    <li>
                      • Refunds are subject to individual service agreement
                      terms
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-navy mb-4">
                    4. Intellectual Property
                  </h2>
                  <ul className="space-y-2 text-navy/80">
                    <li>
                      • Client retains ownership of their content and data
                    </li>
                    <li>
                      • Dombrowski Technologies LLC retains ownership of
                      development methodologies and proprietary tools
                    </li>
                    <li>
                      • Upon final payment, client receives full rights to
                      delivered work product
                    </li>
                    <li>
                      • Client grants permission to use project as portfolio
                      example unless otherwise specified
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-navy mb-4">
                    5. Limitation of Liability
                  </h2>
                  <p className="text-navy/80">
                    In no event shall Dombrowski Technologies LLC be liable for
                    any indirect, incidental, special, or consequential damages,
                    including but not limited to loss of profits, data, or
                    business opportunities.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-navy mb-4">
                    6. Privacy
                  </h2>
                  <p className="text-navy/80">
                    Your privacy is important to us. Please review our{" "}
                    <Link
                      href="/legal/privacy"
                      className="text-orange hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    , which also governs your use of the website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-navy mb-4">
                    7. Modifications
                  </h2>
                  <p className="text-navy/80">
                    We reserve the right to modify these terms at any time.
                    Changes will be posted on this page with an updated
                    effective date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-navy mb-4">
                    8. Governing Law
                  </h2>
                  <p className="text-navy/80">
                    These terms are governed by the laws of Kentucky, without
                    regard to conflict of law provisions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-navy mb-4">
                    9. Contact Information
                  </h2>
                  <p className="text-navy/80">
                    For questions about these Terms of Service, contact: <br />
                    Dylan J. Dombrowski <br />
                    Dombrowski Technologies LLC <br />
                    Email:{" "}
                    <a
                      href="mailto:Dylan@dylanjdombrowski.com"
                      className="text-orange hover:underline"
                    >
                      Dylan@dylanjdombrowski.com
                    </a>
                  </p>
                </section>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <Button href="/contact" variant="default">
                Have Questions? Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
