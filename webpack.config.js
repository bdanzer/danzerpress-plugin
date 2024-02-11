const ExtractTextPlugin = require("extract-text-webpack-plugin");
const debug = process.env.NODE_ENV !== "production";
const path = require("path");
const webpack = require("webpack");

// Extract style.css for both editor and frontend styles.
const pluginCSSPlugin = new ExtractTextPlugin({
  filename: "plugin.min.css",
});

// Extract style.css for both editor and frontend styles.
const blocksCSSPlugin = new ExtractTextPlugin({
  filename: "blocks.style.build.css",
});

// Extract editor.css for editor styles.
const editBlocksCSSPlugin = new ExtractTextPlugin({
  filename: "blocks.editor.build.css",
});

var plugins = [pluginCSSPlugin, blocksCSSPlugin, editBlocksCSSPlugin];

const scssConfig = [
  {
    loader: "css-loader",
    options: {
      sourceMap: debug,
    },
  },
  {
    loader: "sass-loader",
    options: {
      sourceMap: debug,
    },
  },
];

/**
 * Adding import method for gutenberg stuff
 */

var gutenbergConfig = [
  scssConfig[0],
  {
    loader: "sass-loader",
    options: {},
  },
];
gutenbergConfig[1].options = Object.assign(gutenbergConfig[1].options, {
  data: '@import "./resources/gutenberg/common.scss";\n',
});

var config = {
  context: __dirname,
  //   devtool: debug ? "inline-sourcemap" : "hidden-sourcemap",
  mode: debug ? "development" : "production",
  entry: {
    "plugin.min": path.resolve(__dirname, "resources/js/entry.js"),
    "blocks.build": path.resolve(__dirname, "resources/gutenberg/blocks.js"),
  },
  output: {
    path: __dirname + "/dist/",
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /plugin\.scss$/,
        exclude: /node_modules/,
        use: pluginCSSPlugin.extract(scssConfig),
      },
      {
        test: /editor\.scss$/,
        exclude: /node_modules/,
        use: editBlocksCSSPlugin.extract(gutenbergConfig),
      },
      {
        test: /style\.scss$/,
        exclude: /node_modules/,
        use: blocksCSSPlugin.extract(gutenbergConfig),
      },
      //   {
      //     test: /\.twig$/,
      //     use: {
      //       loader: "twig-loader",
      //     },
      //   },
    ],
  },
  // node: {
  //     fs: 'empty'
  // },
  plugins: plugins,
};

module.exports = (env, argv) => {
  return config;
};
