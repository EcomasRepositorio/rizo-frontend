/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple800: '#1C004C',
        customPurple300: '#6D0083',
        customOrange: '#FF9D00',
        customYellow: '#FFD700',
        customGradient: {
          start: '#FFD700',
          end: '#FF9D00',
        },
        customDarkPurple: '#1b104b', // Añade tu nuevo color aquí
      },
      screens: {
        '3xl': '1600px', // Define el breakpoint 3xl si aún no lo has hecho
      },
      padding: {
        '0': '0',
      },
    },
  },
  variants: [],
  plugins: [],
  
}

