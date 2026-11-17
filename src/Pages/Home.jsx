import React, { useState, useEffect } from 'react'
import Container from '../components/Container'
import hero from '../assets/hero.png'
import {
  Download,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaReact,
  FaJs,
} from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import About from './About'
import Service from './Service'
import Project from './Project'
import Contact from './Contact'

/**
 * Modern Hero Section Component
 */
const HeroSection = () => {
  const titles = ['Frontend Developer', 'React JS Developer', 'Web Designer']
  const [titleIndex, setTitleIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Typing animation effect
  useEffect(() => {
    const currentTitle = titles[titleIndex]
    let timeout

    if (!isDeleting && currentText === currentTitle) {
      // Pause when full title is typed
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && currentText === '') {
      // Switch to next title after deletion
      setIsDeleting(false)
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
    } else {
      // Type or delete characters
      const nextText = isDeleting
        ? currentTitle.substring(0, currentText.length - 1)
        : currentTitle.substring(0, currentText.length + 1)

      timeout = setTimeout(
        () => setCurrentText(nextText),
        isDeleting ? 45 : 90
      )
    }

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, titleIndex])

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-blue-50/20 py-16 transition-colors duration-300 border-b border-slate-100 dark:from-slate-950 dark:via-slate-900/40 dark:to-slate-950 dark:border-slate-800/80 sm:py-24 lg:py-28"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-28 left-1/4 h-96 w-96 rounded-full bg-blue-200/35 blur-3xl dark:bg-blue-600/15" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl dark:bg-indigo-600/15" />
      <div className="pointer-events-none absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-cyan-100/30 blur-3xl dark:bg-cyan-600/10" />

      <Container className="relative px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* ================= LEFT CONTENT ================= */}
          <div className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
            
            {/* Small Greeting Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/90 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-700 uppercase shadow-2xs dark:border-blue-900/50 dark:bg-blue-950/40 dark:text-blue-300">
              <span className="text-sm">👋</span>
              <span>HELLO, I'M</span>
            </div>

            {/* Name */}
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 transition-colors dark:text-white sm:text-6xl lg:text-7xl">
              Sohel{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Rana
              </span>
            </h1>

            {/* Dynamic Typing Title */}
            <div className="mt-3 flex min-h-[44px] items-center text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-3xl lg:text-4xl">
              <span>A&nbsp;</span>
              <span className="text-blue-600 dark:text-blue-400">
                {currentText}
              </span>
              <span className="ml-1 inline-block h-7 w-0.5 animate-pulse bg-blue-600 dark:bg-blue-400 align-middle sm:h-8" />
            </div>

            {/* Professional Introduction */}
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 transition-colors dark:text-slate-300 sm:text-lg">
              I'm a passionate <strong className="text-slate-800 dark:text-white">Frontend Developer</strong> who enjoys building modern, responsive, and user-friendly websites. I love transforming creative ideas into clean code and seamless web experiences.
            </p>

            {/* Call To Action (CTA) Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:justify-start">
              {/* View My Work */}
              <a
                href="#project"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:from-blue-700 hover:via-indigo-700 hover:to-blue-600 hover:shadow-xl hover:shadow-blue-500/35 active:scale-95"
              >
                <span>View My Work</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              {/* Download CV */}
              <a
                href="mailto:mdsohelrana.dev7@gmail.com?subject=Resume%20Request%20-%20Sohel%20Rana"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-2xs transition-all duration-300 hover:border-blue-400 hover:bg-blue-50/60 hover:text-blue-600 hover:shadow-sm active:scale-95 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:bg-slate-800 dark:hover:text-blue-400"
              >
                <Download className="h-4 w-4 text-slate-500 transition-colors group-hover:text-blue-600 dark:text-slate-400 dark:group-hover:text-blue-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 flex items-center gap-3">
              <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase dark:text-slate-500">
                Find Me:
              </span>
              <div className="flex items-center gap-2.5 text-lg">
                <a
                  href="https://github.com/mdsohelranadev7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-800 hover:bg-slate-900 hover:text-white hover:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-white"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:bg-blue-600 dark:hover:text-white"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-700 hover:bg-blue-700 hover:text-white hover:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-600 dark:hover:bg-blue-700 dark:hover:text-white"
                  title="Facebook Profile"
                  aria-label="Facebook Profile"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>

          </div>

          {/* ================= RIGHT CONTENT (IMAGE & FLOATING BADGES) ================= */}
          <div className="relative mx-auto mt-6 flex justify-center lg:col-span-5 lg:mt-0">
            
            {/* Outer Glow Halo */}
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-500/25 via-indigo-500/20 to-cyan-400/25 blur-2xl dark:from-blue-600/20 dark:via-indigo-600/15 dark:to-cyan-500/20" />

            {/* Profile Image Card */}
            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[380px]">
              <div className="group relative overflow-hidden rounded-3xl border-2 border-white/90 bg-gradient-to-b from-blue-50/70 via-white to-indigo-50/50 p-3 shadow-2xl shadow-blue-500/10 backdrop-blur-xs dark:border-slate-800 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 dark:shadow-none">
                
                {/* Rounded Inner Photo Container */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100/60 to-indigo-100/40 dark:from-slate-800/80 dark:to-slate-900">
                  <img
                    src={hero}
                    alt="Sohel Rana - Frontend Developer"
                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-102"
                    loading="eager"
                  />
                  {/* Subtle inner gradient shadow at bottom */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>

                {/* Experience Micro-Badge at Image Bottom */}
                <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/30 bg-slate-900/80 p-2.5 text-center text-white backdrop-blur-md shadow-lg dark:border-slate-700/60 dark:bg-slate-900/90">
                  <p className="text-xs font-semibold tracking-wide">
                    🚀 Frontend & Web Development
                  </p>
                </div>
              </div>

              {/* Floating Skill Badge 1: React JS */}
              <div className="animate-float-slow absolute -top-4 -left-4 sm:-left-8 z-20 flex items-center gap-2 rounded-2xl border border-slate-200/90 bg-white/95 px-3.5 py-2 shadow-lg backdrop-blur-md transition-transform hover:scale-105 dark:border-slate-800 dark:bg-slate-900/95">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-50 text-cyan-500 shadow-2xs dark:bg-cyan-950/40 dark:text-cyan-400">
                  <FaReact className="text-xl" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase dark:text-slate-500">Library</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-100">React JS</p>
                </div>
              </div>

              {/* Floating Skill Badge 2: Tailwind CSS */}
              <div className="animate-float-delayed absolute top-1/2 -right-4 sm:-right-8 z-20 -translate-y-1/2 flex items-center gap-2 rounded-2xl border border-slate-200/90 bg-white/95 px-3.5 py-2 shadow-lg backdrop-blur-md transition-transform hover:scale-105 dark:border-slate-800 dark:bg-slate-900/95">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-50 text-sky-500 shadow-2xs dark:bg-sky-950/40 dark:text-sky-400">
                  <SiTailwindcss className="text-xl" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase dark:text-slate-500">CSS Tech</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-100">Tailwind CSS</p>
                </div>
              </div>

              {/* Floating Skill Badge 3: JavaScript */}
              <div className="animate-float-mid absolute -bottom-4 -left-4 sm:-left-6 z-20 flex items-center gap-2 rounded-2xl border border-slate-200/90 bg-white/95 px-3.5 py-2 shadow-lg backdrop-blur-md transition-transform hover:scale-105 dark:border-slate-800 dark:bg-slate-900/95">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-50 text-amber-500 shadow-2xs dark:bg-amber-950/40 dark:text-amber-400">
                  <FaJs className="text-xl" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase dark:text-slate-500">Core</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-100">JavaScript</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  )
}

/**
 * Main Home Page Component
 */
const Home = () => {
  return (
    <div className="transition-colors duration-300">
      <HeroSection />
      <About />
      <Service />
      <Project />
      <Contact />
    </div>
  )
}

export default Home
