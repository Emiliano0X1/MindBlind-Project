
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        stick : ['var(--font-stick)'],
        raleway : ['var(--font-raleway)'],
        lobster : ['var(--font-lobster)'],
        rubik_glitch : ['var(--font-rubik-glitch)'],
        great_vibes : ['var(--font-great-vibes)'],
        windows_regular : ['var(--font-windows-regular)'],
        disney_heroic : ['var(--font-disney-heroic)'],
        katakana : ['var(--font-katakana)'],
        winbroken : ['var(--font-winbroken)'],
        punk : ['var(--font-punk)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
