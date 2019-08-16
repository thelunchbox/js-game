const pjson = require('./package');
const path = require('path');

module.exports = {
  entry: `${__dirname}/script/main.js`,
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, `build-${pjson.name}-${pjson.version}/`),
    library: pjson.name,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
    //   { test: /\.svg$/, use: 'raw-loader' }
    ]
  },
  resolve: {
    modules: ['node_modules'],
  },
};