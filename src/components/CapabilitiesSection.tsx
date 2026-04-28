import React, { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

// High-Fidelity Brand Icons
const HtmlIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
  </svg>
)

const CssIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531l-.232-2.718 10.059.003.23-2.622z"/>
  </svg>
)

const JsIcon = (props: React.SVGProps<SVGSVGElement>) => (
<svg 
  viewBox="0 0 256 256" 
  width="24" 
  height="24" 
  xmlns="http://www.w3.org/2000/svg" 
  {...props}
>
  <path d="M0 0h256v256H0V0z" fill="#F7DF1E"/>
  <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" />
</svg>
)

const TailwindIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
  </svg>
)

const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
)

const NextIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <title>Next.js</title>
    <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"/>
  </svg>
)

const ShadcnIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M208 128l-80 80M192 40L40 192" stroke="currentColor" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const GsapIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 82 30" {...props}>
    <path fill="currentColor" d="M23.81 14.013v.013l-1.075 4.665c-.058.264-.322.458-.626.458H20.81a.218.218 0 0 0-.208.155c-1.198 4.064-2.82 6.858-4.962 8.535-1.822 1.428-4.068 2.093-7.069 2.093-2.696 0-4.514-.867-6.056-2.578C.478 25.09-.364 21.388.146 16.926 1.065 8.549 5.41.096 13.776.096c2.545-.023 4.543.762 5.933 2.33 1.47 1.657 2.216 4.154 2.22 7.421a.55.55 0 0 1-.549.536h-6.13a.42.42 0 0 1-.407-.41c-.05-2.259-.72-3.36-2.052-3.36-2.35 0-3.736 3.19-4.471 4.959-1.027 2.47-1.55 5.152-1.447 7.824.049 1.244.249 2.994 1.43 3.718 1.047.643 2.541.217 3.446-.495.904-.711 1.632-1.942 1.938-3.065.043-.156.046-.277.005-.332-.043-.055-.162-.068-.253-.068h-1.574a.572.572 0 0 1-.438-.202.42.42 0 0 1-.087-.362l1.076-4.674c.053-.24.27-.42.537-.453v-.011h10.33c.024 0 .049 0 .072.005.268.034.457.284.452.556h.002Z"/>
    <path fill="currentColor" d="M41.594 8.65a.548.548 0 0 1-.548.531H35.4c-.37 0-.679-.3-.679-.665 0-1.648-.57-2.45-1.736-2.45s-1.918.717-1.94 1.968c-.025 1.395.764 2.662 3.01 4.84 2.957 2.774 4.142 5.232 4.085 8.48C38.047 26.605 34.476 30 29.042 30c-2.775 0-4.895-.743-6.305-2.207-1.431-1.486-2.087-3.668-1.95-6.485a.548.548 0 0 1 .549-.53h5.84a.55.55 0 0 1 .422.209.48.48 0 0 1 .106.384c-.065 1.016.112 1.775.512 2.195.256.272.613.41 1.058.41 1.079 0 1.711-.763 1.735-2.09.02-1.148-.343-2.155-2.321-4.19-2.555-2.496-4.846-5.075-4.775-9.13.042-2.351.976-4.502 2.631-6.056C28.294.868 30.687 0 33.465 0c2.783.02 4.892.813 6.269 2.359 1.304 1.466 1.932 3.582 1.862 6.29h-.002Z"/>
    <path fill="currentColor" d="m59.096 29.012.037-27.932a.525.525 0 0 0-.529-.533h-8.738c-.294 0-.423.252-.507.42L36.707 28.842v.005l-.005.006c-.14.343.126.71.497.71h6.108c.33 0 .548-.1.656-.308l1.213-2.915c.149-.388.177-.424.601-.424h5.836c.406 0 .415.008.408.405l-.131 2.71a.525.525 0 0 0 .529.532h6.17a.522.522 0 0 0 .403-.182.458.458 0 0 0 .104-.369Zm-10.81-9.326c-.057 0-.102-.001-.138-.005a.146.146 0 0 1-.13-.183c.012-.041.029-.095.053-.163l4.377-10.827c.038-.107.086-.212.136-.314.071-.145.157-.155.184-.047.023.09-.502 11.118-.502 11.118-.041.413-.06.43-.467.464l-3.509-.041h-.008l.003-.002Z"/>
    <path fill="currentColor" d="M71.545.547h-4.639c-.245 0-.52.13-.585.422l-6.455 28.029a.423.423 0 0 0 .088.364.572.572 0 0 0 .437.202h5.798c.311 0 .525-.153.583-.418 0 0 .703-3.168.704-3.178.05-.247-.036-.439-.258-.555-.105-.054-.209-.108-.312-.163l-1.005-.522-1-.522-.387-.201a.186.186 0 0 1-.102-.17.199.199 0 0 1 .198-.194l3.178.014c.95.005 1.901-.062 2.836-.234 6.58-1.215 10.95-6.485 11.076-13.656.107-6.12-3.309-9.221-10.15-9.221l-.005.003Zm-1.579 16.68h-.124c-.278 0-.328-.03-.337-.04-.004-.007 1.833-8.073 1.834-8.084.047-.233.045-.367-.099-.446-.184-.102-2.866-1.516-2.866-1.516a.188.188 0 0 1-.101-.172.197.197 0 0 1 .197-.192h4.241c1.32.04 2.056 1.221 2.021 3.237-.061 3.492-1.721 7.09-4.766 7.214Z"/>
  </svg>
)

const ZustandIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.115 12.333c1.022 0 1.851-.828 1.851-1.85 0-1.022-.829-1.851-1.851-1.851-1.022 0-1.85.829-1.85 1.85 0 1.023.828 1.851 1.85 1.851zM11 20.37c-3.16-.4-5.63-3.12-5.63-6.42 0-3.3 2.47-6.02 5.63-6.42V2.12c-6.12.44-10.95 5.54-10.95 11.83 0 6.29 4.83 11.39 10.95 11.83v-5.41zm2-12.84c3.16.4 5.63 3.12 5.63 6.42 0 3.3-2.47 6.02-5.63 6.42v5.41c6.12-.44 10.95-5.54 10.95-11.83 0-6.29-4.83-11.39-10.95-11.83v5.41z"/>
  </svg>
)

const NextAuthIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <circle cx="12" cy="11" r="3"/>
    <path d="M7 20l1.41-1.41"/>
    <path d="M15.59 18.59L17 20"/>
  </svg>
)

interface ToolData {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  description: string;
  color: string;
}

const TOOLS_DATA: ToolData[] = [
  { name: "HTML5", icon: HtmlIcon, description: "Semantic Structure & SEO", color: "#E34F26" },
  { name: "CSS3", icon: CssIcon, description: "Advanced Layout & Motion", color: "#1572B6" },
  { name: "JavaScript", icon: JsIcon, description: "Dynamic Logical Architecture", color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: TailwindIcon, description: "Utility-first Styling Engine", color: "#06B6D4" },
  { name: "React", icon: ReactIcon, description: "Component-based UI Architecture", color: "#61DAFB" },
  { name: "Next.js", icon: NextIcon, description: "App Router & SSR Framework", color: "#FFFFFF" },
  { name: "shadcn/ui", icon: ShadcnIcon, description: "Accessible Component Primitives", color: "#E2E2F0" },
  { name: "GSAP", icon: GsapIcon, description: "High-performance Web Motion", color: "#88CE02" },
  { name: "Zustand", icon: ZustandIcon, description: "Lightweight State Management", color: "#EBB035" },
  { name: "NextAuth", icon: NextAuthIcon, description: "Secure Session Management", color: "#B197FC" },
]

