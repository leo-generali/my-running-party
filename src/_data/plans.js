const couchTo5k = require("./training-plans/couch-to-5k");
const couchTo10k = { ...couchTo5k };
couchTo10k.name = "Couch to 10k";

module.exports = [couchTo5k, couchTo10k];
