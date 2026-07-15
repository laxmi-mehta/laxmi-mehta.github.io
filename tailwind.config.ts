import type { Config } from 'tailwindcss'

const config: Config = {
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
      // mumbai local palette — enamel boards, old tickets, railway paint
      colors: {
        cream: '#F6F1E6',
        ink: '#1C2433',
        board: '#F4B942',
        rail: '#B3402F',
        signal: '#2E8F5B',
        ticket: '#F1E5CB',
        steel: '#5E6A7D',
        chai: '#9C6B34',
      },
      letterSpacing: {
        wideish: '0.18em',
      },
      boxShadow: {
        float: '0 20px 45px -18px rgba(28, 36, 51, 0.35)',
        board: '0 12px 30px -12px rgba(28, 36, 51, 0.5)',
      },
    },
  },
  plugins: [],
}

export default config
