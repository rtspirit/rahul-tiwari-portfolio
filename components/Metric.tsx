"use client";

import { useEffect, useMemo, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  value: string;
  label: string;
  onGreen?: boolean;
  className?: string;
};

type Parsed = { prefix: string; num: number; decimals: number; suffix: string };

function parse(value: string): Parsed | null {
  const m = value.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!m) return null;
  return {
    prefix: m[1],
    num: parseFloat(m[2]),
    decimals: (m[2].split(".")[1] ?? "").length,
    suffix: m[3],
  };
}

/**
 * One numeric treatment for every outcome on the site. The final value is rendered on the
 * server; once the metric scrolls into view it counts in from zero with mass and damping
 * (overdamped, so it never overshoots the true number). Reduced motion shows the value at rest.
 */
export default function Metric({ value, label, onGreen = false, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });
  const reduceMotion = useReducedMotion();
  const parsed = useMemo(() => parse(value), [value]);

  const mv = useMotionValue(parsed?.num ?? 0);
  const text = useTransform(mv, (v) =>
    parsed ? `${parsed.prefix}${v.toFixed(parsed.decimals)}${parsed.suffix}` : value,
  );

  useEffect(() => {
    if (!inView || !parsed || reduceMotion) return;
    mv.jump(0);
    const controls = animate(mv, parsed.num, {
      type: "spring",
      mass: 1.4,
      damping: 30,
      stiffness: 90,
      restDelta: 0.001,
    });
    return () => controls.stop();
  }, [inView, parsed, reduceMotion, mv]);

  return (
    <span className={cn("flex flex-col", className)}>
      <motion.span
        ref={ref}
        className={cn(
          "numeral text-[2rem] font-bold leading-none sm:text-[2.25rem]",
          onGreen ? "text-white" : "text-ink",
        )}
        aria-label={`${value} ${label}`}
      >
        {text}
      </motion.span>
      <span className={cn("mt-1.5 text-sm leading-snug", onGreen ? "text-mint" : "text-ink-3")} aria-hidden>
        {label}
      </span>
    </span>
  );
}
