/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'darkblue' : '#20293a'
      }
    },
    screens: {
      'xxss' : '280px',
      'xxs' : '375px',
      'xs' : '576px',
      'sm': '768px',
      'md': '960px',
      'lg': '1280px',
      'xl': '1440px',
      '2xl': '1920px',
      '3xl': '2560px',
      '4xl': '3840px',
      '5xl': '5120px',
    },
    
  },
  plugins: [],
}

