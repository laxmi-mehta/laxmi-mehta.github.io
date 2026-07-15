'use client'

import { skillGroups } from '@/data/content'
import { Reveal, SectionHeading } from '@/components/ui'

// the big dark departures board every platform has
export default function Skills() {
  return (
    <section id="skills" className="relative z-10 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading code="04" kicker="now boarding from all platforms" title="Departures — Skills" />

        <Reveal>
          <div className="indicator-board overflow-hidden rounded-lg">
            {/* board header */}
            <div className="flex items-center justify-between border-b border-cream/15 px-5 py-3 md:px-8">
              <p className="text-[11px] font-bold uppercase tracking-wideish text-cream/60">
                platform · line · stops
              </p>
              <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wideish text-signal">
                <span
                  className="h-2 w-2 rounded-full bg-signal"
                  style={{ animation: 'blink 2s ease-in-out infinite' }}
                />
                all lines running
              </span>
            </div>

            {skillGroups.map((group, i) => (
              <div
                key={group.title}
                className="group grid grid-cols-[64px,1fr] items-start gap-4 border-b border-cream/10 px-5 py-5 transition-colors last:border-b-0 hover:bg-cream/5 md:grid-cols-[90px,220px,1fr] md:px-8"
              >
                {/* platform number */}
                <div className="flex h-12 w-12 items-center justify-center rounded-md border-2 border-board/70 text-lg font-bold text-board md:h-14 md:w-14">
                  {i + 1}
                </div>

                {/* line name */}
                <div>
                  <p className="font-heading text-lg font-semibold text-cream md:text-xl">
                    {group.title}
                  </p>
                  <p className="font-hand text-lg text-board/80">{group.caption}</p>
                </div>

                {/* stops */}
                <ul className="col-span-2 flex flex-wrap gap-2 md:col-span-1 md:pt-1">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="cursor-default rounded-sm border border-cream/25 px-3 py-1 text-xs font-medium uppercase tracking-wide text-cream/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-board hover:text-board"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
