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
    'w-full rounded-sm border border-ink/25 bg-paper px-4 py-3 text-sm text-ink placeholder:text-mist/70 outline-none transition-colors focus:border-accent'

  return (
    <section id="contact" className="relative z-10 px-6 pb-0 pt-16 md:pt-24">
      <div className="mx-auto max-w-3xl pb-20 md:pb-24">
        <SectionHeading code="07" kicker="contact" title="Let's Talk" />

        <Reveal>
          <p className="max-w-xl font-heading text-xl font-light italic leading-relaxed text-ink/80 md:text-2xl">
            “{closingQuote}”
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
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
                className="rounded-md border border-ink/25 px-5 py-2 font-mono text-xs font-semibold text-ink/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="sheet mt-10 max-w-xl rounded-md shadow-lift">
            <div className="border-b border-ink/10 px-6 py-3">
              <p className="annotation">fig. 07.1 — leave a message</p>
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
                placeholder="What should we build together?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <button
                type="submit"
                className="w-full rounded-md bg-ink px-8 py-3 text-sm font-semibold text-paper transition-transform duration-300 hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>
        </Reveal>
      </div>

      <footer className="border-t border-ink/15 px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-xs text-mist">
            © {new Date().getFullYear()} {profile.name} · Mumbai, India
          </p>
          <p className="annotation">end of document · thanks for reading</p>
        </div>
      </footer>
    </section>
  )
}
