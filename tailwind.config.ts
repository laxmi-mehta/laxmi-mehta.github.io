import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        hand: ['var(--font-hand)', 'cursive'],
      },
      // the ledger palette lives in css variables so dark mode
      // can flip paper and ink without touching any component
      colors: {
        paper: 'rgb(var(--paper) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        rust: 'rgb(var(--rust) / <alpha-value>)',
        mist: 'rgb(var(--mist) / <alpha-value>)',
      },
      letterSpacing: {
        wideish: '0.16em',
      },
      boxShadow: {
        lift: '0 16px 40px -20px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}

export default config
