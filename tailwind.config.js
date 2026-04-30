/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        glass: {
          light: 'rgba(255, 255, 255, 0.15)',
          dark: 'rgba(0, 0, 0, 0.25)',
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
