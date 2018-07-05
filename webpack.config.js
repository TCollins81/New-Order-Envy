module.exports = {
  entry: "./js/index.js",
  devtool: "source-map",
  output: {
    filename: ".public/dist/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
