"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import Actions from "@/components/Actions";
import { site } from "@/lib/site";

const NAV = [
  { href: "#2026-06", label: "Releases" },
  { href: "#dependencies", label: "Dependencies" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Masthead() {
  const { scrollY } = useScroll();
  const [compact, setCompact] = useState(false);
  const reduceMotion = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (y) => {
    const next = y > 360;
    if (next !== compact) setCompact(next);
  });

  return (
    <>
      <header className="mx-auto w-full max-w-[1200px] px-5 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-12">
        <div className="grid gap-x-8 gap-y-6 md:grid-cols-12">
          <Actions className="order-3 md:order-none md:col-span-12 md:justify-self-end" />

          <div className="order-1 md:order-none md:col-span-4 lg:col-span-3">
            <Image
              src="/images/profile.jpg"
              alt="Rahul Tiwari"
              width={112}
              height={112}
              priority
              sizes="112px"
              className="h-24 w-24 rounded-full object-cover object-top sm:h-28 sm:w-28"
            />
          </div>

          <div className="order-2 md:order-none md:col-span-8 lg:col-span-9">
            <h1 className="display text-[clamp(2.75rem,7vw,5rem)] font-extrabold leading-[0.95] text-ink">
              {site.name}
            </h1>
            <p className="mt-4 text-xl text-ink-2 sm:text-2xl">
              {site.title} · {site.location}
            </p>
          </div>

          <p className="order-4 max-w-[58ch] text-lg leading-relaxed text-ink md:order-none md:col-span-8 md:col-start-5 lg:col-span-9 lg:col-start-4">
            {site.intro}
          </p>
        </div>
      </header>

      <AnimatePresence>
        {compact && (
          <motion.div
            key="bar"
            initial={reduceMotion ? false : { y: -64, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduceMotion ? undefined : { y: -64, opacity: 0 }}
            transition={{ type: "spring", stiffness: 420, damping: 38, mass: 0.8 }}
            className="fixed inset-x-0 top-0 z-40 bg-paper"
          >
            <div className="mx-auto flex h-14 w-full max-w-[1200px] items-center justify-between gap-4 px-5 sm:px-8">
              <Link href="/" className="flex items-center gap-3 no-underline">
                <Image
                  src="/images/profile.jpg"
                  alt=""
                  width={28}
                  height={28}
                  sizes="28px"
                  className="h-7 w-7 rounded-full object-cover object-top"
                />
                <span className="display hidden text-base font-bold text-ink sm:inline">{site.name}</span>
              </Link>

              <nav aria-label="Sections" className="hidden items-center gap-6 lg:flex">
                {NAV.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    className="mono text-xs font-medium text-ink-2 no-underline hover:text-green"
                  >
                    {n.label}
                  </a>
                ))}
              </nav>

              <Actions compact />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
