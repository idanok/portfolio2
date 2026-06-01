import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'CSS Frameworks',
    description: 'A responsive social media front-end application built with Tailwind CSS, featuring posts, profiles, and user interactions.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800',
    slug: '/css-frameworks',
    tag: 'HTML / CSS / JavaScript',
  },
  {
    title: 'JavaScript Frameworks',
    description: 'A full e-commerce online shop built with Next.js, featuring product listings, cart management, and checkout flow.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800',
    slug: '/js-frameworks',
    tag: 'Next.js / React',
  },
  {
    title: 'Semester Project 2 — Holidaze',
    description: 'A modern accommodation booking platform where users can browse venues, make bookings, and manage their listings.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    slug: '/semester-project-2',
    tag: 'React / TypeScript / Tailwind',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      <div className="bg-[#1B2B40] px-6 py-24 text-center">
        <h1 className="font-serif text-5xl font-light text-white mb-4">Ida <span className="text-[#E8614A]">Okland</span></h1>
        <p className="text-white/70 text-lg max-w-md mx-auto leading-relaxed">Front-end developer student at Noroff — building clean, accessible web experiences.</p>
        <div className="flex gap-4 justify-center mt-8">
          <a href="https://github.com/idanok" target="_blank" rel="noopener noreferrer" className="text-sm font-medium bg-[#E8614A] text-white px-6 py-3 rounded-xl hover:bg-[#d4553f] transition-colors">GitHub Profile</a>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-xs font-semibold text-[#8A8F9A] uppercase tracking-widest mb-8">Selected Projects</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
      <div className="bg-white border-t border-[#E8E4DE] py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          <div>
            <p className="font-serif text-3xl font-bold text-[#1B2B40]">3</p>
            <p className="text-sm text-[#4B5563] mt-1">Projects completed</p>
          </div>
          <div>
            <p className="font-serif text-3xl font-bold text-[#1B2B40]">React</p>
            <p className="text-sm text-[#4B5563] mt-1">Primary framework</p>
          </div>
          <div>
            <p className="font-serif text-3xl font-bold text-[#1B2B40]">Noroff</p>
            <p className="text-sm text-[#4B5563] mt-1">Front-End Development</p>
          </div>
        </div>
      </div>
    </div>
  )
}
