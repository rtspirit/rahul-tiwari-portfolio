---
name: Rahul Tiwari Portfolio
description: A career published as release notes on paper, ink, and one merged green.
colors:
  paper: "#f3f4ef"
  paper-2: "#e7e9e2"
  white: "#ffffff"
  ink: "#101418"
  ink-2: "#3f474f"
  ink-3: "#5c646c"
  green: "#0a6b4b"
  green-deep: "#08553c"
  green-tint: "#dcefe4"
  mint: "#c9f0da"
  mint-2: "#9fe0bd"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 7vw, 5rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  version-numeral:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 5.5vw, 4.25rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontVariation: "tabular-nums lining-nums"
  headline:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  metric:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontVariation: "tabular-nums lining-nums"
  title:
    fontFamily: "Bricolage Grotesque, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  lede:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.05em"
    fontVariation: "tabular-nums"
  meta:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "0.02em"
    fontVariation: "tabular-nums"
rounded:
  focus: "2px"
  field: "8px"
  row: "12px"
  pill: "9999px"
spacing:
  gutter-mobile: "20px"
  gutter: "32px"
  column-gap: "32px"
  row-inset: "16px"
  row-pad: "20px"
  block: "32px"
  band-mobile: "56px"
  band: "80px"
  contact-band: "96px"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "{colors.paper}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.green-deep}"
    textColor: "{colors.white}"
  button-secondary:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-secondary-hover:
    backgroundColor: "{colors.white}"
  button-primary-on-green:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.green-deep}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-primary-on-green-hover:
    backgroundColor: "{colors.white}"
  button-secondary-on-green:
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-compact:
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "36px"
  field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "13.6px 16px"
    width: "100%"
  lit-row:
    rounded: "{rounded.row}"
    padding: "20px 16px"
  lit-row-hover:
    backgroundColor: "{colors.white}"
  kind-label-added:
    textColor: "{colors.green}"
    typography: "{typography.label}"
  kind-label-neutral:
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
  kind-label-on-green:
    textColor: "{colors.mint}"
    typography: "{typography.label}"
  compact-bar:
    backgroundColor: "{colors.paper}"
    height: "56px"
---

# Design System: Rahul Tiwari Portfolio

## Overview

**Creative North Star: "The Changelog"**

A career is published the way software is: as dated releases, each carrying entries tagged by kind and closed with the number it moved. The page is a single sheet of paper-white ground with ink type; the only committed color is one merged green, and it is spent in exactly two places, flooding the current release near the top and the closing contact band at the bottom. Everything between is paper, with grouping done by a left-hand date rail and whitespace rather than by boxes.

The world is code-led and text-dense but never cramped. Version tags and metrics are set in Bricolage Grotesque with tabular lining numerals so columns of figures align; Hanken Grotesk carries the prose; Geist Mono carries every date, label, and stack line. There are no cards, no dividers, no glass, no gradient text and no icon set: one 16-unit SVG arrow, rotated, is the whole glyph vocabulary. Motion is scarce and physical: an overdamped spring counts each metric in once, and the compact bar springs into place from above.

**Key Characteristics:**
- Paper ground, ink text, one green spent twice (latest release and contact band).
- Left date rail with a sticky version numeral; the release in view strikes bright, the others sit back at 32% opacity.
- Three typefaces with strict jobs: Bricolage for display and numerals, Hanken for body, Geist Mono for meta.
- "Lit from inside" as the one hover language: a row or button lifts to white with a soft, low shadow.
- Flat, boxless, borderless; the only strokes are inset field rings and the single arrow.

## Colors

Two neutral families, paper and ink, with a single green whose tints do all secondary work.

### Primary
- **Merged Green** (`{colors.green}`): the one committed color. Floods the latest release section and the contact band as a full-bleed background; fills the primary pill button on paper; colors the "Added" kind label and inline "Read the write-up" links on paper; the focus ring and the scrollbar thumb.
- **Deep Green** (`{colors.green-deep}`): primary button hover on paper; text color of the on-green primary button and of text selected inside a green band.
- **Mint** (`{colors.mint}`): the secondary text tone on green. Company line, date range, kind labels, stack line, metric labels, form labels, and the contact lede all sit in mint on the green flood. Also the page-wide `::selection` background on paper and the outer 4px ring of a focused field.
- **Green Tint** (`{colors.green-tint}`) and **Mint 2** (`{colors.mint-2}`): declared in the theme as tonal steps between paper and green; not consumed by any shipped surface yet. Available for future on-paper green washes.

