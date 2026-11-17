import Container from '../components/Container'
import {
  Code2,
  Layout,
  Smartphone,
  Gauge,
  Workflow,
  Wrench,
  Sparkles,
  ArrowRight,
} from 'lucide-react'

// Services Data List
const servicesList = [
  {
    id: 'frontend-dev',
    title: 'Frontend Web Development',
    description:
      'Building fast, modern, and scalable single-page web applications with React JS, modern JavaScript (ES6+), and clean component architecture.',
    icon: Code2,
    gradient: 'from-blue-600 to-indigo-600',
    color: 'text-blue-600 bg-blue-50 dark:bg-blue-950/40 dark:text-blue-400',
  },
  {
    id: 'responsive-design',
    title: 'Responsive Web Design',
    description:
      'Creating pixel-perfect, mobile-first layouts using Tailwind CSS that adapt flawlessly across mobile, tablet, laptop, and desktop screens.',
    icon: Smartphone,
    gradient: 'from-cyan-600 to-blue-600',
    color: 'text-cyan-600 bg-cyan-50 dark:bg-cyan-950/40 dark:text-cyan-400',
  },
  {
    id: 'ui-ux-implementation',
    title: 'Figma to Clean Code',
    description:
      'Translating UI/UX Figma designs into semantic, accessible, and interactive web interfaces with smooth animations and attention to detail.',
    icon: Layout,
    gradient: 'from-indigo-600 to-purple-600',
    color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 dark:text-indigo-400',
  },
  {
    id: 'performance-optimization',
    title: 'Performance & SEO Optimization',
    description:
      'Optimizing code structures, asset loading, and semantic elements to ensure high Lighthouse scores, fast load times, and search discoverability.',
    icon: Gauge,
    gradient: 'from-emerald-600 to-teal-600',
    color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-400',
  },
  {
    id: 'api-integration',
    title: 'API Integration & State Management',
    description:
      'Seamlessly connecting frontend applications with REST APIs, handling asynchronous data flows, and managing dynamic UI state with React hooks.',
    icon: Workflow,
    gradient: 'from-amber-500 to-orange-600',
    color: 'text-amber-600 bg-amber-50 dark:bg-amber-950/40 dark:text-amber-400',
  },
  {
    id: 'website-maintenance',
    title: 'Website Maintenance & Bug Fixing',
    description:
      'Troubleshooting styling bugs, cross-browser compatibility issues, upgrading packages, and keeping web applications secure and up-to-date.',
    icon: Wrench,
    gradient: 'from-rose-500 to-red-600',
    color: 'text-rose-600 bg-rose-50 dark:bg-rose-950/40 dark:text-rose-400',
  },
]

/**
 * Services Section Component
 */
const Services = () => {
  return (
    <section
      id="services"
      className="scroll-mt-20 sm:scroll-mt-24 relative overflow-hidden bg-gradient-to-b from-white via-slate-50/40 to-white py-16 transition-colors duration-300 border-b border-slate-100 dark:border-slate-800/80 dark:from-slate-950 dark:via-slate-900/30 dark:to-slate-950 sm:py-24"
    >
      {/* Decorative ambient background glows */}
      <div className="pointer-events-none absolute -top-28 right-1/4 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl dark:bg-blue-900/10" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-80 w-80 rounded-full bg-indigo-100/30 blur-3xl dark:bg-indigo-900/10" />

      <Container className="relative px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/90 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-700 uppercase shadow-2xs dark:border-blue-900/50 dark:bg-blue-950/40 dark:text-blue-300">
            <Sparkles className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
            <span>WHAT I OFFER</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 transition-colors dark:text-white sm:text-4xl lg:text-5xl">
            My{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="mt-4 text-base text-slate-600 transition-colors dark:text-slate-400 sm:text-lg">
            High quality frontend solutions tailored to create beautiful, fast and scalable digital products.
          </p>
        </div>

        {/* ================= SERVICES CARDS GRID ================= */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {servicesList.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900/90 dark:hover:border-blue-500/50 dark:hover:shadow-blue-500/5"
              >
                <div>
                  {/* Icon */}
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${service.color}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600 transition-colors dark:text-slate-400">
                    {service.description}
                  </p>
                </div>

                {/* Subtle Action Link */}
                <div className="mt-6 border-t border-slate-100 pt-4 dark:border-slate-800/80">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <span>Discuss a Project</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

      </Container>
    </section>
  )
}

export default Services
