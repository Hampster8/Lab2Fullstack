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
      } 
    ] 
  }, 
    entry: './frontend/src/index.js',
  plugins: [ 
    new HtmlWebPackPlugin({ 
    template: "./frontend/src/index.html", 
    filename: "./index.html" 
  })
] 
}; 