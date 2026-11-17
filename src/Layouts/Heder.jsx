import { useState } from 'react'
import Container from '../components/Container'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { Sun, Moon, Download, Menu, X } from 'lucide-react'

export const Heder = () => {
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Standard Navigation Links with React Router
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/service' },
    { name: 'Projects', path: '/project' },
    { name: 'Contact', path: '/contact' },
  ]

  // Check if link is active based on current URL pathname
  const isLinkActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-950/85">
      <Container className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-20">
          
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25 transition-transform duration-200 group-hover:scale-105">
              <span className="text-base font-extrabold">SR</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold tracking-tight text-slate-900 transition-colors dark:text-white sm:text-lg">
                Sohel <span className="text-blue-600 dark:text-blue-400">Rana</span>
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                Frontend Dev
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-x-1 lg:gap-x-2">
              {navLinks.map((link) => {
                const active = isLinkActive(link.path)
                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`relative rounded-lg px-3.5 py-2 text-sm font-semibold transition-all duration-200 ${
                        active
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/60 dark:hover:text-white'
                      }`}
                    >
                      {link.name}
                      {active && (
                        <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Right Actions: Download CV + Beautiful Theme Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Download CV Button */}
            <a
              href="mailto:mdsohelrana.dev7@gmail.com?subject=Resume%20Request%20-%20Sohel%20Rana"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-blue-200/90 bg-blue-50/80 px-3.5 py-2 text-xs font-semibold text-blue-700 shadow-2xs transition-all duration-200 hover:border-blue-300 hover:bg-blue-100 hover:text-blue-800 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-300 dark:hover:bg-blue-900/50"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download CV</span>
            </a>

            {/* Premium Theme Toggle Button with Smooth Animations */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/90 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-slate-50 hover:text-blue-600 hover:shadow-md active:scale-95 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-amber-400/50 dark:hover:bg-slate-800 dark:hover:text-amber-300"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-amber-400 transition-transform duration-300 group-hover:rotate-90 group-hover:scale-110" />
              ) : (
                <Moon className="h-5 w-5 text-slate-700 transition-transform duration-300 group-hover:-rotate-45 group-hover:scale-110" />
              )}
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/90 bg-white text-slate-700 md:hidden dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-200/80 py-4 md:hidden dark:border-slate-800/80">
            <ul className="flex flex-col gap-y-1">
              {navLinks.map((link) => {
                const active = isLinkActive(link.path)
                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                        active
                          ? 'bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400'
                          : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              })}
              <li className="pt-2">
                <a
                  href="mailto:mdsohelrana.dev7@gmail.com?subject=Resume%20Request%20-%20Sohel%20Rana"
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm"
                >
                  <Download className="h-4 w-4" />
                  <span>Download CV</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </header>
  )
}

export default Heder
