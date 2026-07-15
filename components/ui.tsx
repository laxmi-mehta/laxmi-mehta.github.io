'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

// renders text with **term** markers as highlighted words
export function Marked({ text, accent = 'text-accent' }: { text: string; accent?: string }) {
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
  y = 28,
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
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

// editorial section header: figure number, title, hairline
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
    <div className="mb-12 md:mb-16">
      <Reveal>
        <p className="annotation">
          fig. {code} — {kicker}
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-3 font-heading text-4xl font-medium tracking-tight text-ink md:text-5xl">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <div className="mt-6 h-px w-full bg-ink/15" />
      </Reveal>
    </div>
  )
}
