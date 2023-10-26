import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#f7f3ff',
          100: '#e9d8ff',
          200: '#d6bcff',
          300: '#c399ff',
          400: '#a274ff',
          500: '#9147ff',
          600: '#7f2eea',
          700: '#6a24d8',
          800: '#571dc3',
          900: '#4713a5',
        },
      },
    },
  },
  plugins: [],
};

export default config;
