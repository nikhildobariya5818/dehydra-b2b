'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search } from 'lucide-react'
import { motion } from 'motion/react'

export function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { name: 'Products', path: '/products' },
    { name: 'Process', path: '/process' },
    { name: 'Infrastructure', path: '/infrastructure' },
    { name: 'Quality', path: '/quality' },
    { name: 'Blog', path: '/blog' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/95 backdrop-blur-sm border-b border-outline-variant">
      <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <Link href="/" className="text-2xl font-black tracking-tighter text-primary">
            De&apos;Hydra
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-sm font-medium transition-colors relative pb-1 ${
                  pathname === item.path
                    ? 'text-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {item.name}
                {pathname === item.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Search className="w-5 h-5 text-outline cursor-pointer hover:text-primary transition-colors hidden lg:block" />
          <Link
            href="/contact"
            className="bg-secondary text-on-secondary px-6 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider hover:bg-secondary/90 transition-all active:scale-95 shadow-sm"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </nav>
  )
}
