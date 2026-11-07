import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import RootLayouts from './Layouts/RootLayouts'
import Home from './Pages/Home'
import About from './Pages/About'
import Error from './Pages/Error'
import Service from './Pages/Service'
import Project from './Pages/Project'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'

function App() {
  const [count, setCount] = useState(0)


  return (

    <Routes>
      <Route path="/" element={<RootLayouts />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="project" element={<Project />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>

  )
}

export default App
