'use client'

import { skillGroups } from '@/data/content'
import { Reveal, SectionHeading } from '@/components/ui'

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading light kicker="carved into the workshop wall" title="The Craft" />

        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.18}>
              <div className="group relative h-full transition-transform duration-700 hover:-translate-y-2">
                {/* ropes the board hangs from */}
                <div className="absolute -top-8 left-[22%] h-8 w-0.5 bg-moonsilver/25" />
                <div className="absolute -top-8 right-[22%] h-8 w-0.5 bg-moonsilver/25" />

                <div
                  className="wood h-full rounded-lg p-8 shadow-float"
                  style={{ animation: `sway ${9 + i * 2}s ease-in-out ${i * 1.4}s infinite`, transformOrigin: 'top center' }}
                >
                  {/* nails */}
                  <span className="absolute left-[20%] top-3 h-2 w-2 rounded-full bg-soil/70 shadow-inner" />
                  <span className="absolute right-[20%] top-3 h-2 w-2 rounded-full bg-soil/70 shadow-inner" />

                  <p className="font-hand text-xl text-lantern/90">{group.caption}</p>
                  <h3 className="mt-1 font-heading text-3xl font-medium text-ivory">{group.title}</h3>
                  <div className="mt-4 h-px w-12 bg-ivory/25 transition-all duration-700 group-hover:w-20" />

                  <ul className="mt-6 flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="cursor-default rounded-full border border-ivory/20 bg-soil/30 px-4 py-1.5 text-sm text-cream transition-all duration-500 hover:-translate-y-1 hover:border-lantern/60 hover:bg-soil/50 hover:text-lantern hover:shadow-lantern"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
