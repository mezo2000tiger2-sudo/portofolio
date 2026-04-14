import { memo } from "react"

export interface ProjectCardProps {
  title: string
  category: string
  year: string
  imageText?: string
}

function ProjectCardInner({ title, category, year, imageText }: ProjectCardProps) {
  return (
    <div className="w-[85vw] md:w-[600px] flex-none aspect-video relative overflow-hidden group bg-[#0C0C10] flex flex-col cursor-pointer transform transition-transform duration-500 shadow-xl border border-white/5">
      {/* Background Area - Simplified for performance */}
      <div className="absolute inset-0 bg-[#121218] transition-colors duration-500 group-hover:bg-[#1a1a24]">
         {/* Simplified background pattern instead of blend modes */}
         <div className="w-full h-full opacity-10 flex items-center justify-center font-heading text-[#666] text-6xl font-bold uppercase pointer-events-none select-none">
           {imageText}
         </div>
      </div>

      {/* Info overlay - Simplified gradient */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 pt-24 flex items-end justify-between z-10 bg-gradient-to-t from-black/90 to-transparent">
        <div>
          <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-white tracking-tighter uppercase mb-3">
            {title}
          </h3>
          <div className="flex gap-2">
            <span className="bg-primary text-black font-mono text-[9px] py-1 px-3 uppercase tracking-widest font-bold">
              {category}
            </span>
            <span className="bg-primary text-black font-mono text-[9px] py-1 px-3 uppercase tracking-widest font-bold">
              {year}
            </span>
          </div>
        </div>
        
        <div className="w-10 h-10 text-primary overflow-hidden relative">
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
}

export const ProjectCard = memo(ProjectCardInner)
