import { Link } from 'react-router-dom'

interface Props {
  title: string
  description: string
  image: string
  slug: string
  tag: string
}

export default function ProjectCard({ title, description, image, slug, tag }: Props) {
  return (
    <Link to={slug} className="group block bg-white border border-[#E8E4DE] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="h-52 overflow-hidden bg-[#E8E4DE]">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-6">
        <span className="text-xs font-semibold text-[#8A8F9A] uppercase tracking-widest">{tag}</span>
        <h3 className="font-serif text-lg font-semibold text-[#3D2314] mt-1 mb-2">{title}</h3>
        <p className="text-sm text-[#4B5563] leading-relaxed line-clamp-2">{description}</p>
        <span className="inline-block mt-4 text-sm font-medium text-[#C4622D] hover:underline">Read more →</span>
      </div>
    </Link>
  )
}
