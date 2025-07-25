import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-beige mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Dylan J. Dombrowski</h3>
            <p className="text-gray">Web Developer & IT Consultant</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-orange transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-orange transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/web-development" className="hover:text-orange transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/website-maintenance-support" className="hover:text-orange transition-colors">
                  Website Support
                </Link>
              </li>
              <li>
                <Link href="/services/small-business-technology-assessment" className="hover:text-orange transition-colors">
                  SB Technology Assessment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/DylanJDombrowski"
                  className="hover:text-orange transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/dylandombrowski/"
                  className="hover:text-orange transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/dylandombro"
                  className="hover:text-orange transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X (formerly Twitter)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray/20 mt-8 pt-8 text-center text-gray">
          <p>&copy; {new Date().getFullYear()} Dylan J. Dombrowski. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
