const _ = require("lodash");

/**
 * @param  {} content
 */
const log = content => {
  console.log(content);
};

const entries = obj => Object.entries(obj);
const values = obj => Object.values(obj);
const chunk = (arr, num) => _.chunk(arr, num);

module.exports = { log, entries, values, chunk };
