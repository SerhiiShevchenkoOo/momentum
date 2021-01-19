module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
           gridTemplateColumns: {
             header:  'repeat(6, minmax(0, 200px))',
           },
      flex: {
        10: "0 0 auto",
      },
      fontSize: {
        icons: "80px",
      },

      minWidth: {
        fun: "20px",
      },
      maxHeight: {
      80: '60px',
        fix1: "85%",
      },
      maxWidth: {
        200: "200px",
   
      },
      minHeight: {
        fun: "20px",
      },
      width: {
        spinner: "40px",
      },
      height: {
        spinner: "40px",
      },
      fontFamily: {
        default: [
          "sourse-code-pro",
          "Menlo",
          "Monaco",
          "Consolas",
          "Courier New",
          "monospace",
        ],
        "quotes-autor": ["Pacifico", "cursive"],
        quotes: ["Zilla Slab", "serif"],
        ico: ["owfont"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
