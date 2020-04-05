const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const svg = (icon, params = {}) => {
  const iconPath = path.join(__dirname, "..", "assets", "svg", `${icon}.svg`);
  const data = fs.readFileSync(iconPath, (err, contents) => {
    if (err) return err;
    return contents;
  });

  const jsdom = new JSDOM(data.toString("utf8"));
  const element = jsdom.window.document.querySelector("svg");

  if ("class" in params) {
    element.classList.add(...params.class.split(" "));
  }

  return jsdom.serialize();
};

module.exports = { svg };
