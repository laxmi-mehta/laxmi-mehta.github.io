'use client'

import { aiJourney } from '@/data/content'
import { Reveal, SectionHeading } from '@/components/ui'

const stateStyle = {
  walked: { label: 'done', box: 'border-accent bg-accent', tag: 'text-accent' },
  walking: { label: 'in progress', box: 'border-accent bg-paper animate-pulse', tag: 'text-rust' },
  ahead: { label: 'planned', box: 'border-ink/30 bg-paper', tag: 'text-mist' },
} as const

export default function AIJourney() {
  return (
    <section id="ai-journey" className="relative z-10 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading code="06" kicker="ml roadmap" title="The Road Into ML" />

        <Reveal>
          <p className="max-w-xl leading-relaxed text-ink/75">{aiJourney.intro}</p>
        </Reveal>

        <div className="relative mt-12 pl-8 md:pl-10">
          <div className="absolute left-[6px] top-1 h-full w-px bg-ink/15" />

          <div className="space-y-10">
            {aiJourney.stages.map((stage, i) => {
              const s = stateStyle[stage.state]
              return (
                <Reveal key={stage.title} delay={i * 0.06}>
                  <div className="relative">
                    <span
                      className={`absolute -left-8 top-1.5 h-[11px] w-[11px] rounded-sm border-2 md:-left-10 ${s.box}`}
                    />
                    <p className={`font-mono text-[10px] font-semibold uppercase tracking-wideish ${s.tag}`}>
                      [{s.label}]
                    </p>
                    <h3 className="mt-1 font-heading text-xl font-medium text-ink md:text-2xl">
                      {stage.title}
                    </h3>
                    <ul className="mt-2.5 space-y-1.5">
                      {stage.items.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/70">
                          <span className="mt-[9px] h-px w-4 shrink-0 bg-ink/30" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
