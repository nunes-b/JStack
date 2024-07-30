const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: path.resolve(__dirname, "build", "index.js"),
  output: {
    path: path.resolve(__dirname + "/build"),
    filename: "bundle[fullhash].js",
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src","public", "index.html"),
    }),
  ]

}
