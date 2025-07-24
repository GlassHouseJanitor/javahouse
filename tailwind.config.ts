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
        primary: '#333232',
        secondary: '#3d3d3d',
        accent: '#c6c6c6',
        highlight: '#7d7a7a',
        light: '#e2e8f0'
      },
      fontFamily: {
        sans: ['Cal Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
