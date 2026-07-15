'use client'

import { aiJourney } from '@/data/content'
import { Reveal, SectionHeading } from '@/components/ui'

// the ML line — partly open, partly under construction
const stateStyle = {
  walked: {
    label: 'station open',
    roundel: 'border-signal bg-signal/15',
    dot: 'bg-signal',
    tag: 'text-signal',
  },
  walking: {
    label: 'train currently here',
    roundel: 'border-board bg-board/20',
    dot: 'bg-board animate-pulse',
    tag: 'text-chai',
  },
  ahead: {
    label: 'under construction',
    roundel: 'border-dashed border-ink/40 bg-transparent',
    dot: 'bg-ink/25',
    tag: 'text-ink/50',
  },
} as const

export default function AIJourney() {
  return (
    <section id="ai-journey" className="relative z-10 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading code="06" kicker="a new line is being laid" title="The ML Line" />

        <Reveal>
          <p className="mx-auto max-w-xl text-center leading-relaxed text-ink/75">
            {aiJourney.intro}
          </p>
        </Reveal>

        <div className="relative mt-14">
          {/* built track turns to dashes where the line is still under construction */}
          <div className="absolute left-[15px] top-2 h-[55%] w-1 rounded-full bg-signal/60" />
          <div className="absolute bottom-2 left-[15px] h-[45%] w-1 border-l-4 border-dashed border-ink/25" />

          <div className="space-y-12">
            {aiJourney.stages.map((stage, i) => {
              const s = stateStyle[stage.state]
              return (
                <Reveal key={stage.title} delay={i * 0.08}>
                  <div className="relative pl-14">
                    <span
                      className={`absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border-[3px] ${s.roundel}`}
                    >
                      <span className={`h-2.5 w-2.5 rounded-full ${s.dot}`} />
                    </span>

                    <p className={`text-[10px] font-bold uppercase tracking-wideish ${s.tag}`}>
                      {s.label}
                    </p>
                    <h3 className="mt-1 font-heading text-2xl font-semibold text-ink">
                      {stage.title}
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {stage.items.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/75">
                          <span className="mt-[8px] h-[3px] w-3 shrink-0 rounded-full bg-ink/30" />
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
