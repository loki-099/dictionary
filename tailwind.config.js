/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["*"],
  theme: {
    fontSize: {
      headLg: ['64px', '77px'],
      headMd: ['24px', '29px'],
      headSm: ['20px', '24px'],
      bodyMd: ['18px', '24px'],
      bodySm: ['14px', '17px']
    },
    extend: {
      colors: {
        dark: {
          100: '#3a3a3a',
          200: '#2d2d2d',
          300: '#1f1f1f',
          400: '#050505'
        },
        light: {
          100: '#ffffff',
          200: '#f4f4f4',
          300: '#e9e9e9',
          400: '#757575'
        },
        acc: {
          1: '#a445ed',
          2: '#ff5252'
        }
      },
      boxShadow: {
        'base': 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        'dark': '#a445ed 0px 8px 24px'
      },
    },
  },
  plugins: [],
}

