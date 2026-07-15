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
      <div className="mx-auto max-w-5xl">
        <SectionHeading code="03" kicker="stations on the main line" title="The Journey" />

        <div ref={ref} className="relative">
          {/* the line — laid as you travel */}
          <div className="absolute left-6 top-0 h-full w-1 rounded-full bg-ink/15 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            className="absolute left-6 top-0 w-1 rounded-full bg-signal md:left-1/2 md:-translate-x-1/2"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12 md:space-y-16">
            {milestones.map((m, i) => (
              <div
                key={m.marker}
                className={`relative flex flex-col gap-6 pl-16 md:pl-0 ${
                  i % 2 ? 'md:flex-row-reverse' : 'md:flex-row'
                } md:items-center md:gap-0`}
              >
                {/* station roundel */}
                <div className="absolute left-6 top-1 z-10 -translate-x-1/2 md:left-1/2 md:top-1/2 md:-translate-y-1/2">
                  <Reveal y={0}>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-ink bg-cream shadow-board">
                      <span className="h-3.5 w-3.5 rounded-full bg-rail" />
                    </div>
                  </Reveal>
                </div>

                <div className={`md:w-1/2 ${i % 2 ? 'md:pl-16' : 'md:pr-16'}`}>
                  <Reveal delay={0.1}>
                    <article className="paper relative rounded-sm shadow-float">
                      {/* mini station board as the card header */}
                      <div className="flex items-center justify-between gap-3 rounded-t-sm border-b-2 border-ink/70 bg-board px-6 py-2.5">
                        <p className="text-[10px] font-bold uppercase tracking-wideish text-ink/80">
                          {m.time}
                        </p>
                        {i === 0 && (
                          <p
                            className="rounded-sm bg-rail px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-cream"
                            style={{ animation: 'blink 2.6s ease-in-out infinite' }}
                          >
                            you are here
                          </p>
                        )}
                      </div>

                      <div className="p-7 md:p-8">
                        <h3 className="font-heading text-2xl font-semibold text-ink md:text-3xl">
                          {m.role}
                        </h3>
                        <p className="mt-1 font-hand text-xl text-ink/65">{m.place}</p>
                        <p className="mt-4 leading-relaxed text-ink/85">
                          <Marked text={m.summary} />
                        </p>
                        <ul className="mt-5 space-y-2.5">
                          {m.details.map((d) => (
                            <li key={d} className="flex gap-3 text-sm leading-relaxed text-ink/80">
                              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-rail/70" />
                              <span>
                                <Marked text={d} />
                              </span>
                            </li>
                          ))}
                        </ul>
                        <p className="mt-6 border-t border-dashed border-ink/25 pt-4 font-hand text-xl leading-snug text-chai">
                          “{m.lesson}”
                        </p>
                      </div>
                    </article>
                  </Reveal>
                </div>

                {/* empty half keeps the alternating rhythm */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
