const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin"); 

module.exports = { 
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }
    ]
},
    entry: './frontend/app.js',
  plugins: [ 
    new HtmlWebPackPlugin({ 
    template: "./frontend/src/index.html", 
    filename: "./index.html" 
  })],
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    open: true,
    proxy: {
      "/api": "http://localhost:3000/",
    }
  } 
}; 