"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 800, mass: 0.1 };
  // We bypass the spring variables to eliminate trailing entirely, 
  // letting Framer Motion directly track the hardware mouse.

  useEffect(() => {
    setMounted(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16); // Center the 32x32 outer ring
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // If hovering over a button, anchor, or custom hoverable card
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".hover-glow") ||
        target.closest(".glass-card")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-8 w-8 rounded-full border border-teal-500/50 bg-teal-500/10 backdrop-blur-[2px] hidden md:block"
        style={{ x: cursorX, y: cursorY }}
        animate={{ scale: isHovering ? 2.5 : 1, opacity: isHovering ? 0.3 : 1 }}
        transition={{ type: "tween", ease: "circOut", duration: 0.15 }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[10000] h-2 w-2 rounded-full bg-teal-400 hidden xl:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: 12, // center the 8x8 dot inside the 32x32 ring
          translateY: 12,
          scale: isHovering ? 0 : 1, // hide dot when expanded into a ring clamp
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
    </>
  );
}
