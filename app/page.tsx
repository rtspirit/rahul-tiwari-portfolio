import Masthead from "@/components/Masthead";
import ReleaseSection from "@/components/ReleaseSection";
import ContactForm from "@/components/ContactForm";
import { releases } from "@/lib/releases";
import { skillGroups } from "@/lib/skills";
import { education } from "@/lib/education";
import { site } from "@/lib/site";
import Arrow from "@/components/Arrow";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Masthead />

      <main className="flex-1">
        {releases.map((release, i) => (
          <ReleaseSection key={release.version} release={release} latest={i === 0} />
        ))}

        {/* Skillset */}
        <section id="skillset" aria-labelledby="skillset-title" className="scroll-mt-16 bg-paper-2/60">
          <div className="mx-auto grid w-full max-w-[1200px] gap-x-8 gap-y-8 px-5 py-14 sm:px-8 md:grid-cols-12 md:py-20">
            <div className="md:col-span-4 lg:col-span-3">
              <div className="md:sticky md:top-20">
                <h2 id="skillset-title" className="display text-[2rem] font-bold leading-none lg:text-[2.5rem]">
                  Skillset
                </h2>
                <p className="mt-3 max-w-[26ch] text-ink-2">
                  What I work in day to day, grouped the way I reach for it.
                </p>
              </div>
            </div>
            <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 md:col-span-8 lg:col-span-9">
              {skillGroups.map((g) => (
                <div key={g.name} className="lit -mx-4 rounded-xl px-4 py-4">
                  <dt className="display text-lg font-semibold text-ink">{g.name}</dt>
                  <dd className="mt-1.5 leading-relaxed text-ink-2">{g.items.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Education */}
        <section id="education" aria-labelledby="education-title" className="scroll-mt-16">
          <div className="mx-auto grid w-full max-w-[1200px] gap-x-8 gap-y-8 px-5 py-14 sm:px-8 md:grid-cols-12 md:py-20">
            <div className="md:col-span-4 lg:col-span-3">
              <div className="md:sticky md:top-20">
                <h2 id="education-title" className="display text-[2rem] font-bold leading-none lg:text-[2.5rem]">
                  Education
                </h2>
                <p className="mt-3 max-w-[26ch] text-ink-2">Tagged by the month each one was completed.</p>
              </div>
            </div>
            <ol className="flex flex-col md:col-span-8 lg:col-span-9">
              {education.map((e) => (
                <li
                  key={e.version}
                  className="lit -mx-4 grid gap-x-8 gap-y-2 rounded-xl px-4 py-5 sm:grid-cols-[8.5rem_1fr]"
                >
                  <div>
                    <p className="numeral text-2xl font-bold leading-none text-ink">{e.version}</p>
                    {e.expected && <p className="mono mt-1.5 text-[11px] uppercase tracking-wider text-ink-3">Expected</p>}
                  </div>
                  <div>
                    <p className="display text-xl font-semibold leading-snug text-ink">{e.degree}</p>
                    <p className="mt-1 text-ink-2">
                      {e.school} · {e.location}
                    </p>
                    <p className="mono mt-1 text-xs text-ink-3">{e.span}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" aria-labelledby="contact-title" className="on-green scroll-mt-16 bg-green text-paper">
          <div className="mx-auto grid w-full max-w-[1200px] gap-x-8 gap-y-10 px-5 py-16 sm:px-8 md:grid-cols-12 md:py-24">
            <div className="md:col-span-4">
              <h2 id="contact-title" className="display text-[2.5rem] font-extrabold leading-none sm:text-[3.25rem]">
                Get in touch
              </h2>
              <p className="mt-5 max-w-[34ch] text-lg leading-relaxed text-mint">
                Open to conversations about senior full-stack roles, AI platforms, or BostonHome. The form lands in my
                inbox.
              </p>
              <ul className="mt-8 flex flex-col gap-2.5">
                <li>
                  <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className="font-semibold text-white">
                    LinkedIn <Arrow direction="up-right" />
                  </a>
                </li>
                <li>
                  <a href={site.links.github} target="_blank" rel="noopener noreferrer" className="font-semibold text-white">
                    GitHub <Arrow direction="up-right" />
                  </a>
                </li>
                <li>
                  <a href={site.links.bostonhome} target="_blank" rel="noopener noreferrer" className="font-semibold text-white">
                    bostonhome.app <Arrow direction="up-right" />
                  </a>
                </li>
                <li>
                  <a href={site.resumePath} download="Rahul-Tiwari-Resume.pdf" className="font-semibold text-white">
                    Resume (PDF) <Arrow direction="down" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:col-span-8 lg:col-span-7 lg:col-start-6">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-3 px-5 py-8 sm:px-8">
        <p className="mono text-xs text-ink-3">© Rahul Tiwari · Boston, MA</p>
        <p className="mono text-xs text-ink-3">
          Built with Next.js ·{" "}
          <a
            href="https://github.com/rtspirit/rahul-tiwari-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-2"
          >
            Source
          </a>
        </p>
      </footer>
    </div>
  );
}
