import Link from 'next/link'
import Navigation from './navigation'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy/10 bg-beige/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-semibold text-xl">
          Dylan J. Dombrowski
        </Link>
        <Navigation />
      </div>
    </header>
  )
}