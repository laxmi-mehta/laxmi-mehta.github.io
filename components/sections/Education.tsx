'use client'

import { education } from '@/data/content'
import { Reveal, SectionHeading } from '@/components/ui'

// each qualification is an old cardboard season pass
export default function Education() {
  return (
    <section id="education" className="relative z-10 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading code="02" kicker="tickets collected on the way" title="Education" />

        <div className="grid gap-8 md:grid-cols-3">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.15}>
              <article
                className={`ticket-card group relative h-full rounded-sm p-7 shadow-float transition-transform duration-700 hover:-translate-y-2 ${
                  i % 2 ? 'md:rotate-[0.6deg]' : 'md:-rotate-[0.6deg]'
                } hover:rotate-0`}
              >
                {/* punched hole */}
                <span className="absolute right-4 top-4 h-3.5 w-3.5 rounded-full border border-ink/40 bg-cream shadow-inner" />

                <p className="text-[10px] font-bold uppercase tracking-wideish text-ink/55">
                  education pass · {e.years}
                </p>
                <h3 className="mt-3 font-heading text-xl font-semibold text-ink md:text-2xl">
                  {e.degree}
                </h3>
                <p className="mt-1 font-hand text-xl text-ink/70">{e.school}</p>

                <div className="my-4 border-t border-dashed border-ink/30" />

                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-bold uppercase tracking-wideish text-ink/55">
                    final score
                  </p>
                  {/* rubber-stamped result */}
                  <p className="rotate-[-4deg] rounded-sm border-2 border-rail px-2.5 py-1 text-sm font-bold text-rail transition-transform duration-500 group-hover:rotate-0">
                    {e.score}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
