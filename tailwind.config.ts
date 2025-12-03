import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        background: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        'text-strong': 'var(--color-text-strong)',
        'text-base': 'var(--color-text)',
        'text-subtle': 'var(--color-text-subtle)',
        border: 'var(--color-border)',
        accent: 'var(--color-accent)',
        'accent-strong': 'var(--color-accent-strong)',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'big': 'var(--big-font-size)',
        'h1': 'var(--h1-font-size)',
        'h2': 'var(--h2-font-size)',
        'h3': 'var(--h3-font-size)',
        'normal': 'var(--normal-font-size)',
        'small': 'var(--small-font-size)',
        'smaller': 'var(--smaller-font-size)',
        'tiny': 'var(--tiny-font-size)',
      },
      spacing: {
        'header': 'var(--header-height)',
      },
      zIndex: {
        'tooltip': '10',
        'fixed': '100',
        'modal': '1000',
      },
      boxShadow: {
        'card': '0 8px 18px var(--color-shadow)',
        'header': '0 10px 30px -20px var(--color-shadow)',
        'modal': '0 12px 32px var(--color-shadow)',
      },
      animation: {
        'profile': 'profile 8s ease-in-out infinite 1s',
        'scroll': 'scroll 2s ease infinite',
        'arrow-bounce': 'arrow-bounce 0.6s ease-in-out infinite',
      },
      keyframes: {
        profile: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
        },
        scroll: {
          '0%': { transform: 'translateY(0)' },
          '30%': { transform: 'translateY(3.75rem)' },
        },
        'arrow-bounce': {
          '0%, 100%': { transform: 'translateX(0) translateY(0) scale(1)' },
          '50%': { transform: 'translateX(4px) translateY(-4px) scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
}
export default config


