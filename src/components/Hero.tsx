import { useRef } from "react"
import { Marquee } from "./Marquee"
import { SpecialText } from "./special-text"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function Hero({ isLoaded }: { isLoaded: boolean }) {
  const manifestoRef = useRef<HTMLDivElement>(null)
  const manifestoSubRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!manifestoRef.current) return

    const lines = manifestoRef.current.querySelectorAll('.manifesto-line')
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: manifestoRef.current,
        start: "top 100%",
        end: "bottom 40%",
        scrub: 1,

      }
    })

    lines.forEach((line, i) => {
      // Each line gets its own sequence in the timeline
      // Part 1: Pop out and grow large
      tl.fromTo(line, 
        { 
          y: 100, 
          opacity: 0, 
          scale: 0.5,
          rotateY: 20,
          transformOrigin: "left center",
        },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1.2, // Peak size
          rotateY: 0,
          ease: "power2.out",
          duration: 1
        }, 
        i * 0.5 // Stagger start
      )
      // Part 2: Settle back to normal size
      .to(line, {
        scale: 1,
        ease: "power2.inOut",
        duration: 0.5
      }, ">-0.2") // Starts slightly before peak animation ends
    })

    tl.from(manifestoSubRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
    }, "-=1")

  }, { scope: manifestoRef })

  return (
    <section id="index" className="w-full bg-[#050505] relative flex flex-col">
      {/* Top Name Section - strictly 100vh minus header */}
      <div className="relative w-full h-[calc(100vh-80px)] min-h-[500px] flex flex-col items-center justify-center overflow-hidden">

        {/* Subtle glass circle background entirely centered */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[80vw] h-[80vw] md:w-[60vh] md:h-[60vh] rounded-full absolute bg-gradient-to-b from-[#1a1a20] to-[#0a0a0f] opacity-80 backdrop-blur-md shadow-[0_0_100px_rgba(255,255,255,0.02)]">
            <div className="w-full h-full rounded-full opacity-10 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmYiPjwvcmVjdD4KPC9zdmc+')]"></div>
          </div>
        </div>

        {/* Name Text Stack */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 mt-8">
          <p className="text-[#77778a] font-sans text-[8px] md:text-[10px] tracking-[0.2em] uppercase font-bold mb-4 drop-shadow-md">
            WHEREVER YOU SEE YOURSELF IN THE FUTURE, WE'LL HELP YOU...
          </p>
          <SpecialText ready={isLoaded} speed={30} className="text-[18vw] lg:text-[14vw] text-white font-sans font-black leading-[0.8] tracking-tight w-full text-center">
            MUSTAFA
          </SpecialText>
          <SpecialText ready={isLoaded} speed={30} className="text-[18vw] lg:text-[14vw] text-[#D4FF5A] font-sans font-black leading-[0.85] tracking-tight w-full text-center drop-shadow-lg">
            IBRAHIM
          </SpecialText>
        </div>
      </div>

      {/* Marquee Ribbon */}
      <Marquee />

      {/* Manifesto Section */}
      <div ref={manifestoRef} className="bg-[#0A0A0F] border-t border-[#222] perspective-1000">
        <div className="px-6 py-20 md:py-32 relative flex flex-col xl:flex-row justify-between items-start gap-12 lg:gap-16 lg:pl-16">
          <div className="w-full">
            <h3 className="font-heading font-extrabold text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] xl:text-[8rem] 2xl:text-[9rem] leading-[0.85] tracking-tighter text-white uppercase break-words w-full">
              <p className="manifesto-line mb-2">I BUILD <span className="text-[#D4FF5A]">HIGH-</span></p>
              <p className="manifesto-line mb-2"><span className="text-[#D4FF5A]">PERFORMANCE</span></p>
              <p className="manifesto-line mb-2">WEB APPLICATIONS</p>
              <p className="manifesto-line mb-2">WITH A FOCUS</p>
              <p className="manifesto-line mb-2">ON <span className="text-[#D4FF5A]">IMMERSIVE</span></p>
              <p className="manifesto-line mb-2"><span className="text-[#D4FF5A]">MOTION</span> AND</p>
              <p className="manifesto-line mb-2">PRECISE</p>
              <p className="manifesto-line">ENGINEERING.</p>
            </h3>
          </div>

          {/* Sub text positioned right */}
          <div ref={manifestoSubRef} className="w-full flex flex-col items-start gap-10 xl:mt-auto xl:pb-8 xl:pl-8">
            <p className="text-[#8888aa] text-[10px] sm:text-xs leading-[2] border-l border-[#D4FF5A]/30 pl-5 font-mono max-w-sm uppercase tracking-widest">
              Currently seeking frontend and backend challenges that push the boundaries of digital experience.
            </p>
            <button className="bg-transparent hover:bg-[#D4FF5A]/10 text-[#D4FF5A] font-mono tracking-widest uppercase text-[10px] sm:text-xs flex items-center gap-3 font-bold p-2 rounded-xs transition-colors group">
              <a href="#contact" className="contents">
                INITIATE CONTACT
              </a>
              <span className="w-8 h-8 border border-[#D4FF5A] flex items-center justify-center rounded-full group-hover:bg-[#D4FF5A] group-hover:text-black transition-colors shrink-0">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
