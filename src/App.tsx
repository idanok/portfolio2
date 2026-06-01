import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CSSFrameworks from './pages/CSSFrameworks'
import JSFrameworks from './pages/JSFrameworks'
import SemesterProject2 from './pages/SemesterProject2'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0] text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/css-frameworks" element={<CSSFrameworks />} />
          <Route path="/js-frameworks" element={<JSFrameworks />} />
          <Route path="/semester-project-2" element={<SemesterProject2 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
