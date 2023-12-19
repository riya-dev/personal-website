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
        transparent: 'transparent',
        purple: {
          900: '#2A0A5B',
          800: '#4D238D',
        },
      },
      fontFamily: {
        'display': ['Montserrat'],
      },
      text: {
        'default': 'Montserrat',
      },
      // text: {
        
      // },
    },
  },
  plugins: [],
}
