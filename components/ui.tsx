'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

// renders text with **term** markers as highlighted words
export function Marked({ text, accent = 'text-rail' }: { text: string; accent?: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 ? (
          <strong key={i} className={`font-semibold ${accent}`}>
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  )
}

export function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

// every section begins at a station — yellow enamel board, station code and all
export function SectionHeading({
  code,
  kicker,
  title,
}: {
  code: string
  kicker: string
  title: string
}) {
  return (
    <div className="mb-12 text-center md:mb-16">
      <Reveal>
        <p className="font-hand text-2xl text-chai md:text-3xl">{kicker}</p>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="station-board mx-auto mt-4 inline-block rounded-lg px-8 py-4 md:px-12 md:py-5">
          <p className="text-[10px] font-bold uppercase tracking-wideish text-ink/70">
            station {code}
          </p>
          <h2 className="mt-1 font-heading text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            {title}
          </h2>
        </div>
      </Reveal>
      <Reveal delay={0.3}>
        <div className="track mx-auto mt-6 w-40 opacity-40" />
      </Reveal>
    </div>
  )
}
