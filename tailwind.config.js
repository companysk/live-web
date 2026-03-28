/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yt: {
          bg: "#0f0f0f",
          bg2: "#181818",
          bg3: "#272727",
          bg4: "#3f3f3f",
          red: "#ff0000",
          red2: "#cc0000",
          text: "#f1f1f1",
          muted: "#aaaaaa",
          dim: "#717171",
        },
      },
      fontFamily: {
        sans: ["'Segoe UI'", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
