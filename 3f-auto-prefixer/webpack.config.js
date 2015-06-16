var path = require('path');
var webpack = require('webpack');


module.exports = {
	entry: './js/app',

	output: {
		// where the bundle actually lives
		path: path.resolve('build/'), // save the generated files in /build/js/ on the server
		// where the bundle will be served up from on the server
		publicPath: '/public/assets/', // serve that file up at /assets/ on the server
		filename: "bundle.js"
	},

	devServer: {
		// load index.html from /public
		contentBase: 'public'
	},


	// Loaders apply transformations before a file is added to bundle.js
	module: {
		loaders: [
			// CSS loader loads css file with resolved imports and returns css code
			// because we are using the plugin, it's
			{
				test: /\.css$/,
				exclude: /node_modules/,
				// when chaining loaders (via the '!'), loaders are applied from right to left
				loader: "style-loader!css-loader"
			},
			// LESS loader
			{
				test: /\.less$/,
				exclude: /node_modules/,
				loader: "style-loader!css-loader!autoprefixer-loader!less-loader"
			}
		]
	},


	resolve: {
		// allows require('file') instead of require('file.es6')
		// overrides the default arrray, so we have to include .js files - http://webpack.github.io/docs/configuration.html#resolve-extensions
		extensions: ['', '.js', '.es6']
	}
};


