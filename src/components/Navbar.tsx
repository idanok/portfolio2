import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-[#3D2314] sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl font-bold text-white">
          Ida<span className="text-[#C4622D]">.</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link to="/" className="text-sm text-white/70 hover:text-white transition-colors">Home</Link>
          <a href="https://github.com/idanok" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white transition-colors">GitHub</a>
        </nav>
      </div>
    </header>
  )
}
