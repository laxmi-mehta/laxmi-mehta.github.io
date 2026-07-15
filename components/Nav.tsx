'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { href: '#about', label: 'Story' },
  { href: '#education', label: 'Education' },
  { href: '#journey', label: 'Journey' },
  { href: '#skills', label: 'Skills' },
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
        transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
        className="fixed inset-x-0 top-0 z-40 border-b-2 border-ink/15 bg-cream/85 backdrop-blur-sm"
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          {/* tiny station badge as the logo */}
          <a href="#top" className="flex items-center gap-2">
            <span className="rounded-md border-2 border-ink bg-board px-2.5 py-1 text-xs font-bold tracking-wideish text-ink">
              LM
            </span>
            <span className="font-hand text-xl text-ink/80">local line</span>
          </a>

          <div className="hidden items-center gap-7 text-[11px] font-bold uppercase tracking-wideish text-ink/70 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-rail">
                {l.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span className="h-[2px] w-5 bg-ink" />
            <span className="h-[2px] w-5 bg-ink" />
          </button>
        </nav>
      </motion.header>

      {/* mobile menu — the indicator board drops down */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="indicator-board fixed inset-0 z-50 flex flex-col items-center justify-center gap-7 md:hidden"
            onClick={() => setOpen(false)}
          >
            <button
              aria-label="Close menu"
              className="absolute right-6 top-5 font-hand text-3xl text-board"
            >
              ×
            </button>
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.07 * i, duration: 0.45 }}
                className="text-lg font-bold uppercase tracking-wideish text-board"
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
