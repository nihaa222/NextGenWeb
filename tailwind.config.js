/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        grid1: "20% 60% 20%",
        grid4: "80%",
        grid3: "24% 60%",
        normal: "100%",
        maxy: "repeat(auto-fit, minmax(240px, 350px))",
        gridfot1: "60% 50%",
      },
      screens: {
        xs: "450px",
        sm: "700px",
        md: "900px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