export function CapabilitiesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const dotsRef = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(() => {
    if (!containerRef.current || !lineRef.current) return

    // Animate central line growth
    gsap.fromTo(lineRef.current, 
      { scaleY: 0 },
      { 
        scaleY: 1, 
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 10%",
          end: "bottom 90%",
          scrub: true
        }
      }
    )

    cardsRef.current.forEach((card, i) => {
      if (!card) return
      const isEven = i % 2 === 0
      
      gsap.fromTo(card, 
        { 
          opacity: 0, 
          x: isEven ? -150 : 150,
          rotateY: isEven ? 25 : -25,
          scale: 0.8,
          skewX: isEven ? 5 : -5
        },
        {
          opacity: 1, 
          x: 0,
          rotateY: 0,
          scale: 1,
          skewX: 0,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
            end: "top 50%",
            scrub: 1.5,
            toggleActions: "play none none reverse",
          }
        }
      )
    })

    dotsRef.current.forEach((dot) => {
      if (!dot) return
      gsap.fromTo(dot, 
        { scale: 0, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          scrollTrigger: {
            trigger: dot,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      )
    })

  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      id="capabilities"
      className="relative py-64 bg-[#050505] text-[#E2E2F0] overflow-hidden"
    >
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-48 text-center">
           <span className="text-[#D4FF5A] font-mono text-xs tracking-[0.4em] uppercase font-bold opacity-60 mb-6">
              004 // EXPERTISE
            </span>
            <h2 className="text-7xl md:text-9xl font-bold tracking-tighter uppercase leading-none text-white">
              CORE<span className="text-[#D4FF5A]">STACK</span>
            </h2>
            <div className="w-20 h-1 bg-[#D4FF5A] mt-8 mb-8" />
            <p className="text-white/40 text-sm font-mono leading-relaxed uppercase tracking-[0.2em] max-w-sm">
              Modular architecture built for speed and cinematic motion.
            </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] hidden md:block">
            <div className="w-full h-full bg-white/5" />
            <div 
              ref={lineRef}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#D4FF5A] via-[#D4FF5A] to-transparent origin-top shadow-[0_0_20px_#D4FF5A]"
            />
          </div>

          <div className="space-y-48 md:space-y-0 relative z-10">
            {TOOLS_DATA.map((tool, idx) => {
              const isEven = idx % 2 === 0
              return (
                <div
                  key={idx}
                  className={cn(
                    "flex flex-col md:flex-row items-center justify-between w-full md:min-h-[500px]",
                    isEven ? "md:flex-row-reverse" : ""
                  )}
                >
                  {/* Empty Spacer for Desktop Staggering */}
                  <div className="hidden md:block w-[45%]" />

                  {/* Dot on Line */}
                  <div 
                    ref={el => { dotsRef.current[idx] = el }}
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#050505] border-2 z-20 transition-all duration-500 group-hover:scale-150" 
                    style={{ borderColor: tool.color, boxShadow: `0 0 10px ${tool.color}` }}
                  />

                  {/* Card Content */}
                  <div
                    ref={el => { cardsRef.current[idx] = el }}
                    className="w-full md:w-[45%] flex flex-col items-center md:items-start group perspective-1000"
                  >
                    <div className={cn(
                      "w-full border bg-[#0A0A0F]/60 backdrop-blur-2xl p-12 rounded-[3.5rem] transition-all duration-700 shadow-[0_40px_80px_rgba(0,0,0,0.6)] flex flex-col items-center md:items-start gap-8 group-hover:-translate-y-6 group-hover:shadow-[0_60px_100px_rgba(0,0,0,0.8)]",
                      isEven ? "md:items-end md:text-right" : ""
                    )}
                    style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                    >
                      
                      {/* Tech Icon with Brand Glow */}
                      <div className="relative">
                        <div 
                          className="absolute inset-0 blur-[50px] rounded-full scale-0 group-hover:scale-175 transition-transform duration-1000 opacity-0 group-hover:opacity-30" 
                          style={{ backgroundColor: tool.color }}
                        />
                        <tool.icon 
                          className="w-16 h-16 md:w-24 md:h-24 transition-all duration-700 relative z-10 drop-shadow-2xl" 
                          style={{ color: tool.color }}
                        />
                      </div>

                      <div className="space-y-6 w-full">
                        <div className={cn(
                          "flex items-center gap-4",
                          isEven ? "md:flex-row-reverse" : ""
                        )}>
                           <span className="font-mono text-[10px] opacity-30 font-bold">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <h3 className="font-mono text-3xl md:text-5xl tracking-tight uppercase font-black text-white transition-all duration-500 group-hover:tracking-widest"
                              style={{ color: tool.name === 'Next.js' || tool.name === 'shadcn/ui' || tool.name === 'JavaScript' ? 'white' : undefined }}
                          >
                            {tool.name}
                          </h3>
                        </div>
                        <div 
                          className={cn(
                            "h-[2px] transition-all duration-1000 group-hover:w-full",
                            isEven ? "w-12 ml-auto" : "w-12"
                          )}
                          style={{ backgroundColor: tool.color, boxShadow: `0 0 10px ${tool.color}` }}
                        />
                        <p className="text-xs md:text-sm text-white/30 font-mono tracking-[0.2em] leading-relaxed uppercase group-hover:text-white/70 transition-all duration-500 max-w-[320px]">
                          {tool.description}
                        </p>
                      </div>

                      {/* Connector Line (Desktop Only) */}
                      <div className={cn(
                        "hidden md:block absolute top-1/2 -translate-y-1/2 w-16 h-[1px] opacity-10 group-hover:opacity-40 transition-all duration-700",
                        isEven ? "right-full mr-6" : "left-full ml-6"
                      )} 
                      style={{ backgroundColor: tool.color }}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
