import { Link } from 'react-router-dom'

export default function SemesterProject2() {
  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link to="/" className="text-sm text-[#4B5563] hover:text-[#1B2B40] transition-colors">← Back</Link>
        <div className="mt-8">
          <span className="text-xs font-semibold text-[#8A8F9A] uppercase tracking-widest">React / TypeScript / Tailwind</span>
          <h1 className="font-serif text-3xl font-semibold text-[#1B2B40] mt-2 mb-4">Semester Project 2 — Holidaze</h1>
          <button onClick={() => { navigator.clipboard.writeText(window.location.href); alert('Link copied!'); }} className="text-sm text-[#8A8F9A] hover:text-[#1B2B40] transition-colors mb-8 inline-block">Share this project ↗</button>
          <figure className="mb-8">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800" alt="Holidaze project screenshot" className="w-full rounded-2xl object-cover h-64" />
            <figcaption className="text-sm text-[#8A8F9A] mt-2 text-center">Holidaze — accommodation booking platform</figcaption>
          </figure>
          <div className="flex gap-4 mb-10">
            <a href="https://holidaze123.netlify.app" target="_blank" rel="noopener noreferrer" className="text-sm font-medium bg-[#1B2B40] text-white px-4 py-2 rounded-xl hover:bg-[#2d4460] transition-colors">View Live Site ↗</a>
            <a href="https://github.com/idanok/holidaze#readme" target="_blank" rel="noopener noreferrer" className="text-sm font-medium border border-[#E8E4DE] text-[#1B2B40] px-4 py-2 rounded-xl hover:border-[#1B2B40] transition-colors">GitHub README ↗</a>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-[#E8E4DE]">
            <h2 className="font-serif text-xl font-semibold text-[#1B2B40] mb-3">About this project</h2>
            <p className="text-[#4B5563] leading-relaxed mb-6">Holidaze is a modern accommodation booking platform built for Noroff Project Exam 2. Customers can browse and book venues, while venue managers can list and manage their own properties.</p>
            <h2 className="font-serif text-xl font-semibold text-[#1B2B40] mb-3">What I built</h2>
            <ul className="list-disc list-inside text-[#4B5563] space-y-2 mb-6">
              <li>Browse and search all venues</li>
              <li>View individual venue pages with booking calendar</li>
              <li>Customer registration, login, and booking flow</li>
              <li>Venue manager dashboard to create, edit, and delete venues</li>
              <li>View all bookings on managed venues</li>
              <li>Avatar update for all users</li>
              <li>Fully responsive across mobile and desktop</li>
            </ul>
            <h2 className="font-serif text-xl font-semibold text-[#1B2B40] mb-3">Improvements made</h2>
            <ul className="list-disc list-inside text-[#4B5563] space-y-2 mb-6">
              <li>Added a 404 Not Found page for non-existent routes</li>
              <li>Fixed all WAVE accessibility errors including form labels and contrast issues</li>
              <li>Lighthouse scores improved to 90+ Performance, 95 Accessibility, 100 SEO</li>
              <li>Added robots.txt and meta description for better SEO</li>
              <li>Fixed venue manager authentication flow</li>
            </ul>
            <h2 className="font-serif text-xl font-semibold text-[#1B2B40] mb-3">Challenges</h2>
            <p className="text-[#4B5563] leading-relaxed">The main challenges were TypeScript typing for API responses and debugging the authentication flow. Accessibility testing with WAVE revealed many issues that were systematically fixed across all pages.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
