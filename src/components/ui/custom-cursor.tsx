"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

// Global state for cursor mode
let cursorModeSetter: (mode: "default" | "button") => void = () => {};

export const setCursorMode = (mode: "default" | "button") => {
  cursorModeSetter(mode);
};

export function CustomCursor() {
  const [mode, setMode] = useState<"default" | "button">("default");
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  cursorModeSetter = setMode;

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Main Cursor Dot/Circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-primary rounded-full pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -16,
          top: -16,
        }}
      >
        <div className="w-1 h-1 bg-primary rounded-full" />
      </motion.div>

      {/* Button Hover Circle (White) */}
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 bg-white rounded-full pointer-events-none z-[9998] flex items-center justify-center"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -16,
          top: -16,
        }}
        animate={{
          scale: mode === "button" ? 1.5 : 0,
          opacity: mode === "button" ? 0.6 : 0,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 150 }}
      />
    </>
  );
}
