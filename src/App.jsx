import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import RootLayouts from './Layouts/RootLayouts'
import Home from './Pages/Home'
import About from './Pages/About'
import Error from './Pages/Error'
import Service from './Pages/Service'
import Project from './Pages/Project'
import Contact from './Pages/Contact'

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="project" element={<Project />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
