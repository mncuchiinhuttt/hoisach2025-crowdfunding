/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)'],
        montserrat: ['var(--font-montserrat)'],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-150%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-150%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [
    function({ addVariant }) {
      addVariant('hover', '&:hover');
      addVariant('pause-animation', '.hover\\:pause-animation:hover &');
    },
  ],
}
