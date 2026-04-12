const ITEMS = [
  "NEXT_JS",
  "REACT",
  "Nextauth",
  "TAILWIND",
  "Shadcn UI",
  "GSAP", 
  "TYPESCRIPT",
]

export function Marquee() {
  // Duplicate the items so the scroll loop is seamless
  // We need enough items to fill more than 2x the screen width
  const repeated = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS]

  return (
    <div className="overflow-hidden py-10 relative z-30 w-full">
      <div className="w-full bg-[#D4FF5A] py-4 border-y-2 border-black overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee font-mono text-black text-sm uppercase tracking-[0.2em] font-black w-max">
          {repeated.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-3">
              <span className="opacity-40">•</span>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
