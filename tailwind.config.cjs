/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      md: '860px',
      lg: '1160px',
      xl: '1280px',
    },
    extend: {
      colors: {
        surface: {
          0: 'rgb(var(--surface-0) / <alpha-value>)',
          1: 'rgb(var(--surface-1) / <alpha-value>)',
          2: 'rgb(var(--surface-2) / <alpha-value>)',
          3: 'rgb(var(--surface-3) / <alpha-value>)',
          4: 'rgb(var(--surface-4) / <alpha-value>)',
          5: 'rgb(var(--surface-5) / <alpha-value>)',
        },
        ink: {
          DEFAULT: 'rgb(var(--ink-1) / <alpha-value>)',
          2: 'rgb(var(--ink-2) / <alpha-value>)',
          3: 'rgb(var(--ink-3) / <alpha-value>)',
          4: 'rgb(var(--ink-4) / <alpha-value>)',
        },
        line: 'rgb(var(--line) / <alpha-value>)',
        signal: {
          mint: 'rgb(var(--signal-mint) / <alpha-value>)',
          cyan: 'rgb(var(--signal-cyan) / <alpha-value>)',
          amber: 'rgb(var(--signal-amber) / <alpha-value>)',
          coral: 'rgb(var(--signal-coral) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Segoe UI', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Cascadia Code', 'Consolas', 'monospace'],
      },
      borderRadius: {
        xs: '5px',
        sm: '9px',
        md: '14px',
        lg: '20px',
        full: '999px',
      },
      keyframes: {
        'pulse-ring': {
          '0%':        { transform: 'scale(1)',   opacity: '0.6' },
          '60%, 100%': { transform: 'scale(2.4)', opacity: '0'   },
        },
        'panel-in': {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to:   { opacity: '1', transform: 'translateY(0)'   },
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.22,1,0.36,1) infinite',
        'panel-in':   'panel-in 220ms cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
};
