import React, { useState } from 'react'
import Container from '../components/Container'
import SkillCard from '../components/SkillCard'
import { Sparkles, Laptop, Wrench, Layers } from 'lucide-react'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaChrome,
  FaNpm,
} from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

// Skills Data Array
const skillsData = [
  // Frontend Category
  {
    id: 'html5',
    name: 'HTML5',
    category: 'Frontend',
    icon: FaHtml5,
    color: '#E34F26',
    bgColor: 'bg-orange-50',
    darkBgColor: 'dark:bg-orange-950/30',
    description: 'Semantic markup, accessible elements, modern web forms, and clean SEO-friendly structures.',
  },
  {
    id: 'css3',
    name: 'CSS3',
    category: 'Frontend',
    icon: FaCss3Alt,
    color: '#1572B6',
    bgColor: 'bg-blue-50',
    darkBgColor: 'dark:bg-blue-950/30',
    description: 'Modern layouts with Flexbox and CSS Grid, fluid typography, transitions, and keyframe animations.',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Frontend',
    icon: FaJs,
    color: '#F7DF1E',
    bgColor: 'bg-amber-50',
    darkBgColor: 'dark:bg-amber-950/30',
    description: 'Core ES6+ syntax, asynchronous operations, DOM manipulation, APIs, and dynamic interface logic.',
  },
  {
    id: 'react',
    name: 'React JS',
    category: 'Frontend',
    icon: FaReact,
    color: '#61DAFB',
    bgColor: 'bg-cyan-50',
    darkBgColor: 'dark:bg-cyan-950/30',
    description: 'Reusable component architecture, React hooks, state management, and responsive SPA applications.',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Frontend',
    icon: SiTailwindcss,
    color: '#38BDF8',
    bgColor: 'bg-sky-50',
    darkBgColor: 'dark:bg-sky-950/30',
    description: 'Utility-first CSS workflows for creating custom, pixel-perfect, responsive designs with speed.',
  },
  {
    id: 'responsive-design',
    name: 'Responsive Web Design',
    category: 'Frontend',
    icon: Laptop,
    color: '#10B981',
    bgColor: 'bg-emerald-50',
    darkBgColor: 'dark:bg-emerald-950/30',
    description: 'Mobile-first methodology ensuring flawless visual appeal across smartphones, tablets, and desktops.',
  },

  // Tools Category
  {
    id: 'git',
    name: 'Git',
    category: 'Tools',
    icon: FaGitAlt,
    color: '#F05032',
    bgColor: 'bg-rose-50',
    darkBgColor: 'dark:bg-rose-950/30',
    description: 'Distributed version control system for efficient branching, commit history, and code management.',
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'Tools',
    icon: FaGithub,
    color: '#333333',
    bgColor: 'bg-slate-100',
    darkBgColor: 'dark:bg-slate-800',
    description: 'Remote code hosting, pull request workflows, repository management, and portfolio project deployments.',
  },
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'Tools',
    icon: VscVscode,
    color: '#007ACC',
    bgColor: 'bg-sky-50',
    darkBgColor: 'dark:bg-sky-950/30',
    description: 'Primary IDE enhanced with modern developer extensions, snippets, linting, and rapid debugging.',
  },
  {
    id: 'chrome-devtools',
    name: 'Chrome DevTools',
    category: 'Tools',
    icon: FaChrome,
    color: '#4285F4',
    bgColor: 'bg-blue-50',
    darkBgColor: 'dark:bg-blue-950/30',
    description: 'Deep DOM inspection, real-time CSS debugging, console testing, network diagnostics, and performance.',
  },
  {
    id: 'npm',
    name: 'NPM',
    category: 'Tools',
    icon: FaNpm,
    color: '#CB3837',
    bgColor: 'bg-red-50',
    darkBgColor: 'dark:bg-red-950/30',
    description: 'Node Package Manager for installing dependencies, managing packages, and running build scripts.',
  },
]

// Filter categories
const categories = ['All Skills', 'Frontend', 'Tools']

/**
 * Redesigned Skills Section Component
 */
const Service = () => {
  const [activeCategory, setActiveCategory] = useState('All Skills')

  // Filter skills based on selected category
  const filteredSkills =
    activeCategory === 'All Skills'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory)

  // Get item count for category
  const getCategoryCount = (category) => {
    if (category === 'All Skills') return skillsData.length
    return skillsData.filter((skill) => skill.category === category).length
  }

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-white py-16 transition-colors duration-300 border-b border-slate-100 dark:border-slate-800/80 dark:bg-slate-950 sm:py-24"
    >
      {/* Decorative ambient background glows */}
      <div className="pointer-events-none absolute -top-28 left-10 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl dark:bg-blue-900/10" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-72 w-72 rounded-full bg-indigo-100/40 blur-3xl dark:bg-indigo-900/10" />

      <Container className="relative px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/90 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-700 uppercase shadow-2xs dark:border-blue-900/50 dark:bg-blue-950/40 dark:text-blue-300">
            <Sparkles className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
            <span>MY EXPERTISE</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 transition-colors dark:text-white sm:text-4xl lg:text-5xl">
            Technical{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mt-4 text-base text-slate-600 transition-colors dark:text-slate-400 sm:text-lg">
            Technologies and tools I use to build modern, responsive and user-friendly web experiences.
          </p>
        </div>

        {/* ================= CATEGORY FILTERS ================= */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category
            const count = getCategoryCount(category)

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`relative inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 active:scale-95 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-500/30'
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

        {/* ================= SKILLS GRID ================= */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>

      </Container>
    </section>
  )
}

export default Service
