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
  const repeated = [...ITEMS, ...ITEMS, ...ITEMS]

  return (
    <div className="overflow-hidden py-10 relative z-30">
      <div className="w-[110%] -ml-[5%] bg-[#D4FF5A] py-4 border-y-2 border-black ">
        <div className="flex whitespace-nowrap animate-marquee font-mono text-black text-sm uppercase tracking-[0.2em] font-black">
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
