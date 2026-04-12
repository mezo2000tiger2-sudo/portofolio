"use client";
import { useEffect, useId, useState } from "react";
import { motion } from "motion/react";
import opentype from "opentype.js";

interface SignatureProps {
  text?: string;
  color?: string;
  fontSize?: number;
  duration?: number;
  delay?: number;
  className?: string;
  progress?: number; // External progress control (0 to 1)
  inView?: boolean;
  once?: boolean;
}

export function Signature({
  text = "Mustafa",
  color = "#000",
  fontSize = 150,
  duration = 1.5,
  delay = 0,
  className,
  progress,
  inView = false,
  once = true,
}: SignatureProps) {
  const [paths, setPaths] = useState<string[]>([]);
  const [viewBox, setViewBox] = useState({ width: 500, height: 200 });

  useEffect(() => {
    async function load() {
      try {
        let font;
        const fontPaths = [
          "/AlexBrush-Regular.ttf",
          "./AlexBrush-Regular.ttf",
          `${window.location.origin}/AlexBrush-Regular.ttf`,
        ];

        for (const path of fontPaths) {
          try {
            font = await opentype.load(path);
            break;
          } catch { continue; }
        }

        if (!font) throw new Error("Font not found");

        const scale = fontSize / font.unitsPerEm;
        const hPadding = fontSize * 0.2;
        const vPadding = fontSize * 0.2;
        let x = hPadding;
        const newPaths: string[] = [];
        
        const ascender = font.ascender * scale;
        const descender = font.descender * scale;
        const fontHeight = ascender - descender;
        const baseline = vPadding + ascender;
        const totalHeight = fontHeight + (vPadding * 2);

        for (const char of text) {
          const glyph = font.charToGlyph(char);
          const path = glyph.getPath(x, baseline, fontSize);
          newPaths.push(path.toPathData(3));
          x += (glyph.advanceWidth ?? font.unitsPerEm) * scale;
        }

        setPaths(newPaths);
        setViewBox({ width: x + hPadding, height: totalHeight });
      } catch (err) {
        console.error("Signature load error:", err);
      }
    }
    load();
  }, [text, fontSize]);

  const isControlled = progress !== undefined;

  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${viewBox.width} ${viewBox.height}`}
      fill="none"
      className={className}
      initial="hidden"
      animate="visible"
      preserveAspectRatio="xMidYMid meet"
    >
      {paths.map((d, i) => {
        // Calculate the progress for this specific character
        // If we have 7 characters, each takes 1/7th of the total progress
        const charProgressStart = i / paths.length;
        const charProgressEnd = (i + 1) / paths.length;
        
        // Normalize the global progress to this character's 0-1 range
        const charProgress = isControlled 
          ? Math.max(0, Math.min(1, (progress - charProgressStart) / (charProgressEnd - charProgressStart)))
          : 1;

        return (
          <motion.path
            key={i}
            d={d}
            stroke={color}
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={color}
            initial={{ pathLength: 0, fillOpacity: 0 }}
            animate={{ 
              pathLength: charProgress,
              fillOpacity: charProgress > 0.1 ? (charProgress - 0.1) * 1.1 : 0
            }}
            transition={isControlled ? { type: "tween", ease: "linear", duration: 0 } : { 
              duration: duration / paths.length, 
              delay: delay + (i * (duration / paths.length)), 
              ease: "easeInOut" 
            }}
          />
        );
      })}
    </motion.svg>
  );
}
