'use client'

/* eslint-disable @next/next/no-img-element */
import { featuredProjects, otherProjects } from '@/data/content'
import { Reveal, SectionHeading } from '@/components/ui'

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading light kicker="destinations along the way" title="Featured Work" />

        <div className="space-y-14 md:space-y-20">
          {featuredProjects.map((p, i) => (
            <article key={p.name} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              {/* artwork */}
              <Reveal className={i % 2 ? 'lg:order-2' : ''}>
                <a
                  href={p.github ?? p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="group block overflow-hidden rounded-lg border border-moonsilver/15 shadow-float"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                </a>
              </Reveal>

              {/* story — short and clear */}
              <div className={i % 2 ? 'lg:order-1' : ''}>
                <Reveal delay={0.1}>
                  <p className="font-hand text-2xl text-lantern/90">{p.tagline}</p>
                  <h3 className="mt-2 font-heading text-3xl font-medium text-moonsilver md:text-4xl">
                    {p.name}
                  </h3>
                  <p className="mt-4 leading-relaxed text-moonsilver/80">{p.overview}</p>
                  <p className="mt-4 text-sm leading-relaxed text-moonsilver/70">
                    <span className="font-semibold text-lantern/90">Impact — </span>
                    {p.impact}
                  </p>
                </Reveal>

                {/* headline numbers, when a project has earned them */}
                {p.stats && (
                  <Reveal delay={0.15}>
                    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {p.stats.map((s) => (
                        <div
                          key={s.label}
                          className="rounded-sm border border-lantern/30 bg-lantern/10 px-3 py-4 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lantern"
                        >
                          <p className="font-heading text-2xl text-lantern">{s.value}</p>
                          <p className="mt-1 text-[10px] uppercase tracking-wideish text-moonsilver/80">
                            {s.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                )}

                <Reveal delay={0.2}>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-moonsilver/25 px-3.5 py-1 text-xs text-moonsilver/85"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-4">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-moonsilver px-7 py-3 text-sm font-medium text-midnight transition-transform duration-500 hover:-translate-y-1"
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
                            ? 'rounded-full border border-moonsilver/40 px-7 py-3 text-sm font-medium text-moonsilver transition-all duration-500 hover:-translate-y-1 hover:border-moonsilver'
                            : 'rounded-full bg-moonsilver px-7 py-3 text-sm font-medium text-midnight transition-transform duration-500 hover:-translate-y-1'
                        }
                      >
                        Visit Live Site
                      </a>
                    )}
                  </div>
                </Reveal>
              </div>
            </article>
          ))}
        </div>

        {/* more projects */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-10 text-center">
              <p className="font-hand text-xl text-lantern/80">from the same road</p>
              <h3 className="mt-1 font-heading text-3xl font-light text-moonsilver">
                More Projects
              </h3>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherProjects.map((p, i) => (
              <Reveal key={p.name} delay={(i % 4) * 0.08}>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="paper-dark group flex h-full flex-col rounded-sm p-5 backdrop-blur-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-lantern"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-heading text-base text-moonsilver transition-colors group-hover:text-lantern">
                      {p.name}
                    </h4>
                    <span className="mt-0.5 text-moonsilver/40 transition-all duration-500 group-hover:translate-x-1 group-hover:text-lantern">
                      →
                    </span>
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-moonsilver/65">{p.desc}</p>
                  <p className="mt-3 text-[10px] uppercase tracking-wideish text-moonsilver/45">
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
