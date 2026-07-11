'use client'

/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion'
import { journal } from '@/data/content'
import { Reveal, SectionHeading } from '@/components/ui'

function Butterfly({ className, delay }: { className: string; delay: number }) {
  return (
    <motion.div
      aria-hidden
      className={`absolute ${className}`}
      animate={{ y: [0, -14, 0], x: [0, 10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <svg width="30" height="24" viewBox="0 0 30 24">
        <g style={{ animation: `sway 1.4s ease-in-out ${delay}s infinite`, transformOrigin: 'center' }}>
          <ellipse cx="9" cy="9" rx="8" ry="7" fill="#E8A44E" opacity="0.85" />
          <ellipse cx="21" cy="9" rx="8" ry="7" fill="#D9814E" opacity="0.85" />
          <ellipse cx="10" cy="17" rx="5.5" ry="4.5" fill="#D9814E" opacity="0.75" />
          <ellipse cx="20" cy="17" rx="5.5" ry="4.5" fill="#E8A44E" opacity="0.75" />
          <rect x="14" y="4" width="2" height="17" rx="1" fill="#3E3227" />
        </g>
      </svg>
    </motion.div>
  )
}

const quickFacts = ['Mumbai, India', 'Backend Developer', 'Django & PostgreSQL', 'Learning ML', 'B.Sc. IT · 9.80 CGPA']

export default function About() {
  return (
    <section id="about" className="relative z-10 px-6 py-16 md:py-24">
      <Butterfly className="left-[8%] top-24 hidden md:block" delay={0} />
      <Butterfly className="right-[12%] top-64 hidden md:block" delay={2.4} />

      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="pages from an explorer's journal" title="The Story So Far" />

        <div className="grid gap-10 lg:grid-cols-[2fr,3fr] lg:gap-16">
          {/* the traveller — photo stays with you while the journal scrolls */}
          <div className="space-y-8 self-start lg:sticky lg:top-24">
            <Reveal>
              <figure className="paper group relative mx-auto max-w-sm rotate-[-2deg] rounded-sm p-4 pb-5 shadow-float transition-transform duration-700 hover:rotate-0 hover:scale-[1.02]">
                <span className="absolute -top-3 left-8 z-10 h-6 w-16 rotate-[3deg] bg-fern/25 backdrop-blur-[1px]" />
                <span className="absolute -top-3 right-8 z-10 h-6 w-16 rotate-[-4deg] bg-ember/25 backdrop-blur-[1px]" />
                <div className="overflow-hidden rounded-sm">
                  <img
                    src="/images/profile2.jpg"
                    alt="Laxmi Mehta"
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                  />
                </div>
                <figcaption className="mt-4 text-center font-hand text-2xl text-bark/80">
                  yours truly — Mumbai ☀
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="paper mx-auto max-w-sm rotate-[1.2deg] rounded-sm p-6 shadow-float transition-transform duration-700 hover:rotate-0">
                <p className="font-hand text-xl text-ember">a few quick facts</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {quickFacts.map((f) => (
                    <li
                      key={f}
                      className="rounded-full border border-bark/20 bg-ivory/70 px-3.5 py-1 text-xs text-bark/90"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* one long journal page, ruled like a real notebook */}
          <Reveal delay={0.1}>
            <div className="paper relative rounded-sm p-7 shadow-float md:p-10">
              {/* notebook margin line */}
              <span className="absolute bottom-6 left-7 top-6 w-px bg-ember/30 md:left-9" />
              {/* binder holes */}
              <span className="absolute -left-1.5 top-[15%] h-3 w-3 rounded-full border border-bark/20 bg-cream shadow-inner" />
              <span className="absolute -left-1.5 top-1/2 h-3 w-3 rounded-full border border-bark/20 bg-cream shadow-inner" />
              <span className="absolute -left-1.5 top-[85%] h-3 w-3 rounded-full border border-bark/20 bg-cream shadow-inner" />

              <div className="space-y-8 pl-6 md:pl-8">
                {journal.map((page, i) => (
                  <Reveal key={page.title} delay={0.05 * i} y={20}>
                    <div className={i > 0 ? 'border-t border-bark/10 pt-8' : ''}>
                      <div className="flex flex-wrap items-baseline gap-x-3">
                        <h3 className="font-heading text-xl font-medium text-soil md:text-2xl">
                          {page.title}
                        </h3>
                        <span className="font-hand text-lg text-ember/90">· {page.note}</span>
                      </div>
                      <p className="mt-2.5 leading-relaxed text-bark/90">{page.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
