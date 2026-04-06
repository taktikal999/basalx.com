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
        charcoal: '#121212',
        matte: '#0a0a0a',
        bismuth: '#E0E0E0',
        'bismuth-dark': '#b0b0b0',
        surface: '#1a1a1a',
        'border-subtle': '#2a2a2a',
        'border-default': '#333333',
        'accent-blue': '#1a237e',
        'accent-blue-light': '#283593',
        'accent-blue-subtle': '#0d1642',
      },
      fontFamily: {
        sans: ['Inter', 'Space Grotesk', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-line': 'linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)',
        'glow-blue': 'radial-gradient(circle at center, rgba(26, 35, 126, 0.15) 0%, transparent 50%)',
      },
    },
  },
  plugins: [],
}
export default config
