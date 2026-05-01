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
    utils: "Next.js, Tailwind CSS, Framer Motion",
    link: "https://github.com",
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop",
    description: "A high-performance neural interface dashboard with real-time data visualization and biometric tracking.",
    category: "2024",
    imageText: "N_V1"
  },
  {
    title: "SYSTEM_ORBIT_OS",
    utils: "React, GSAP, WebGL",
    link: "https://github.com",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
    description: "Next-generation operating system interface focused on spatial computing and orbit-based navigation.",
    category: "Product",
    imageText: "ORBIT"
  },
  {
    title: "QUANTUM_REDUX",
    utils: "TypeScript, Three.js, Node.js",
    link: "https://github.com",
    img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2000&auto=format&fit=crop",
    description: "Quantum-safe encryption platform with a decentralized architecture and visual security nodes.",
    category: "Design",
    imageText: "QR"
  },
  {
    title: "CORE_ARCHITECTURE",
    utils: "Rust, WebAssembly, React",
    link: "https://github.com",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000&auto=format&fit=crop",
    description: "Ultra-scalable core architecture for distributed systems with native-speed execution in the browser.",
    category: "Engineering",
    imageText: "CORE"
  },
  {
    title: "FLUX_TERMINAL",
    utils: "Next Auth, PostgreSQL, Prisma",
    link: "https://github.com",
    img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2000&auto=format&fit=crop",
    description: "Command-line inspired web terminal for managing cloud infrastructure with secure authentication.",
    category: "Utility",
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
        start: "top -20%", 
        end: () => `+=${scrollDistance + window.innerHeight}`, 
        invalidateOnRefresh: true,
        anticipatePin: 1,
        pinSpacing: true,
        fastScrollEnd: true,
        preventOverlaps: true,
      }
    })

    // The actual horizontal movement - starting immediately when pinned
    tl.to(track, {
      x: () => -scrollDistance,
      ease: "none",
      duration: 1
    })
    tl.to('.progressBar', {
      scaleX: 1,
      duration: 1,
      ease: "none"
    } , '<')

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

      <div className="w-full flex pt-12 pb-12 overflow-visible items-center flex-1">
        <div 
          ref={trackRef} 
          className="flex gap-12 pl-6 md:pl-[10%] pr-6 md:pr-[10%]" 
          id="works-carousel-track"
          style={{ willChange: "transform" }}
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
          
        </div>
        
      </div>
      <div className=" w-full flex items-center justify-center progressHolder px-6">
  <div className="relative w-full max-w-[400px] h-[8px] bg-white/10 rounded-full overflow-hidden progressBarBG">
    <div className="absolute top-0 left-0 w-full h-full bg-[#d4ff33] shadow-[0_0_15px_#d4ff33] origin-left scale-x-0 progressBar"></div>
  </div>
</div>
      <Marquee />
    </section>
  )
}
