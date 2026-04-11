import { Marquee } from "./Marquee"
import { SpecialText } from "./special-text"

export function Hero() {
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
          <SpecialText speed={30} className="text-[18vw] lg:text-[14vw] text-white font-sans font-black leading-[0.8] tracking-tight w-full text-center">
            MUSTAFA
          </SpecialText>
          <SpecialText speed={30} className="text-[18vw] lg:text-[14vw] text-[#D4FF5A] font-sans font-black leading-[0.85] tracking-tight w-full text-center drop-shadow-lg">
            IBRAHIM
          </SpecialText>
        </div>
      </div>

      {/* Marquee Ribbon */}
      <Marquee />

      {/* Manifesto Section */}
      <div className="bg-[#0A0A0F] border-t border-[#222]">
        <div className="px-6 py-20 md:py-32 relative flex flex-col xl:flex-row justify-between items-start gap-12 lg:gap-16 lg:pl-16">
          <div className="w-full">
            <h3 className="font-heading font-extrabold text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] xl:text-[9rem] leading-[0.85] tracking-tighter text-white uppercase break-words w-full">
              I BUILD <span className="text-[#D4FF5A]">HIGH-<br className="hidden sm:block" />PERFORMANCE</span><br />
              WEB<br />
              APPLICATIONS<br />
              WITH A FOCUS<br />
              ON <span className="text-[#D4FF5A]">IMMERSIVE<br />
                MOTION</span> AND<br />
              PRECISE<br />
              ENGINEERING.
            </h3>
          </div>

          {/* Sub text positioned right */}
          <div className="w-full xl:w-1/3 flex flex-col items-start gap-10 xl:mt-auto xl:pb-8 xl:pl-8">
            <p className="text-[#8888aa] text-[10px] sm:text-xs leading-[2] border-l border-[#D4FF5A]/30 pl-5 font-mono max-w-sm uppercase tracking-widest">
              Currently seeking frontend and backend challenges that push the boundaries of digital experience.
            </p>
            <button className="bg-transparent hover:bg-[#D4FF5A]/10 text-[#D4FF5A] font-mono tracking-widest uppercase text-[10px] sm:text-xs flex items-center gap-3 font-bold p-2 rounded-xs transition-colors group">
            <a href="#contact">

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
