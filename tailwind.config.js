/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#08090C',
        surface: {
          DEFAULT: '#10131A',
          subtle: '#0D0F15',
          border: '#1A1E29',
          hover: '#151923',
          elevated: '#171B26',
        },
        accent: {
          DEFAULT: '#4C8DFF',
          hover: '#387BFF',
          glow: 'rgba(76, 141, 255, 0.15)',
          muted: 'rgba(76, 141, 255, 0.1)',
        },
        muted: {
          DEFAULT: '#94A3B8',
          foreground: '#64748B',
          dark: '#334155',
        },
        status: {
          green: '#22C55E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.04) 1px, transparent 0)",
        'radial-glow': "radial-gradient(circle at 50% 0%, rgba(76, 141, 255, 0.12) 0%, transparent 65%)",
        'radial-glow-center': "radial-gradient(circle at 50% 50%, rgba(76, 141, 255, 0.08) 0%, transparent 70%)",
      },
      boxShadow: {
        'subtle-glow': '0 0 35px -5px rgba(76, 141, 255, 0.12)',
        'blue-glow': '0 0 50px -10px rgba(76, 141, 255, 0.25)',
        'card-border': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.06)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
