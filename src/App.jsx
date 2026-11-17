import './App.css'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import RootLayouts from './Layouts/RootLayouts'
import Home from './Pages/Home'
import Error from './Pages/Error'

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          {/* Direct URL paths map to Single-Page Home without opening separate pages */}
          <Route path="about" element={<Home />} />
          <Route path="services" element={<Home />} />
          <Route path="service" element={<Home />} />
          <Route path="skills" element={<Home />} />
          <Route path="projects" element={<Home />} />
          <Route path="project" element={<Home />} />
          <Route path="contact" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
