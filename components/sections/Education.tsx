'use client'

import { education } from '@/data/content'
import { Reveal, SectionHeading } from '@/components/ui'

// a clean ledger table — degree, school, years, result
export default function Education() {
  return (
    <section id="education" className="relative z-10 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading code="02" kicker="education" title="Education" />

        <div className="sheet divide-y divide-ink/10 rounded-md">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.1}>
              <div className="grid items-center gap-2 px-6 py-5 transition-colors hover:bg-accent/[0.04] sm:grid-cols-[1fr,auto] md:px-8">
                <div>
                  <h3 className="font-heading text-xl font-medium text-ink md:text-2xl">
                    {e.degree}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-mist">
                    {e.school} · {e.years}
                  </p>
                </div>
                <p className="font-mono text-lg font-semibold text-accent">{e.score}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
