const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      base: {
        href: "#---- Add your github pages URL ----#",
        target: "_blank",
      },
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
});
