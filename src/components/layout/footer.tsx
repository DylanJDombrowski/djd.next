import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Dylan J. Dombrowski</h3>
            <p className="opacity-80">Developer & Writer</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 opacity-80">
              <li>
                <Link href="/" className="hover:text-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-orange transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-orange transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-orange transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 opacity-80">
              <li>
                <a
                  href="https://dylandombro.substack.com/?r=sisxq&utm_campaign=pub-share-checklist&utm_source=dylanjdombrowski&utm_medium=website-footer"
                  className="hover:text-orange transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Substack
                </a>
              </li>
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
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center opacity-80">
          <p>
            &copy; {new Date().getFullYear()} Dylan J. Dombrowski. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
