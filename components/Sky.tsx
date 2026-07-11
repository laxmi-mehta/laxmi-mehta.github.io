'use client'

import { motion, useScroll, useTransform, useMotionTemplate, useSpring } from 'framer-motion'

// deterministic pseudo-random so server and client render identical stars
function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const rand = mulberry32(20260707)
const STARS = Array.from({ length: 110 }, () => ({
  x: rand() * 100,
  y: rand() * 68,
  size: 1 + rand() * 1.8,
  delay: rand() * 6,
  duration: 2.5 + rand() * 4,
}))

const CLOUDS = Array.from({ length: 6 }, (_, i) => ({
  top: 4 + rand() * 34,
  scale: 0.7 + rand() * 1.1,
  duration: 90 + rand() * 120,
  delay: -(rand() * 160),
  opacity: 0.35 + rand() * 0.35,
  key: i,
}))

// scroll offsets for each hour of the journey
const HOURS = [0, 0.18, 0.42, 0.62, 0.82, 1]

export default function Sky() {
  const { scrollYProgress } = useScroll()
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 30, restDelta: 0.0005 })

  const top = useTransform(p, HOURS, ['#F2E2C0', '#A5C9DF', '#C97795', '#2A3357', '#111A36', '#080E20'])
  const bottom = useTransform(p, HOURS, ['#FBF2DC', '#EFE9D0', '#F5B677', '#5D6FA6', '#25325A', '#16233F'])
  const sky = useMotionTemplate`linear-gradient(180deg, ${top} 0%, ${bottom} 100%)`

  // the sun rises, crosses the sky, and sinks into the sunset
  const sunLeft = useTransform(p, [0, 0.2, 0.5], ['16%', '46%', '78%'])
  const sunTop = useTransform(p, [0, 0.2, 0.5], ['52%', '16%', '68%'])
  const sunOpacity = useTransform(p, [0, 0.5, 0.58], [1, 1, 0])
  const sunColor = useTransform(p, [0, 0.3, 0.5], ['#FFEEC9', '#FFE9B0', '#FFB36B'])
  const sunHalo = useTransform(
    p,
    [0, 0.3, 0.5],
    ['rgba(255,238,201,0.35)', 'rgba(255,233,176,0.35)', 'rgba(255,179,107,0.4)'],
  )
  const sunHaloFar = useTransform(
    p,
    [0, 0.3, 0.5],
    ['rgba(255,238,201,0.16)', 'rgba(255,233,176,0.16)', 'rgba(255,179,107,0.2)'],
  )
  const sunEdge = useTransform(
    p,
    [0, 0.3, 0.5],
    ['rgba(255,238,201,0.8)', 'rgba(255,233,176,0.8)', 'rgba(255,179,107,0.85)'],
  )
  const sunGlow = useMotionTemplate`0 0 90px 45px ${sunHalo}, 0 0 200px 110px ${sunHaloFar}`
  const sunBg = useMotionTemplate`radial-gradient(circle, ${sunColor} 30%, ${sunEdge} 70%)`

  // the moon takes over at blue hour
  const moonTop = useTransform(p, [0.6, 0.85], ['58%', '14%'])
  const moonOpacity = useTransform(p, [0.58, 0.72], [0, 1])

  const starsOpacity = useTransform(p, [0.55, 0.82], [0, 1])
  const cloudsOpacity = useTransform(p, [0, 0.45, 0.65, 1], [0.9, 0.75, 0.4, 0.18])

  return (
    <motion.div aria-hidden className="fixed inset-0 z-0" style={{ background: sky }}>
      {/* stars */}
      <motion.div className="absolute inset-0" style={{ opacity: starsOpacity }}>
        {STARS.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-moonsilver"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.size,
              height: s.size,
              animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
            }}
          />
        ))}
      </motion.div>

      {/* sun */}
      <motion.div
        className="absolute h-20 w-20 rounded-full md:h-28 md:w-28"
        style={{
          left: sunLeft,
          top: sunTop,
          opacity: sunOpacity,
          background: sunBg,
          boxShadow: sunGlow,
        }}
      />

      {/* moon */}
      <motion.div
        className="absolute right-[14%] h-16 w-16 rounded-full md:h-24 md:w-24"
        style={{
          top: moonTop,
          opacity: moonOpacity,
          background: 'radial-gradient(circle at 38% 35%, #F4F7FD 0%, #DCE4F2 55%, #B9C6E0 100%)',
          boxShadow: '0 0 60px 25px rgba(220,228,242,0.28), 0 0 140px 70px rgba(220,228,242,0.12)',
        }}
      >
        {/* quiet craters */}
        <span className="absolute left-[28%] top-[42%] h-[18%] w-[18%] rounded-full bg-[#c3cfe6]/70" />
        <span className="absolute left-[58%] top-[24%] h-[12%] w-[12%] rounded-full bg-[#c3cfe6]/60" />
        <span className="absolute left-[52%] top-[60%] h-[24%] w-[24%] rounded-full bg-[#c3cfe6]/50" />
      </motion.div>

      {/* drifting clouds */}
      <motion.div className="absolute inset-0 overflow-hidden" style={{ opacity: cloudsOpacity }}>
        {CLOUDS.map((c) => (
          <div
            key={c.key}
            className="absolute left-0 w-full"
            style={{
              top: `${c.top}%`,
              opacity: c.opacity,
              animation: `drift ${c.duration}s linear ${c.delay}s infinite`,
            }}
          >
            <div
              className="relative h-14 w-[38%] rounded-full bg-white/80 blur-xl md:h-20"
              style={{ transform: `scale(${c.scale})` }}
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}
