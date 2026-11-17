import React from 'react'
import { Heder } from './Heder'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'

const RootLayouts = () => {
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
