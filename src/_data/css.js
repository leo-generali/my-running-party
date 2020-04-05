const postcss = require("postcss");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const nested = require("postcss-nested");

const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/*.njk", "./src/**/*.njk"],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

const sharedConfig = [require("tailwindcss"), require("postcss-nested")];

const path = require("path");
const fs = require("fs");

const postCssConfig = {
  development: sharedConfig,
  production: [...sharedConfig, autoprefixer, purgecss, cssnano],
};

module.exports = async () => {
  const stylesheet = await fs.readFileSync(
    path.join(__dirname, "..", "assets", "index.css"),
    "utf8"
  );

  const css = await postcss(postCssConfig[process.env.ENV]).process(stylesheet);

  return css;
};
