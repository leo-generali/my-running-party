/**
 * @param  {} content
 */
const log = content => {
  console.log(content);
};

const entries = obj => Object.entries(obj);
const values = obj => Object.values(obj);

const filters = arr =>
  arr.filter(week => {
    console.log(week);
  });

module.exports = { log, entries, values, filters };
