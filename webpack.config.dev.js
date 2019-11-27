import path from "path";
import webpack from "webpack";

export default {
  debug: true,
  devtool: "inline-source-map",
  noInfo: false,
  entry: [path.resolve(__dirname, "src/index")],
  target: "web",
  output: {
    path: path.resolve(__dirname, "src"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "src")
  },
  plugins: [],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ["babel"] },
      { test: /\.css$/, loaders: ["style", "css"] }
      //we can add images here as well for bundling
    ]
  }
};
