const path = require('path');

module.exports = {
  mode: 'development',
  entry: "./app/assets/frontend/main.jsx",
  output: {
    path: path.resolve(__dirname + "/app/assets/javascripts"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx'],
  }
}
