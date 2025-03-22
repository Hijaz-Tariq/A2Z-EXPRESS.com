import type { Config } from "tailwindcss";
import  defaultTheme  from "tailwindcss/defaultTheme";
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0d457d",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#028ac9",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#ff9305",
          foreground: "#000000",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;