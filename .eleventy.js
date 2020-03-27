const filters = require("./src/_11ty/filters");

module.exports = config => {
  config.addFilter("log", filters.log);
  config.addFilter("entries", filters.entries);

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
