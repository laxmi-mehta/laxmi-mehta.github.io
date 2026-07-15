'use client'

import { skillGroups } from '@/data/content'
import { Reveal, SectionHeading } from '@/components/ui'

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading code="04" kicker="tooling" title="Skills" />

        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.08}>
              <div>
                <div className="flex items-baseline justify-between border-b border-ink/15 pb-2">
                  <h3 className="font-heading text-xl font-medium text-ink">{group.title}</h3>
                  <span className="annotation">0{i + 1}</span>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="cursor-default rounded-sm border border-ink/20 bg-paper px-3 py-1.5 font-mono text-xs text-ink/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
