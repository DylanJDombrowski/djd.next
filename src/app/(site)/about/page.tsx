// src/app/(site)/about/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaCode,
  FaServer,
  FaTools,
  FaUtensils,
  FaRunning,
  FaGraduationCap,
  FaLightbulb,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "About Dylan J. Dombrowski | Web Developer & IT Consultant",
  description:
    "Learn about Dylan Dombrowski, a full-stack developer with a unique journey from pizza kitchens to web development, specializing in modern JavaScript frameworks and complex problem-solving.",
};

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero section with improved layout */}
        <div className="flex flex-col md:flex-row gap-8 mb-16 items-center">
          <div className="md:w-1/3 relative">
            {/* Decorative shape behind image */}
            <div className="absolute top-0 right-0 w-64 h-64 -mr-10 -mt-10 text-orange opacity-10 z-0">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="currentColor"
                  d="M45.7,-70.5C58.9,-62.5,69.3,-48.9,76.5,-33.3C83.8,-17.7,87.9,-0.2,84.7,15.7C81.5,31.5,71,45.6,58,55.3C45,65,29.5,70.2,13.4,73.1C-2.7,76,-19.5,76.6,-33.4,70.4C-47.3,64.2,-58.3,51.2,-65.8,36.9C-73.3,22.5,-77.3,6.8,-75,-8.3C-72.6,-23.3,-63.8,-37.7,-52.4,-46.9C-40.9,-56.1,-26.9,-60.2,-12.4,-64.5C2.1,-68.8,17.1,-73.2,31,-72.9C44.9,-72.6,57.6,-67.7,61.6,-59C65.6,-50.3,60,-37.9,60.2,-37.6C60.3,-37.3,66.3,-49.1,66.5,-48.9Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg border-4 border-white transform rotate-2 hover:rotate-0 transition-all z-10 relative">
              <Image
                src="/images/about.jpg"
                alt="Dylan J. Dombrowski"
                width={400}
                height={600}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-navy">
              About Me
            </h1>
            <div className="h-1 w-20 bg-orange mb-6"></div>
            <h2 className="text-2xl font-semibold mb-4">
              From Pizza Kitchens to Web Development
            </h2>
            <p className="text-lg mb-4">
              Growing up in the bustling atmosphere of a family-run pizza
              kitchen, I was immersed in a world where precision, creativity,
              and teamwork were paramount. These early experiences shaped my
              approach to problem-solving and collaboration in unexpected ways.
            </p>
            <p className="text-lg">
              After majoring in Computer Information Systems, I discovered how
              these same principles could be applied to technology. The
              transition felt natural - whether crafting the perfect pizza or
              building responsive web applications, the core elements of
              attention to detail, creativity, and user satisfaction remain the
              same.
            </p>
          </div>
        </div>

        {/* Main content area with two columns */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Main content column */}
          <div className="md:w-8/12">
            {/* Technical expertise with icon cards */}
            <div className="mb-12 relative">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="bg-navy text-white p-2 rounded-full mr-3">
                  <FaCode className="text-xl" />
                </span>
                Technical Expertise
              </h2>
              <p className="text-lg mb-6">
                I specialize in full-stack development with a focus on creating
                accessible, performance-optimized web applications that solve
                real business problems. My technical toolkit includes:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-t-4 border-orange">
                  <div className="flex items-center mb-3">
                    <span className="text-orange mr-2">
                      <FaCode className="text-2xl" />
                    </span>
                    <h3 className="font-semibold text-xl">Frontend</h3>
                  </div>
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

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-t-4 border-navy">
                  <div className="flex items-center mb-3">
                    <span className="text-navy mr-2">
                      <FaServer className="text-2xl" />
                    </span>
                    <h3 className="font-semibold text-xl">Backend</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-navy mr-2">•</span>
                      <span>Node.js</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-navy mr-2">•</span>
                      <span>Express</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-navy mr-2">•</span>
                      <span>REST APIs</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-navy mr-2">•</span>
                      <span>SQL & NoSQL Databases</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-navy mr-2">•</span>
                      <span>AWS Lambda</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-t-4 border-orange">
                  <div className="flex items-center mb-3">
                    <span className="text-orange mr-2">
                      <FaTools className="text-2xl" />
                    </span>
                    <h3 className="font-semibold text-xl">Tools & More</h3>
                  </div>
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

            {/* Philosophy section - enhanced with dynamic background */}
            <div className="mb-12 bg-white p-8 rounded-xl shadow-md relative overflow-hidden">
              <h2 className="text-2xl font-semibold mb-4 flex items-center relative z-10">
                <span className="bg-navy text-white p-2 rounded-full mr-3">
                  <FaLightbulb className="text-xl" />
                </span>
                My Approach to Development
              </h2>
              <p className="text-lg mb-4 relative z-10">
                I believe that simplicity is the highest form of complexity. The
                most elegant solutions often appear simple on the surface, but
                that simplicity comes from a deep understanding of the
                underlying problem.
              </p>
              <p className="text-lg mb-4 relative z-10">
                When approaching complex technical challenges, I focus on:
              </p>
              <ul className="space-y-3 mb-4 relative z-10">
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
                    <strong>Prioritizing maintainability</strong> and
                    scalability in all solutions
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
              <p className="text-lg relative z-10">
                This methodical approach to problem-solving has helped me
                deliver solutions that not only meet immediate needs but adapt
                and scale with growing businesses.
              </p>
            </div>

            {/* Beyond the code section - improved with icons */}
            <div className="mb-12 relative">
              <h2 className="text-2xl font-semibold mb-4 flex items-center relative z-10">
                <span className="bg-orange text-white p-2 rounded-full mr-3">
                  <FaGraduationCap className="text-xl" />
                </span>
                Beyond the Code
              </h2>
              <p className="text-lg mb-6 relative z-10">
                When I&apos;m not building web applications, you&apos;ll find
                me:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border-t-4 border-orange">
                  <div className="flex items-center mb-3">
                    <span className="bg-orange/10 p-3 rounded-full text-orange mr-3">
                      <FaUtensils className="text-2xl" />
                    </span>
                    <h3 className="font-semibold text-xl">In the Kitchen</h3>
                  </div>
                  <p>
                    My background in a family pizza business gave me a love for
                    cooking that continues today. I enjoy experimenting with new
                    recipes and techniques, applying the same creative
                    problem-solving I use in development.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border-t-4 border-navy">
                  <div className="flex items-center mb-3">
                    <span className="bg-navy/10 p-3 rounded-full text-navy mr-3">
                      <FaRunning className="text-2xl" />
                    </span>
                    <h3 className="font-semibold text-xl">Staying Active</h3>
                  </div>
                  <p>
                    Physical fitness is an important part of maintaining mental
                    clarity. Whether it&apos;s running, hiking, or strength
                    training, I find that regular exercise improves my
                    problem-solving abilities and creativity.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border-t-4 border-orange">
                  <div className="flex items-center mb-3">
                    <span className="bg-orange/10 p-3 rounded-full text-orange mr-3">
                      <FaGraduationCap className="text-2xl" />
                    </span>
                    <h3 className="font-semibold text-xl">
                      Continuous Learning
                    </h3>
                  </div>
                  <p>
                    The tech landscape is always evolving, and I&apos;m
                    passionate about staying current. I regularly explore new
                    frameworks, languages, and methodologies to expand my
                    skillset and bring fresh perspectives to my work.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="relative overflow-hidden bg-gradient-to-r from-navy to-navy/80 text-white p-8 rounded-xl shadow-lg">
              <div className="absolute top-0 right-0 opacity-10">
                <svg
                  width="300"
                  height="300"
                  viewBox="0 0 600 600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g transform="translate(300,300)">
                    <path
                      d="M151.5,-182.1C180.3,-143.9,178.5,-80.5,181.9,-21.4C185.3,37.7,193.9,92.6,172.9,131C151.9,169.4,101.3,191.4,47.6,206.2C-6.1,221,-63,228.7,-104.2,207.6C-145.4,186.5,-171,136.8,-188.5,85.8C-206,34.9,-215.4,-17.3,-201.8,-63.7C-188.2,-110.1,-151.5,-150.7,-109.4,-184.8C-67.3,-218.9,-19.8,-246.6,25.9,-246.9C71.6,-247.2,122.6,-220.2,151.5,-182.1Z"
                      fill="#FF9800"
                    />
                  </g>
                </svg>
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl font-semibold mb-4 text-center">
                  Let&apos;s Create Something Great Together
                </h2>
                <p className="text-lg mb-6 text-center">
                  Whether you&apos;re looking to build a new web application,
                  enhance an existing site, or need technical consultation,
                  I&apos;m ready to help bring your vision to life.
                </p>

                <div className="text-center">
                  <Link
                    href="/contact"
                    className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-3 px-8 rounded-lg transition shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar column */}
          <div className="md:w-4/12">
            <div className="sticky top-24">
              {/* Profile card */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                <div className="bg-navy text-white p-6">
                  <h3 className="text-xl font-bold">Dylan J. Dombrowski</h3>
                  <p className="text-sm opacity-80">
                    Full-Stack Developer & IT Consultant
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-navy/80 mb-4">
                    Creating elegant solutions to complex problems through
                    modern web development and strategic IT consulting.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">
                      React
                    </span>
                    <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">
                      Next.js
                    </span>
                    <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">
                      Angular
                    </span>
                    <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">
                      TypeScript
                    </span>
                  </div>
                  <Link
                    href="/contact"
                    className="block w-full bg-orange hover:bg-orange/90 text-white text-center py-2 rounded-lg transition"
                  >
                    Connect with Me
                  </Link>
                </div>
              </div>

              {/* Quick facts card */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 text-navy">
                  Quick Facts
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-orange/20 p-2 rounded-full text-orange mr-3 mt-1">
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>
                    </span>
                    <div>
                      <strong className="block text-navy">Education</strong>
                      <span className="text-sm">
                        Computer Information Systems
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-orange/20 p-2 rounded-full text-orange mr-3 mt-1">
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                      </svg>
                    </span>
                    <div>
                      <strong className="block text-navy">Experience</strong>
                      <span className="text-sm">
                        Full Stack Development, IT Consulting
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-orange/20 p-2 rounded-full text-orange mr-3 mt-1">
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </span>
                    <div>
                      <strong className="block text-navy">Location</strong>
                      <span className="text-sm">Louisville, KY</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-orange/20 p-2 rounded-full text-orange mr-3 mt-1">
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                      </svg>
                    </span>
                    <div>
                      <strong className="block text-navy">Specialties</strong>
                      <span className="text-sm">
                        Web Applications, API Development
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Latest blog posts */}
              <div className="bg-white rounded-xl shadow-md p-6 relative overflow-hidden">
                <h3 className="text-xl font-bold mb-4 text-navy relative z-10">
                  Latest Insights
                </h3>
                <div className="space-y-4 relative z-10">
                  <Link
                    href="/blog"
                    className="block hover:bg-navy/5 p-3 rounded-lg transition"
                  >
                    <span className="text-orange font-medium">Blog</span>
                    <p className="text-navy">
                      Explore my latest articles on tech, development and more
                    </p>
                  </Link>
                  <Link
                    href="/projects"
                    className="block hover:bg-navy/5 p-3 rounded-lg transition"
                  >
                    <span className="text-orange font-medium">Projects</span>
                    <p className="text-navy">
                      See recent development work and case studies
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
