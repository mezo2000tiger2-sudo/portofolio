import { useRef, useState } from "react"
import { Marquee } from "./Marquee"
import { SpecialText } from "./special-text"
import { Signature } from "./signature"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function Hero({ isLoaded }: { isLoaded: boolean }) {
  const manifestoRef = useRef<HTMLDivElement>(null)
  const scrollTrackRef = useRef<HTMLDivElement>(null)
  const blackCardRef = useRef<HTMLDivElement>(null)
  const signatureRef = useRef<HTMLDivElement>(null)

  const [signatureProgress, setSignatureProgress] = useState(0)

  useGSAP(() => {
    if (!scrollTrackRef.current || !blackCardRef.current || !signatureRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollTrackRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
      }
    })

    // 1. Scale down the black card (Opacity is now kept at 1)
    tl.to(blackCardRef.current, {
      scale: 0.5,
      filter: "blur(5px)",
      borderRadius: "60px",
      ease: "power2.inOut",
      duration: 1
    }, 0)

    // 2. Signature fade in and scale
    tl.fromTo(signatureRef.current, {
      opacity: 0,
      scale: 0.8
    }, {
      opacity: 1,
      scale: 1.1,
      ease: "power2.out",
      duration: 0.8
    }, 0.2)

    // 3. Drive the handwriting progress linked to scroll
    tl.to({ val: 0 }, {
      val: 1,
      duration: 0.8,
      ease: "none",
      onUpdate: function () {
        setSignatureProgress(this.targets()[0].val)
      }
    }, 0.3)

    // Manifesto Section Animation
    if (manifestoRef.current) {
      const lines = manifestoRef.current.querySelectorAll('.manifesto-line')
      gsap.timeline({
        scrollTrigger: {
          trigger: manifestoRef.current,
          start: "top 90%",
          end: "bottom 30%",
          scrub: 1,
        }
      })
        .fromTo(lines,
          { y: 50, opacity: 0, x: -50 },
          { y: 0, x: 0, opacity: 1, stagger: 0.1, ease: "power2.out" }
        )
    }

  }, { scope: scrollTrackRef, dependencies: [isLoaded] })

  return (
    <div className="relative w-full">
      {/* 1. THE SCROLL TRACK */}
      <div ref={scrollTrackRef} className="relative h-[250vh] w-full bg-[#1a1c11]">

        {/* 2. THE STICKY VIEWPORT */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

          {/* THE OLIVE BACKGROUND */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
            <svg width="100%" height="100%" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
              <g fill="none" stroke="#D4FF5A" strokeWidth="0.5">
                {[...Array(15)].map((_, i) => (
                  <path
                    key={i}
                    d={`M-100 ${50 + i * 50} Q 200 ${20 + i * 30}, 400 ${50 + i * 50} T 900 ${50 + i * 50}`}
                  />
                ))}
              </g>
            </svg>
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/60" />
          </div>

          {/* THE BLACK INTRO CARD - Opacity removed from animation */}
          <div
            ref={blackCardRef}
            className="absolute inset-0 z-10 bg-[#050505] flex flex-col items-center justify-center shadow-2xl origin-center"
          >
            <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
              <p className="text-[#77778a] font-sans text-[8px] md:text-[10px] tracking-[0.2em] uppercase font-bold mb-4">
                WHEREVER YOU SEE YOURSELF IN THE FUTURE, WE'LL HELP YOU...
              </p>
              <SpecialText ready={isLoaded} speed={30} className="text-[18vw] lg:text-[14vw] text-white font-sans font-black leading-[0.8] tracking-tight w-full text-center">
                MUSTAFA
              </SpecialText>
              <SpecialText ready={isLoaded} speed={30} className="text-[18vw] lg:text-[14vw] text-[#D4FF5A] font-sans font-black leading-[0.85] tracking-tight w-full text-center">
                IBRAHIM
              </SpecialText>
            </div>
          </div>

          {/* THE SIGNATURE - Now using the 'progress' prop */}
          <div
            ref={signatureRef}
            className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none opacity-0"
          >
            <div className="w-[90vw] md:w-[70vw] h-[50vh] flex items-center justify-center">
              <Signature
                text="Mustafa"
                color="#D4FF5A"
                fontSize={400}
                className="w-full h-full drop-shadow-[0_0_40px_rgba(212,255,90,0.5)]"
                progress={signatureProgress}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. SUBSEQUENT CONTENT */}
      <div className="relative z-30 bg-[#050505] -mt-[1px]">
        <Marquee />

        <div ref={manifestoRef} className="bg-[#0A0A0F] border-t border-[#222]">
          <div className="px-6 py-20 md:py-32 flex flex-col xl:flex-row justify-between items-start gap-12 lg:gap-16 lg:pl-16">
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
          </div>
        </div>
      </div>
    </div>
  )
}
