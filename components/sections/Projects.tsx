'use client'

/* eslint-disable @next/next/no-img-element */
import { featuredProjects, otherProjects } from '@/data/content'
import { Reveal, SectionHeading } from '@/components/ui'

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading code="05" kicker="please hold your tickets ready" title="Featured Work" />

        <div className="space-y-16 md:space-y-24">
          {featuredProjects.map((p, i) => (
            <article key={p.name} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
              {/* the view from the window */}
              <Reveal className={i % 2 ? 'lg:order-2' : ''}>
                <a
                  href={p.github ?? p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="group block overflow-hidden rounded-md border-[3px] border-ink shadow-float"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                </a>
              </Reveal>

              {/* the ticket */}
              <div className={i % 2 ? 'lg:order-1' : ''}>
                <Reveal delay={0.1}>
                  <div className="ticket-card relative rounded-sm shadow-float">
                    {/* side notches, like a punched ticket */}
                    <span className="absolute -left-2.5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border-r border-ink/30 bg-cream" />
                    <span className="absolute -right-2.5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border-l border-ink/30 bg-cream" />

                    {/* ticket header */}
                    <div className="flex items-center justify-between border-b border-dashed border-ink/30 px-6 py-2.5 md:px-8">
                      <p className="text-[10px] font-bold uppercase tracking-wideish text-ink/55">
                        mumbai local · first class
                      </p>
                      <p className="text-[10px] font-bold uppercase tracking-wideish text-rail">
                        № LM-0{i + 1}
                      </p>
                    </div>

                    <div className="px-6 py-6 md:px-8 md:py-7">
                      <p className="font-hand text-2xl text-chai">{p.tagline}</p>
                      <h3 className="mt-1.5 font-heading text-2xl font-semibold text-ink md:text-3xl">
                        {p.name}
                      </h3>
                      <p className="mt-3 leading-relaxed text-ink/80">{p.overview}</p>
                      <p className="mt-3 text-sm leading-relaxed text-ink/70">
                        <span className="font-bold text-rail">Impact — </span>
                        {p.impact}
                      </p>

                      {p.stats && (
                        <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                          {p.stats.map((s) => (
                            <div
                              key={s.label}
                              className="rounded-sm border border-ink/25 bg-cream/70 px-2 py-2.5 text-center"
                            >
                              <p className="font-heading text-xl font-semibold text-rail">{s.value}</p>
                              <p className="mt-0.5 text-[9px] font-bold uppercase tracking-wider text-ink/60">
                                {s.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="mt-5 flex flex-wrap gap-2">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded-sm border border-ink/30 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-ink/70"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-3">
                        {p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-md border-2 border-ink bg-ink px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-board transition-transform duration-300 hover:-translate-y-1"
                          >
                            View on GitHub
                          </a>
                        )}
                        {p.demo && (
                          <a
                            href={p.demo}
                            target="_blank"
                            rel="noreferrer"
                            className={
                              p.github
                                ? 'rounded-md border-2 border-ink/40 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-ink/75 transition-all duration-300 hover:-translate-y-1 hover:border-ink'
                                : 'rounded-md border-2 border-ink bg-ink px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-board transition-transform duration-300 hover:-translate-y-1'
                            }
                          >
                            Visit Live Site
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </article>
          ))}
        </div>

        {/* second-class tickets */}
        <div className="mt-24">
          <Reveal>
            <div className="mb-10 text-center">
              <p className="font-hand text-xl text-chai">shorter rides, same line</p>
              <h3 className="mt-1 font-heading text-3xl font-semibold text-ink">More Projects</h3>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherProjects.map((p, i) => (
              <Reveal key={p.name} delay={(i % 4) * 0.08}>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="ticket-card group flex h-full flex-col rounded-sm p-5 transition-all duration-500 hover:-translate-y-2 hover:shadow-float"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-heading text-base font-semibold text-ink transition-colors group-hover:text-rail">
                      {p.name}
                    </h4>
                    <span className="mt-0.5 text-ink/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-rail">
                      →
                    </span>
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{p.desc}</p>
                  <p className="mt-3 border-t border-dashed border-ink/25 pt-2 text-[10px] font-bold uppercase tracking-wideish text-ink/50">
                    {p.tags.join(' · ')}
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
