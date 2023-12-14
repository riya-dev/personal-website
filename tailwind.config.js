/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  // purge: ''
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#2A0A5B',
        secondary: '#7851A9',
      },
    },
  },
  plugins: [],
}
