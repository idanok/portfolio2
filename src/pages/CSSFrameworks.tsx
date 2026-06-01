import { Link } from 'react-router-dom'

export default function CSSFrameworks() {
  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link to="/" className="text-sm text-[#4B5563] hover:text-[#1B2B40] transition-colors">← Back</Link>
        <div className="mt-8">
          <span className="text-xs font-semibold text-[#8A8F9A] uppercase tracking-widest">HTML / CSS / JavaScript</span>
          <h1 className="font-serif text-3xl font-semibold text-[#1B2B40] mt-2 mb-4">CSS Frameworks</h1>
          <button onClick={() => { navigator.clipboard.writeText(window.location.href); alert('Link copied!'); }} className="text-sm text-[#8A8F9A] hover:text-[#1B2B40] transition-colors mb-8 inline-block">Share this project ↗</button>
          <figure className="mb-8">
            <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800" alt="CSS Frameworks project screenshot" className="w-full rounded-2xl object-cover h-64" />
            <figcaption className="text-sm text-[#8A8F9A] mt-2 text-center">Social media front-end application — Lifely</figcaption>
          </figure>
          <div className="flex gap-4 mb-10">
            <a href="https://velvety-gecko-f8c911.netlify.app" target="_blank" rel="noopener noreferrer" className="text-sm font-medium bg-[#1B2B40] text-white px-4 py-2 rounded-xl hover:bg-[#2d4460] transition-colors">View Live Site ↗</a>
            <a href="https://github.com/idanok/js2-css-frameworks#readme" target="_blank" rel="noopener noreferrer" className="text-sm font-medium border border-[#E8E4DE] text-[#1B2B40] px-4 py-2 rounded-xl hover:border-[#1B2B40] transition-colors">GitHub README ↗</a>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-[#E8E4DE]">
            <h2 className="font-serif text-xl font-semibold text-[#1B2B40] mb-3">About this project</h2>
            <p className="text-[#4B5563] leading-relaxed mb-6">A responsive front-end social media application called Lifely, built using Tailwind CSS. Users can register, log in, create and edit posts, follow other users, and view profiles. The app connects to the Noroff Social API.</p>
            <h2 className="font-serif text-xl font-semibold text-[#1B2B40] mb-3">What I built</h2>
            <ul className="list-disc list-inside text-[#4B5563] space-y-2 mb-6">
              <li>User registration and login with the Noroff API</li>
              <li>Feed page showing all posts</li>
              <li>Create, edit and delete own posts</li>
              <li>Follow and unfollow other users</li>
              <li>Search posts by keyword</li>
              <li>Responsive layout using Tailwind CSS</li>
            </ul>
            <h2 className="font-serif text-xl font-semibold text-[#1B2B40] mb-3">Improvements made</h2>
            <ul className="list-disc list-inside text-[#4B5563] space-y-2 mb-6">
              <li>Updated register card styling to match login page for visual consistency</li>
              <li>Added error and success feedback messages with aria-live for accessibility</li>
              <li>Added a login link on the register page for better navigation flow</li>
              <li>Updated background gradient and font to match across all pages</li>
            </ul>
            <h2 className="font-serif text-xl font-semibold text-[#1B2B40] mb-3">Challenges</h2>
            <p className="text-[#4B5563] leading-relaxed">Managing authenticated API requests and keeping the UI in sync with the data were the main challenges. Tailwind CSS made it much faster to build a consistent layout.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
