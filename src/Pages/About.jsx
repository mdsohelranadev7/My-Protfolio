import React from 'react'
import Container from '../components/Container'
import hero from '../assets/hero.png'
import {
  Sparkles,
  User,
  Briefcase,
  MapPin,
  Code2,
  GraduationCap,
  FolderGit2,
  Layers,
  Flame,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

/**
 * About Me Section Component
 */
const About = () => {
  // Personal Details
  const personalInfo = [
    {
      id: 'name',
      label: 'Name',
      value: 'Sohel Rana',
      icon: User,
      color: 'text-blue-600 bg-blue-50',
    },
    {
      id: 'role',
      label: 'Role',
      value: 'Frontend Developer',
      icon: Briefcase,
      color: 'text-indigo-600 bg-indigo-50',
    },
    {
      id: 'location',
      label: 'Location',
      value: 'Dhaka, Bangladesh',
      icon: MapPin,
      color: 'text-emerald-600 bg-emerald-50',
    },
    {
      id: 'focus',
      label: 'Focus',
      value: 'Responsive Web Design & Frontend Development',
      icon: Code2,
      color: 'text-cyan-600 bg-cyan-50',
    },
  ]

  // Key Skill Badges
  const skillsList = [
    {
      name: 'HTML5',
      icon: FaHtml5,
      color: 'text-[#E34F26]',
      bgColor: 'bg-orange-50 border-orange-200/80',
    },
    {
      name: 'CSS3',
      icon: FaCss3Alt,
      color: 'text-[#1572B6]',
      bgColor: 'bg-blue-50 border-blue-200/80',
    },
    {
      name: 'JavaScript',
      icon: FaJs,
      color: 'text-[#F7DF1E]',
      bgColor: 'bg-amber-50 border-amber-200/80',
    },
    {
      name: 'React JS',
      icon: FaReact,
      color: 'text-[#61DAFB]',
      bgColor: 'bg-cyan-50 border-cyan-200/80',
    },
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
      color: 'text-[#38BDF8]',
      bgColor: 'bg-sky-50 border-sky-200/80',
    },
    {
      name: 'Git & GitHub',
      icon: FaGitAlt,
      color: 'text-[#F05032]',
      bgColor: 'bg-rose-50 border-rose-200/80',
    },
  ]

  // Actual Portfolio Statistics
  const statistics = [
    {
      id: 1,
      value: '6+',
      label: 'Projects Completed',
      sublabel: 'E-commerce & Web Apps',
      icon: FolderGit2,
      accent: 'from-blue-600 to-indigo-600',
      bgColor: 'bg-blue-50 text-blue-600',
    },
    {
      id: 2,
      value: '6+',
      label: 'Technologies Learned',
      sublabel: 'Modern Frontend Stack',
      icon: Layers,
      accent: 'from-indigo-600 to-purple-600',
      bgColor: 'bg-indigo-50 text-indigo-600',
    },
    {
      id: 3,
      value: '100%',
      label: 'Continuous Learning',
      sublabel: 'Daily Coding & Growth',
      icon: Flame,
      accent: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50 text-amber-600',
    },
  ]

  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-slate-50/40 py-16 sm:py-24 border-b border-slate-100">
      {/* Decorative ambient background glows */}
      <div className="pointer-events-none absolute -top-32 right-10 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-80 w-80 rounded-full bg-indigo-100/30 blur-3xl" />

      <Container className="relative px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/90 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-700 uppercase shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span>GET TO KNOW ME</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            About{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </div>

        {/* ================= MAIN CONTENT GRID ================= */}
        <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          
          {/* ================= LEFT COLUMN: PROFILE CARD ================= */}
          <div className="flex flex-col items-center lg:col-span-5">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Card */}
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-4 shadow-xl shadow-slate-200/70 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                
                {/* Photo frame */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100/70 via-slate-100 to-indigo-100/50 p-2">
                  <img
                    src={hero}
                    alt="Sohel Rana"
                    className="h-auto w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                </div>

                {/* Card footer details */}
                <div className="mt-4 p-2">
                  <h3 className="text-xl font-bold text-slate-900">Md Sohel Rana</h3>
                  <p className="text-sm font-medium text-blue-600">Frontend Developer • Dhaka, BD</p>

                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                      </span>
                      Available for projects
                    </span>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:underline"
                    >
                      Contact <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>

              </div>

              {/* Learning Journey Highlight Box */}
              <div className="mt-6 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/80 to-indigo-50/50 p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">My Learning Journey</h4>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      Actively practicing modern frontend development through hands-on project building—such as the full-fledged Orebi E-Commerce platform and interactive web apps.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ================= RIGHT COLUMN: ABOUT DETAILS & SKILLS ================= */}
          <div className="space-y-8 lg:col-span-7">
            
            {/* Bio Paragraph */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-7">
              <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
                Hi, I'm <strong className="text-slate-900 font-bold">Sohel Rana</strong>, a passionate Frontend Developer who enjoys building modern, responsive and user-friendly websites. I love learning new technologies and transforming creative ideas into beautiful web experiences.
              </p>
            </div>

            {/* Information Details Grid */}
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {personalInfo.map((info) => {
                const IconComponent = info.icon
                return (
                  <div
                    key={info.id}
                    className="flex items-start gap-3.5 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-sm"
                  >
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${info.color} shadow-2xs`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                        {info.label}
                      </p>
                      <p className="mt-0.5 text-sm font-bold text-slate-800">
                        {info.value}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Skills Overview Section */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-blue-600" />
                <h3 className="text-base font-bold text-slate-900">
                  Skills Overview
                </h3>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {skillsList.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <div
                      key={skill.name}
                      className={`flex items-center gap-2.5 rounded-xl border p-3 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm ${skill.bgColor}`}
                    >
                      <Icon className={`text-xl ${skill.color}`} />
                      <span className="text-xs font-bold text-slate-800">
                        {skill.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* ================= STATISTICS CARDS ================= */}
            <div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {statistics.map((stat) => {
                  const IconComponent = stat.icon
                  return (
                    <div
                      key={stat.id}
                      className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.bgColor} shadow-2xs`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <span className={`text-2xl font-extrabold bg-gradient-to-r ${stat.accent} bg-clip-text text-transparent`}>
                          {stat.value}
                        </span>
                      </div>

                      <h4 className="mt-3 text-sm font-bold text-slate-900">
                        {stat.label}
                      </h4>
                      <p className="mt-0.5 text-xs text-slate-500">
                        {stat.sublabel}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  )
}

export default About
