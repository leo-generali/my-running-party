/**
 * @param  {} content
 */
const log = content => {
  console.log(content);
};

const entries = obj => Object.entries(obj);
const values = obj => Object.values(obj);

module.exports = { log, entries, values };
