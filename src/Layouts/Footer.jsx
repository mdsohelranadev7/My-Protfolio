import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { ArrowUp, Heart } from 'lucide-react'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-slate-200/80 bg-slate-50/80 py-12 transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-950">
      <Container className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center sm:items-start">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-sm">
                <span className="text-sm font-extrabold">SR</span>
              </div>
              <span className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white">
                Sohel <span className="text-blue-600 dark:text-blue-400">Rana</span>
              </span>
            </Link>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Frontend Developer • Building modern web applications
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <li><Link to="/" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">Home</Link></li>
              <li><Link to="/about" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">About</Link></li>
              <li><Link to="/service" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">Skills</Link></li>
              <li><Link to="/project" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">Projects</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">Contact</Link></li>
            </ul>
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-base text-slate-600 dark:text-slate-400">
              <a
                href="https://github.com/mdsohelranadev7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-2xs transition-all hover:border-slate-800 hover:bg-slate-900 hover:text-white dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700 dark:hover:bg-slate-800"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-2xs transition-all hover:border-blue-600 hover:bg-blue-600 hover:text-white dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700 dark:hover:bg-slate-800"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-2xs transition-all hover:border-blue-700 hover:bg-blue-700 hover:text-white dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700 dark:hover:bg-slate-800"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-2xs transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-blue-400"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="mt-8 border-t border-slate-200/60 pt-6 text-center text-xs text-slate-500 dark:border-slate-800/60 dark:text-slate-500">
          <p className="flex items-center justify-center gap-1">
            <span>© {new Date().getFullYear()} Md Sohel Rana. Crafted with</span>
            <Heart className="h-3 w-3 fill-rose-500 text-rose-500 inline" />
            <span>using React JS & Tailwind CSS.</span>
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
