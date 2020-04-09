const Bundler = require("parcel-bundler");
const fg = require("fast-glob");

const entryFiles = fg.sync([
  "./src/assets/js/*.js",
  "./src/assets/styles/index.css",
]);

const config = {
  outDir: "./src/assets/dist",
  publicUrl: "/assets",
};

(async function () {
  // Initializes a bundler using the entrypoint location and options provided
  const bundler = new Bundler(entryFiles, config);

  // Run the bundler, this returns the main bundle
  // Use the events if you're using watch mode as this promise will only trigger once and not for every rebuild
  const bundle = await bundler.bundle();
})();
