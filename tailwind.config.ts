import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#080808',
        jet: '#000000',
        bismuth: '#E0E0E0',
        'bismuth-dark': '#a0a0a0',
        surface: '#111111',
        'border-subtle': '#1a1a1a',
        'border-default': '#2a2a2a',
        'accent-green': '#00FF41',
        'accent-green-dim': '#00FF41/30',
        'accent-green-subtle': '#00FF41/10',
      },
      fontFamily: {
        sans: ['Inter', 'Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'grid-line': 'linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
export default config
