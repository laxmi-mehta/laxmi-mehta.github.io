'use client'

import { useState, type FormEvent } from 'react'
import { profile, closingQuote } from '@/data/content'
import { Reveal, SectionHeading } from '@/components/ui'

function Lantern({ className, delay }: { className: string; delay: number }) {
  return (
    <div aria-hidden className={`absolute ${className}`}>
      <svg width="46" height="120" viewBox="0 0 46 120">
        <line x1="23" y1="0" x2="23" y2="34" stroke="#8894B3" strokeWidth="2" opacity="0.5" />
        <g style={{ animation: `sway ${6 + delay}s ease-in-out ${delay}s infinite`, transformOrigin: '23px 34px' }}>
          <rect x="14" y="34" width="18" height="6" rx="2" fill="#3E3227" />
          <path d="M12 40 L34 40 L31 72 L15 72 Z" fill="#2A2118" />
          <rect x="16" y="44" width="14" height="24" rx="3" fill="#FFD9A0" style={{ animation: `lanternGlow ${3 + delay}s ease-in-out infinite` }} />
          <rect x="17" y="72" width="12" height="5" rx="2" fill="#3E3227" />
        </g>
      </svg>
      <div
        className="absolute left-1/2 top-14 h-16 w-16 -translate-x-1/2 rounded-full bg-lantern/25 blur-2xl"
        style={{ animation: `lanternGlow ${3 + delay}s ease-in-out infinite` }}
      />
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio — message from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const field =
    'w-full rounded-sm border border-moonsilver/20 bg-midnight/50 px-4 py-3 text-sm text-moonsilver placeholder:text-moonsilver/40 outline-none backdrop-blur-sm transition-colors focus:border-lantern/60'

  return (
    <section id="contact" className="relative z-10 overflow-hidden px-6 pb-0 pt-16 md:pt-24">
      <Lantern className="left-[6%] top-40 hidden lg:block" delay={0.4} />
      <Lantern className="right-[7%] top-56 hidden lg:block" delay={1.6} />

      <div className="mx-auto max-w-2xl pb-24 text-center md:pb-28">
        <SectionHeading light kicker="where the water meets the night" title="Rest Here a While" />

        <Reveal>
          <p className="font-heading text-xl font-light italic leading-relaxed text-moonsilver/90 md:text-2xl">
            “{closingQuote}”
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {[
              { label: 'Email', href: `mailto:${profile.email}` },
              { label: 'GitHub', href: profile.github },
              { label: 'LinkedIn', href: profile.linkedin },
              { label: 'Resume', href: profile.resume },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="rounded-full border border-moonsilver/30 px-6 py-2.5 text-sm text-moonsilver transition-all duration-500 hover:-translate-y-1 hover:border-lantern/70 hover:text-lantern hover:shadow-lantern"
              >
                {l.label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <form onSubmit={submit} className="mx-auto mt-14 max-w-lg space-y-4 text-left">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                className={field}
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                required
                type="email"
                className={field}
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <textarea
              required
              rows={5}
              className={field}
              placeholder="Leave a note by the water…"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button
              type="submit"
              className="w-full rounded-full bg-lantern px-8 py-3.5 text-sm font-semibold text-soil transition-transform duration-500 hover:-translate-y-1"
            >
              Send the message
            </button>
          </form>
        </Reveal>
      </div>

      {/* the still lake at the end of the journey */}
      <div aria-hidden className="pointer-events-none relative h-56 w-full md:h-72">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d1730]/80 to-[#070d1e]" />
        {/* moon reflection */}
        <div
          className="absolute left-1/2 top-10 h-40 w-10 -translate-x-1/2 rounded-full bg-moonsilver/20 blur-md md:h-52"
          style={{ animation: 'ripple 7s ease-in-out infinite' }}
        />
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute left-1/2 h-px -translate-x-1/2 rounded-full bg-moonsilver/30"
            style={{
              top: `${28 + i * 18}%`,
              width: `${120 - i * 22}px`,
              animation: `ripple ${5 + i * 1.5}s ease-in-out ${i * 0.8}s infinite`,
            }}
          />
        ))}
      </div>

      <footer className="relative z-10 border-t border-moonsilver/10 bg-[#070d1e] px-6 py-10 text-center">
        <p className="font-hand text-xl text-moonsilver/70">
          handcrafted by {profile.name} · {new Date().getFullYear()}
        </p>
        <p className="mt-2 text-xs text-moonsilver/40">
          The journey continues — thank you for walking it with me.
        </p>
      </footer>
    </section>
  )
}
