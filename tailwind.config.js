module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "30%": { width: "0" },
          "100%": { width: "12ch" },
          // Match your text length
        },
        blink: {
          "50%": { borderColor: "transparent" },
          "100%": { borderColor: "#3498db" }, // Customize border color
        },
      },
      animation: {
        typing: "typing 7s steps(12, end) infinite", // Loop forever
        blink: "blink 1s step-end infinite", // Cursor blinking
      },
    },
  },
  plugins: [],
};
