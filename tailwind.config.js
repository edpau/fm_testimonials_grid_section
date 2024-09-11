/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "brand-primary": "hsl(210, 46%, 95%)",
        "testimonialOne": "hsl(263, 55%, 52%)",
        "testimonialTwo": "hsl(217, 19%, 35%)",
        "testimonialThree": "hsl(0, 0%, 100%)",
        "testimonialFour": " hsl(219, 29%, 14%)",
        "testimonialFive": "hsl(0, 0%, 100%)",
      },
      textColor: {
        "light-primary": "hsl(0, 0%, 100%)",
        "dark-primary": "hsl(217, 19%, 35%)",
      },
      boxShadow:{
        testimonial: "40px 60px 50px -47px rgba(72, 85, 106, 0.25)",
      },
      fontSize: {
        paragraph: "0.8125rem",
      },
      fontFamily: {
        card: ["Barlow Semi Condensed", "sans-serif"],
      },
      screen: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
}

