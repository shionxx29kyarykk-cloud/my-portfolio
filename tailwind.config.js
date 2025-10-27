/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "360px", // SP
      sm: "768px", // タブレット
      md: "1270px", // PC
      lg: "1920px", // フルHD PC
      carousel: { raw: "(min-width: 1300px) and (max-width: 1536px)" },
      carouselSemiLg: { raw: "(min-width: 1537px) and (max-width: 1720px)" },
      carouselLg: { raw: "(min-width: 1721px)" },
    },
    extend: {
      fontFamily: {
        zen: ['"Zen Maru Gothic"', "sans-serif"],
        onest: ['"Onest"', "sans-serif"],
      },
      colors: {
        gray: {
          100: "#F7F7F7",
          150: "#F0F0F0",
          200: "#EFEFEF",
          300: "#DCDCDC",
          320: "#CFCFCF",
          350: "#B2B2B2",
          400: "#9B9B9B",
          420: "#6A6969",
          450: "#5F5F5F",
          470: "#CFCFCF",
          500: "#505050",
          550: "#929292",
          600: "#909EA1",
          700: "#313131",
          800: "#484848",
        },
        red: {
          450: "#F92A2D",
          500: "#DD0306",
        },
        yellow: {
          400: "#D6C000",
        },
        brown: {
          500: "#B5825B",
        },
        blue: {
          400: "#5CAEC7",
          500: "#498B9F",
        },
      },
      borderWidth: {
        1.5: "1.5px",
        2.5: "2.5px",
        3: "3px",
      },
    },
  },
  plugins: [],
};
