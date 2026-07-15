'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { profile } from '@/data/content'

// signal post beside the platform — green means go
function Signal({ className }: { className: string }) {
  return (
    <div aria-hidden className={`absolute ${className}`}>
      <svg width="34" height="120" viewBox="0 0 34 120">
        <rect x="14" y="26" width="5" height="94" rx="2" fill="#5E6A7D" />
        <rect x="6" y="2" width="22" height="34" rx="6" fill="#1C2433" />
        <circle cx="17" cy="12" r="5" fill="#B3402F" opacity="0.35" />
        <circle cx="17" cy="26" r="5" fill="#2E8F5B" style={{ animation: 'blink 2.4s ease-in-out infinite' }} />
      </svg>
    </div>
  )
}

// a small mumbai local, parked and humming at the platform
function LocalTrain() {
  return (
    <div aria-hidden className="relative mx-auto w-full max-w-3xl" style={{ animation: 'chug 2.8s ease-in-out infinite' }}>
      <svg viewBox="0 0 760 120" className="block w-full">
        {/* pantograph */}
        <path d="M120 26 L138 8 L156 26" stroke="#5E6A7D" strokeWidth="3" fill="none" />
        <line x1="0" y1="6" x2="760" y2="6" stroke="#5E6A7D" strokeWidth="2" opacity="0.5" />
        {/* engine coach */}
        <g>
          <path d="M20 40 Q20 26 40 26 L240 26 Q252 26 252 40 L252 96 L20 96 Z" fill="#B3402F" stroke="#1C2433" strokeWidth="3" />
          <rect x="34" y="38" width="200" height="22" rx="5" fill="#F4B942" stroke="#1C2433" strokeWidth="2" />
          <rect x="44" y="42" width="26" height="14" rx="2" fill="#1C2433" />
          <rect x="82" y="42" width="26" height="14" rx="2" fill="#1C2433" />
          <rect x="120" y="42" width="26" height="14" rx="2" fill="#1C2433" />
          <rect x="158" y="42" width="26" height="14" rx="2" fill="#1C2433" />
          <rect x="196" y="42" width="26" height="14" rx="2" fill="#1C2433" />
          <rect x="34" y="68" width="204" height="6" rx="3" fill="#F6F1E6" opacity="0.7" />
          <circle cx="60" cy="96" r="11" fill="#1C2433" />
          <circle cx="60" cy="96" r="4" fill="#5E6A7D" />
          <circle cx="200" cy="96" r="11" fill="#1C2433" />
          <circle cx="200" cy="96" r="4" fill="#5E6A7D" />
        </g>
        {/* second coach */}
        <g>
          <rect x="262" y="26" width="232" height="70" rx="10" fill="#B3402F" stroke="#1C2433" strokeWidth="3" />
          <rect x="276" y="38" width="204" height="22" rx="5" fill="#F4B942" stroke="#1C2433" strokeWidth="2" />
          <rect x="286" y="42" width="26" height="14" rx="2" fill="#1C2433" />
          <rect x="324" y="42" width="26" height="14" rx="2" fill="#1C2433" />
          <rect x="362" y="42" width="26" height="14" rx="2" fill="#1C2433" />
          <rect x="400" y="42" width="26" height="14" rx="2" fill="#1C2433" />
          <rect x="438" y="42" width="26" height="14" rx="2" fill="#1C2433" />
          <rect x="276" y="68" width="204" height="6" rx="3" fill="#F6F1E6" opacity="0.7" />
          <circle cx="302" cy="96" r="11" fill="#1C2433" />
          <circle cx="302" cy="96" r="4" fill="#5E6A7D" />
          <circle cx="442" cy="96" r="11" fill="#1C2433" />
          <circle cx="442" cy="96" r="4" fill="#5E6A7D" />
        </g>
        {/* third coach, trailing off */}
        <g opacity="0.9">
          <path d="M504 26 L716 26 Q736 26 736 44 L736 96 L504 96 Z" fill="#B3402F" stroke="#1C2433" strokeWidth="3" />
          <rect x="518" y="38" width="196" height="22" rx="5" fill="#F4B942" stroke="#1C2433" strokeWidth="2" />
          <rect x="528" y="42" width="26" height="14" rx="2" fill="#1C2433" />
          <rect x="566" y="42" width="26" height="14" rx="2" fill="#1C2433" />
          <rect x="604" y="42" width="26" height="14" rx="2" fill="#1C2433" />
          <rect x="642" y="42" width="26" height="14" rx="2" fill="#1C2433" />
          <rect x="518" y="68" width="200" height="6" rx="3" fill="#F6F1E6" opacity="0.7" />
          <circle cx="544" cy="96" r="11" fill="#1C2433" />
          <circle cx="544" cy="96" r="4" fill="#5E6A7D" />
          <circle cx="684" cy="96" r="11" fill="#1C2433" />
          <circle cx="684" cy="96" r="4" fill="#5E6A7D" />
        </g>
      </svg>
      {/* the track it rests on */}
      <div className="track mt-1 w-full opacity-60" />
    </div>
  )
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)

  // the arrival board flips to the next role every few seconds
  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % profile.roles.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="top" className="relative flex min-h-screen flex-col overflow-hidden px-6 pb-10 pt-28">
      <Signal className="left-[7%] top-40 hidden xl:block" />
      <Signal className="right-[7%] top-64 hidden xl:block" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-hand text-2xl text-chai md:text-3xl"
        >
          welcome aboard the local line —
        </motion.p>

        {/* the big yellow station board */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="station-board mt-6 w-full max-w-2xl rounded-xl px-6 py-7 md:px-10 md:py-9"
        >
          <h1 className="font-heading text-4xl font-bold uppercase tracking-wide text-ink sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-1 text-xl text-ink/85 md:text-2xl">{profile.nameHindi}</p>
          <div className="mx-auto mt-4 h-[3px] w-40 rounded-full bg-ink/70" />
          <p className="mt-3 text-[11px] font-bold uppercase tracking-wideish text-ink/75 md:text-xs">
            platform 1 · {profile.location}
          </p>
        </motion.div>

        {/* next-train indicator */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="indicator-board mt-6 flex w-full max-w-2xl items-center gap-4 rounded-lg px-5 py-3.5 text-left md:px-7"
        >
          <span
            className="h-2.5 w-2.5 shrink-0 rounded-full bg-signal"
            style={{ animation: 'blink 1.8s ease-in-out infinite' }}
          />
          <p className="text-xs font-bold uppercase tracking-wideish text-cream/60 md:text-sm">
            now arriving
          </p>
          <div className="relative min-w-0 flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={profile.roles[roleIdx]}
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -18, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="truncate text-sm font-bold uppercase tracking-wider text-board md:text-lg"
              >
                {profile.roles[roleIdx]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95 }}
          className="mt-6 text-base font-medium text-ink/85 md:text-lg"
        >
          at <span className="font-bold text-rail">{profile.company}</span>
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="mt-3 font-heading text-2xl font-light italic leading-snug text-ink/90 md:text-3xl"
        >
          {profile.headline[0]} {profile.headline[1]}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.25 }}
          className="mt-4 max-w-xl text-sm leading-relaxed text-ink/70 md:text-base"
        >
          {profile.subheading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#journey"
            className="rounded-md border-2 border-ink bg-board px-7 py-3 text-sm font-bold uppercase tracking-wider text-ink shadow-board transition-transform duration-300 hover:-translate-y-1"
          >
            Begin the Journey
          </a>
          <a
            href={profile.resume}
            download
            className="rounded-md border-2 border-ink/50 bg-cream px-7 py-3 text-sm font-bold uppercase tracking-wider text-ink/80 transition-all duration-300 hover:-translate-y-1 hover:border-ink"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* the train waiting at the platform below */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mt-10"
      >
        <LocalTrain />
      </motion.div>

      {/* departure cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="relative z-10 mt-6 text-center"
      >
        <p className="font-hand text-xl text-chai">doors closing — scroll to depart</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="mx-auto mt-1 h-8 w-px bg-gradient-to-b from-ink/60 to-transparent"
        />
      </motion.div>
    </section>
  )
}
