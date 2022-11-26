const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    color: {
      'purple': '#3f3cbb',
    },
    extend: {
      width: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
});