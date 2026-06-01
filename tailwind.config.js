// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ayurvedaGreen: "#2F4F4F",
        ayurvedaBeige: "#F5F1E7",
        ayurvedaOrange: "#D98C59",
        ayurvedaTeal: "#4C9A8B",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        herbalPattern: "url('/images/pattern.png')", // subtle leaves/mandala
      },
      boxShadow: {
        ayurvedaCard: "0 10px 25px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
