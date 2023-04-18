const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const nested = require("tailwindcss/nesting");
const imports = require("postcss-import");

const mode = process.env.NODE_ENV;
const dev = mode === "development";

module.exports = {
  plugins: [
    nested(),
    imports(),

    // Some plugins, like postcss-nested, need to run before Tailwind
    tailwindcss,
    // But others, like autoprefixer, need to run after
    autoprefixer,
  ],
};
