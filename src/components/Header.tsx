import { useState, useMemo } from "react"
import { cn } from "@/lib/utils"
import { useActiveSection } from "@/hooks/use-active-section"
import { motion, AnimatePresence } from "motion/react"

export function Header({ isLoaded }: { isLoaded: boolean }) {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = useMemo(() => [
    { name: "INDEX", href: "#index", id: "index" },
    { name: "CAPABILITIES", href: "#capabilities", id: "capabilities" },
    { name: "WORKS", href: "#works", id: "works" },
    { name: "CONTACT", href: "#contact", id: "contact" },
  ], [])

  const sectionIds = useMemo(() => navLinks.map(link => link.id), [navLinks])
  const activeSection = useActiveSection(sectionIds)

  const menuVariants = {
    closed: {
      clipPath: "inset(0% 0% 100% 0%)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
        staggerDirection: -1,
      }
    },
    open: {
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        restDelta: 2,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  } as const

  const linkVariants = {
    closed: { y: 20, opacity: 0 },
    open: { y: 0, opacity: 1 }
  } as const

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={isLoaded ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 1.2 }}
        className={cn(
          "relative z-[110] pointer-events-auto transition-colors duration-500 flex items-center justify-between w-full py-4 md:py-6 bg-[#0E0E12]/95 backdrop-blur-md border-b border-[#222] px-4 md:px-12"
        )}
      >
        {/* Left Side: Logo */}
        <div className="flex items-center shrink-0">
          <div className="text-white tracking-[0.3em] font-sans font-black uppercase text-[10px] sm:text-xs md:text-sm">
            Mustafa Ibrahim
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 md:gap-10 px-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={cn(
                "font-mono uppercase tracking-[0.2em] transition-all duration-300 relative py-1 whitespace-nowrap text-[10px]",
                activeSection === link.id 
                  ? "text-primary font-bold" 
                  : "text-[#8888aa] hover:text-white"
              )}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.span 
                  layoutId="activeSection"
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-primary" 
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Right Side: Action & Mobile Toggle */}
        <div className="flex items-center justify-end shrink-0 gap-3 sm:gap-6">
          <button className="rounded-sm flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300 w-8 h-8 group">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#D4FF5A" className="size-5 transition-transform group-hover:scale-110">
              <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
          </button>
          
          <button
            className="lg:hidden flex flex-col justify-center gap-1.5 text-white w-8 h-8 p-1 relative z-[120]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <motion.div 
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-white origin-center"
            />
            <motion.div 
              animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              className="w-full h-0.5 bg-white"
            />
            <motion.div 
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-white origin-center"
            />
          </button>
        </div>
      </motion.div>

      {/* Cinematic Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="lg:hidden fixed inset-0 bg-[#0E0E12] z-[105] flex flex-col items-center justify-center pointer-events-auto origin-top"
          >
            {/* Background Accent Lines for Depth */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
              <div className="absolute top-0 left-1/4 w-px h-full bg-white" />
              <div className="absolute top-0 left-2/4 w-px h-full bg-white" />
              <div className="absolute top-0 left-3/4 w-px h-full bg-white" />
            </div>

            <nav className="relative flex flex-col items-center gap-12 p-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  variants={linkVariants}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-2xl sm:text-3xl font-sans font-black tracking-[0.3em] uppercase transition-colors",
                    activeSection === link.id ? "text-primary" : "text-white/40 hover:text-white"
                  )}
                  whileHover={{ scale: 1.1, letterSpacing: "0.4em" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <motion.div 
              variants={linkVariants}
              className="absolute bottom-12 flex flex-col items-center gap-4"
            >
              <div className="w-12 h-px bg-primary/30" />
              <p className="text-[10px] tracking-[0.5em] text-white/20 uppercase font-mono">
                Mustafa Ibrahim &copy; 2026
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
