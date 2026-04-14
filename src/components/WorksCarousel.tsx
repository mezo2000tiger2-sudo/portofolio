import { useRef } from "react"
import { ProjectCard } from "./ProjectCard"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { Marquee } from "./Marquee"
import { useMobilePerformanceTier } from "@/hooks/use-mobile-performance-tier"

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  {
    title: "NEURAL_INTERFACE_V1",
    category: "2024",
    year: "Global",
    imageText: "N_V1"
  },
  {
    title: "SYSTEM_ORBIT_OS",
    category: "Product",
    year: "Application",
    imageText: "ORBIT"
  },
  {
    title: "QUANTUM_REDUX",
    category: "Design",
    year: "2023",
    imageText: "QR"
  },
  {
    title: "CORE_ARCHITECTURE",
    category: "Engineering",
    year: "2025",
    imageText: "CORE"
  },
  {
    title: "FLUX_TERMINAL",
    category: "Utility",
    year: "2024",
    imageText: "FLUX"
  }
]

export function WorksCarousel() {
  const lowPower = useMobilePerformanceTier()
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!trackRef.current || !sectionRef.current) return

    const track = trackRef.current
    const section = sectionRef.current

    // Calculate total scroll distance
    const scrollDistance = track.scrollWidth - section.offsetWidth

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: lowPower ? true : 0.6,
        start: "top top",
        end: () => `+=${scrollDistance + window.innerHeight}`, // Added extra scroll length for the buffer
        invalidateOnRefresh: true,
        anticipatePin: 0,
        pinSpacing: true,
        fastScrollEnd: true,
        preventOverlaps: true,
      }
    })

    // Add a small pause (buffer) before the horizontal movement starts
    tl.to({}, { duration: 0.2 }) 

    // The actual horizontal movement
    tl.to(track, {
      x: () => -scrollDistance,
      ease: "none",
      duration: 1
    })

    // Add a small pause after the movement finishes
    tl.to({}, { duration: 0.1 })

    return () => {
      tl.kill()
    }
  }, { scope: sectionRef, dependencies: [lowPower] })

  return (
    <section id="works" ref={sectionRef} className="bg-background overflow-hidden min-h-screen flex flex-col pt-32 pb-12">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex items-center justify-between border-b border-[#333] pb-6 mb-16">
          <span className="text-primary font-mono text-[10px] uppercase font-bold tracking-widest">SELECTED PROJECTS</span>
          <span className="text-[#8888aa] font-mono text-[10px] uppercase font-bold tracking-widest text-right">01 /<br />{PROJECTS.length.toString().padStart(2, '0')}</span>
        </div>
        <h2 className="text-5xl md:text-[8rem] font-heading font-extrabold text-white tracking-tighter uppercase leading-[0.8]">
          WORKS
        </h2>
      </div>

      <div className="w-full flex pt-12 pb-32 overflow-visible items-center flex-1">
        <div 
          ref={trackRef} 
          className="flex gap-12 pl-6 md:pl-[10%]" 
          id="works-carousel-track"
          style={{ willChange: "transform" }}
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              year={project.year}
              imageText={project.imageText}
            />
          ))}
        </div>
      </div>
      <Marquee />
    </section>
  )
}
