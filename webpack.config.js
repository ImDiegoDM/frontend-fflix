var path = require('path');

module.exports = {
    mode:'development',
    entry: './src/app.js',
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }]
    },
    output: {
        path: path.join(__dirname, './public'),
        filename: 'bundle.min.js'
    },
    devServer: {
      inline: true,
      contentBase: './public'
    }
}
