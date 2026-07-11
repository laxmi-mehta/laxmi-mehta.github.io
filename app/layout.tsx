import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const fraunces = localFont({
  src: [
    { path: './fonts/fraunces.woff2', weight: '300 600', style: 'normal' },
    { path: './fonts/fraunces-italic.woff2', weight: '300 600', style: 'italic' },
  ],
  variable: '--font-heading',
  display: 'swap',
})

const karla = localFont({
  src: [{ path: './fonts/karla.woff2', weight: '300 700', style: 'normal' }],
  variable: '--font-body',
  display: 'swap',
})

const caveat = localFont({
  src: [{ path: './fonts/caveat.woff2', weight: '400 600', style: 'normal' }],
  variable: '--font-hand',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Laxmi Mehta — A Journey Through Systems & Learning',
  description:
    'Laxmi Mehta — Backend Engineer from Mumbai building reliable systems with Django, PostgreSQL and Redis, walking the road toward Machine Learning Engineering.',
  keywords: [
    'Laxmi Mehta',
    'Backend Engineer',
    'Machine Learning Engineer',
    'Django',
    'Python',
    'Portfolio',
  ],
  openGraph: {
    title: 'Laxmi Mehta — A Journey Through Systems & Learning',
    description:
      'Backend Engineer building reliable systems today. Machine Learning Engineer tomorrow.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${karla.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  )
}
