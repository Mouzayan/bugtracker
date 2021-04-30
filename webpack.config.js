var path = require('path');

module.exports = {
  devServer: {
  contentBase: path.join(__dirname, "dist"),
  port: 9000,
  },
  mode: "development",
  devtool: "source-map", 
};