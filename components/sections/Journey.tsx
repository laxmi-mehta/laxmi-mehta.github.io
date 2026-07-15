'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { milestones } from '@/data/content'
import { Marked, Reveal, SectionHeading } from '@/components/ui'

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.75', 'end 0.6'] })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="journey" className="relative z-10 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading code="03" kicker="experience" title="Experience" />

        <div ref={ref} className="relative pl-8 md:pl-10">
          {/* the timeline, drawn as you read */}
          <div className="absolute left-[5px] top-1 h-full w-px bg-ink/15" />
          <motion.div
            className="absolute left-[5px] top-1 w-px bg-accent"
            style={{ height: lineHeight }}
          />

          <div className="space-y-14">
            {milestones.map((m, i) => (
              <div key={m.marker} className="relative">
                {/* marker */}
                <span
                  className={`absolute -left-8 top-1.5 h-[11px] w-[11px] rounded-sm border-2 md:-left-10 ${
                    i === 0 ? 'border-accent bg-accent' : 'border-ink/40 bg-paper'
                  }`}
                />

                <Reveal delay={0.05}>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="annotation">{m.time}</p>
                    {i === 0 && (
                      <span className="rounded-sm bg-accent px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-paper">
                        current
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 font-heading text-2xl font-medium text-ink md:text-3xl">
                    {m.role}
                  </h3>
                  <p className="mt-0.5 font-mono text-xs text-mist">{m.place}</p>
                  <p className="mt-4 leading-relaxed text-ink/85">
                    <Marked text={m.summary} />
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {m.details.map((d) => (
                      <li key={d} className="flex gap-3 text-sm leading-relaxed text-ink/75">
                        <span className="mt-[9px] h-px w-4 shrink-0 bg-accent/60" />
                        <span>
                          <Marked text={d} />
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 border-l-2 border-ink/15 pl-4 font-heading text-base italic text-ink/60">
                    {m.lesson}
                  </p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
