// const defaultTheme = import('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    //   'xs': '475px',
    //   ...defaultTheme.screens,
    // },
    extend: {
      colors: {
        sitetext: "#1F1F1F",
        success: "#09dba0"
      }
    },
  },
  plugins: [],
}

