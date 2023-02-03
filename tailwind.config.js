/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1600px',
      '4xl': '1920px',
    },
    extend: {
      fontFamily: {
        'primary-sans': ['var(--font-sans)'],
      },

      fontSize: {
        sm: [
          '15px',
          {
            letterSpacing: '-0.25px',
            fontWeight: '400',
          },
        ],
        base: [
          '18px',
          {
            letterSpacing: '-0.25px',
            fontWeight: '400',
          },
        ],
        '3xl': [
          '32px',
          {
            letterSpacing: '-0.5px',
            fontWeight: '300',
          },
        ],
        '5xl': [
          '40px',
          {
            letterSpacing: '-0.71px',
            fontWeight: '300',
          },
        ],
        '6xl': [
          '56px',
          {
            letterSpacing: '-0.1px',
            fontWeight: '300',
          },
        ],
      },

      colors: {
        primary: {
          default: '#30C88F',
          light: '#2ab6d9',
        },
        bodytext: {
          base: '#9597A5', // body color and primary color
        },
        heading: {
          base: '#2D314D', // primary heading color
        },
        link: '#3074d9',
        background: {
          default: '#FAFAFA', // body background color
          secondary: '#F4F5F7', // section background color
        },
      },
    },
  },
  plugins: [],
};
