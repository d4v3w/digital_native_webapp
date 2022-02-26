module.exports = {
  purge: false,
  darkMode: 'media', // or 'media' or 'class'
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    'tailwindcss',
    'postcss-preset-env',
  ],
}
