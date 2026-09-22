import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Actions from "@/components/Actions";
import Arrow from "@/components/Arrow";
import Metric from "@/components/Metric";
import { projects, projectBySlug } from "@/lib/projects";
import { anchorFor, releaseForCompany } from "@/lib/releases";
import { site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | ${site.name}`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();

  const release = releaseForCompany(project.company);
  const backHref = release ? `/#${anchorFor(release.version)}` : "/";

  return (
    <div className="flex min-h-screen flex-col">
      <header className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <Image
            src="/images/profile.jpg"
            alt=""
            width={28}
            height={28}
            sizes="28px"
            className="h-7 w-7 rounded-full object-cover object-top"
          />
          <span className="display text-base font-bold text-ink">{site.name}</span>
        </Link>
        <Actions compact />
      </header>

      <main className="flex-1">
        <article>
          <div className="mx-auto grid w-full max-w-[1200px] gap-x-8 gap-y-8 px-5 pb-14 pt-8 sm:px-8 md:grid-cols-12 md:pb-20 md:pt-14">
            <div className="md:col-span-4 lg:col-span-3">
              <div className="md:sticky md:top-8">
                <Link href={backHref} className="mono text-xs font-medium text-green">
                  <Arrow direction="left" /> Back to experience
                </Link>
                {release && (
                  <p className="numeral mt-6 text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-none text-ink">
                    {release.version}
                  </p>
                )}
                <p className="mono mt-3 text-xs text-ink-3">{project.timeframe}</p>
                <p className="mt-1 text-ink-2">
                  {project.company} · {project.role}
                </p>
              </div>
            </div>

            <div className="md:col-span-8 lg:col-span-9">
              <h1 className="display text-[2.25rem] font-bold leading-[1.02] text-ink sm:text-[3rem]">
                {project.title}
              </h1>
              <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-ink-2">{project.summary}</p>

              <dl className="mt-12 flex flex-col gap-10">
                <div className="grid gap-x-6 gap-y-2 sm:grid-cols-[8rem_1fr]">
                  <dt className="mono pt-1 text-[11px] font-semibold uppercase tracking-wider text-ink-3">Problem</dt>
                  <dd className="max-w-[68ch] leading-relaxed text-ink">{project.problem}</dd>
                </div>
                <div className="grid gap-x-6 gap-y-2 sm:grid-cols-[8rem_1fr]">
                  <dt className="mono pt-1 text-[11px] font-semibold uppercase tracking-wider text-green">Solution</dt>
                  <dd className="max-w-[68ch] leading-relaxed text-ink">{project.solution}</dd>
                </div>
              </dl>
            </div>
          </div>

          <section className="on-green bg-green text-paper" aria-labelledby="impact-title">
            <div className="mx-auto grid w-full max-w-[1200px] gap-x-8 gap-y-4 px-5 py-12 sm:px-8 md:grid-cols-12 md:py-16">
              <h2 id="impact-title" className="mono text-[11px] font-semibold uppercase tracking-wider text-mint md:col-span-4 lg:col-span-3">
                Impact
              </h2>
              <div className="md:col-span-8 lg:col-span-9">
                <p className="display max-w-[30ch] text-[1.75rem] font-semibold leading-[1.2] text-white sm:text-[2.25rem]">
                  {project.impact}
                </p>
                {project.metrics && (
                  <div className="mt-8 flex flex-wrap gap-x-10 gap-y-5">
                    {project.metrics.map((m) => (
                      <Metric key={m.label} value={m.value} label={m.label} onGreen />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>

          <div className="mx-auto grid w-full max-w-[1200px] gap-x-8 gap-y-8 px-5 py-14 sm:px-8 md:grid-cols-12 md:py-20">
            <div className="md:col-span-4 lg:col-span-3">
              <h2 className="display text-2xl font-bold text-ink">What I did</h2>
            </div>
            <div className="md:col-span-8 lg:col-span-9">
              <ul className="flex flex-col">
                {project.responsibilities.map((r) => (
                  <li key={r} className="lit -mx-4 max-w-[70ch] rounded-xl px-4 py-3 leading-relaxed text-ink">
                    {r}
                  </li>
                ))}
              </ul>
              <p className="mono mt-10 text-xs leading-relaxed text-ink-3">
                <span className="font-semibold uppercase">Built with</span> · {project.tech.join(" · ")}
              </p>
            </div>
          </div>
        </article>
      </main>

      <footer className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-3 px-5 py-8 sm:px-8">
        <p className="mono text-xs text-ink-3">© Rahul Tiwari · Boston, MA</p>
        <Link href={backHref} className="mono text-xs text-ink-2">
          <Arrow direction="left" /> Back to experience
        </Link>
      </footer>
    </div>
  );
}
