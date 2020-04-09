require("postcss");

const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/*.njk", "./src/**/*.njk"],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

const sharedConfig = [require("tailwindcss"), require("postcss-nested")];

const postCssConfig = {
  development: sharedConfig,
  production: [
    ...sharedConfig,
    require("autoprefixer"),
    require("cssnano"),
    purgecss,
  ],
};

module.exports = {
  plugins: postCssConfig[process.env.NODE_ENV],
};
