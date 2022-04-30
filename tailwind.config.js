module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#52C5ED",
          "secondary": "#040303",
          "accent": "#52C5ED",
          "neutral": "#FFFFFF",
          "base-100": "#FFFFFF",
          "info": "#52C5ED",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  }
}
