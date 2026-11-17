import { useState } from 'react'
import Container from '../components/Container'
import ProjectCard from '../components/ProjectCard'
import CounterStats from '../components/CounterStats'
import { projectsData } from '../data/projectsData'
import { Sparkles, FolderGit2, ArrowRight } from 'lucide-react'

// Filter Category Options
const filterCategories = ['All', 'HTML & CSS', 'JavaScript', 'React JS']

/**
 * Projects Section Component with Animated Counter & Light/Dark Mode
 */
const Project = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  // Filter projects by active category
  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter)

  // Count items per category
  const getCategoryCount = (category) => {
    if (category === 'All') return projectsData.length
    return projectsData.filter((item) => item.category === category).length
  }

  return (
    <section
      id="projects"
      className="scroll-mt-20 sm:scroll-mt-24 relative border-b border-slate-100 bg-slate-50/40 py-16 transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-950/50 sm:py-24"
    >
      {/* Fallback anchor for #project */}
      <span id="project" className="absolute -top-24" />

      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl dark:bg-blue-900/10" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-indigo-100/30 blur-3xl dark:bg-indigo-900/10" />

      <Container className="relative px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col items-center text-center">
          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/90 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-700 uppercase shadow-2xs dark:border-blue-900/50 dark:bg-blue-950/40 dark:text-blue-300">
            <Sparkles className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
            <span>MY WORK</span>
          </div>

          {/* Main Heading */}
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 transition-colors dark:text-white sm:text-4xl lg:text-5xl">
            Featured{' '}
            <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-base text-slate-600 transition-colors dark:text-slate-400 sm:text-lg">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        {/* ================= HORIZONTAL BLACK COUNTER CONTAINER (MATCHING REFERENCE IMAGE) ================= */}
        <CounterStats />

        {/* ================= CATEGORY FILTERS ================= */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {filterCategories.map((category) => {
            const isActive = activeFilter === category
            const count = getCategoryCount(category)

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                className={`relative inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 active:scale-95 ${
                  isActive
                    ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-500/30'
                    : 'border border-slate-200/90 bg-white text-slate-600 shadow-2xs hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-white'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* ================= PROJECTS GRID ================= */}
        {filteredProjects.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="mx-auto mt-12 flex max-w-md flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center transition-colors dark:border-slate-800 dark:bg-slate-900 sm:p-12">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
              <FolderGit2 className="h-7 w-7" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
              No Projects Found
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              There are currently no projects matching the "{activeFilter}" category.
            </p>
            <button
              type="button"
              onClick={() => setActiveFilter('All')}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700"
            >
              <Sparkles className="h-4 w-4" />
              <span>View All Projects</span>
            </button>
          </div>
        )}

        {/* View All GitHub Projects Footer Link */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/mdsohelranadev7?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-blue-400"
          >
            <span>Explore More Repositories on GitHub</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

      </Container>
    </section>
  )
}

export default Project
