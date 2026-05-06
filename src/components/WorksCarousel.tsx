import { useRef } from "react"
import { ProjectCard } from "./ProjectCard"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { Marquee } from "./Marquee"
import { useMobilePerformanceTier } from "@/hooks/use-mobile-performance-tier"

// Project Images
import mealifyImg from "../../public/mealify.png"
import danielsImg from "../../public/daniels.png"
import dashboardImg from "../../public/dashboard.png"
import ecommerceImg from "../../public/E-commerce.png"
import socialAppImg from "../../public/social-app.png"

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  
  
  {
    title: "E-commerce",
    utils: "Next.js, TanStack Query, Tailwind",
    link: "https://freshcart-mustafa.vercel.app/",
    img: ecommerceImg,
    description: "A full-featured online shopping platform with product filtering, cart management, and secure checkout.",
    category: "Store",
    imageText: "SHOP"
  },
  {
    title: "Social App",
    utils: "Next.js, TanStack Query, Tailwind",
    link: "https://next-social-app-one.vercel.app/",
    img: socialAppImg,
    description: "A dynamic social media platform connecting users through real-time updates and interactive content.",
    category: "Social",
    imageText: "SOCIAL"
  },
  {
    title: "Portfolio Dashboard",
    utils: "Next.js, Recharts, Tailwind, Shadcn",
    link: "https://portofolio-dashboard-eight.vercel.app/",
    img: dashboardImg,
    description: "A comprehensive administrative dashboard for tracking portfolio metrics and project performance.",
    category: "App",
    imageText: "DASHBOARD"
  },
  {
    title: "Mealify",
    utils: "HTML, CSS, Bootstrap",
    link: "https://mezo2000tiger2-sudo.github.io/mealify/",
    img: mealifyImg,
    description: "A modern restaurant website featuring a wide range of delicious meals and interactive menu features.",
    category: "Restaurant",
    imageText: "MEALIFY"
  },
  {
    title: "Daniels",
    utils: "Bootstrap, HTML, CSS",
    link: "https://mezo2000tiger2-sudo.github.io/dainels/",
    img: danielsImg,
    description: "A professional personal portfolio showcase for showcasing photography and creative projects.",
    category: "Portfolio",
    imageText: "DANIELS"
  },
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
    <section id="works" ref={sectionRef} className="bg-background overflow-hidden h-screen flex flex-col py-12 md:py-24">
      <div className="container mx-auto px-6 mb-8 md:mb-16">
        <div className="flex items-center justify-between border-b border-[#333] pb-4 md:pb-6 mb-8 md:mb-16">
          <span className="text-primary font-mono text-[10px] uppercase font-bold tracking-widest">SELECTED PROJECTS</span>
          <span className="text-[#8888aa] font-mono text-[10px] uppercase font-bold tracking-widest text-right">01 /<br />{PROJECTS.length.toString().padStart(2, '0')}</span>
        </div>
        <h2 className="text-5xl md:text-[8rem] font-heading font-extrabold text-white tracking-tighter uppercase leading-[0.8]">
          WORKS
        </h2>
      </div>

      <div className="w-full flex py-4 md:py-12 overflow-visible items-center flex-1">
        <div 
          ref={trackRef} 
          className="flex gap-8 md:gap-12 pl-6 md:pl-[10%] pr-6 md:pr-[10%]" 
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
      <div className=" w-full flex items-center justify-center progressHolder px-6 mb-8 md:mb-12">
  <div className="relative w-full max-w-[400px] h-[8px] bg-white/10 rounded-full overflow-hidden progressBarBG">
    <div className="absolute top-0 left-0 w-full h-full bg-[#d4ff33] shadow-[0_0_15px_#d4ff33] origin-left scale-x-0 progressBar"></div>
  </div>
</div>
      <Marquee />
    </section>
  )
}
