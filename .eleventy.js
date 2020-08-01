const filters = require("./src/_11ty/filters");
const shortcodes = require("./src/_11ty/shortcodes");
const transforms = require("./src/_11ty/transforms");

module.exports = (config) => {
  // Custom Filters
  config.addFilter("log", filters.log);
  config.addFilter("entries", filters.entries);
  config.addFilter("values", filters.values);
  config.addFilter("chunk", filters.chunk);
  config.addFilter("filter", (arr, name) => {
    return arr.filter((week) => week.name === name);
  });

  // Custom Shortcode
  config.addShortcode("svg", shortcodes.svg);

  // Minify HTML if on production
  if (process.env.NODE_ENV === "production") {
    config.addTransform("minify-html", transforms.minify);
  }

  // Passthrough stuff
  config.addPassthroughCopy({ "src/_favicon/*": "/" });
  config.addPassthroughCopy({ "src/_fonts/*": "/fonts" });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
