'use client'

/* eslint-disable @next/next/no-img-element */
import { aboutMe, profile } from '@/data/content'
import { Marked, Reveal, SectionHeading } from '@/components/ui'

const quickFacts = ['Mumbai, India', 'Backend Developer', 'Django & PostgreSQL', 'Learning ML', 'B.Sc. IT · 9.80 CGPA']

export default function About() {
  return (
    <section id="about" className="relative z-10 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading code="01" kicker="profile" title="Who I Am" />

        <div className="grid gap-10 lg:grid-cols-[2fr,3fr] lg:gap-14">
          {/* the engineer, pictured */}
          <div className="space-y-6 self-start lg:sticky lg:top-24">
            <Reveal>
              <figure className="sheet rounded-md p-3 shadow-lift">
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="annotation mt-3 text-center">
                  fig. 01.1 — the engineer, mumbai
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={0.12}>
              <ul className="flex flex-wrap gap-2">
                {quickFacts.map((f) => (
                  <li
                    key={f}
                    className="rounded-sm border border-ink/20 bg-paper px-3 py-1 font-mono text-[11px] text-ink/75"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* the narrative */}
          <Reveal delay={0.1}>
            <div className="border-l-2 border-accent/40 pl-6 md:pl-8">
              <div className="space-y-5">
                {aboutMe.map((para, i) => (
                  <Reveal key={i} delay={0.06 * i} y={14}>
                    <p className="leading-relaxed text-ink/85 md:text-[17px]">
                      <Marked text={para} />
                    </p>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.35} y={10}>
                <p className="mt-8 text-right font-hand text-3xl text-ink/60">
                  — {profile.name.split(' ')[0]}
                </p>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
