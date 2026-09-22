"use client";

import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";
import ResumeLink from "@/components/ResumeLink";
import { cn } from "@/lib/utils";

type Props = {
  /** Compact renders the pair for the sticky bar and inner pages. */
  compact?: boolean;
  /** Buttons sit on the green flood. */
  onGreen?: boolean;
  className?: string;
};

export default function Actions({ compact = false, onGreen = false, className }: Props) {
  const base = cn(
    "lit inline-flex items-center justify-center rounded-full font-semibold whitespace-nowrap",
    compact ? "h-9 px-4 text-sm" : "h-12 px-6 text-[0.95rem]",
  );

  const primary = onGreen
    ? "bg-paper text-green-deep hover:bg-white"
    : "bg-green text-paper hover:bg-green-deep hover:text-white";
  const secondary = onGreen
    ? "text-paper hover:bg-white/10"
    : "bg-paper-2 text-ink hover:bg-white";

  return (
    <div className={cn("flex items-center gap-2 sm:gap-3", className)}>
      <ResumeLink className={cn(base, primary)}>Download resume</ResumeLink>
      <Link
        href="/#contact"
        onClick={() => sendGAEvent("event", "contact_click")}
        className={cn(base, secondary)}
      >
        Get in touch
      </Link>
    </div>
  );
}
