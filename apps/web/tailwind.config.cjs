const themePlugin = require('@bitwhys/tailwind-plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [themePlugin({ }), require('@tailwindcss/typography')],
}
