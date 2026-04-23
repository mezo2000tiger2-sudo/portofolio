import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

// Original Brand-Colored SVG logos
const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
)

const NextIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="#FFFFFF" {...props}>
    <title>Next.js</title>
    <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"/>
  </svg>
)

const TailwindIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 54 33" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" fill="#06B6D4" />
  </svg>
)

const ShadcnIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M208 128l-80 80M192 40L40 192" stroke="#FFFFFF" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const GsapIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 82 30" {...props}>
  <path fill="#0ae448" d="M23.81 14.013v.013l-1.075 4.665c-.058.264-.322.458-.626.458H20.81a.218.218 0 0 0-.208.155c-1.198 4.064-2.82 6.858-4.962 8.535-1.822 1.428-4.068 2.093-7.069 2.093-2.696 0-4.514-.867-6.056-2.578C.478 25.09-.364 21.388.146 16.926 1.065 8.549 5.41.096 13.776.096c2.545-.023 4.543.762 5.933 2.33 1.47 1.657 2.216 4.154 2.22 7.421a.55.55 0 0 1-.549.536h-6.13a.42.42 0 0 1-.407-.41c-.05-2.259-.72-3.36-2.052-3.36-2.35 0-3.736 3.19-4.471 4.959-1.027 2.47-1.55 5.152-1.447 7.824.049 1.244.249 2.994 1.43 3.718 1.047.643 2.541.217 3.446-.495.904-.711 1.632-1.942 1.938-3.065.043-.156.046-.277.005-.332-.043-.055-.162-.068-.253-.068h-1.574a.572.572 0 0 1-.438-.202.42.42 0 0 1-.087-.362l1.076-4.674c.053-.24.27-.42.537-.453v-.011h10.33c.024 0 .049 0 .072.005.268.034.457.284.452.556h.002Z"/>
  <path fill="#0ae448" d="M41.594 8.65a.548.548 0 0 1-.548.531H35.4c-.37 0-.679-.3-.679-.665 0-1.648-.57-2.45-1.736-2.45s-1.918.717-1.94 1.968c-.025 1.395.764 2.662 3.01 4.84 2.957 2.774 4.142 5.232 4.085 8.48C38.047 26.605 34.476 30 29.042 30c-2.775 0-4.895-.743-6.305-2.207-1.431-1.486-2.087-3.668-1.95-6.485a.548.548 0 0 1 .549-.53h5.84a.55.55 0 0 1 .422.209.48.48 0 0 1 .106.384c-.065 1.016.112 1.775.512 2.195.256.272.613.41 1.058.41 1.079 0 1.711-.763 1.735-2.09.02-1.148-.343-2.155-2.321-4.19-2.555-2.496-4.846-5.075-4.775-9.13.042-2.351.976-4.502 2.631-6.056C28.294.868 30.687 0 33.465 0c2.783.02 4.892.813 6.269 2.359 1.304 1.466 1.932 3.582 1.862 6.29h-.002Z"/>
  <path fill="#0ae448" d="m59.096 29.012.037-27.932a.525.525 0 0 0-.529-.533h-8.738c-.294 0-.423.252-.507.42L36.707 28.842v.005l-.005.006c-.14.343.126.71.497.71h6.108c.33 0 .548-.1.656-.308l1.213-2.915c.149-.388.177-.424.601-.424h5.836c.406 0 .415.008.408.405l-.131 2.71a.525.525 0 0 0 .529.532h6.17a.522.522 0 0 0 .403-.182.458.458 0 0 0 .104-.369Zm-10.81-9.326c-.057 0-.102-.001-.138-.005a.146.146 0 0 1-.13-.183c.012-.041.029-.095.053-.163l4.377-10.827c.038-.107.086-.212.136-.314.071-.145.157-.155.184-.047.023.09-.502 11.118-.502 11.118-.041.413-.06.43-.467.464l-3.509-.041h-.008l.003-.002Z"/>
  <path fill="#0ae448" d="M71.545.547h-4.639c-.245 0-.52.13-.585.422l-6.455 28.029a.423.423 0 0 0 .088.364.572.572 0 0 0 .437.202h5.798c.311 0 .525-.153.583-.418 0 0 .703-3.168.704-3.178.05-.247-.036-.439-.258-.555-.105-.054-.209-.108-.312-.163l-1.005-.522-1-.522-.387-.201a.186.186 0 0 1-.102-.17.199.199 0 0 1 .198-.194l3.178.014c.95.005 1.901-.062 2.836-.234 6.58-1.215 10.95-6.485 11.076-13.656.107-6.12-3.309-9.221-10.15-9.221l-.005.003Zm-1.579 16.68h-.124c-.278 0-.328-.03-.337-.04-.004-.007 1.833-8.073 1.834-8.084.047-.233.045-.367-.099-.446-.184-.102-2.866-1.516-2.866-1.516a.188.188 0 0 1-.101-.172.197.197 0 0 1 .197-.192h4.241c1.32.04 2.056 1.221 2.021 3.237-.061 3.492-1.721 7.09-4.766 7.214Z"/>
