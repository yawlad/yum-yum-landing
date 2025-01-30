import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        sm: "150px",
      },
    },
    backgroundImage: {
      smiles: "url('/images/bg.png')",
      hero: "url('/images/hero_bg.jpg')",
      about: "url('/images/about.jpg')",
      "dark-gradient": "linear-gradient(to right, #000000ff, #00000000)",
    },
    colors: {
      pink: "#FF93B3",
      darkpink: "#FF4375",
      gray: "#FCF5F4",
      darkgray: "#F2EDEE",
      orange: "#FEB200",
      white: "#FFFFFF",
      dark: "#333333",
    },

    fontSize: {
      "2xl": "48px",
      xl: "32px",
      lg: "24px",
      md: "16px",
      sm: "14px",
    },
    screens: {
      "2xl": { max: "1280px" },
      xl: { max: "1024px" },
      lg: { max: "640px" },
      md: { max: "370px" },
    },
    container: {
      center: true,
      screens: {
        "2xl": "1280px",
        xl: "1024px",
        lg: "640px",
        md: "370px",
      },
      padding: {
        "2xl": "20px",
        xl: "15px",
        lg: "10px",
        md: "5px",
      },
    },
  },
  plugins: [],
} satisfies Config;
