import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./contexts/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3E2723",
          dark: "#2C1810",
        },
        secondary: {
          DEFAULT: "#F5E6D3",
          light: "#FFF8F0",
        },
        accent: {
          DEFAULT: "#8D4004",
          light: "#A85A1A",
        },
        dark: {
          DEFAULT: "#2C2C2C",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
      keyframes: {
        wave: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        wave: 'wave 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
