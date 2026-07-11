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
      colors: {
        ivory: '#FBF6EA',
        cream: '#F5EDDC',
        parchment: '#EFE4CB',
        bark: '#5C4A38',
        soil: '#3E3227',
        moss: '#6E7F58',
        olive: '#8A8B5C',
        fern: '#4C5F44',
        peach: '#F2B58F',
        ember: '#D9814E',
        rosedusk: '#C9748A',
        indigoDeep: '#2A3357',
        bluehour: '#3D4A77',
        midnight: '#101830',
        deepnight: '#0A1024',
        lantern: '#FFD9A0',
        moonsilver: '#DCE4F2',
      },
      letterSpacing: {
        wideish: '0.18em',
      },
      boxShadow: {
        float: '0 24px 60px -20px rgba(40, 30, 15, 0.35)',
        lantern: '0 0 40px 8px rgba(255, 217, 160, 0.25)',
      },
    },
  },
  plugins: [],
}

export default config
