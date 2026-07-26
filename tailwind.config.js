/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        midnight: '#07111f',
        cyanaccent: '#22d3ee',
        electric: '#38bdf8',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(34,211,238,0.15), 0 18px 45px rgba(8,145,178,0.18)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
