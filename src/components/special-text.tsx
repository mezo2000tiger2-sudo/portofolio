"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { cn } from "@/lib/utils";

interface SpecialTextProps {
  children: string;
  speed?: number;
  delay?: number;
  className?: string;
  inView?: boolean;
  once?: boolean;
  ready?: boolean;
}

const RANDOM_CHARS = "_!X$0-+*#";

function getRandomChar(prevChar?: string): string {
  let char: string;
  do {
    char = RANDOM_CHARS[Math.floor(Math.random() * RANDOM_CHARS.length)];
  } while (char === prevChar);
  return char;
}

export function SpecialText({
  children,
  speed = 20,
  delay = 0,
  className = "",
  inView = false,
  once = true,
  ready = true,
}: SpecialTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once, margin: "-100px" });
  const shouldAnimate = inView ? isInView : true;
  const [displayText, setDisplayText] = useState<string>(() => "\u00A0".repeat(children.length));
  const hasStartedRef = useRef(false);
  const text = children;

  useEffect(() => {
    // If not ready, not in view, or already started, don't do anything
    if (!ready || !shouldAnimate || hasStartedRef.current) return;

    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;

    const start = () => {
      hasStartedRef.current = true;
      let step = 0;
      let phase: "phase1" | "phase2" = "phase1";
      const maxPhase1Steps = text.length * 2;
      const maxPhase2Steps = text.length * 2;

      interval = setInterval(() => {
        if (phase === "phase1") {
          const currentLength = Math.min(step + 1, text.length);
          const chars: string[] = [];
          for (let i = 0; i < currentLength; i++) {
            chars.push(getRandomChar(chars[i - 1]));
          }
          for (let i = currentLength; i < text.length; i++) {
            chars.push("\u00A0");
          }
          setDisplayText(chars.join(""));

          if (step >= maxPhase1Steps - 1) {
            phase = "phase2";
            step = 0;
          } else {
            step++;
          }
        } else {
          const revealedCount = Math.floor(step / 2);
          const chars: string[] = [];
          for (let i = 0; i < revealedCount && i < text.length; i++) {
            chars.push(text[i]);
          }
          if (revealedCount < text.length) {
            chars.push(step % 2 === 0 ? "_" : getRandomChar());
          }
          for (let i = chars.length; i < text.length; i++) {
            chars.push(getRandomChar());
          }
          setDisplayText(chars.join(""));

          if (step >= maxPhase2Steps - 1) {
            setDisplayText(text);
            clearInterval(interval);
          } else {
            step++;
          }
        }
      }, speed);
    };

    if (delay > 0) {
      timeout = setTimeout(start, delay * 1000);
    } else {
      start();
    }

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [ready, shouldAnimate, text, speed, delay]);

  // Reset if text changes
  useEffect(() => {
    setDisplayText("\u00A0".repeat(text.length));
    hasStartedRef.current = false;
  }, [text]);

  return (
    <span
      ref={containerRef}
      className={cn("inline-block font-mono font-medium", className)}
    >
      {displayText}
    </span>
  );
}
