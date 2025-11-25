// src/app/(site)/uses/page.tsx
import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Laptop, Wrench, Palette } from "lucide-react";

export const metadata: Metadata = {
  title: "Uses",
  description:
    "Tools, software, and hardware I use for web development and writing.",
};

export default function UsesPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tools I Use
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A living document of the software, hardware, and tools I use for development, writing, and staying productive.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}
            </p>
          </div>

          {/* Development Tools */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange/10 p-2 rounded-lg">
                <Code2 className="h-6 w-6 text-orange" />
              </div>
              <h2 className="text-2xl font-bold">Development</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Editor & Terminal</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <p className="font-semibold">Visual Studio Code</p>
                    <p className="text-sm text-muted-foreground">Primary code editor with custom extensions</p>
                  </div>
                  <div>
                    <p className="font-semibold">iTerm2 / Windows Terminal</p>
                    <p className="text-sm text-muted-foreground">Terminal emulator with Oh My Zsh</p>
                  </div>
                  <div>
                    <p className="font-semibold">GitHub Copilot</p>
                    <p className="text-sm text-muted-foreground">AI pair programmer</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Core Stack</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <p className="font-semibold">Next.js & React</p>
                    <p className="text-sm text-muted-foreground">Frontend framework of choice</p>
                  </div>
                  <div>
                    <p className="font-semibold">TypeScript</p>
                    <p className="text-sm text-muted-foreground">Type safety for JavaScript</p>
                  </div>
                  <div>
                    <p className="font-semibold">Tailwind CSS</p>
                    <p className="text-sm text-muted-foreground">Utility-first CSS framework</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Backend & Database</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <p className="font-semibold">Supabase</p>
                    <p className="text-sm text-muted-foreground">PostgreSQL database & auth</p>
                  </div>
                  <div>
                    <p className="font-semibold">Node.js & Express</p>
                    <p className="text-sm text-muted-foreground">API development</p>
                  </div>
                  <div>
                    <p className="font-semibold">Prisma</p>
                    <p className="text-sm text-muted-foreground">Database ORM</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Deployment & Hosting</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <p className="font-semibold">Vercel</p>
                    <p className="text-sm text-muted-foreground">Frontend hosting & serverless</p>
                  </div>
                  <div>
                    <p className="font-semibold">AWS</p>
                    <p className="text-sm text-muted-foreground">Cloud infrastructure when needed</p>
                  </div>
                  <div>
                    <p className="font-semibold">GitHub Actions</p>
                    <p className="text-sm text-muted-foreground">CI/CD pipelines</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Hardware */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange/10 p-2 rounded-lg">
                <Laptop className="h-6 w-6 text-orange" />
              </div>
              <h2 className="text-2xl font-bold">Hardware</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Primary Setup</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <p className="font-semibold">MacBook Pro / Windows Desktop</p>
                    <p className="text-sm text-muted-foreground">Development machines</p>
                  </div>
                  <div>
                    <p className="font-semibold">External Monitor</p>
                    <p className="text-sm text-muted-foreground">Extra screen real estate</p>
                  </div>
                  <div>
                    <p className="font-semibold">Mechanical Keyboard</p>
                    <p className="text-sm text-muted-foreground">For the typing experience</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Accessories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <p className="font-semibold">Noise-Canceling Headphones</p>
                    <p className="text-sm text-muted-foreground">For focus time</p>
                  </div>
                  <div>
                    <p className="font-semibold">Standing Desk</p>
                    <p className="text-sm text-muted-foreground">Better ergonomics</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Productivity */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange/10 p-2 rounded-lg">
                <Wrench className="h-6 w-6 text-orange" />
              </div>
              <h2 className="text-2xl font-bold">Productivity & Writing</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Writing & Notes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <p className="font-semibold">Notion</p>
                    <p className="text-sm text-muted-foreground">Knowledge base & project planning</p>
                  </div>
                  <div>
                    <p className="font-semibold">Substack</p>
                    <p className="text-sm text-muted-foreground">Publishing platform</p>
                  </div>
                  <div>
                    <p className="font-semibold">Obsidian</p>
                    <p className="text-sm text-muted-foreground">Personal knowledge management</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tools & Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <p className="font-semibold">Figma</p>
                    <p className="text-sm text-muted-foreground">Design & prototyping</p>
                  </div>
                  <div>
                    <p className="font-semibold">Postman</p>
                    <p className="text-sm text-muted-foreground">API testing</p>
                  </div>
                  <div>
                    <p className="font-semibold">Linear</p>
                    <p className="text-sm text-muted-foreground">Issue tracking & project management</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Design */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange/10 p-2 rounded-lg">
                <Palette className="h-6 w-6 text-orange" />
              </div>
              <h2 className="text-2xl font-bold">Design & Assets</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Design Tools</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <p className="font-semibold">Figma</p>
                    <p className="text-sm text-muted-foreground">UI/UX design</p>
                  </div>
                  <div>
                    <p className="font-semibold">Excalidraw</p>
                    <p className="text-sm text-muted-foreground">Quick diagrams & wireframes</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <p className="font-semibold">Unsplash</p>
                    <p className="text-sm text-muted-foreground">Stock photography</p>
                  </div>
                  <div>
                    <p className="font-semibold">Lucide Icons</p>
                    <p className="text-sm text-muted-foreground">Icon library</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Footer Note */}
          <Card className="bg-secondary/30 border-2">
            <CardContent className="pt-6">
              <p className="text-muted-foreground text-center">
                This is a living document that I update as my setup evolves. Last reviewed on {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