</svg>

)

const ZustandIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5 6h14L7 18h12" stroke="#F1993C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const NextAuthIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#00C853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 8v4l3 3" stroke="#00C853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// Exactly 7 items, heavy safe scattering (pushed to ±25-30vh for massive displacement)
const TOOLS_DATA = [
  {
    name: "React",
    icon: ReactIcon,
    description: "Component-based UI Architecture",
    yOffset: "-translate-y-[28vh]"
  },
  {
    name: "Next.js",
    icon: NextIcon,
    description: "App Router & SSR Framework",
    yOffset: "translate-y-[28vh]"
  },
  {
    name: "shadcn/ui",
    icon: ShadcnIcon,
    description: "Accessible Component Primitives",
    yOffset: "-translate-y-[15vh]"
  },
  {
    name: "Tailwind CSS",
    icon: TailwindIcon,
    description: "Utility-first Styling Engine",
    yOffset: "translate-y-[15vh]"
  },
  {
    name: "GSAP",
    icon: GsapIcon,
    description: "High-performance Web Motion",
    yOffset: "-translate-y-[32vh]"
  },
  {
    name: "Zustand",
    icon: ZustandIcon,
    description: "Lightweight State Management",
    yOffset: "translate-y-[30vh]"
  },
  {
    name: "NextAuth",
    icon: NextAuthIcon,
    description: "Secure Session Management",
    yOffset: "-translate-y-[20vh]"
  }
]

export function CapabilitiesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const backgroundTextRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const track = trackRef.current
    if (!track || !containerRef.current || !backgroundTextRef.current) return

    const getScrollAmount = () => {
      let trackWidth = track.scrollWidth
      return -(trackWidth - window.innerWidth)
    }

    const tween = gsap.to(track, {
      x: getScrollAmount,
      ease: "none"
    })

    gsap.to(backgroundTextRef.current, {
      x: () => getScrollAmount() * 0.4,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${getScrollAmount() * -1}`,
        scrub: 1,
        fastScrollEnd: true,
      }
    })

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 2,
      invalidateOnRefresh: true,
    })
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      className="relative h-screen bg-[#131318] text-[#E2E2F0] overflow-hidden flex items-center"
    >
      {/* MASSIVE BACKGROUND PARALLAX TEXT */}
      <div
        ref={backgroundTextRef}
        className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap pointer-events-none opacity-[0.05] select-none text-[#D4FF5A]"
      >
        <h2 className="text-[15vw] md:text-[18vw] font-black uppercase tracking-tighter mix-blend-overlay">
          CAPABILITIES ARCHITECTURE SCATTER
        </h2>
      </div>

      {/* STATIC PINNED TITLE */}
      <div className="absolute top-12 left-8 md:top-24 md:left-24 z-20 pointer-events-none">
        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase text-[#D4FF5A]">
          Technical<br />Arsenal
        </h2>
        <p className="mt-4 text-xs font-mono tracking-widest uppercase opacity-50">
          004 // EXPERTISE OVERVIEW
        </p>
      </div>

      {/* HORIZONTAL PARALLAX TRACK - SCATTERED TOOLS */}
      <div
        ref={trackRef}
        className="flex flex-nowrap h-full items-center pl-[50vw] pr-[30vw] gap-12 md:gap-24"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 100%)'
        }}
      >
        {TOOLS_DATA.map((tool, idx) => (
          <div
            key={idx}
            className={cn(
              "relative flex-shrink-0 w-[240px] md:w-[280px] flex flex-col items-center justify-center transition-transform",
              tool.yOffset
            )}
          >
            {/* Glassmorphic Tool Card */}
            <div className="w-full relative z-10 border border-white/5 bg-[#1C1C26]/80 backdrop-blur-xl p-8 rounded-2xl hover:border-white/20 transition-all duration-300 group shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center gap-6 hover:-translate-y-2">

              {/* Embedded Colored SVG Icon */}
              <tool.icon className="w-16 h-16 md:w-20 md:h-20 transition-transform duration-500 group-hover:scale-110 drop-shadow-md" />

              <div className="text-center space-y-2">
                <h3 className="font-mono text-base md:text-lg tracking-widest uppercase font-bold text-white/90">
                  {tool.name}
                </h3>
                <p className="text-sm text-white/60 font-mono tracking-tight leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
