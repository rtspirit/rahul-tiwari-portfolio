"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { site } from "@/lib/site";

/** Every resume download on the site goes through here so the GA event is never missed. */
export default function ResumeLink({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <a
      href={site.resumePath}
      download="Rahul-Tiwari-Resume.pdf"
      onClick={() => sendGAEvent("event", "resume_download")}
      className={className}
    >
      {children}
    </a>
  );
}
