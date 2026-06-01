import { Link } from 'react-router-dom'

export default function JSFrameworks() {
  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link to="/" className="text-sm text-[#4B5563] hover:text-[#3D2314] transition-colors">← Back</Link>
        <div className="mt-8">
          <span className="text-xs font-semibold text-[#8A8F9A] uppercase tracking-widest">Next.js / React</span>
          <h1 className="font-serif text-3xl font-semibold text-[#3D2314] mt-2 mb-4">JavaScript Frameworks — Online Shop</h1>
          <button onClick={() => { navigator.clipboard.writeText(window.location.href); alert('Link copied!'); }} className="text-sm text-[#8A8F9A] hover:text-[#3D2314] transition-colors mb-8 inline-block">Share this project ↗</button>
          <figure className="mb-8">
          <img src="/images/jsframeworks.jpg" alt="Online shop project screenshot" className="w-full rounded-2xl object-cover h-64" />
            <figcaption className="text-sm text-[#8A8F9A] mt-2 text-center">E-commerce online shop built with Next.js</figcaption>
          </figure>
          <div className="flex gap-4 mb-10">
            <a href="https://online-shop-delta-rouge.vercel.app" target="_blank" rel="noopener noreferrer" className="text-sm font-medium bg-[#3D2314] text-white px-4 py-2 rounded-xl hover:bg-[#2d4460] transition-colors">View Live Site ↗</a>
            <a href="https://github.com/idanok/online-shop/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="text-sm font-medium border border-[#E8E4DE] text-[#3D2314] px-4 py-2 rounded-xl hover:border-[#3D2314] transition-colors">GitHub README ↗</a>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-[#E8E4DE]">
            <h2 className="font-serif text-xl font-semibold text-[#3D2314] mb-3">About this project</h2>
            <p className="text-[#4B5563] leading-relaxed mb-6">An e-commerce online shop built with Next.js and React. The shop fetches products from an external API, allows users to browse products, view individual product pages, add items to a cart, and proceed to checkout.</p>
            <h2 className="font-serif text-xl font-semibold text-[#3D2314] mb-3">What I built</h2>
            <ul className="list-disc list-inside text-[#4B5563] space-y-2 mb-6">
              <li>Product listing page with search functionality</li>
              <li>Individual product detail pages</li>
              <li>Shopping cart with quantity management</li>
              <li>Cart persists across navigation using localStorage</li>
              <li>Checkout and order confirmation page</li>
              <li>Contact page</li>
            </ul>
            <h2 className="font-serif text-xl font-semibold text-[#3D2314] mb-3">Improvements made</h2>
            <ul className="list-disc list-inside text-[#4B5563] space-y-2 mb-6">
              <li>Deployed the project to Vercel</li>
              <li>Added a persistent navbar with a direct Cart link</li>
              <li>Fixed cart state being lost on navigation by saving to localStorage</li>
              <li>Fixed UI issues where most text was not visible</li>
              <li>Removed duplicate navbar on product detail pages</li>
            </ul>
            <h2 className="font-serif text-xl font-semibold text-[#3D2314] mb-3">Challenges</h2>
            <p className="text-[#4B5563] leading-relaxed">Managing cart state across pages in Next.js was the main challenge. Saving to localStorage solved the state loss on navigation.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
