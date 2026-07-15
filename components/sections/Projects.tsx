'use client'

/* eslint-disable @next/next/no-img-element */
import { featuredProjects, otherProjects } from '@/data/content'
import { Reveal, SectionHeading } from '@/components/ui'

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading code="05" kicker="selected work" title="Case Studies" />

        <div className="space-y-12 md:space-y-16">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.name}>
              <article className="sheet overflow-hidden rounded-md shadow-lift">
                {/* case header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink/10 px-6 py-3 md:px-8">
                  <p className="annotation">case {String(i + 1).padStart(2, '0')}</p>
                  <p className="font-mono text-[11px] text-mist">{p.stack.join(' · ')}</p>
                </div>

                <div className="grid gap-0 lg:grid-cols-[5fr,6fr]">
                  {/* artwork — fixed 16:10 crop, centered in its column */}
                  <a
                    href={p.github ?? p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center self-stretch border-b border-ink/10 bg-ink/[0.03] p-4 lg:border-b-0 lg:border-r lg:p-5"
                  >
                    <span className="block w-full overflow-hidden rounded-sm border border-ink/15">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="aspect-[16/10] w-full object-cover object-top transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                      />
                    </span>
                  </a>

                  {/* the case study */}
                  <div className="px-6 py-6 md:px-8 md:py-7">
                    <h3 className="font-heading text-2xl font-medium text-ink md:text-3xl">
                      {p.name}
                    </h3>
                    <p className="mt-1 font-mono text-xs italic text-mist">{p.tagline}</p>

                    <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink/80">
                      <div>
                        <p className="annotation mb-1">overview</p>
                        <p>{p.overview}</p>
                      </div>
                      <div>
                        <p className="annotation mb-1">outcome</p>
                        <p>{p.impact}</p>
                      </div>
                    </div>

                    {p.stats && (
                      <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-ink/15 bg-ink/15 sm:grid-cols-4">
                        {p.stats.map((s) => (
                          <div key={s.label} className="bg-paper px-2 py-2.5 text-center">
                            <p className="font-heading text-lg font-semibold text-accent">{s.value}</p>
                            <p className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-mist">
                              {s.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mt-6 flex flex-wrap gap-3">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-md bg-ink px-5 py-2.5 text-xs font-semibold text-paper transition-transform duration-300 hover:-translate-y-0.5"
                        >
                          View on GitHub ↗
                        </a>
                      )}
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noreferrer"
                          className={
                            p.github
                              ? 'rounded-md border border-ink/30 px-5 py-2.5 text-xs font-semibold text-ink/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink'
                              : 'rounded-md bg-ink px-5 py-2.5 text-xs font-semibold text-paper transition-transform duration-300 hover:-translate-y-0.5'
                          }
                        >
                          Live Demo ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* the appendix — smaller work, listed */}
        <div className="mt-20">
          <Reveal>
            <p className="annotation">appendix — more projects</p>
            <div className="mt-3 h-px w-full bg-ink/15" />
          </Reveal>
          <div className="divide-y divide-ink/10">
            {otherProjects.map((p, i) => (
              <Reveal key={p.name} delay={(i % 4) * 0.05}>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid items-baseline gap-1 py-4 transition-colors hover:bg-accent/[0.04] sm:grid-cols-[220px,1fr,auto] sm:gap-4"
                >
                  <h4 className="font-heading text-base font-medium text-ink transition-colors group-hover:text-accent">
                    {p.name}
                  </h4>
                  <p className="text-sm text-ink/65">{p.desc}</p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-mist">
                    {p.tags.join(' · ')} <span className="transition-transform group-hover:translate-x-1">↗</span>
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
