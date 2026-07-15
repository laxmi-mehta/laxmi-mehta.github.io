'use client'

/* eslint-disable @next/next/no-img-element */
import { aboutMe, profile } from '@/data/content'
import { Marked, Reveal, SectionHeading } from '@/components/ui'

const quickFacts = ['Mumbai, India', 'Backend Developer', 'Django & PostgreSQL', 'Learning ML', 'B.Sc. IT · 9.80 CGPA']

export default function About() {
  return (
    <section id="about" className="relative z-10 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading code="01" kicker="first stop after departure" title="The Story So Far" />

        <div className="grid gap-10 lg:grid-cols-[2fr,3fr] lg:gap-16">
          {/* the traveller — photo stays with you while the journal scrolls */}
          <div className="space-y-8 self-start lg:sticky lg:top-24">
            <Reveal>
              <figure className="paper group relative mx-auto max-w-sm rotate-[-2deg] rounded-sm p-4 pb-5 shadow-float transition-transform duration-700 hover:rotate-0 hover:scale-[1.02]">
                <span className="absolute -top-3 left-8 z-10 h-6 w-16 rotate-[3deg] bg-board/60 backdrop-blur-[1px]" />
                <span className="absolute -top-3 right-8 z-10 h-6 w-16 rotate-[-4deg] bg-rail/30 backdrop-blur-[1px]" />
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                  />
                </div>
                <figcaption className="mt-4 text-center font-hand text-2xl text-ink/75">
                  yours truly — window seat, always
                </figcaption>
              </figure>
            </Reveal>

            {/* quick facts, tied on like luggage tags */}
            <Reveal delay={0.15}>
              <div className="ticket-card mx-auto max-w-sm rotate-[1.2deg] rounded-sm p-6 transition-transform duration-700 hover:rotate-0">
                <p className="font-hand text-xl text-chai">luggage tags</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {quickFacts.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-1.5 rounded-sm border border-ink/30 bg-cream px-3 py-1 text-xs font-medium text-ink/85"
                    >
                      <span className="h-1.5 w-1.5 rounded-full border border-ink/50" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* a single about-me page, ruled like a real notebook */}
          <Reveal delay={0.1}>
            <div className="paper relative rounded-sm p-7 shadow-float md:p-10">
              {/* notebook margin line */}
              <span className="absolute bottom-6 left-7 top-6 w-px bg-rail/40 md:left-9" />
              {/* binder holes */}
              <span className="absolute -left-1.5 top-[15%] h-3 w-3 rounded-full border border-ink/25 bg-cream shadow-inner" />
              <span className="absolute -left-1.5 top-1/2 h-3 w-3 rounded-full border border-ink/25 bg-cream shadow-inner" />
              <span className="absolute -left-1.5 top-[85%] h-3 w-3 rounded-full border border-ink/25 bg-cream shadow-inner" />

              <div className="pl-6 md:pl-8">
                <p className="font-hand text-xl text-chai">about me</p>
                <h3 className="mt-1 font-heading text-2xl font-medium text-ink md:text-3xl">
                  Who I am
                </h3>
                <div className="mt-3 h-px w-12 bg-ink/25" />

                <div className="mt-6 space-y-5">
                  {aboutMe.map((para, i) => (
                    <Reveal key={i} delay={0.08 * i} y={16}>
                      <p className="leading-relaxed text-ink/85 md:text-[17px]">
                        <Marked text={para} />
                      </p>
                    </Reveal>
                  ))}
                </div>

                <Reveal delay={0.4} y={12}>
                  <p className="mt-8 text-right font-hand text-3xl text-ink/70">
                    — {profile.name.split(' ')[0]}
                  </p>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
