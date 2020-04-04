const postcss = require("postcss");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/*.njk", "./src/**/*.njk"],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

const path = require("path");
const fs = require("fs");

const postCssConfig = {
  development: [tailwindcss],
  production: [tailwindcss, autoprefixer, purgecss, cssnano],
};

module.exports = async () => {
  const stylesheet = await fs.readFileSync(
    path.join(__dirname, "..", "assets", "index.css"),
    "utf8"
  );

  const css = await postcss(postCssConfig[process.env.ENV]).process(stylesheet);

  return css;
};
