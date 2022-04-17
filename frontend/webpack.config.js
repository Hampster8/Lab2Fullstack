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
  })
] 
}; 