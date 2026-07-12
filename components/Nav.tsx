'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { href: '#about', label: 'Story' },
  { href: '#education', label: 'Education' },
  { href: '#journey', label: 'Journey' },
  { href: '#skills', label: 'Craft' },
  { href: '#projects', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.2, ease: 'easeOut' }}
        className="pointer-events-none fixed inset-x-0 top-0 z-40 mix-blend-difference"
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-white">
          <a href="#top" className="pointer-events-auto font-hand text-2xl">
            Laxmi
          </a>
          <div className="pointer-events-auto hidden items-center gap-7 text-[11px] font-medium uppercase tracking-wideish md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="opacity-80 transition-opacity hover:opacity-100">
                {l.label}
              </a>
            ))}
          </div>
          <div className="pointer-events-auto flex items-center md:hidden">
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-8 w-8 flex-col items-center justify-center gap-[5px]"
            >
              <span className="h-px w-5 bg-white" />
              <span className="h-px w-5 bg-white" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* mobile menu — a quiet night panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-7 bg-deepnight/95 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          >
            <button
              aria-label="Close menu"
              className="absolute right-6 top-6 font-hand text-3xl text-moonsilver/80"
            >
              ×
            </button>
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.5 }}
                className="font-heading text-2xl text-moonsilver"
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