### Neutral
- **Paper** (`{colors.paper}`): the page ground, the compact bar, body text on green, and the on-green primary button fill.
- **Paper 2** (`{colors.paper-2}`): the secondary pill button at rest, the scrollbar track, and (at 60% alpha) the Dependencies band wash.
- **White** (`{colors.white}`): the lit state. Hovered rows and buttons, form field fills, headline and link text on green, and metric numerals on green.
- **Ink** (`{colors.ink}`): all primary text, metric numerals on paper, and the invalid-field ring.
- **Ink 2** (`{colors.ink-2}`): secondary text: company lines, summaries, "Improved" and "Fixed" kind labels on paper, compact nav links.
- **Ink 3** (`{colors.ink-3}`): tertiary meta: dates, stack lines, metric labels, captions, footer, placeholders.

### Named Rules
**The Two Floods Rule.** Green appears as a background exactly twice per page: the latest release and the contact band (and the Impact band on a case-study page). Every other section is paper. A new green surface must displace one of these, not join them.

**The Mint-on-Green Rule.** Inside a green flood, hierarchy is paper (primary) and mint (secondary); white is reserved for headlines, numerals, and links. No ink, no ink-2, no green text inside a green band.

**The Two-Hue Label Rule.** Kind labels use two tones on paper, green for "Added" and ink-2 for "Improved" and "Fixed", and one tone (mint) on green. Blue and amber label hues were tried and retired; do not reintroduce a per-kind hue system.

## Typography

**Display Font:** Bricolage Grotesque, loaded with the `opsz` and `wdth` axes (with Helvetica Neue, Arial fallback)
**Body Font:** Hanken Grotesk (with system-ui fallback)
**Label/Mono Font:** Geist Mono (with ui-monospace, Menlo fallback)

**Character:** A grotesque with visible personality for names, roles, and numbers, a quiet humanist grotesque for reading, and a monospace for anything that is data about the data. The three never trade jobs.

### Hierarchy
- **Display** (800, `clamp(2.75rem, 7vw, 5rem)`, 0.95, -0.02em, balanced wrap): the name in the masthead only.
- **Version Numeral** (800, `clamp(2.75rem, 5.5vw, 4.25rem)`, 1.0, -0.03em, tabular lining): the release tag in the date rail (`2026.06`). Case-study pages reuse it at `clamp(2.5rem, 5vw, 3.75rem)`; the education list at 1.5rem.
- **Headline** (700, 2rem to 2.75rem at `sm`, 1.02, -0.02em): role titles, section headings ("Dependencies", "Education"), case-study titles. The contact heading steps up to 800 weight at 2.5rem to 3.25rem.
- **Metric** (700, 2rem to 2.25rem at `sm`, 1.0, -0.03em, tabular lining): every numeric outcome. There is exactly one numeric treatment on the site.
- **Title** (600, 1.125rem to 1.25rem, snug): skill group names, degree names, the on-green Impact statement (1.75rem to 2.25rem, 1.2).
- **Lede** (400, 1.125rem, 1.625, max 58ch to 62ch): masthead intro, release summaries, case-study summaries.
- **Body** (400, 1rem to 1.0625rem, 1.625, max 68ch): entry text, responsibilities, skill lists.
- **Label** (600, 11px, uppercase, 0.05em tracking, mono): kind labels ("Added", "Improved", "Fixed"), form labels, "Problem" / "Solution" / "Impact" / "Stack" / "Expected".
- **Meta** (400, 0.75rem, 0.02em tracking, mono, tabular): date ranges, stack lines, captions' neighbours, footer, compact nav links.

### Named Rules
**The Numeral Rule.** Every number a reader is meant to compare (version tags, metrics, education tags) is set in Bricolage with `tabular-nums lining-nums` and -0.03em tracking, at 700 or 800. Body-weight numbers inside prose stay in Hanken.

**The Mono-Is-Meta Rule.** Geist Mono is used only for data about the content: dates, kind labels, stack lines, form labels, nav links in the compact bar, footer. It never carries a sentence a recruiter is meant to read for meaning.

