import { useState, useMemo } from "react"
import { cn } from "@/lib/utils"
import { useActiveSection } from "@/hooks/use-active-section"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = useMemo(() => [
    { name: "INDEX", href: "#index", id: "index" },
    { name: "WORKS", href: "#works", id: "works" },
    { name: "CONTACT", href: "#contact", id: "contact" },
  ], [])

  const sectionIds = useMemo(() => navLinks.map(link => link.id), [navLinks])
  const activeSection = useActiveSection(sectionIds)

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
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={cn(
                  "pb-1 border-b-2 transition-colors",
                  activeSection === link.id
                    ? "text-[#D4FF5A] border-[#D4FF5A]"
                    : "text-[#8888aa] border-transparent hover:text-white"
                )}
              >
                {link.name}
              </a>
            ))}
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
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "transition-colors",
                activeSection === link.id ? "text-[#D4FF5A]" : "text-[#8888aa] hover:text-white"
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
