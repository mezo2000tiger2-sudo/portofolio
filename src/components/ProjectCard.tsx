export interface ProjectCardProps {
  title: string
  category: string
  year: string
  imageText?: string
}

export function ProjectCard({ title, category, year, imageText }: ProjectCardProps) {
  return (
    <div className="w-[85vw] md:w-[600px] flex-none aspect-video relative overflow-hidden group bg-[#0C0C10] flex flex-col cursor-pointer transform transition-transform duration-500 shadow-2xl border border-white/5">
      {/* Image Area */}
      <div className="absolute inset-0 bg-black grayscale group-hover:grayscale-0 transition-all duration-700 pointer-events-none">
         {/* actual layout has an image, we use placeholder style */}
         <div className="w-full h-full opacity-20 bg-repeat flex items-center justify-center font-heading text-[#333] text-6xl font-bold uppercase mix-blend-screen bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMyMjIiPjwvcmVjdD4KPC9zdmc+')]">
           {imageText}
         </div>
      </div>

      {/* Info overlay */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 pt-24 flex items-end justify-between z-10 bg-gradient-to-t from-black via-black/80 to-transparent">
        <div>
          <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-white tracking-tighter uppercase mb-3 drop-shadow-md">
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
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className="absolute bottom-1 right-1 transform translate-x-[120%] translate-y-[120%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className="absolute bottom-1 right-1 group-hover:-translate-x-[120%] group-hover:-translate-y-[120%] transition-transform duration-300"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </div>
      </div>
    </div>
  )
}
