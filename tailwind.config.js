/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: {
          bg: 'rgba(255,255,255,var(--glass-bg,0.16))',
          edge: 'rgba(255,255,255,var(--glass-edge,0.35))',
          ink: '#ffffff',
        },
      },
      borderRadius: {
        lgx: '22px',
        '2lg': '28px',
      },
      blur: {
        glass: 'var(--blur,16px)',
      },
      boxShadow: {
        glass: '0 10px 34px rgba(0,0,0,0.35)',
        glassSoft: '0 6px 22px rgba(0,0,0,0.28)',
      },
      backdropBlur: {
        glass: 'var(--blur,16px)',
        nav: '10px',
      },
      transitionTimingFunction: {
        'glass-inout': 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
