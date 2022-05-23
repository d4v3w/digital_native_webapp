module.exports = {
  purge: false,
  presets: [],
  darkMode: 'class', // or 'media'
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [
    'tailwindcss',
    'postcss-preset-env',
  ],
}

