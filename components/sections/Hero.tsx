'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { profile } from '@/data/content'

const nameLetters = profile.name.split('')

function Flower({ left, height, color, delay }: { left: string; height: number; color: string; delay: number }) {
  return (
    <div
      className="absolute bottom-0 origin-bottom"
      style={{ left, animation: `sway ${5 + delay}s ease-in-out ${delay}s infinite` }}
    >
      <svg width="26" height={height} viewBox={`0 0 26 ${height}`} fill="none">
        <path d={`M13 ${height} Q 10 ${height * 0.5} 13 14`} stroke="#4C5F44" strokeWidth="2" fill="none" />
        <g>
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <ellipse
              key={a}
              cx="13"
              cy="8"
              rx="4.6"
              ry="7"
              fill={color}
              transform={`rotate(${a} 13 12)`}
              opacity="0.9"
            />
          ))}
          <circle cx="13" cy="12" r="3.4" fill="#E9B449" />
        </g>
      </svg>
    </div>
  )
}

function GrassBlade({ left, height, delay, dark }: { left: string; height: number; delay: number; dark?: boolean }) {
  return (
    <div
      className="absolute bottom-0 origin-bottom"
      style={{ left, animation: `swayHard ${4 + delay}s ease-in-out ${delay}s infinite` }}
    >
      <svg width="14" height={height} viewBox={`0 0 14 ${height}`}>
        <path
          d={`M7 ${height} C 3 ${height * 0.55}, 11 ${height * 0.4}, 6 0`}
          stroke={dark ? '#3d4f37' : '#5a7048'}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  )
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const [roleIdx, setRoleIdx] = useState(0)

  // cycle through the profiles, one every few seconds
  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % profile.roles.length), 2800)
    return () => clearInterval(t)
  }, [])

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const farY = useTransform(scrollYProgress, [0, 1], [0, 130])
  const midY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const fgY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 160])
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} id="top" className="relative flex min-h-screen flex-col overflow-hidden">
      {/* birds greeting the morning */}
      <div aria-hidden className="pointer-events-none absolute left-0 top-[16%] w-full">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute w-full"
            style={{ top: i * 30, animation: `drift ${44 + i * 12}s linear ${-i * 17}s infinite` }}
          >
            <svg
              width="26"
              height="10"
              viewBox="0 0 26 10"
              fill="none"
              stroke="#5C4A38"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.45"
              style={{ animation: `floaty ${3 + i}s ease-in-out infinite` }}
            >
              <path d="M1 8 Q 7 1 13 8" />
              <path d="M13 8 Q 19 1 25 8" />
            </svg>
          </div>
        ))}
      </div>

      {/* a wide, soft sunrise halo behind the headline */}
      <div
        aria-hidden
        className="absolute left-1/2 top-[26%] h-[560px] w-[560px] -translate-x-1/2 rounded-full md:h-[720px] md:w-[720px]"
        style={{
          background:
            'radial-gradient(circle, rgba(255,236,190,0.55) 0%, rgba(255,224,166,0.28) 40%, rgba(255,214,140,0) 70%)',
          animation: 'lanternGlow 9s ease-in-out infinite',
        }}
      />

      {/* sharp peaks rising above the cloud sea */}
      <motion.svg
        viewBox="0 0 1440 420"
        preserveAspectRatio="xMidYMax slice"
        className="absolute bottom-24 left-0 w-full md:bottom-16"
        style={{ y: farY }}
      >
        <path
          d="M0 420 L0 260 L120 170 L210 240 L330 90 L440 210 L520 160 L640 250 L760 60 L880 220 L980 140 L1100 260 L1200 120 L1320 230 L1440 180 L1440 420 Z"
          fill="#A9A0C6"
          opacity="0.45"
        />
        <path
          d="M0 420 L0 330 L160 250 L280 320 L420 180 L560 310 L700 240 L840 330 L980 200 L1120 320 L1260 260 L1440 340 L1440 420 Z"
          fill="#C79AA6"
          opacity="0.5"
        />
      </motion.svg>

      {/* the sea of clouds the peaks float in */}
      <motion.div
        aria-hidden
        className="absolute bottom-14 left-0 h-32 w-full md:bottom-8"
        style={{ y: midY }}
      >
        {[
          { top: 0, width: '70%', speed: 210, delay: -40, opacity: 0.5 },
          { top: 26, width: '85%', speed: 160, delay: -110, opacity: 0.65 },
          { top: 52, width: '75%', speed: 185, delay: -20, opacity: 0.75 },
          { top: 76, width: '90%', speed: 140, delay: -90, opacity: 0.85 },
        ].map((band, i) => (
          <div
            key={i}
            className="absolute left-0 w-full"
            style={{ top: band.top, animation: `drift ${band.speed}s linear ${band.delay}s infinite` }}
          >
            <div
              className="h-10 rounded-full bg-gradient-to-r from-white/0 via-white to-white/0 blur-xl md:h-12"
              style={{ width: band.width, opacity: band.opacity }}
            />
          </div>
        ))}
      </motion.div>

      {/* mid rolling hills with quiet trees */}
      <motion.svg
        viewBox="0 0 1440 260"
        preserveAspectRatio="xMidYMax slice"
        className="absolute bottom-8 left-0 w-full"
        style={{ y: midY }}
      >
        <path
          d="M0 260 L0 160 Q 220 80 460 140 Q 700 190 930 120 Q 1180 60 1440 150 L1440 260 Z"
          fill="#8C9A68"
          opacity="0.95"
        />
        {/* small handcrafted trees along the ridge */}
        {[
          { x: 170, s: 1 },
          { x: 350, s: 0.8 },
          { x: 980, s: 1.1 },
          { x: 1120, s: 0.75 },
        ].map((t, i) => (
          <g key={i} transform={`translate(${t.x} ${i % 2 ? 118 : 108}) scale(${t.s})`}>
            <rect x="-3" y="18" width="6" height="18" rx="2" fill="#5C4A38" />
            <ellipse cx="0" cy="6" rx="20" ry="22" fill="#55673F" />
            <ellipse cx="-12" cy="14" rx="12" ry="13" fill="#4C5F44" />
            <ellipse cx="13" cy="13" rx="13" ry="14" fill="#5E7248" />
          </g>
        ))}
      </motion.svg>

      {/* morning mist */}
      <div className="pointer-events-none absolute bottom-10 left-0 h-40 w-full overflow-hidden">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute h-16 w-[55%] rounded-full bg-white/40 blur-2xl"
            style={{
              top: `${i * 28}%`,
              animation: `drift ${140 + i * 55}s linear ${-i * 60}s infinite`,
            }}
          />
        ))}
      </div>

      {/* headline content */}
      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 pb-52 pt-32 text-center"
        style={{ y: textY, opacity: textOpacity }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.15 }}
          className="font-hand text-2xl text-bark/80 md:text-3xl"
        >
          somewhere above the morning mist —
        </motion.p>

        <h1 className="mt-4 font-heading text-5xl font-light tracking-tight text-soil sm:text-6xl md:text-8xl" aria-label={profile.name}>
          {nameLetters.map((ch, i) => (
            <motion.span
              key={i}
              aria-hidden
              className="inline-block"
              initial={{ opacity: 0, y: 26, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: 0.3 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              {ch === ' ' ? ' ' : ch}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 h-px w-28 bg-bark/40"
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8"
        >
          <div className="flex flex-wrap items-baseline justify-center gap-x-3 font-heading text-2xl sm:text-3xl md:text-5xl">
            <span className="font-light text-soil/80">I&rsquo;m a</span>
            <span className="relative inline-flex min-w-[9ch] justify-start">
              <AnimatePresence mode="wait">
                <motion.span
                  key={profile.roles[roleIdx]}
                  initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -16, filter: 'blur(4px)' }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="whitespace-nowrap font-medium text-ember"
                >
                  {profile.roles[roleIdx]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>
          <p className="mt-3 text-base text-bark/85 md:text-xl">
            at <span className="font-semibold text-ember">{profile.company}</span> · {profile.location}
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.15 }}
          className="mt-4 font-heading text-2xl font-light italic leading-relaxed text-soil/90 md:text-4xl"
        >
          {profile.headline[0]}
          <br />
          {profile.headline[1]}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-bark/80 md:text-lg"
        >
          {profile.subheading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#journey"
            className="rounded-full bg-soil px-8 py-3.5 text-sm font-medium text-ivory shadow-float transition-transform duration-500 hover:-translate-y-1"
          >
            View My Journey
          </a>
          <a
            href={profile.resume}
            download
            className="rounded-full border border-bark/40 bg-ivory/60 px-8 py-3.5 text-sm font-medium text-soil backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-ivory"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* foreground meadow */}
      <motion.div className="pointer-events-none absolute bottom-0 left-0 z-20 w-full" style={{ y: fgY }}>
        <svg viewBox="0 0 1440 150" preserveAspectRatio="xMidYMax slice" className="block w-full">
          <path d="M0 150 L0 70 Q 300 10 720 60 Q 1100 100 1440 40 L1440 150 Z" fill="#5E7248" />
          <path d="M0 150 L0 110 Q 360 60 780 105 Q 1160 140 1440 95 L1440 150 Z" fill="#4C5F44" />
        </svg>
        <div className="absolute bottom-0 h-24 w-full">
          <GrassBlade left="4%" height={62} delay={0.2} />
          <GrassBlade left="9%" height={48} delay={1.1} dark />
          <GrassBlade left="15%" height={70} delay={0.6} />
          <GrassBlade left="26%" height={52} delay={1.6} dark />
          <GrassBlade left="38%" height={64} delay={0.9} />
          <GrassBlade left="55%" height={58} delay={1.4} dark />
          <GrassBlade left="63%" height={66} delay={0.3} />
          <GrassBlade left="77%" height={50} delay={1.8} dark />
          <GrassBlade left="86%" height={68} delay={0.7} />
          <GrassBlade left="94%" height={54} delay={1.2} dark />
          <Flower left="7%" height={84} color="#E7A6B4" delay={0.5} />
          <Flower left="21%" height={70} color="#F2C7CF" delay={1.3} />
          <Flower left="33%" height={90} color="#E8B04E" delay={0.8} />
          <Flower left="59%" height={76} color="#E7A6B4" delay={1.7} />
          <Flower left="72%" height={88} color="#D9E3F0" delay={0.4} />
          <Flower left="90%" height={72} color="#F2C7CF" delay={1.0} />
        </div>
      </motion.div>

      {/* scroll invitation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.9 }}
        className="absolute bottom-44 left-1/2 z-30 -translate-x-1/2 text-center"
      >
        <p className="font-hand text-xl text-bark/70">walk with me</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
          className="mx-auto mt-2 h-10 w-px bg-gradient-to-b from-bark/60 to-transparent"
        />
      </motion.div>
    </section>
  )
}
