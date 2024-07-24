import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: '#FA4A0C',
      neutralBackground: "#F2F2F2",
      white: '#ffffff',
      black: '#000000',
      inputBG: "#EFEEEE",
      silver: "#ADADAF",
      listText: "#9A9A9D"
    }
  },
  plugins: [],
};
export default config;
