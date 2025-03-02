// src/app/(site)/about/page.tsx
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Dylan J. Dombrowski | Web Developer & IT Consultant",
  description:
    "Learn about Dylan Dombrowski, a full-stack developer with a unique journey from pizza kitchens to web development, specializing in modern JavaScript frameworks and complex problem-solving.",
};

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>

          {/* Hero section with image */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-1/3">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/about.jpg" // Replace with your actual image
                  alt="Dylan J. Dombrowski"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold mb-4">
                From Pizza Kitchens to Web Development
              </h2>
              <p className="text-lg mb-4">
                Growing up in the bustling atmosphere of a family-run pizza
                kitchen, I was immersed in a world where precision, creativity,
                and teamwork were paramount. These early experiences shaped my
                approach to problem-solving and collaboration in unexpected
                ways.
              </p>
              <p className="text-lg">
                After majoring in Computer Information Systems, I discovered how
                these same principles could be applied to technology. The
                transition felt natural - whether crafting the perfect pizza or
                building responsive web applications, the core elements of
                attention to detail, creativity, and user satisfaction remain
                the same.
              </p>
            </div>
          </div>

          {/* Technical expertise */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Technical Expertise</h2>
            <p className="text-lg mb-6">
              I specialize in full-stack development with a focus on creating
              accessible, performance-optimized web applications that solve real
              business problems. My technical toolkit includes:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-3">Frontend</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-orange mr-2">•</span>
                    <span>React & Next.js</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange mr-2">•</span>
                    <span>Angular</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange mr-2">•</span>
                    <span>TypeScript</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange mr-2">•</span>
                    <span>HTML5 & CSS3</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange mr-2">•</span>
                    <span>Tailwind CSS</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-3">Backend</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-orange mr-2">•</span>
                    <span>Node.js</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange mr-2">•</span>
                    <span>Express</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange mr-2">•</span>
                    <span>REST APIs</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange mr-2">•</span>
                    <span>SQL & NoSQL Databases</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange mr-2">•</span>
                    <span>AWS Lambda</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-3">Tools & More</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-orange mr-2">•</span>
                    <span>AWS Services</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange mr-2">•</span>
                    <span>CI/CD Pipelines</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange mr-2">•</span>
                    <span>Git & GitHub</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange mr-2">•</span>
                    <span>Project Management</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange mr-2">•</span>
                    <span>UI/UX Design</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Philosophy section */}
          <div className="mb-12 bg-beige p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">
              My Approach to Development
            </h2>
            <p className="text-lg mb-4">
              I believe that simplicity is the highest form of complexity. The
              most elegant solutions often appear simple on the surface, but
              that simplicity comes from a deep understanding of the underlying
              problem.
            </p>
            <p className="text-lg mb-4">
              When approaching complex technical challenges, I focus on:
            </p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start">
                <span className="text-orange mr-2 mt-1">•</span>
                <span>
                  <strong>Understanding the core problem</strong> before
                  proposing solutions
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange mr-2 mt-1">•</span>
                <span>
                  <strong>Breaking complex systems</strong> into manageable,
                  modular components
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange mr-2 mt-1">•</span>
                <span>
                  <strong>Prioritizing maintainability</strong> and scalability
                  in all solutions
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange mr-2 mt-1">•</span>
                <span>
                  <strong>Communicating clearly</strong> about technical
                  concepts to stakeholders
                </span>
              </li>
            </ul>
            <p className="text-lg">
              This methodical approach to problem-solving has helped me deliver
              solutions that not only meet immediate needs but adapt and scale
              with growing businesses.
            </p>
          </div>

          {/* Personal interests */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Beyond the Code</h2>
            <p className="text-lg mb-6">
              When I'm not building web applications, you'll find me:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-3">In the Kitchen</h3>
                <p>
                  My background in a family pizza business gave me a love for
                  cooking that continues today. I enjoy experimenting with new
                  recipes and techniques, applying the same creative
                  problem-solving I use in development.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-3">Staying Active</h3>
                <p>
                  Physical fitness is an important part of maintaining mental
                  clarity. Whether it's running, hiking, or strength training, I
                  find that regular exercise improves my problem-solving
                  abilities and creativity.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-3">
                  Continuous Learning
                </h3>
                <p>
                  The tech landscape is always evolving, and I'm passionate
                  about staying current. I regularly explore new frameworks,
                  languages, and methodologies to expand my skillset and bring
                  fresh perspectives to my work.
                </p>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center bg-navy text-white p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">
              Let's Create Something Great Together
            </h2>
            <p className="text-lg mb-6">
              Whether you're looking to build a new web application, enhance an
              existing site, or need technical consultation, I'm ready to help
              bring your vision to life.
            </p>

            <a
              href="/contact"
              className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-3 px-6 rounded-md transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
