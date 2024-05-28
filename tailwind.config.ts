import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/bg_img_1.png')",
      },
      colors: {
        black: '#2e3238',
        'black-half': '#777777',
      },
    },
  },
  plugins: [],
};
export default config;
