module.exports = {
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        moveRightLeft: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(15px)" },
        },
        moveLeftRight: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-15px)" },
        },
      },
      animation: {
        moveRightLeft: "moveRightLeft 5s ease-in-out infinite",
        moveLeftRight: "moveLeftRight 5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
