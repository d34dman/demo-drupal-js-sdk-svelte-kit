// tailwind.config.cjs
const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: [
      './src/**/*.svelte', 
      './src/**/*.css'
    ],
    options: {
      safelist: [
        /data-theme$/,
      ]
    },
  },
  darkMode: false,
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}