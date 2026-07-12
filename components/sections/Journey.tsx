'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { milestones } from '@/data/content'
import { Marked, Reveal, SectionHeading } from '@/components/ui'

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.75', 'end 0.6'] })
  const pathHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="journey" className="relative z-10 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading kicker="a trail through the golden hours" title="The Journey" />

        <div ref={ref} className="relative">
          {/* the trail itself — drawn as you walk */}
          <div className="absolute left-6 top-0 h-full w-px bg-bark/20 md:left-1/2" />
          <motion.div
            className="absolute left-6 top-0 w-px bg-gradient-to-b from-ember via-rosedusk to-lantern md:left-1/2"
            style={{ height: pathHeight }}
          />

          <div className="space-y-12 md:space-y-16">
            {milestones.map((m, i) => (
              <div
                key={m.marker}
                className={`relative flex flex-col gap-6 pl-16 md:pl-0 ${
                  i % 2 ? 'md:flex-row-reverse' : 'md:flex-row'
                } md:items-center md:gap-0`}
              >
                {/* trail marker */}
                <div className="absolute left-6 top-1 z-10 -translate-x-1/2 md:left-1/2 md:top-1/2 md:-translate-y-1/2">
                  <Reveal y={0}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-ember/50 bg-ivory font-heading text-lg text-ember shadow-lantern">
                      {m.marker}
                    </div>
                  </Reveal>
                </div>

                <div className={`md:w-1/2 ${i % 2 ? 'md:pl-16' : 'md:pr-16'}`}>
                  <Reveal delay={0.1}>
                    <article className="paper rounded-sm p-8 shadow-float">
                      <p className="text-[11px] font-semibold uppercase tracking-wideish text-ember">
                        {m.time}
                      </p>
                      <h3 className="mt-2 font-heading text-2xl font-medium text-soil md:text-3xl">
                        {m.role}
                      </h3>
                      <p className="mt-1 font-hand text-xl text-bark/70">{m.place}</p>
                      <p className="mt-4 leading-relaxed text-bark/90">
                        <Marked text={m.summary} />
                      </p>
                      <ul className="mt-5 space-y-2.5">
                        {m.details.map((d) => (
                          <li key={d} className="flex gap-3 text-sm leading-relaxed text-bark/85">
                            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-ember/70" />
                            <span>
                              <Marked text={d} />
                            </span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-6 border-t border-bark/15 pt-4 font-hand text-xl leading-snug text-fern">
                        “{m.lesson}”
                      </p>
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
