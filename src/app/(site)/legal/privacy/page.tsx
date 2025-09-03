// src/app/(site)/legal/privacy/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Privacy Policy | Dombrowski Technologies LLC",
  description:
    "Privacy Policy detailing how Dombrowski Technologies LLC collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
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
                Privacy Policy
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
                    1. Information We Collect
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-medium text-navy mb-2">
                        Information You Provide:
                      </h3>
                      <ul className="space-y-1 text-navy/80">
                        <li>• Name, email address, and contact information</li>
                        <li>• Project requirements and specifications</li>
                        <li>
                          • Payment information (processed securely through
                          third-party processors)
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-navy mb-2">
                        Automatically Collected Information:
                      </h3>
                      <ul className="space-y-1 text-navy/80">
                        <li>• Website usage data and analytics</li>
                        <li>
                          • IP address, browser type, and device information
                        </li>
                        <li>
                          • Cookies for website functionality and analytics
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-navy mb-4">
                    2. How We Use Your Information
                  </h2>
                  <ul className="space-y-2 text-navy/80">
                    <li>• Provide and improve our services</li>
                    <li>• Communicate about projects and services</li>
                    <li>• Process payments and maintain records</li>
                    <li>• Analyze website usage to improve user experience</li>
                    <li>• Comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-navy mb-4">
                    3. Information Sharing
                  </h2>
                  <p className="text-navy/80 mb-4">
                    We do not sell, trade, or rent your personal information to
                    third parties. We may share information with:
                  </p>
                  <ul className="space-y-2 text-navy/80">
                    <li>
                      • Service providers (payment processors, hosting services)
                    </li>
                    <li>• Legal authorities when required by law</li>
                    <li>
                      • Business successors in case of merger or acquisition
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-navy mb-4">
                    4. Data Security
                  </h2>
                  <p className="text-navy/80">
                    We implement appropriate security measures to protect your
                    personal information. However, no method of transmission
                    over the internet is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-navy mb-4">
                    5. Your Rights
                  </h2>
                  <p className="text-navy/80 mb-4">You have the right to:</p>
                  <ul className="space-y-2 text-navy/80">
                    <li>• Access your personal information</li>
                    <li>• Request correction of inaccurate data</li>
                    <li>
                      • Request deletion of your data (subject to legal
                      requirements)
                    </li>
                    <li>• Opt-out of marketing communications</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-navy mb-4">
                    6. Third-Party Services
                  </h2>
                  <p className="text-navy/80 mb-4">
                    Our website may use third-party services:
                  </p>
                  <ul className="space-y-2 text-navy/80">
                    <li>
                      • <strong>Google Analytics:</strong> Website traffic
                      analysis
                    </li>
                    <li>
                      • <strong>Stripe:</strong> Payment processing
                    </li>
                    <li>
                      • <strong>Mercury Banking:</strong> Financial services
                    </li>
                  </ul>
                  <p className="text-navy/80">
                    These services have their own privacy policies.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-navy mb-4">
                    7. Contact Us
                  </h2>
                  <p className="text-navy/80">
                    For questions about this Privacy Policy, contact: <br />
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
                Questions About Privacy? Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
