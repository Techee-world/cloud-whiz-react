/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    {
      relative: true,
      transform: (content) => content.replace(/taos:/g, ''),
      files: ['./src/*.{html,js}'],
    }
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  theme: {
    extend: {},
    fontFamily: {
      Poppins:['Poppins','sans-serif']
    }
  },
  plugins: [ require('tailwind-scrollbar-hide'), 
  require('flowbite/plugin'), 
  require('taos/plugin')],
 
}
