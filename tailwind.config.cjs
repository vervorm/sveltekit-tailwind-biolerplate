module.exports = {
  purge: ['./index.html','./src/**/*.{svelte,js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      'svelte-prime':'#ff3e00',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
 