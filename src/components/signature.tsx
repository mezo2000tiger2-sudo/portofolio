"use client";

import { useEffect, useState, memo, type FC } from "react";
import { motion, useTransform, type MotionValue } from "motion/react";
import opentype from "opentype.js";

function isMotionValueNumber(v: unknown): v is MotionValue<number> {
  return (
    typeof v === "object" &&
    v !== null &&
    "get" in v &&
    typeof (v as MotionValue<number>).get === "function"
  );
}

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
  const fillOpacity = useTransform(charProgress, (v) =>
    v > 0.1 ? (v - 0.1) * 1.1 : 0
  );

  return (
    <motion.path
      d={d}
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={color}
      initial={false}
      style={{ pathLength: charProgress, fillOpacity }}
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
  duration,
  delay,
}: {
  d: string;
  color: string;
  progress: number;
  index: number;
  pathCount: number;
  duration: number;
  delay: number;
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
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={color}
      initial={{ pathLength: 0, fillOpacity: 0 }}
      animate={{
        pathLength: charProgress,
        fillOpacity: charProgress > 0.1 ? (charProgress - 0.1) * 1.1 : 0,
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
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={color}
      initial={{ pathLength: 0, fillOpacity: 0 }}
      animate={{ pathLength: 1, fillOpacity: 1 }}
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
          } catch {
            continue;
          }
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
        const totalHeight = fontHeight + vPadding * 2;

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

  const mvControlled = isMotionValueNumber(progress);
  const numberControlled = typeof progress === "number";

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
              duration={duration}
              delay={delay}
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
      })}
    </motion.svg>
  );
};

export const Signature = memo<SignatureProps>(SignatureInner);