**The Tight-Display Rule.** Bricolage always runs with negative tracking (-0.02em display, -0.03em numerals) and `text-wrap: balance` on headings. Never set it at default tracking.

## Layout

One centered container of 1200px max width with 20px gutters on mobile and 32px from `sm` (640px). From `md` (768px) every section is a 12-column grid with a 32px column gap: a 4-column rail on the left (3 columns from `lg`, 1024px) holding the version numeral, date range, and section heading, sticky at 80px from the top; and an 8-column (9 from `lg`) body on the right. Below `md` the grid collapses to a single column and the rail sits above its body. The mobile capture at 390 and the 1024 capture both hold this shape.

Vertical rhythm is band-based. Each section is a full-width band with 56px vertical padding on mobile and 80px from `md`; the contact band runs 64px to 96px. Inside a band, blocks step by 32px (heading to summary 20px, summary to entries 32px, entries to stack line 40px). Entry rows are a two-column grid at `sm`, a 5.5rem label column then text, with 24px column gap and 8px row gap; each row is inset 16px into a negative margin so its lit state extends past the text edge without shifting the column. Metrics within an entry flow as a wrapping row with 40px horizontal and 20px vertical gaps.

The masthead is the only section that breaks the rail: photo (96px, 112px from `sm`) in the rail column, name and role in the body column, the action pair pinned to the right edge on `md` and stacked below on mobile. Once the page scrolls past 360px a fixed 56px compact bar takes over with avatar, name, section nav (from `lg` only), and the compact action pair.

**The Rail Rule.** Grouping is done by the date rail and whitespace. Never add a horizontal rule, box, or card to separate releases or entries.

## Elevation & Depth

The system is flat. Depth is tonal: paper, paper-2 at 60%, white, and the green flood are the only layers, and the compact bar is opaque paper with no blur or shadow. A single soft shadow exists and it is a state, not a surface: when a row or button is lit (hover or focus-within) it lifts to white and gains a low, wide, heavily offset-negative shadow that reads as the element glowing from inside rather than floating. On green the lit state is a 9% white wash and the shadow is removed.

### Shadow Vocabulary
- **Lit** (`box-shadow: 0 1px 0 rgba(16,20,24,0.04), 0 12px 32px -20px rgba(16,20,24,0.35)`): hover and focus-within of any `.lit` row or pill on paper. Never at rest.
- **Field ring** (`inset 0 0 0 1px rgba(16,20,24,0.08)`, hover `0.18`): the only border in the system, drawn as an inset shadow so it never affects layout.
- **Field focus** (`inset 0 0 0 2px green, 0 0 0 4px mint`): a two-ring focus.

### Named Rules
**The Lit-Only Rule.** Surfaces are flat at rest. The one shadow appears only as a response to hover or focus, and only on paper.

## Shapes

Three radii and a pill. Interactive rows and the release figure use a 12px corner (`{rounded.row}`); form fields use 8px (`{rounded.field}`); every button is a full pill (`{rounded.pill}`), as is the avatar and the scrollbar thumb; the focus outline rounds at 2px with a 3px offset. There are no borders: edges are made by fill changes, inset rings, or whitespace. Photographs are rectangular with the 12px corner (release figure) or circular (avatar). The arrow glyph is a 1.75-unit round-capped stroke on a 16-unit box, sized at 0.85em and baseline-shifted -0.08em so it sits inline with text; rotation supplies the four directions.

## Components

### Buttons
Two pills, always as a pair: "Download resume" (primary) then "Get in touch" (secondary). Confident, quiet, never boxed.
- **Shape:** full pill (`{rounded.pill}`), 48px tall with 24px side padding, 0.95rem semibold; compact variant 36px tall, 16px padding, 0.875rem.
- **Primary on paper:** green fill, paper text; hover to deep green with white text.
- **Secondary on paper:** paper-2 fill, ink text; hover lifts to white.
- **Primary on green:** paper fill, deep-green text; hover to white. Used for "Send message" (28px padding).
- **Secondary on green:** no fill, paper text; hover a 10% white wash.
- **Hover / Focus:** the lit transition (220ms `cubic-bezier(0.16,1,0.3,1)` on background, color, shadow, transform). Focus-visible draws a 2px green outline offset 3px; paper outline on green.
- **Disabled:** 70% opacity and a progress cursor while submitting.

