import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-beige to-beige/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Web Development & IT Consulting for Modern Businesses
            </h1>
            <p className="text-lg md:text-xl text-navy/80 mb-8">
              I help businesses build robust web applications and provide expert IT consulting to solve complex technical challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/services" size="lg">
                Explore Services
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* These would be dynamically generated from Sanity */}
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray/10">
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <p className="text-navy/80 mb-4">Custom websites and web applications built with modern technologies.</p>
              <Link href="/services/web-development" className="text-orange hover:underline">
                Learn more →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray/10">
              <h3 className="text-xl font-semibold mb-3">IT Consulting</h3>
              <p className="text-navy/80 mb-4">Strategic technology consulting to solve complex business challenges.</p>
              <Link href="/services/it-consulting" className="text-orange hover:underline">
                Learn more →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray/10">
              <h3 className="text-xl font-semibold mb-3">Software Development</h3>
              <p className="text-navy/80 mb-4">Custom software solutions tailored to your business needs.</p>
              <Link href="/services/software-development" className="text-orange hover:underline">
                Learn more →
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button href="/services">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* These would be dynamically generated from Sanity */}
            <div className="bg-navy/30 rounded-lg overflow-hidden border border-white/10">
              <div className="h-64 bg-gray/20"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Name</h3>
                <p className="text-beige/80 mb-4">Brief description of the project and what technologies were used.</p>
                <Link href="/projects/project-name" className="text-orange hover:underline">
                  View Case Study →
                </Link>
              </div>
            </div>
            
            <div className="bg-navy/30 rounded-lg overflow-hidden border border-white/10">
              <div className="h-64 bg-gray/20"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Name</h3>
                <p className="text-beige/80 mb-4">Brief description of the project and what technologies were used.</p>
                <Link href="/projects/project-name" className="text-orange hover:underline">
                  View Case Study →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button href="/projects" variant="secondary">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg text-navy/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help with your next web development or IT consulting project.
          </p>
          <Button href="/contact" size="lg">
            Contact Me
          </Button>
        </div>
      </section>
    </div>
  )
}