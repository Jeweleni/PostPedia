import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3231",
      },
      backgroundColor: {
        'rgba-50': 'rgba(255, 237, 204, 0.50)',
      },
      fontFamily: {
        'body': ['DM Sans', 'sans'],
      },
    },
  },
  plugins: [],
};
export default config;