### Inputs / Fields
- **Style:** white fill, ink text, 8px corner, 13.6px by 16px padding, full width, no border; a 1px inset ring at 8% ink defines the edge. Placeholder in ink-3.
- **Hover:** ring deepens to 18%.
- **Focus:** outline removed; 2px inset green ring plus a 4px mint halo, 180ms.
- **Error:** 2px inset ink ring; message beneath in white semibold on green.
- **Label:** mono label style in mint (fields only ship on the green band).

### Navigation
- **Masthead:** no nav; the action pair is the navigation.
- **Compact bar:** appears after 360px of scroll as a fixed 56px opaque paper bar (spring in from -64px: stiffness 420, damping 38, mass 0.8). Left: 28px avatar and name in Bricolage 700 at 1rem (name hidden below `sm`). Center (from `lg`): mono 0.75rem ink-2 links hovering to green. Right: compact action pair.
- **Case-study header:** the same left cluster and compact pair in a static 64px header.

### Lit Row
The unit of every list. An entry, a skill group, a degree, or a responsibility is a `.lit` list item with 12px corners, 20px by 16px padding, inset 16px into negative margin. At rest it is invisible; on hover or focus-within it lifts to white with the lit shadow (or a 9% white wash on green). No dividers between rows.

### Date Rail
The signature. A sticky column (top 80px from `md`) holding the version numeral, a mono date range (`Jun 2026 → now`), and on the latest release the line "Latest release" in mint. Non-latest rails rest at 32% opacity and snap to full opacity in two steps over 120ms when the release crosses the middle 16% of the viewport (IntersectionObserver with -42% root margins). The latest release is always lit.

### Kind Label
The changelog's native tag. Mono 11px, 600, uppercase, 0.05em tracking, in a 5.5rem column before the entry text. Three values only: Added (green on paper), Improved and Fixed (ink-2 on paper); all mint on green.

### Metric
One numeric treatment for every outcome: Bricolage 700 at 2rem to 2.25rem with tabular lining numerals, ink on paper and white on green, with a 0.875rem label beneath in ink-3 or mint (6px gap). The final value is server-rendered; once in view it jumps to zero and counts in once with an overdamped spring (mass 1.4, damping 30, stiffness 90) so it never overshoots. Prefix and suffix (`$`, `%`, `K`, `M`, `+`) stay fixed while the digits run. Reduced motion shows the value at rest.

### Arrow
The single glyph. `components/Arrow.tsx`: a 16-unit SVG, 1.75 stroke, round caps, drawn once as a right arrow and rotated for up-right (external links), down (downloads), and left (back links). Inherits `currentColor` and text size. No other icon exists.

### Figure
A release may carry one image: 300px column beside the entries from `lg`, full width below, 12px corner, with a caption in ink-3 or mint at 0.875rem and an optional up-right link in semibold green. Non-photographic renders are captioned as such.

## Do's and Don'ts

### Do:
- **Do** set every comparable number in Bricolage with `tabular-nums lining-nums` at -0.03em, via the Metric component or the `.numeral` utility.
- **Do** put secondary text on green in mint and headline, numeral, and link text on green in white.
- **Do** use the `.lit` row for any new list item and let its hover be the only hover.
- **Do** keep the date rail sticky at 80px and the body in the 8/9-column right grid on any new section.
- **Do** use `components/Arrow.tsx` for every directional glyph, rotated, sized in em.
- **Do** keep the compact bar and any other overlay opaque paper.
- **Do** respect `prefers-reduced-motion`: count-ins, bar springs, and lit transitions all fall back to rest states.

### Don't:
- **Don't** add cards, dividers, horizontal rules, borders, glass, blur, or gradient text; grouping is rail and whitespace only.
- **Don't** introduce a third color family or per-kind label hues; green (Added) and ink-2 (Improved, Fixed) on paper, mint on green.
- **Don't** paint green as a background anywhere other than the latest release and the closing band (Impact band on case studies).
- **Don't** add an icon set, icon font, or emoji; the arrow is the only glyph.
- **Don't** set Bricolage at default tracking, or use Geist Mono for readable sentences.
- **Don't** center the masthead or add a hero glow; the masthead is a left-aligned grid with the action pair pinned right.
- **Don't** put a shadow on a surface at rest; the lit shadow is a hover and focus response on paper only.
