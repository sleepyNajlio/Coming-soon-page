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
        'gradient-linear': 'linear-gradient(var(--tw-gradient-angle), var(--tw-gradient-stops))',
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "soft-red-gradiant": "linear-gradient(180deg, #ffffff, #FFF4F4)",
        "gradient-linear-gray": "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
        'pattern-desktop': "url('/bg-pattern-desktop.svg')",
      },
      colors: {
        transparent: "transparent",
        "desaturated-red": "#b83a47",
        "soft-red": "#f0b6ae",
        "dark-grayish-red": "#3d0c0f", 
        "button": "#F3A3A3"
      },
      fontFamily: {
        sans: ['var(--font-josefin)'],
      },
      screens: {
        'xs': '375px',
      },
    },
  },
  plugins: [],
};
export default config;
