module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./public/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        custom: "620px",
      },
      spacing: {
        "40-c": "40rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
