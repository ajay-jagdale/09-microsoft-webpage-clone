const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      zIndex: {
        '100': '100',
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}
