import { useState, useEffect, useRef } from 'react'
import { projectsData } from '../data/projectsData'
import { skillsData } from '../data/skillsData'

/**
 * Premium Counter Statistics Section Component
 * Exact design style of reference image:
 * Deep black horizontal container (#080808), 4 equal columns, subtle separator lines,
 * large bold numbers, uppercase gray labels, and smooth counter-up animation.
 */
const CounterStats = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    skills: 0,
    months: 0,
    dedication: 0,
  })
  const [hasAnimated, setHasAnimated] = useState(false)
  const containerRef = useRef(null)

  // 1. Dynamic Project Count (Deduplicated completed projects)
  const completedProjectsMap = new Map()
  projectsData.forEach((project) => {
    if (!project.status || project.status === 'completed') {
      completedProjectsMap.set(project.id, project)
    }
  })
  const targetProjects = completedProjectsMap.size

  // 2. Dynamic Technologies Count from existing skills data
  const targetSkills = skillsData.length

  // 3. Experience / Months of Learning
  const targetMonths = 12

  // 4. Dedication Percentage
  const targetDedication = 100

  // Counter-Up Animation via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)

          const duration = 1600 // ms
          const startTime = performance.now()

          const step = (currentTime) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease-out quadratic easing function
            const easeOut = 1 - (1 - progress) * (1 - progress)

            setCounts({
              projects: Math.round(easeOut * targetProjects),
              skills: Math.round(easeOut * targetSkills),
              months: Math.round(easeOut * targetMonths),
              dedication: Math.round(easeOut * targetDedication),
            })

            if (progress < 1) {
              requestAnimationFrame(step)
            } else {
              setCounts({
                projects: targetProjects,
                skills: targetSkills,
                months: targetMonths,
                dedication: targetDedication,
              })
            }
          }

          requestAnimationFrame(step)
        }
      },
      { threshold: 0.25 }
    )

    const currentElem = containerRef.current
    if (currentElem) {
      observer.observe(currentElem)
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem)
      }
    }
  }, [hasAnimated, targetProjects, targetSkills, targetMonths, targetDedication])

  // Statistics items array
  const stats = [
    {
      id: 'projects',
      value: `${counts.projects}+`,
      label: 'PROJECTS COMPLETED',
      borderClasses:
        'border-r border-b border-slate-200 dark:border-neutral-800 lg:border-b-0',
    },
    {
      id: 'skills',
      value: `${counts.skills}+`,
      label: 'TECHNOLOGIES LEARNED',
      borderClasses:
        'border-b border-slate-200 dark:border-neutral-800 lg:border-r lg:border-b-0',
    },
    {
      id: 'months',
      value: `${counts.months}+`,
      label: 'MONTHS OF LEARNING',
      borderClasses:
        'border-r border-slate-200 dark:border-neutral-800 lg:border-r lg:border-b-0',
    },
    {
      id: 'dedication',
      value: `${counts.dedication}%`,
      label: 'DEDICATION',
      borderClasses: '',
    },
  ]

  return (
    <div
      ref={containerRef}
      className="mx-auto my-12 w-full max-w-5xl overflow-hidden rounded-[16px] border border-slate-200 bg-white shadow-sm transition-all duration-300 dark:border-neutral-800 dark:bg-[#080808] dark:shadow-none"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col items-center justify-center px-4 py-8 text-center transition-all duration-200 sm:px-6 sm:py-10 ${item.borderClasses}`}
          >
            {/* Large Bold Animated Number */}
            <span className="text-3xl font-extrabold tracking-tight text-slate-900 transition-colors dark:text-white sm:text-4xl lg:text-5xl">
              {item.value}
            </span>

            {/* Smaller Uppercase Gray Label */}
            <span className="mt-2 text-[11px] font-semibold tracking-wider text-slate-500 uppercase transition-colors dark:text-neutral-400 sm:text-xs">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CounterStats
