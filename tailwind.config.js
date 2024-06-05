/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(16deg, #4b90ff, #ff5546)",
        "custom-loadergradient":
          "linear-gradient(to right, #9ed7ff, #ffffff, #9ed7ff)",
      },
      scrollbarnone: {
        "scrollbar-width": "none",
      },
      keyframes: {
        loader: {
          "0%": { backgroundPosition: "-800px 0px" },
          "100%": { backgroundPosition: "800px 0px" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        loader: "loader 3s linear infinite",
        fadeIn: "fadeIn 1.5s",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".scrollbar-hide": {
            /* IE and Edge */
            "-ms-overflow-style": "none",
            /* Firefox */
            "scrollbar-width": "none",
            /* Safari and Chrome */
            "&::-webkit-scrollbar": {
              display: "none",
            },
          },
          ".scrollbar-default": {
            /* IE and Edge */
            "-ms-overflow-style": "auto",
            /* Firefox */
            "scrollbar-width": "auto",
            /* Safari and Chrome */
            "&::-webkit-scrollbar": {
              display: "block",
            },
          },
        },
        ["responsive"]
      );
    },
  ],
};

