'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/Experience', label: 'Expériences Professionnelles' },
    { href: '/ProjetPerso', label: 'Projets Personels' },
    { href: '/ProjetECE', label: 'Projets ECE' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          GABRIEL DALIBERT<span className="text-black-200"></span>
        </Link>

        {/* Nav */}
        <div className="flex items-center space-x-6">
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative transition-all duration-0 py-2 ${
                  pathname === href
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 font-bold'
                    : 'text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-700 hover:to-cyan-500'
                }`}
              >
                {label}

                {/* Barre gradient active */}
                {pathname === href && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-700 to-cyan-500 rounded-full"></span>
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}