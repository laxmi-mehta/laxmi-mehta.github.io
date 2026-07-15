'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'

function ThemeToggle() {
  const [dark, setDark] = useState(false)

  // sync with whatever the pre-paint script decided
  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.theme = next ? 'dark' : 'light'
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex h-8 w-8 items-center justify-center rounded-md border border-ink/20 text-ink/70 transition-colors hover:border-accent hover:text-accent"
    >
      {dark ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
        </svg>
      )}
    </button>
  )
}

const links = [
  { href: '#about', label: 'Profile' },
  { href: '#education', label: 'Education' },
  { href: '#journey', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        className="fixed inset-x-0 top-0 z-40 border-b border-ink/10 bg-paper/85 backdrop-blur-sm"
      >
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5">
          <a href="#top" className="font-heading text-lg font-semibold italic text-ink">
            Laxmi Mehta
          </a>

          <div className="hidden items-center gap-7 font-mono text-[11px] uppercase tracking-wideish text-mist md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-accent">
                {l.label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-8 w-8 flex-col items-center justify-center gap-[5px]"
            >
              <span className="h-[2px] w-5 bg-ink" />
              <span className="h-[2px] w-5 bg-ink" />
            </button>
          </div>
        </nav>

        {/* reading progress, one hairline of accent */}
        <motion.div
          className="h-[2px] origin-left bg-accent"
          style={{ scaleX: progress }}
        />
      </motion.header>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-7 bg-paper/97 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          >
            <button
              aria-label="Close menu"
              className="absolute right-6 top-5 font-heading text-3xl text-ink/70"
            >
              ×
            </button>
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i, duration: 0.4 }}
                className="font-heading text-2xl text-ink"
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
