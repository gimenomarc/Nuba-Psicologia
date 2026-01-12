/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'salmon': {
          50: '#FFF5F3',
          100: '#FFE8E3',
          200: '#FFD5CC',
          300: '#FFB8A8',
          400: '#FF8F75',
          500: '#FF6B4D',
          600: '#ED4A2E',
          700: '#C8381F',
          800: '#A5301C',
          900: '#882D1C',
        },
        'rose': {
          50: '#FDF2F8',
          100: '#FCE7F3',
          200: '#FBCFE8',
          300: '#F9A8D4',
          400: '#F472B6',
          500: '#EC4899',
          600: '#DB2777',
          700: '#BE185D',
          800: '#9F1239',
          900: '#831843',
        },
        'lilac': {
          50: '#F5F3F8',
          100: '#E9E4F0',
          200: '#D3C9E1',
          300: '#B8A6CE',
          400: '#9B7FB8',
          500: '#7E5FA3',
          600: '#6B4D8F',
          700: '#5A3F77',
          800: '#4A3462',
          900: '#3E2C52',
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