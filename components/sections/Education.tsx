'use client'

import { education } from '@/data/content'
import { Reveal, SectionHeading } from '@/components/ui'

export default function Education() {
  return (
    <section id="education" className="relative z-10 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading kicker="the miles before the trail" title="Education" />

        <div className="grid gap-8 md:grid-cols-3">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.15}>
              <article
                className={`paper group relative h-full rounded-sm p-8 text-center shadow-float transition-transform duration-700 hover:-translate-y-2 ${
                  i % 2 ? 'md:rotate-[0.6deg]' : 'md:-rotate-[0.6deg]'
                } hover:rotate-0`}
              >
                {/* wax-seal style score badge */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-ember/40 bg-ember/10 font-hand text-lg leading-tight text-ember">
                  {e.score}
                </div>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-wideish text-ember">
                  {e.years}
                </p>
                <h3 className="mt-2 font-heading text-xl font-medium text-soil md:text-2xl">
                  {e.degree}
                </h3>
                <div className="mx-auto mt-3 h-px w-10 bg-bark/25 transition-all duration-700 group-hover:w-16" />
                <p className="mt-3 font-hand text-xl text-bark/75">{e.school}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
