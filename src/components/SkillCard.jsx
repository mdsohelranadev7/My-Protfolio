import React from 'react'

/**
 * Reusable Skill Card Component
 */
const SkillCard = ({ skill }) => {
  const { name, icon: Icon, color, bgColor, darkBgColor, category, description } = skill

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900/90 dark:hover:border-blue-500/50 dark:hover:shadow-blue-500/5 sm:p-6">
      
      {/* Top Header: Icon + Category Badge */}
      <div className="flex items-start justify-between gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${bgColor} ${darkBgColor || 'dark:bg-slate-800'}`}
        >
          <Icon className="text-2xl" style={{ color }} />
        </div>

        <span className="inline-flex items-center rounded-full border border-slate-200/80 bg-slate-50 px-2.5 py-0.5 text-[11px] font-semibold text-slate-500 uppercase tracking-wider dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-400">
          {category}
        </span>
      </div>

      {/* Middle Content: Skill Name + Description */}
      <div className="mt-4 flex-1">
        <h3 className="text-base font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
          {name}
        </h3>
        <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
          {description}
        </p>
      </div>

      {/* Subtle Bottom Accent Indicator */}
      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-medium text-slate-400 dark:text-slate-500">
        <span>Verified Proficiency</span>
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 group-hover:animate-ping" />
      </div>
    </div>
  )
}

export default SkillCard
