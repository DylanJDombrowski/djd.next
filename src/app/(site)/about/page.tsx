// src/app/(site)/about/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, Wrench, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "About Dylan | Developer & Writer",
  description:
    "From pizza kitchens to web development and writing. Learn about Dylan's journey building software and sharing ideas.",
};

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Hero section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                From Pizza Kitchens to Web Development
              </h1>
              <p className="text-lg text-muted-foreground">
                Growing up in a family-run pizza kitchen taught me everything about precision,
                creativity, and getting the details right. Turns out, those same principles apply
                whether you&apos;re crafting the perfect pizza or building web applications.
              </p>
              <p className="text-lg text-muted-foreground">
                After studying Computer Information Systems, I discovered my calling: building
                software that solves real problems for real people. No corporate fluff, just
                honest work that makes a difference.
              </p>
            </div>

            <div className="order-1 md:order-2">
              <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/images/DylanDombrowskiProfessional.jpg"
                  alt="Dylan J. Dombrowski"
                  width={400}
                  height={600}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange mb-2">Louisville, KY</div>
                  <p className="text-muted-foreground">Based in</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange mb-2">Full-Stack</div>
                  <p className="text-muted-foreground">Developer</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange mb-2">Open</div>
                  <p className="text-muted-foreground">To side projects</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">What I Work With</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-orange/10 p-4 rounded-full">
                    <Code2 className="h-8 w-8 text-orange" />
                  </div>
                  <h3 className="text-xl font-bold">Frontend</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">Angular</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Tailwind</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-orange/10 p-4 rounded-full">
                    <Server className="h-8 w-8 text-orange" />
                  </div>
                  <h3 className="text-xl font-bold">Backend</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Express</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">Supabase</Badge>
                    <Badge variant="secondary">REST APIs</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-orange/10 p-4 rounded-full">
                    <Wrench className="h-8 w-8 text-orange" />
                  </div>
                  <h3 className="text-xl font-bold">Tools</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">Vercel</Badge>
                    <Badge variant="secondary">Git</Badge>
                    <Badge variant="secondary">Stripe</Badge>
                    <Badge variant="secondary">CI/CD</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Philosophy */}
        <div className="max-w-3xl mx-auto mb-20">
          <Card className="bg-secondary/30 border-2">
            <CardContent className="pt-8 space-y-4">
              <h2 className="text-2xl font-bold mb-4">How I Build</h2>
              <p className="text-lg text-muted-foreground">
                I believe the best solutions are the ones that feel simple. Not because they&apos;re
                basic, but because someone took the time to deeply understand the problem and
                build something that just works.
              </p>
              <p className="text-lg text-muted-foreground">
                I focus on understanding what you actually need, breaking complex problems into
                manageable pieces, and building software that&apos;s maintainable and scalable. No
                over-engineering, no unnecessary complexity—just solid solutions that grow with
                your business.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Beyond the code */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Beyond the Code</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:border-orange/50 transition-colors">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">✍️ Writing</h3>
                <p className="text-muted-foreground">
                  I share my thoughts on software, business, and life on my{" "}
                  <Link href="https://dylandombro.substack.com/?r=sisxq&utm_campaign=pub-share-checklist&utm_source=dylanjdombrowski&utm_medium=website-about" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">
                    Substack
                  </Link>. Writing helps me clarify my thinking and connect with others.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:border-orange/50 transition-colors">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">🍕 In the Kitchen</h3>
                <p className="text-muted-foreground">
                  My pizza background gave me a love for cooking that continues today. I apply the
                  same creative problem-solving whether I&apos;m building software or experimenting
                  with new recipes.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:border-orange/50 transition-colors">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">🏃 Staying Active</h3>
                <p className="text-muted-foreground">
                  Physical fitness keeps me mentally sharp. Whether it&apos;s running, hiking, or
                  lifting, regular exercise fuels my creativity and problem-solving abilities.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:border-orange/50 transition-colors">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">📚 Always Learning</h3>
                <p className="text-muted-foreground">
                  The tech landscape never stops evolving, and neither do I. I&apos;m constantly
                  exploring new frameworks and methodologies to bring fresh perspectives to my work.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto text-center">
          <Card className="bg-secondary/50 border-2">
            <CardContent className="pt-8 pb-8 space-y-6">
              <h2 className="text-3xl font-bold">Let&apos;s Work Together</h2>
              <p className="text-lg text-muted-foreground">
                Whether you&apos;re building something new, need help with an existing project, or just
                want to chat about an idea—I&apos;m here for it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-orange hover:bg-orange/90 text-white">
                  <Link href="/contact">
                    Get in touch
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-orange/50 hover:bg-orange/10 hover:border-orange">
                  <a href="/resume.pdf" download="Dylan_Dombrowski_Resume.pdf">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
