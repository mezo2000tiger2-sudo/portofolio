import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';

interface PillNavItem {
  label: string;
  href: string;
  id: string;
}

interface PillNavProps {
  items: PillNavItem[];
  activeSection?: string;
  className?: string;
}

const PillNav: React.FC<PillNavProps> = ({
  items,
  activeSection,
  className
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  const activeIndex = items.findIndex(item => item.id === activeSection);

  useEffect(() => {
    const targetIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;
    const targetElement = itemsRef.current[targetIndex];

    if (pillRef.current) {
      if (targetElement) {
        const { offsetLeft, offsetWidth } = targetElement;
        
        gsap.to(pillRef.current, {
          x: offsetLeft,
          width: offsetWidth,
          duration: 0.4,
          ease: "power3.out",
          opacity: 1,
          scale: 1,
        });
      } else {
        gsap.to(pillRef.current, {
          opacity: 0,
          scale: 0.8,
          duration: 0.3,
          ease: "power3.in"
        });
      }
    }
  }, [hoveredIndex, activeIndex]);

  return (
    <nav 
      className={cn(
        "relative flex items-center p-1 rounded-full border border-white/10 bg-[#050505]/40 backdrop-blur-xl shadow-2xl",
        className
      )}
    >
      {/* The Sliding Pill */}
      <div
        ref={pillRef}
        className="absolute top-1 bottom-1 rounded-full z-0 pointer-events-none bg-[#D4FF5A]"
        style={{ opacity: 0 }}
      />

      {/* Nav Items */}
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        const isHovered = hoveredIndex === index;
        
        return (
          <a
            key={item.id}
            href={item.href}
            ref={(el) => (itemsRef.current[index] = el)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={cn(
              "relative z-10 px-5 py-2 text-[11px] font-mono font-bold tracking-widest uppercase transition-colors duration-300 rounded-full no-underline",
              (isActive || isHovered) ? "text-black" : "text-[#8888aa] hover:text-white"
            )}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
};

export default PillNav;
