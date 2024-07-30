const path = require("path")

module.exports = {
  entry: path.resolve(__dirname, "build", "index.js"),
  output: {
    path: path.resolve(__dirname + "/build"),
    filename: "bundle[hash].js",
  },
  mode: "development",
}
