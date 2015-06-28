var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ReactToHtmlPlugin = require('react-to-html-webpack-plugin');

var path = require('path');
// var ejs = require('ejs');
// var fs = require('fs');

module.exports = {
    entry: [
      'webpack/hot/only-dev-server',
      "./js/app.js"
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') },
        ]
    },

    postcss: [
      require('autoprefixer-core')
    ],


    plugins: [
      new webpack.NoErrorsPlugin(),
      new ExtractTextPlugin('style.css', { allChunks: true }),
      // new ReactToHtmlPlugin('index.html', 'index.js', {
      //   template: ejs.compile(fs.readFileSync(__dirname + '/src/template.ejs', 'utf-8'))
      // })
    ]

};
