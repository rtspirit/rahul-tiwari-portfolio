"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import Metric from "@/components/Metric";
import Arrow from "@/components/Arrow";
import { anchorFor, type Entry, type EntryKind, type Release } from "@/lib/releases";
import { cn } from "@/lib/utils";

const KIND_LABEL: Record<EntryKind, string> = {
  added: "Added",
  improved: "Improved",
  fixed: "Fixed",
};

const KIND_TONE: Record<EntryKind, { paper: string; green: string }> = {
  added: { paper: "text-green", green: "text-mint" },
  improved: { paper: "text-ink-2", green: "text-mint" },
  fixed: { paper: "text-ink-2", green: "text-mint" },
};

type Props = {
  release: Release;
  latest?: boolean;
};

export default function ReleaseSection({ release, latest = false }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [lit, setLit] = useState(latest);

  useEffect(() => {
    if (latest) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) setLit(e.isIntersecting);
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [latest]);

  const onGreen = latest;

  return (
    <section
      ref={ref}
      id={anchorFor(release.version)}
      aria-labelledby={`${anchorFor(release.version)}-title`}
      className={cn("scroll-mt-16", onGreen && "on-green bg-green text-paper")}
    >
      <div className="mx-auto grid w-full max-w-[1200px] gap-x-8 gap-y-8 px-5 py-14 sm:px-8 md:grid-cols-12 md:py-20">
        {/* Date rail */}
        <div className="md:col-span-4 lg:col-span-3">
          <div className="rail-tag md:sticky md:top-20" data-lit={lit}>
            <p className="numeral text-[clamp(2.75rem,5.5vw,4.25rem)] font-extrabold leading-none">
              {release.version}
            </p>
            <p className={cn("mono mt-3 text-xs", onGreen ? "text-mint" : "text-ink-3")}>
              {release.start} → {release.end ?? "now"}
            </p>
            {latest && <p className="mono mt-1 text-xs text-mint">Current role</p>}
          </div>
        </div>

        {/* Entries */}
        <div className="md:col-span-8 lg:col-span-9">
          <h2
            id={`${anchorFor(release.version)}-title`}
            className="display text-[2rem] font-bold leading-[1.02] sm:text-[2.75rem]"
          >
            {release.role}
          </h2>
          <p className={cn("mt-2 text-lg sm:text-xl", onGreen ? "text-mint" : "text-ink-2")}>
            {release.company} · {release.location}
          </p>
          <p className={cn("mt-5 max-w-[62ch] text-[1.0625rem] leading-relaxed", onGreen ? "text-paper" : "text-ink-2")}>
            {release.summary}
          </p>

          <div className={cn(release.image && "lg:grid lg:grid-cols-[1fr_300px] lg:gap-x-10")}>
            <ol className="mt-8 flex flex-col">
              {release.entries.map((entry, i) => (
                <EntryRow key={i} entry={entry} onGreen={onGreen} />
              ))}
            </ol>

            {release.image && (
              <figure className="mt-10 lg:mt-8">
                <Image
                  src={release.image.src}
                  alt={release.image.alt}
                  width={release.image.width}
                  height={release.image.height}
                  sizes="(min-width: 1024px) 300px, 100vw"
                  className="w-full rounded-xl"
                />
                {(release.link || release.image.caption) && (
                  <figcaption className="mt-3 flex flex-col gap-2">
                    {release.image.caption && (
                      <span className={cn("block text-sm leading-snug", onGreen ? "text-mint" : "text-ink-3")}>{release.image.caption}</span>
                    )}
                    {release.link && (
                    <a
                      href={release.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sendGAEvent("event", "bostonhome_click")}
                      className="font-semibold text-green"
                    >
                      {release.link.label} <Arrow direction="up-right" />
                    </a>
                    )}
                  </figcaption>
                )}
              </figure>
            )}
          </div>

          <p className={cn("mono mt-10 text-xs leading-relaxed", onGreen ? "text-mint" : "text-ink-3")}>
            <span className="font-semibold uppercase">Built with</span> · {release.stack.join(" · ")}
          </p>
        </div>
      </div>
    </section>
  );
}

function EntryRow({ entry, onGreen }: { entry: Entry; onGreen: boolean }) {
  const tone = KIND_TONE[entry.kind][onGreen ? "green" : "paper"];
  return (
    <li className="lit -mx-4 grid gap-x-6 gap-y-2 rounded-xl px-4 py-5 sm:grid-cols-[5.5rem_1fr]">
      <span className={cn("mono pt-1 text-[11px] font-semibold uppercase tracking-wider", tone)}>
        {KIND_LABEL[entry.kind]}
      </span>
      <div>
        <p className={cn("max-w-[68ch] leading-relaxed", onGreen ? "text-paper" : "text-ink")}>
          {entry.text}
          {entry.href && (
            <>
              {" "}
              <Link
                href={entry.href}
                onClick={() => sendGAEvent("event", "project_click", { project: entry.href })}
                className={cn("whitespace-nowrap font-semibold", onGreen ? "text-white" : "text-green")}
              >
                Read the write-up <Arrow />
              </Link>
            </>
          )}
        </p>
        {entry.metrics && entry.metrics.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-x-10 gap-y-5">
            {entry.metrics.map((m) => (
              <Metric key={m.label} value={m.value} label={m.label} onGreen={onGreen} />
            ))}
          </div>
        )}
      </div>
    </li>
  );
}
