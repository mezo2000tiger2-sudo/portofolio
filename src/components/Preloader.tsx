import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export function Preloader({ onComplete }: { onComplete?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useGSAP(() => {
    if (!containerRef.current) return;
    
    const columns = containerRef.current.querySelectorAll('.preloader-column');
    
    if (columns.length === 0) {
      onComplete?.();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        if (containerRef.current) {
          containerRef.current.style.display = "none"
        }
        onComplete?.()
      }
    })

    tl.to(columns, {
      yPercent: -100,
      duration: 1.2,
      stagger: 0.1,
      ease: "power4.inOut",
      delay: 0.5
    })
  }, { scope: containerRef })

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[100] flex pointer-events-none"
    >
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="flex-1 bg-[#D4FF5A] h-full preloader-column"
        />
      ))}
    </div>
  )
}
