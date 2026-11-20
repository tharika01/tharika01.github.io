/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Slate base
        ink: {
          DEFAULT: '#0e1116',
          900: '#141821',
          800: '#1b202b',
          700: '#242b38',
        },
        // Electric blue accent
        accent: {
          DEFAULT: '#5b9dff',
          soft: '#85b6ff',
          muted: '#4a86e0',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
