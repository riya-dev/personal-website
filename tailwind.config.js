/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  // purge: ''
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        purple: {
          900: '#2A0A5B',
          800: '#4D238D',
        },
      },
      // fontFamily: {
      //   body: ['Raleway'],
      //   korean: ['Noto Serif KR']
      // }
    },
  },
  plugins: [],
}
