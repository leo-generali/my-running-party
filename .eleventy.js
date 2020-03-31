const _ = require("lodash");
const plans = require("./src/_data/plans");
const filters = require("./src/_11ty/filters");

module.exports = config => {
  // Custom Filters
  config.addFilter("log", filters.log);
  config.addFilter("entries", filters.entries);
  config.addFilter("values", filters.values);
  config.addFilter("filter", (arr, name) => {
    return arr.filter(week => week.name === name);
  });

  // Passthrough all favicon related imagery to root
  config.addPassthroughCopy({ "src/_favicon/*": "/" });

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
