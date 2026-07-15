'use client'

import { useState, type FormEvent } from 'react'
import { profile, closingQuote } from '@/data/content'
import { Reveal, SectionHeading } from '@/components/ui'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio — message from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const field =
    'w-full rounded-sm border border-ink/30 bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink/40 outline-none transition-colors focus:border-rail'

  return (
    <section id="contact" className="relative z-10 overflow-hidden px-6 pb-0 pt-16 md:pt-24">
      <div className="mx-auto max-w-2xl pb-20 text-center md:pb-24">
        <SectionHeading code="07" kicker="all change — end of the line" title="Terminus" />

        <Reveal>
          <p className="font-heading text-xl font-light italic leading-relaxed text-ink/85 md:text-2xl">
            “{closingQuote}”
          </p>
        </Reveal>

        {/* platform signs pointing everywhere I can be found */}
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
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
                className="rounded-md border-2 border-ink bg-ink px-5 py-2 text-xs font-bold uppercase tracking-wider text-board transition-all duration-300 hover:-translate-y-1 hover:bg-rail hover:text-cream"
              >
                {l.label} →
              </a>
            ))}
          </div>
        </Reveal>

        {/* the ticket window */}
        <Reveal delay={0.25}>
          <div className="paper mx-auto mt-12 max-w-lg rounded-sm text-left shadow-float">
            <div className="flex items-center justify-between rounded-t-sm border-b-2 border-ink/70 bg-board px-6 py-2.5">
              <p className="text-[10px] font-bold uppercase tracking-wideish text-ink/80">
                ticket window · leave a message
              </p>
              <span
                className="h-2 w-2 rounded-full bg-signal"
                style={{ animation: 'blink 2s ease-in-out infinite' }}
              />
            </div>
            <form onSubmit={submit} className="space-y-4 p-6">
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
                placeholder="Where should we travel together?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <button
                type="submit"
                className="w-full rounded-md border-2 border-ink bg-board px-8 py-3 text-sm font-bold uppercase tracking-wider text-ink transition-transform duration-300 hover:-translate-y-1"
              >
                Send the message
              </button>
            </form>
          </div>
        </Reveal>
      </div>

      {/* buffer stop at the very end of the track */}
      <div aria-hidden className="mx-auto max-w-md pb-10">
        <div className="track w-full opacity-50" />
        <div className="mx-auto mt-2 flex w-24 items-end justify-center gap-1">
          <span className="h-6 w-2 rounded-t-sm bg-rail" />
          <span className="h-9 w-14 rounded-t-md border-4 border-ink bg-board" />
          <span className="h-6 w-2 rounded-t-sm bg-rail" />
        </div>
      </div>

      <footer className="relative z-10 border-t-4 border-board bg-ink px-6 py-8 text-center">
        <p className="font-hand text-xl text-cream/80">
          made in Mumbai, between stations · {profile.name} · {new Date().getFullYear()}
        </p>
        <p className="mt-2 text-[11px] uppercase tracking-wideish text-cream/40">
          yeh station aakhri hai — but every journey starts somewhere
        </p>
      </footer>
    </section>
  )
}
