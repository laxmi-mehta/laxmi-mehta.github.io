'use client'

import { aiJourney } from '@/data/content'
import { Reveal, SectionHeading } from '@/components/ui'

const stateStyle = {
  walked: {
    label: 'walked',
    dot: 'bg-lantern shadow-lantern',
    ring: 'border-lantern/60',
  },
  walking: {
    label: 'walking now',
    dot: 'bg-lantern shadow-lantern animate-pulse',
    ring: 'border-lantern',
  },
  ahead: {
    label: 'the road ahead',
    dot: 'bg-transparent',
    ring: 'border-moonsilver/40 border-dashed',
  },
} as const

export default function AIJourney() {
  return (
    <section id="ai-journey" className="relative z-10 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading light kicker="lanterns lit along a new road" title="The Road Into Machine Learning" />

        <Reveal>
          <p className="mx-auto max-w-xl text-center leading-relaxed text-moonsilver/80">
            {aiJourney.intro}
          </p>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-[15px] top-2 h-[calc(100%-16px)] w-px bg-gradient-to-b from-lantern/60 via-moonsilver/30 to-moonsilver/10" />

          <div className="space-y-12">
            {aiJourney.stages.map((stage, i) => {
              const s = stateStyle[stage.state]
              return (
                <Reveal key={stage.title} delay={i * 0.08}>
                  <div className="relative pl-14">
                    <span
                      className={`absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border ${s.ring} bg-midnight/60`}
                    >
                      <span className={`h-2.5 w-2.5 rounded-full ${s.dot}`} />
                    </span>

                    <p className="font-hand text-lg text-lantern/80">{s.label}</p>
                    <h3 className="mt-0.5 font-heading text-2xl font-medium text-moonsilver">
                      {stage.title}
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {stage.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-relaxed text-moonsilver/75"
                        >
                          <span className="mt-[7px] h-1 w-3 shrink-0 rounded-full bg-moonsilver/30" />
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
