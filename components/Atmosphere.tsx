'use client'

import { useEffect, useRef } from 'react'

type Kind = 'petal' | 'leaf' | 'firefly'

type Particle = {
  kind: Kind
  x: number
  y: number
  vx: number
  vy: number
  size: number
  angle: number
  spin: number
  phase: number
  pulse: number
}

const COUNT = 44

// how likely each kind is at a given scroll progress (0 = sunrise, 1 = night)
function kindFor(p: number, r: number): Kind {
  const firefly = Math.min(1, Math.max(0, (p - 0.55) / 0.2))
  const leaf = Math.max(0, 1 - Math.abs(p - 0.45) / 0.25)
  const petal = Math.max(0.05, 1 - p / 0.45)
  const total = firefly + leaf + petal
  const pick = r * total
  if (pick < firefly) return 'firefly'
  if (pick < firefly + leaf) return 'leaf'
  return 'petal'
}

function spawn(kind: Kind, w: number, h: number, fromTop: boolean): Particle {
  const base: Particle = {
    kind,
    x: Math.random() * w,
    y: fromTop ? -20 : Math.random() * h,
    vx: 0,
    vy: 0,
    size: 0,
    angle: Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 0.02,
    phase: Math.random() * Math.PI * 2,
    pulse: 1.5 + Math.random() * 2.5,
  }
  if (kind === 'firefly') {
    base.y = h * 0.25 + Math.random() * h * 0.7
    base.vx = (Math.random() - 0.5) * 0.25
    base.vy = (Math.random() - 0.5) * 0.2
    base.size = 1.2 + Math.random() * 1.6
  } else {
    base.vx = -(0.15 + Math.random() * 0.35)
    base.vy = 0.25 + Math.random() * 0.5
    base.size = kind === 'leaf' ? 4 + Math.random() * 4 : 3 + Math.random() * 3.5
  }
  return base
}

export default function Atmosphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)
    const onResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    const progress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      return max > 0 ? window.scrollY / max : 0
    }

    let particles: Particle[] = Array.from({ length: COUNT }, () =>
      spawn(kindFor(progress(), Math.random()), w, h, false),
    )

    let raf = 0
    let t = 0
    const tick = () => {
      t += 0.016
      const p = progress()
      ctx.clearRect(0, 0, w, h)

      for (let i = 0; i < particles.length; i++) {
        const pt = particles[i]

        if (pt.kind === 'firefly') {
          // slow wandering with a soft pulse of light
          pt.vx += (Math.random() - 0.5) * 0.02
          pt.vy += (Math.random() - 0.5) * 0.02
          pt.vx = Math.max(-0.35, Math.min(0.35, pt.vx))
          pt.vy = Math.max(-0.3, Math.min(0.3, pt.vy))
          pt.x += pt.vx
          pt.y += pt.vy
          const glow = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * pt.pulse + pt.phase))
          const grad = ctx.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, pt.size * 6)
          grad.addColorStop(0, `rgba(255, 226, 156, ${0.85 * glow})`)
          grad.addColorStop(0.4, `rgba(255, 214, 130, ${0.3 * glow})`)
          grad.addColorStop(1, 'rgba(255, 214, 130, 0)')
          ctx.fillStyle = grad
          ctx.beginPath()
          ctx.arc(pt.x, pt.y, pt.size * 6, 0, Math.PI * 2)
          ctx.fill()
        } else {
          // petals and leaves fall in a lazy sway
          pt.angle += pt.spin
          pt.x += pt.vx + Math.sin(t * 0.8 + pt.phase) * 0.4
          pt.y += pt.vy
          ctx.save()
          ctx.translate(pt.x, pt.y)
          ctx.rotate(pt.angle)
          ctx.beginPath()
          ctx.ellipse(0, 0, pt.size, pt.size * 0.45, 0, 0, Math.PI * 2)
          ctx.fillStyle =
            pt.kind === 'petal' ? 'rgba(244, 200, 205, 0.7)' : 'rgba(200, 144, 84, 0.65)'
          ctx.fill()
          ctx.restore()
        }

        const out = pt.y > h + 30 || pt.x < -40 || pt.x > w + 40 || pt.y < -40
        if (out) particles[i] = spawn(kindFor(p, Math.random()), w, h, pt.kind !== 'firefly')
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30"
    />
  )
}
