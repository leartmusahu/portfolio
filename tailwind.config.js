/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "light-gradient":
          "radial-gradient(125% 125% at 50% 10%, #fff 40%, #63e 100%)",
        "dark-gradient":
          "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)",
      },
    },
  },
  plugins: [],
};
