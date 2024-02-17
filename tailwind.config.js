module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        purple: { 100: "#e1bee7", 500: "#9c27b0", A700: "#a317e6" },
        white: {
          A700_b2: "#ffffffb2",
          A700_1e: "#ffffff1e",
          A700_fc: "#fffffffc",
          A700: "#ffffff",
        },
        deep_purple: { 100: "#d1c4e9", 900: "#311b92", A400: "#651fff" },
        blue: { 800: "#193ccb", A700: "#0050ff" },
        gray: { 800: "#424242" },
        light_green: { 200: "#d6bd96" },
        black: {
          900: "#000000",
          "900_0f": "#0000000f",
          "900_a5": "#000000a5",
          "900_43": "#00000043",
          "900_cc": "#000000cc",
          "900_28": "#00000028",
        },
        blue_gray: { 900: "#303030" },
        cyan: { 400: "#1fb1d1" },
      },
      boxShadow: {
        bs2: "0px 2px  14px 0px #311b92",
        bs3: "0px 0px  9px -2px #000000a5",
        bs: "0px 0px  6px 2px #00000028",
        bs1: "0px 3px  49px 9px #0000000f",
      },
      fontFamily: { lato: "Lato" },
      backgroundImage: {
        gradient: "linear-gradient(141deg ,#e1bee7,#d1c4e9)",
        gradient1: "linear-gradient(141deg ,#9c27b0,#651fff)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
