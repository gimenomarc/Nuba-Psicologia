/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'salmon': {
          50: '#FFF8F5',
          100: '#FFEDE6',
          200: '#FFD9CC',
          300: '#FFCDB2',
          400: '#FFB4A2',
          500: '#FF9F8E',
          600: '#E58A7A',
          700: '#CC7566',
          800: '#B36052',
          900: '#994B3E',
        },
        'rose': {
          50: '#FDF2F5',
          100: '#FCE5E9',
          200: '#F9CBD3',
          300: '#F5B1BD',
          400: '#F197A7',
          500: '#E5989B',
          600: '#CC8790',
          700: '#B37685',
          800: '#99657A',
          900: '#80546F',
        },
        'lilac': {
          50: '#F5F3F5',
          100: '#EBE7EB',
          200: '#D7CFD7',
          300: '#C3B7C3',
          400: '#AF9FAF',
          500: '#B5838D',
          600: '#A3757F',
          700: '#916771',
          800: '#7F5963',
          900: '#6D4B55',
        },
        'slate': {
          50: '#F5F5F6',
          100: '#EBEBEC',
          200: '#D7D7D9',
          300: '#C3C3C6',
          400: '#AFAFB3',
          500: '#9B9BA0',
          600: '#87878D',
          700: '#73737A',
          800: '#6D6875',
          900: '#5A5660',
        },
      },
      animation: {
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
}     