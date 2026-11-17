import React from 'react'
import { ExternalLink, Code2 } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

/**
 * Reusable Project Card Component with Light & Dark Mode
 */
const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    image,
    category,
    technologies = [],
    liveLink,
    githubLink,
  } = project

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900/90 dark:hover:border-blue-500/50 dark:hover:shadow-blue-500/5">
      {/* Project Image Container with Smooth Zoom Effect */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
        />

        {/* Category Badge Overlay */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white shadow-sm backdrop-blur-md">
            {category}
          </span>
        </div>

        {/* Subtle Dark Gradient Overlay on Hover */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        
        {/* Title */}
        <h3 className="text-xl font-bold tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2.5 text-sm leading-relaxed text-slate-600 transition-colors dark:text-slate-300 line-clamp-2">
          {description}
        </p>

        {/* Technology Stack Badges */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md border border-slate-200/80 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-700/80 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-blue-500/50 dark:hover:bg-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom Action Buttons (Aligned to bottom) */}
        <div className="mt-auto pt-6">
          <div className="flex items-center gap-3 border-t border-slate-100 pt-4 dark:border-slate-800/80">
            {/* Live Demo Button */}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:from-blue-700 hover:to-indigo-700 hover:shadow-md hover:shadow-blue-500/25 active:scale-95"
              >
                <span>Live Demo</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            )}

            {/* GitHub Source Code Button */}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-2xs transition-all duration-200 hover:border-slate-800 hover:bg-slate-900 hover:text-white hover:shadow-sm active:scale-95 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-700"
                title="View Source Code"
                aria-label={`View ${title} source code on GitHub`}
              >
                <FaGithub className="text-base" />
                <span className="hidden sm:inline">Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
