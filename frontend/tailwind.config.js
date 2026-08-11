/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0A84FF',
          navy: '#1E3A8A',
          ink: '#0F172A',
          teal: '#14B8A6',
          mist: '#E2E8F0',
          paper: '#F8FAFC',
          green: '#22C55E',
        },
      },
      fontFamily: {
        display: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'pulse-travel': {
          '0%': { strokeDashoffset: '240' },
          '100%': { strokeDashoffset: '0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'pulse-travel': 'pulse-travel 2.6s linear infinite',
        'fade-up': 'fade-up 0.6s ease-out both',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
};
