import { useState, useMemo, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useActiveSection } from "@/hooks/use-active-section"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = useMemo(() => [
    { name: "INDEX", href: "#index", id: "index" },
    { name: "WORKS", href: "#works", id: "works" },
    { name: "CONTACT", href: "#contact", id: "contact" },
  ], [])

  const sectionIds = useMemo(() => navLinks.map(link => link.id), [navLinks])
  const activeSection = useActiveSection(sectionIds)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div 
        className={cn(
          "pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center justify-between overflow-hidden",
          isScrolled 
            ? "mt-6 w-[95%] md:w-5/6 h-14 rounded-full bg-[#050505]/80 backdrop-blur-xl border border-white/10 px-6 shadow-2xl py-4" 
            : "mt-0 w-full py-6 rounded-none bg-[#0E0E12] border-b border-[#222] px-6 lg:px-12"
        )}
      >
        {/* Left Side: Logo - Always Visible */}
        <div className="flex items-center shrink-0">
          <div className={cn(
            "text-white tracking-widest font-sans font-black uppercase transition-all duration-500",
            isScrolled ? "text-[10px] md:text-xs" : "text-sm md:text-base"
          )}>
            Mustafa Ibrahim
          </div>
        </div>

        {/* Navigation - Centered */}
        <nav className={cn(
          "flex items-center transition-all duration-500 ease-in-out px-4",
          isScrolled ? "gap-4 md:gap-6" : "gap-8 md:gap-10"
        )}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={cn(
                "font-mono uppercase tracking-widest transition-all duration-300 relative py-1 whitespace-nowrap",
                isScrolled ? "text-[11px]" : "text-[11px]",
                activeSection === link.id 
                  ? "text-primary font-bold" 
                  : "text-[#8888aa] hover:text-white"
              )}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary animate-in fade-in slide-in-from-left-2 duration-500" />
              )}
            </a>
          ))}
        </nav>

        {/* Right Side: Icon - Always Visible */}
        <div className="flex items-center justify-end shrink-0">
          <button className={cn(
            "rounded flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-500",
            isScrolled ? "w-6 h-6" : "w-8 h-8"
          )}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#D4FF5A" className={isScrolled ? "size-5" : "size-6"}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
          </button>
          
          {/* Mobile Menu Toggle (hidden when scrolled for cleaner look, but logo/icon stay) */}
          <button
            className={cn(
              "md:hidden flex flex-col justify-center gap-1.5 text-white transition-all duration-500 ml-4",
              isScrolled ? "w-0 opacity-0 overflow-hidden" : "w-8 h-8 opacity-100"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={cn("w-full h-0.5 bg-white transition-transform", isOpen && "translate-y-2 rotate-45")}></div>
            <div className={cn("w-full h-0.5 bg-white transition-opacity", isOpen && "opacity-0")}></div>
            <div className={cn("w-full h-0.5 bg-white transition-transform", isOpen && "-translate-y-2 -rotate-45")}></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Only for non-scrolled state */}
      {!isScrolled && isOpen && (
        <nav className="md:hidden absolute top-20 left-0 w-full bg-[#0E0E12] border-b border-[#222] p-6 flex flex-col gap-6 text-xs font-sans uppercase font-bold z-40">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "transition-colors",
                activeSection === link.id ? "text-primary" : "text-[#8888aa] hover:text-white"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
