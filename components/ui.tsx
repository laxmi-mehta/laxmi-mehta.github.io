'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

// renders text with **term** markers as highlighted words
export function Marked({ text, accent = 'text-ember' }: { text: string; accent?: string }) {
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

export function SectionHeading({
  kicker,
  title,
  light = false,
}: {
  kicker: string
  title: string
  light?: boolean
}) {
  return (
    <div className="mb-10 text-center md:mb-14">
      <Reveal>
        <p
          className={`font-hand text-2xl md:text-3xl ${light ? 'text-lantern/90' : 'text-ember'}`}
        >
          {kicker}
        </p>
      </Reveal>
      <Reveal delay={0.15}>
        <h2
          className={`mt-2 font-heading text-4xl font-light tracking-tight md:text-6xl ${
            light ? 'text-moonsilver' : 'text-soil'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      <Reveal delay={0.3}>
        <div
          className={`mx-auto mt-6 h-px w-24 ${light ? 'bg-moonsilver/30' : 'bg-bark/30'}`}
        />
      </Reveal>
    </div>
  )
}
