import { useRef, useEffect } from "react"
import { ProjectCard } from "./ProjectCard"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { Marquee } from "./Marquee"
import { useMobilePerformanceTier } from "@/hooks/use-mobile-performance-tier"

gsap.registerPlugin(ScrollTrigger)

export function WorksCarousel({ isLoaded }: { isLoaded: boolean }) {
  const lowPower = useMobilePerformanceTier()
  const sectionRef = useRef<HTMLElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isLoaded) {
      ScrollTrigger.refresh()
    }
  }, [isLoaded])

  const projects = [
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

  useGSAP(() => {
    if (!trackRef.current || !triggerRef.current || !isLoaded) return

    const trackWidth = trackRef.current.scrollWidth
    const viewportWidth = window.innerWidth
    const scrollAmount = trackWidth - viewportWidth

    gsap.to(trackRef.current, {
      x: -scrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: lowPower ? true : 1,
        start: "top top",
        end: () => `+=${scrollAmount}`,
        invalidateOnRefresh: true,
      }
    })
  }, { scope: sectionRef, dependencies: [isLoaded, lowPower] })

  return (
    <section id="works" ref={sectionRef} className="bg-background overflow-hidden">
      <div ref={triggerRef} className="min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-6 mb-16">
          <div className="flex items-center justify-between border-b border-[#333] pb-6 mb-16">
            <span className="text-primary font-mono text-[10px] uppercase font-bold tracking-widest">SELECTED PROJECTS</span>
            <span className="text-[#8888aa] font-mono text-[10px] uppercase font-bold tracking-widest text-right">01 /<br />05</span>
          </div>
          <h2 className="text-5xl md:text-[8rem] font-heading font-extrabold text-white tracking-tighter uppercase leading-[0.8]">
            WORKS
          </h2>
        </div>

        <div className="w-full flex pt-12 pb-32 overflow-visible">
          <div ref={trackRef} className="flex gap-12 pl-6 md:pl-[10%]" id="works-carousel-track">
            {projects.map((project, index) => (
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
      </div>
      <Marquee />
    </section>
  )
}
