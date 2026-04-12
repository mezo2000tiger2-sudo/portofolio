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

// Move calculation outside so it only happens once ever
const REPEATED_ITEMS = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS]

export const Marquee = memo(function Marquee() {
  return (
    <div className="overflow-hidden py-10 relative z-30 w-full">
      <div className="w-full bg-[#D4FF5A] py-4 border-y-2 border-black overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee font-mono text-black text-sm uppercase tracking-[0.2em] font-black w-max">
          {REPEATED_ITEMS.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-3">
              <span className="opacity-40">•</span>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
})
