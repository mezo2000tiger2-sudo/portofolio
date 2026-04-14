"use client";

import { useEffect, useState, memo, type FC, useMemo } from "react";
import { motion, useTransform, type MotionValue } from "motion/react";
import opentype from "opentype.js";
import { useMobilePerformanceTier } from "@/hooks/use-mobile-performance-tier";

function isMotionValueNumber(v: unknown): v is MotionValue<number> {
  return (
    typeof v === "object" &&
    v !== null &&
    "get" in v &&
    typeof (v as MotionValue<number>).get === "function"
  );
}

// Global font cache to avoid redundant loads across re-mounts
let globalFontCache: opentype.Font | null = null;

interface SignatureProps {
  text?: string;
  color?: string;
  fontSize?: number;
  duration?: number;
  delay?: number;
  className?: string;
  progress?: number | MotionValue<number>;
  inView?: boolean;
  once?: boolean;
}

const STROKE_WIDTH = 3;

function SignaturePathMV({
  d,
  color,
  globalProgress,
  index,
  pathCount,
}: {
  d: string;
  color: string;
  globalProgress: MotionValue<number>;
  index: number;
  pathCount: number;
}) {
  const charProgressStart = index / pathCount;
  const charProgressEnd = (index + 1) / pathCount;
  
  const charProgress = useTransform(globalProgress, (p) =>
    Math.max(0, Math.min(1, (p - charProgressStart) / (charProgressEnd - charProgressStart)))
  );

  // Fix: Hide the stroke entirely when charProgress is 0 to avoid visible dots from round linecaps
  const opacity = useTransform(charProgress, (v) => (v > 0.001 ? 1 : 0));
  
  const fillOpacity = useTransform(charProgress, (v) =>
    v > 0.1 ? (v - 0.1) * 1.1 : 0
  );

  return (
    <motion.path
      d={d}
      stroke={color}
      strokeWidth={STROKE_WIDTH}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={color}
      initial={false}
      style={{ pathLength: charProgress, fillOpacity, opacity }}
      vectorEffect="non-scaling-stroke"
    />
  );
}

function SignaturePathNumber({
  d,
  color,
  progress,
  index,
  pathCount,
}: {
  d: string;
  color: string;
  progress: number;
  index: number;
  pathCount: number;
}) {
  const charProgressStart = index / pathCount;
  const charProgressEnd = (index + 1) / pathCount;
  const charProgress = Math.max(
    0,
    Math.min(1, (progress - charProgressStart) / (charProgressEnd - charProgressStart))
  );

  return (
    <motion.path
      d={d}
      stroke={color}
      strokeWidth={STROKE_WIDTH}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={color}
      initial={{ pathLength: 0, fillOpacity: 0, opacity: 0 }}
      animate={{
        pathLength: charProgress,
        fillOpacity: charProgress > 0.1 ? (charProgress - 0.1) * 1.1 : 0,
        opacity: charProgress > 0.001 ? 1 : 0,
      }}
      transition={{ type: "tween", ease: "linear", duration: 0 }}
      vectorEffect="non-scaling-stroke"
    />
  );
}

function SignaturePathAuto({
  d,
  color,
  index,
  pathCount,
  duration,
  delay,
}: {
  d: string;
  color: string;
  index: number;
  pathCount: number;
  duration: number;
  delay: number;
}) {
  const segment = duration / pathCount;
  return (
    <motion.path
      d={d}
      stroke={color}
      strokeWidth={STROKE_WIDTH}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={color}
      initial={{ pathLength: 0, fillOpacity: 0, opacity: 0 }}
      animate={{ pathLength: 1, fillOpacity: 1, opacity: 1 }}
      transition={{
        duration: segment,
        delay: delay + index * segment,
        ease: "easeInOut",
      }}
      vectorEffect="non-scaling-stroke"
    />
  );
}

const SignatureInner: FC<SignatureProps> = ({
  text = "Mustafa",
  color = "#000",
  fontSize = 150,
  duration = 1.5,
  delay = 0,
  className,
  progress,
}) => {
  const [paths, setPaths] = useState<string[]>([]);
  const [viewBox, setViewBox] = useState({ width: 500, height: 200 });
  const isMobile = useMobilePerformanceTier();

  useEffect(() => {
    let mounted = true;
    
    async function load() {
      try {
        let font = globalFontCache;
        if (!font) {
          const fontPaths = [
            "/AlexBrush-Regular.ttf",
            "./AlexBrush-Regular.ttf",
            `${window.location.origin}/AlexBrush-Regular.ttf`,
          ];

          for (const path of fontPaths) {
            try {
              font = await opentype.load(path);
              globalFontCache = font;
              break;
            } catch {
              continue;
            }
          }
        }

        if (!font || !mounted) return;

        const scale = fontSize / font.unitsPerEm;
        const hPadding = fontSize * 0.2;
        const vPadding = fontSize * 0.2;
        let x = hPadding;
        const newPaths: string[] = [];

        const ascender = font.ascender * scale;
        const descender = font.descender * scale;
        const fontHeight = ascender - descender;
        const baseline = vPadding + ascender;
        const totalHeight = fontHeight + vPadding * 2;

        // Reduce precision on mobile for better SVG rendering performance
        const precision = isMobile ? 1 : 2;

        for (const char of text) {
          const glyph = font.charToGlyph(char);
          const path = glyph.getPath(x, baseline, fontSize);
          newPaths.push(path.toPathData(precision));
          x += (glyph.advanceWidth ?? font.unitsPerEm) * scale;
        }

        setPaths(newPaths);
        setViewBox({ width: x + hPadding, height: totalHeight });
      } catch (err) {
        console.error("Signature load error:", err);
      }
    }
    load();
    return () => { mounted = false; };
  }, [text, fontSize, isMobile]);

  const mvControlled = isMotionValueNumber(progress);
  const numberControlled = typeof progress === "number";

  // Shared path rendering to avoid duplication
  const renderPaths = useMemo(() => {
    if (paths.length === 0) return null;
    
    return paths.map((d, i) => {
      if (mvControlled) {
        return (
          <SignaturePathMV
            key={i}
            d={d}
            color={color}
            globalProgress={progress}
            index={i}
            pathCount={paths.length}
          />
        );
      }
      if (numberControlled) {
        return (
          <SignaturePathNumber
            key={i}
            d={d}
            color={color}
            progress={progress}
            index={i}
            pathCount={paths.length}
          />
        );
      }
      return (
        <SignaturePathAuto
          key={i}
          d={d}
          color={color}
          index={i}
          pathCount={paths.length}
          duration={duration}
          delay={delay}
        />
      );
    });
  }, [paths, color, mvControlled, numberControlled, progress, duration, delay]);

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
      style={{ 
        willChange: "transform, opacity",
        shapeRendering: isMobile ? "optimizeSpeed" : "geometricPrecision"
      }}
    >
      {renderPaths}
    </motion.svg>
  );
};

export const Signature = memo<SignatureProps>(SignatureInner);
