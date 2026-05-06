import { memo } from "react"

export interface ProjectCardProps {
  title: string
  utils: string
  link?: string
  img?: string
  description?: string
  category?: string
  imageText?: string
}

function ProjectCardInner({ title, utils, link, img, description, category, imageText }: ProjectCardProps) {
  const techTags = utils.split(",").map((tag) => tag.trim()).filter(Boolean)

  const CardContent = (
    <div className="w-[85vw] md:w-[600px] h-auto flex-none aspect-video relative overflow-hidden group bg-[#0C0C10] flex flex-col cursor-pointer transform transition-transform duration-500 shadow-xl border border-white/5 md:rounded-none">
      {/* Background Area */}
      <div className="absolute inset-0 bg-[#121218] transition-colors duration-500 group-hover:bg-[#1a1a24]">
        {img ? (
          <img 
            src={img} 
            alt={title} 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-80 scale-105 group-hover:scale-100 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full opacity-10 flex items-center justify-center font-heading text-[#666] text-6xl font-bold uppercase pointer-events-none select-none">
            {imageText}
          </div>
        )}
      </div>

      {/* Info overlay */}
      <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 pt-20 md:pt-24 flex items-end justify-between z-10 bg-gradient-to-t from-black/95 via-black/40 to-transparent">
        <div className="flex-1 mr-2 md:mr-4">
          <h3 className="font-heading font-extrabold text-xl sm:text-2xl md:text-3xl text-white tracking-tighter uppercase mb-1 md:mb-2">
            {title}
          </h3>
          
          {description && (
            <p className="text-white/70 text-[10px] sm:text-xs md:text-sm mb-3 md:mb-4 line-clamp-3 md:line-clamp-2 max-w-md">
              {description}
            </p>
          )}

          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {category && (
              <span className="bg-primary text-black font-mono text-[8px] md:text-[9px] py-0.5 md:py-1 px-2 md:px-3 uppercase tracking-widest font-bold">
                {category}
              </span>
            )}
            {techTags.map((tag, i) => (
              <span key={i} className="border border-white/20 text-white font-mono text-[8px] md:text-[9px] py-0.5 md:py-1 px-2 md:px-3 uppercase tracking-widest font-bold">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="w-10 h-10 text-primary overflow-hidden relative flex-none">
           {/* Arrow that slides IN from bottom-left */}
           <svg 
             width="24" 
             height="24" 
             viewBox="0 0 24 24" 
             fill="none" 
             stroke="currentColor" 
             strokeWidth="2" 
             strokeLinecap="square" 
             strokeLinejoin="miter" 
             className="absolute bottom-1 right-1 transition-transform duration-300 transform translate-x-[120%] translate-y-[120%] group-hover:translate-x-0 group-hover:translate-y-0"
           >
             <line x1="7" y1="17" x2="17" y2="7"></line>
             <polyline points="7 7 17 7 17 17"></polyline>
           </svg>
           
           {/* Arrow that slides OUT to top-right */}
           <svg 
             width="24" 
             height="24" 
             viewBox="0 0 24 24" 
             fill="none" 
             stroke="currentColor" 
             strokeWidth="2" 
             strokeLinecap="square" 
             strokeLinejoin="miter" 
             className="absolute bottom-1 right-1 transition-transform duration-300 transform group-hover:-translate-x-[120%] group-hover:-translate-y-[120%]"
           >
             <line x1="7" y1="17" x2="17" y2="7"></line>
             <polyline points="7 7 17 7 17 17"></polyline>
           </svg>
        </div>
      </div>
    </div>
  )

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-shadow duration-300">
        {CardContent}
      </a>
    )
  }

  return CardContent
}

export const ProjectCard = memo(ProjectCardInner)
