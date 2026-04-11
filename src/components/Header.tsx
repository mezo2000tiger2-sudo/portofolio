import { useState } from "react"
import { cn } from "@/lib/utils"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full bg-[#0E0E12] z-50 relative border-b border-[#222] sticky top-0 right-0 left-0">
      <div className="px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <div className="text-white tracking-widest font-sans text-sm md:text-base font-black uppercase">
            Mustafa Ibrahim
          </div>
        </div>

        {/* Right Side: Links (Desktop) */}
        <div className="hidden md:flex flex-1 items-center justify-between ml-12">
          {/* Centered nav links */}
          <nav className="flex items-center gap-10 text-[11px] font-sans uppercase font-bold mx-auto">
            <a href="#index" className="text-[#D4FF5A] border-b-2 border-[#D4FF5A] pb-1 hover:text-white transition-colors">INDEX</a>
            <a href="#works" className="text-[#8888aa] border-b-2 border-transparent pb-1 hover:text-white transition-colors">WORKS</a>
            <a href="#contact" className="text-[#8888aa] border-b-2 border-transparent pb-1 hover:text-white transition-colors">CONTACT</a>
          </nav>
          
          {/* Logo icon far right */}
          <button className="w-8 h-8 rounded shrink-0 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity ml-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#D4FF5A" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={cn("w-full h-0.5 bg-white transition-transform", isOpen && "translate-y-2 rotate-45")}></div>
          <div className={cn("w-full h-0.5 bg-white transition-opacity", isOpen && "opacity-0")}></div>
          <div className={cn("w-full h-0.5 bg-white transition-transform", isOpen && "-translate-y-2 -rotate-45")}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden absolute top-20 left-0 w-full bg-[#0E0E12] border-b border-[#222] p-6 flex flex-col gap-6 text-xs font-sans uppercase font-bold z-40">
          <a href="#index" onClick={() => setIsOpen(false)} className="text-[#D4FF5A]">INDEX</a>
          <a href="#works" onClick={() => setIsOpen(false)} className="text-[#8888aa] hover:text-white transition-colors">WORKS</a>
          <a href="#lab" onClick={() => setIsOpen(false)} className="text-[#8888aa] hover:text-white transition-colors">LAB</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-[#8888aa] hover:text-white transition-colors">CONTACT</a>
        </nav>
      )}
    </header>
  )
}
