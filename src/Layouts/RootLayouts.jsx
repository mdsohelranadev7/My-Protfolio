import { useEffect } from 'react'
import { Heder } from './Heder'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'

const RootLayouts = () => {
  const { pathname, hash } = useLocation()

  // On route change, scroll to hash anchor if present, otherwise to the top
  // Preserves current URL without any redirection
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

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
