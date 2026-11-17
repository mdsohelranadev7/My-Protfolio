import { useState, useEffect, useRef } from 'react'
import { FolderGit2 } from 'lucide-react'

/**
 * Animated Project Counter Component using Intersection Observer
 */
const ProjectCounter = ({ projects = [] }) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRef = useRef(null)

  // Automatically and strictly calculate actual completed projects
  // Deduplicates by unique ID to count each project only once
  const completedProjectsMap = new Map()
  projects.forEach((proj) => {
    if (!proj.status || proj.status === 'completed') {
      completedProjectsMap.set(proj.id, proj)
    }
  })
  const completedProjectsCount = completedProjectsMap.size

  // Category counts based on actual completed data
  const reactCount = Array.from(completedProjectsMap.values()).filter(
    (p) => p.category === 'React JS'
  ).length
  const jsCount = Array.from(completedProjectsMap.values()).filter(
    (p) => p.category === 'JavaScript'
  ).length
  const htmlCssCount = Array.from(completedProjectsMap.values()).filter(
    (p) => p.category === 'HTML & CSS'
  ).length

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)

          const duration = 1500 // duration in ms
          const startTime = performance.now()

          const step = (currentTime) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease-out quadratic easing function
            const easeOut = 1 - (1 - progress) * (1 - progress)
            const currentVal = Math.round(easeOut * completedProjectsCount)

            setCount(currentVal)

            if (progress < 1) {
              requestAnimationFrame(step)
            } else {
              setCount(completedProjectsCount)
            }
          }

          requestAnimationFrame(step)
        }
      },
      { threshold: 0.25 }
    )

    const currentElem = counterRef.current
    if (currentElem) {
      observer.observe(currentElem)
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem)
      }
    }
  }, [completedProjectsCount, hasAnimated])

  return (
    <div
      ref={counterRef}
      className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 dark:shadow-none dark:hover:border-blue-500/50 sm:p-8"
    >
      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-8">
        
        {/* Left Side: Main Featured Counter Card */}
        <div className="flex items-center gap-5 md:col-span-7">
          {/* Project Icon */}
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 sm:h-20 sm:w-20">
            <FolderGit2 className="h-8 w-8 sm:h-10 sm:w-10" />
          </div>

          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-extrabold tracking-tight text-slate-900 transition-colors dark:text-white sm:text-6xl">
                {count}
              </span>
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 sm:text-3xl">
                +
              </span>
            </div>

            <h3 className="mt-1 text-lg font-bold text-slate-900 transition-colors dark:text-white sm:text-xl">
              Projects Completed
            </h3>

            <p className="mt-0.5 text-xs text-slate-600 transition-colors dark:text-slate-400 sm:text-sm">
              Successfully built and completed projects.
            </p>
          </div>
        </div>

        {/* Right Side: Real Category Distribution Badges */}
        <div className="grid grid-cols-3 gap-2.5 border-t border-slate-200/70 pt-4 dark:border-slate-800 md:col-span-5 md:border-t-0 md:border-l md:pt-0 md:pl-6">
          
          {/* React JS */}
          <div className="rounded-xl border border-slate-200/80 bg-white/80 p-3 text-center shadow-2xs dark:border-slate-800 dark:bg-slate-800/80">
            <p className="text-xl font-extrabold text-blue-600 dark:text-blue-400">
              {reactCount}
            </p>
            <p className="mt-1 text-[11px] font-semibold text-slate-600 dark:text-slate-400">
              React JS
            </p>
          </div>

          {/* JavaScript */}
          <div className="rounded-xl border border-slate-200/80 bg-white/80 p-3 text-center shadow-2xs dark:border-slate-800 dark:bg-slate-800/80">
            <p className="text-xl font-extrabold text-amber-500">
              {jsCount}
            </p>
            <p className="mt-1 text-[11px] font-semibold text-slate-600 dark:text-slate-400">
              JavaScript
            </p>
          </div>

          {/* HTML & CSS */}
          <div className="rounded-xl border border-slate-200/80 bg-white/80 p-3 text-center shadow-2xs dark:border-slate-800 dark:bg-slate-800/80">
            <p className="text-xl font-extrabold text-indigo-500">
              {htmlCssCount}
            </p>
            <p className="mt-1 text-[11px] font-semibold text-slate-600 dark:text-slate-400">
              HTML/CSS
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ProjectCounter
