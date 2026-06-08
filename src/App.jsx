import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Works from './pages/Works'
import Contact from './pages/Contact'
import './App.css'

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <main style={{ flex: 1, paddingTop: 'var(--nav-h)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}
