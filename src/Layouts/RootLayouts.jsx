import { useEffect } from 'react'
import { Heder } from './Heder'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'

const RootLayouts = () => {
  const location = useLocation()

  // On page mount or URL change, auto-scroll to hash/pathname section if specified
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    const path = location.pathname.replace('/', '')
    const target =
      hash ||
      (path &&
      ['about', 'services', 'service', 'skills', 'projects', 'project', 'contact'].includes(path)
        ? path
        : '')

    if (target) {
      const normalizedTarget =
        target === 'service' ? 'services' : target === 'project' ? 'projects' : target
      const element = document.getElementById(normalizedTarget) || document.getElementById(target)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 150)
      }
    }
  }, [location])

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100 flex flex-col">
      <Heder />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayouts
