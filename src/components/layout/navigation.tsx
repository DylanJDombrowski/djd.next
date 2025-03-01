'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const routes = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8">
        {routes.map((route) => (
          <li key={route.path}>
            <Link 
              href={route.path}
              className={`py-2 hover:text-orange transition-colors ${
                pathname === route.path ? 'font-medium text-orange' : ''
              }`}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2"
          aria-label="Toggle menu"
        >
          {/* Hamburger icon */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d={isOpen 
                ? "M6 18L18 6M6 6l12 12" 
                : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              } 
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-beige border-b border-navy/10 p-4">
            <ul className="flex flex-col space-y-4">
              {routes.map((route) => (
                <li key={route.path}>
                  <Link 
                    href={route.path}
                    className={`block py-2 hover:text-orange transition-colors ${
                      pathname === route.path ? 'font-medium text-orange' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}