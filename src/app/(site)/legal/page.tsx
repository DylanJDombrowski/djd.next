// src/app/(site)/legal/page.tsx
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Legal Information | Dombrowski Technologies LLC",
  description:
    "Terms of Service, Privacy Policy, and legal information for Dombrowski Technologies LLC web development services.",
};

export default function LegalPage() {
  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-navy">
              Legal Information
            </h1>
            <div className="h-1 w-20 bg-orange mb-6 mx-auto"></div>
            <p className="text-lg text-navy/80">
              Important legal documents and policies for Dombrowski Technologies
              LLC services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-all border-t-4 border-orange">
              <CardHeader>
                <CardTitle className="text-navy">Terms of Service</CardTitle>
                <CardDescription>
                  Our service terms, payment policies, and client agreements for
                  web development projects.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-navy/80 mb-4">
                  Covers project scope, payment terms, intellectual property
                  rights, and service limitations.
                </p>
                <Button
                  href="/legal/terms"
                  variant="default"
                  className="w-full"
                >
                  Read Terms of Service
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all border-t-4 border-navy">
              <CardHeader>
                <CardTitle className="text-navy">Privacy Policy</CardTitle>
                <CardDescription>
                  How we collect, use, and protect your personal information and
                  project data.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-navy/80 mb-4">
                  Details our data handling practices, third-party services, and
                  your privacy rights.
                </p>
                <Button
                  href="/legal/privacy"
                  variant="secondary"
                  className="w-full"
                >
                  Read Privacy Policy
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white border-t-4 border-orange">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-navy">
                Contact for Legal Questions
              </h2>
              <p className="text-navy/80 mb-4">
                If you have questions about these legal documents or need
                clarification about our policies, please don&apos;t hesitate to
                reach out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" variant="outline">
                  Contact Us
                </Button>
                <Button
                  href="mailto:Dylan@dylanjdombrowski.com"
                  variant="ghost"
                >
                  Email: Dylan@dylanjdombrowski.com
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
