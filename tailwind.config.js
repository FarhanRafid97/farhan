/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4831d4',
        ascent: '#3d155f',
        secondary: '#CBF281',
      },
      backgroundImage: {
        'card-shine':
          'radial-gradient(1000px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 20%)',
        'border-shine':
          'radial-gradient(800px circle at var(--mouse-x) var(--mouse-y),rgba(255, 165, 1), rgba(144,0, 144, 1),rgba(14,0, 144, 1), transparent 40%)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
