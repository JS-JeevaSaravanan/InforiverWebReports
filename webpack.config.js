const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require("path");


module.exports = {
  entry: ["./src/App.js"],
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        cache: true,
        sourceMap: false,
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader"
          }
        ]
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
        loader: "url-loader", 
        options:{
          limit:100000
        }
     },
      {
        resolve: {
          extensions: [".js", ".jsx", ".ts", ".tsx"]
        }
      }
    ]
  },
  output: {
    filename: "index.js",
    libraryTarget: "umd",
    library: "IBCSModule",
    path: path.resolve(__dirname, "public/dist/")
  }
};