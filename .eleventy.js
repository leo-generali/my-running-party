const filters = require("./src/_11ty/filters");
const shortcodes = require("./src/_11ty/shortcodes");

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
