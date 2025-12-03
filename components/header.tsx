'use client'

import { useState } from 'react'
import { useTheme } from './theme-provider'

const navItems = [
  { href: '#home', icon: 'uil-estate', label: 'Home' },
  { href: '#about', icon: 'uil-user', label: 'About' },
  { href: '#skills', icon: 'uil-file-alt', label: 'Skills' },
  { href: '#qualification', icon: 'uil-graduation-cap', label: 'Qualification' },
  { href: '#services', icon: 'uil-arrow', label: 'Services' },
  { href: '#work', icon: 'uil-scenery', label: 'Portfolio' },
  { href: '#contact', icon: 'uil-message', label: 'Contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="fixed w-full top-0 left-0 z-fixed bg-background shadow-header border-b border-border/50 md:top-0 max-md:top-auto max-md:bottom-0">
      <nav className="container flex items-center justify-between h-[calc(var(--header-height)+1.5rem)] gap-4 md:gap-6 max-md:h-header">
        <a
          href="#home"
          className="text-xl font-bold text-text-strong tracking-tight transition-all hover:text-accent-strong hover:scale-105"
        >
          FH Shatipamba
        </a>

        <div
          className={`max-md:fixed max-md:left-0 max-md:w-full max-md:bg-background max-md:shadow-lg max-md:rounded-t-3xl max-md:p-6 max-md:pb-16 max-md:transition-all max-md:duration-300 ${isMenuOpen ? 'max-md:bottom-0' : 'max-md:-bottom-full'} md:flex md:flex-1 md:justify-center`}
        >
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 max-md:grid max-md:grid-cols-3 max-md:gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="flex flex-col items-center text-small font-semibold text-text-strong transition-all hover:text-accent-strong hover:scale-105 group"
                >
                  <i className={`uil ${item.icon} text-lg mb-0.5 md:hidden`} aria-hidden="true" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={closeMenu}
            className="absolute right-4 bottom-2 text-2xl text-text-strong hover:text-accent-strong md:hidden"
            aria-label="Close menu"
          >
            <i className="uil uil-times" aria-hidden="true" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-11 h-11 rounded-full bg-surface border border-border text-text-strong transition-all hover:border-accent hover:text-accent-strong hover:-translate-y-0.5"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <i className={`uil ${theme === 'dark' ? 'uil-sun' : 'uil-moon'} text-xl`} aria-hidden="true" />
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-xl text-text-strong md:hidden"
            aria-label="Open menu"
          >
            <i className="uil uil-apps" aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  )
}
