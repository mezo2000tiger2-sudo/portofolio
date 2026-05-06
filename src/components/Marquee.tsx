import { memo } from "react"

const ITEMS = [
  "NEXT_JS",
  "REACT",
  "Nextauth",
  "TAILWIND",
  "Shadcn UI",
  "GSAP", 
  "TYPESCRIPT",
]

// Significantly increase repetition to ensure smooth looping without gaps on wide screens
const REPEATED_ITEMS = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS]

export const Marquee = memo(function Marquee() {
  return (
    <div className="overflow-hidden py-4 relative z-50 w-full pointer-events-none">
      <div className="w-full bg-[#D4FF5A] py-3 md:py-4 border-y border-black overflow-hidden flex">
        <div className="flex whitespace-nowrap animate-marquee font-mono text-black text-[10px] md:text-sm uppercase tracking-[0.2em] font-black w-max">
          {REPEATED_ITEMS.map((item, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-6 px-4 md:px-6">
              <span className="opacity-30">•</span>
              <span>{item}</span>
            </div>
          ))}
          {/* Duplicate the entire set for seamless loop */}
          {REPEATED_ITEMS.map((item, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-4 md:gap-6 px-4 md:px-6">
              <span className="opacity-30">•</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})
