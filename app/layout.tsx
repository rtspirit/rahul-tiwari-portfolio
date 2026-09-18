import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { site } from "@/lib/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} | ${site.title}`,
  description:
    "Rahul Tiwari, Senior Software Engineer in Boston. Full-stack systems, integrations and AI workflows in React, Next.js, TypeScript, Java, Spring Boot, Python and AWS, measured in production outcomes.",
  openGraph: {
    title: `${site.name} | ${site.title}`,
    description:
      "A career published as release notes: every role a dated release, every entry a shipped outcome with its measured delta.",
    type: "profile",
    images: [{ url: "/images/profile.jpg", width: 512, height: 640, alt: site.name }],
  },
};

const DIRECTION_CONTRACT = `<!--
THESIS: A career published as release notes. Every role is a dated release, every entry a shipped outcome with its delta. Refuses the centered glow hero over a skills grid.
OWN-WORLD: Paper-white ground, ink type, one merged green flooding the latest release and the closing band. Bricolage Grotesque numerals for version tags and metrics, Hanken Grotesk body, Geist Mono for dates and labels. No cards, dividers, glass or gradient text; grouping by date rail and whitespace.
STORY: A recruiter reads who this is, sees the current release and its numbers, and downloads the resume or writes.
FIRST VIEWPORT: Masthead: photo, name, one line, Download resume and Get in touch pinned right. Beneath, the 2026.06 release flooded green: version tag in the left rail, role and company large, first entries with labels and metric numerals counting in once.
FORM: The Changelog, candidate 5 of 7, seed a4967899, code-led.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
-->`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${hanken.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-paper text-ink antialiased">
        <div hidden aria-hidden dangerouslySetInnerHTML={{ __html: DIRECTION_CONTRACT }} />
        {children}
        <SpeedInsights />
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
      </body>
    </html>
  );
}
