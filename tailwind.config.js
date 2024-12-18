/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: '#490BF4',
          lime: '#D8F651',
        },
        secondary: {
          cyan: '#00FFFF',
          blue: '#1E90FF',
        },
        support: {
          white: '#FFFFFF',
          black: '#000000',
          gray: '#E2E3E4',
        },
      },
      fontFamily: {
        pixel: ['Pixelsplitter', 'monospace'],
        sans: ['Quicksand', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.3em',
      },
    },
  },
  plugins: [],
};