import { cn } from "@/lib/utils";

type Direction = "right" | "left" | "up-right" | "down";

const ROTATION: Record<Direction, string> = {
  right: "rotate-0",
  "up-right": "-rotate-45",
  down: "rotate-90",
  left: "rotate-180",
};

/** The site's one arrow: a single 1.75px stroke, drawn once and rotated. */
export default function Arrow({ direction = "right", className }: { direction?: Direction; className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("inline-block h-[0.85em] w-[0.85em] shrink-0 align-[-0.08em]", ROTATION[direction], className)}
    >
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}
