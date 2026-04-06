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
        void: '#000000',
        'void-light': '#0a0a0a',
        surface: '#111111',
        'surface-elevated': '#161616',
        'border-subtle': '#1a1a1a',
        'border-default': '#222222',
        'border-bright': '#333333',
        'text-primary': '#ffffff',
        'text-secondary': '#999999',
        'text-muted': '#666666',
        'text-dim': '#333333',
        'accent-blue': '#00d4ff',
        'accent-orange': '#ff6b35',
        'accent-indigo': '#6366f1',
        'accent-crimson': '#dc2626',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-void': 'linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)',
        'glow-blue': 'radial-gradient(circle at center, rgba(0, 212, 255, 0.15) 0%, transparent 50%)',
        'glow-orange': 'radial-gradient(circle at center, rgba(255, 107, 53, 0.15) 0%, transparent 50%)',
        'glow-indigo': 'radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
        'glow-crimson': 'radial-gradient(circle at center, rgba(220, 38, 38, 0.1) 0%, transparent 50%)',
        'border-gradient': 'linear-gradient(135deg, #333 0%, #111 50%, #333 100%)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'particle-1': 'particle1 20s linear infinite',
        'particle-2': 'particle2 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.8' },
        },
        particle1: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '100%': { transform: 'translate(100px, 100px) rotate(360deg)' },
        },
        particle2: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '100%': { transform: 'translate(-50px, 80px) rotate(-360deg)' },
        },
      },
      boxShadow: {
        'glow-white': '0 0 20px rgba(255, 255, 255, 0.15)',
        'glow-blue': '0 0 30px rgba(0, 212, 255, 0.3)',
        'glow-orange': '0 0 30px rgba(255, 107, 53, 0.3)',
      },
    },
  },
  plugins: [],
}
export default config
