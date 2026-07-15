'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const stations = [
  { id: '#top', label: 'Home' },
  { id: '#about', label: 'Story' },
  { id: '#education', label: 'Education' },
  { id: '#journey', label: 'Journey' },
  { id: '#skills', label: 'Skills' },
  { id: '#projects', label: 'Work' },
  { id: '#ai-journey', label: 'ML Line' },
  { id: '#contact', label: 'Contact' },
]

// a little local train rides down the left edge as you scroll
export default function RouteRail() {
  const { scrollYProgress } = useScroll()
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 30 })
  const trainTop = useTransform(p, [0, 1], ['0%', '96%'])

  return (
    <div className="fixed left-5 top-1/2 z-40 hidden h-[58vh] -translate-y-1/2 lg:block">
      <div className="relative h-full w-8">
        {/* the line */}
        <span className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 rounded-full bg-ink/20" />

        {/* stations */}
        {stations.map((s, i) => (
          <a
            key={s.id}
            href={s.id}
            title={s.label}
            className="group absolute left-1/2 -translate-x-1/2"
            style={{ top: `${(i / (stations.length - 1)) * 96}%` }}
          >
            <span className="block h-3 w-3 rounded-full border-2 border-ink bg-cream transition-colors group-hover:bg-board" />
            <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-sm bg-ink px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wideish text-board opacity-0 transition-opacity group-hover:opacity-100">
              {s.label}
            </span>
          </a>
        ))}

        {/* the train marker */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top: trainTop }}
          aria-hidden
        >
          <svg width="18" height="26" viewBox="0 0 18 26">
            <rect x="1" y="1" width="16" height="22" rx="4" fill="#B3402F" stroke="#1C2433" strokeWidth="1.5" />
            <rect x="4" y="5" width="10" height="6" rx="1.5" fill="#F4B942" />
            <circle cx="6" cy="18" r="1.6" fill="#F6F1E6" />
            <circle cx="12" cy="18" r="1.6" fill="#F6F1E6" />
          </svg>
        </motion.div>
      </div>
    </div>
  )
}
