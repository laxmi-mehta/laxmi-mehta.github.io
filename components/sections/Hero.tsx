'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { heroStats, profile } from '@/data/content'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % profile.roles.length), 2600)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="top" className="relative px-6 pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="mx-auto max-w-5xl">
        <motion.p {...fadeUp(0.1)} className="annotation">
          fig. 00 — introduction · {profile.location}
        </motion.p>

        <motion.h1
          {...fadeUp(0.25)}
          className="mt-5 font-heading text-5xl font-medium tracking-tight text-ink sm:text-6xl md:text-7xl"
        >
          {profile.name}
        </motion.h1>

        {/* what I am, in a terminal line */}
        <motion.div {...fadeUp(0.4)} className="mt-5 flex items-baseline gap-2 font-mono text-sm text-mist md:text-base">
          <span className="text-accent">$</span>
          <span>whoami</span>
          <span className="text-ink/30">→</span>
          <span className="relative inline-flex min-w-[16ch]">
            <AnimatePresence mode="wait">
              <motion.span
                key={profile.roles[roleIdx]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="whitespace-nowrap font-semibold text-ink"
              >
                {profile.roles[roleIdx]}
              </motion.span>
            </AnimatePresence>
            <span
              className="ml-0.5 inline-block h-4 w-[7px] self-center bg-accent"
              style={{ animation: 'blink 1.1s step-end infinite' }}
            />
          </span>
        </motion.div>

        <motion.h2
          {...fadeUp(0.55)}
          className="mt-7 max-w-2xl font-heading text-2xl font-light italic leading-snug text-ink/85 md:text-3xl"
        >
          {profile.headline[0]} {profile.headline[1]}
        </motion.h2>

        <motion.p {...fadeUp(0.7)} className="mt-5 max-w-xl leading-relaxed text-ink/70">
          Backend Developer at <span className="font-semibold text-accent">{profile.company}</span>,
          building the systems behind India&rsquo;s most-used dairy platform — and studying machine
          learning with the same discipline, one model at a time.
        </motion.p>

        {/* the eight-second numbers */}
        <motion.div {...fadeUp(0.85)} className="mt-10 grid max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-md border border-ink/15 bg-ink/15 sm:grid-cols-3">
          {heroStats.map((s) => (
            <div key={s.label} className="bg-paper px-5 py-4">
              <p className="font-heading text-3xl font-semibold text-accent">{s.value}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-mist">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div {...fadeUp(1)} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-md bg-ink px-7 py-3 text-sm font-semibold text-paper transition-transform duration-300 hover:-translate-y-0.5"
          >
            View Selected Work
          </a>
          <a
            href={profile.resume}
            download
            className="rounded-md border border-ink/30 px-7 py-3 text-sm font-semibold text-ink/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink"
          >
            Download Resume
          </a>
          <div className="flex items-center gap-5 font-mono text-xs text-mist">
            <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
              github ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
              linkedin ↗
            </a>
            <a href={`mailto:${profile.email}`} className="transition-colors hover:text-accent">
              email ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
