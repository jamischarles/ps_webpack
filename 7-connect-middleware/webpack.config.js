// This file will be loaded from app.js for the middleware config.
var path = require('path');

module.exports = {
	// set the base directory for 'entry' prop below. Also, require() will start at this base folder
	context: path.resolve('public/javascripts'), // set at '/js' relative to the project root

	entry: ["./utils", "./app"], // can be an array or a string
	output: {
		// where the bundle actually lives
		path: path.resolve('public/build/'), // save the generated files in /build/js/ on the server
		// where the bundle will be served up from on the server
		publicPath: '/',
		filename: "bundle.js"
	},

	devtool: 'eval-source-map',

	// devServer: {
	// 	// load index.html from /public
	// 	contentBase: 'public'
	// },

	// Loaders apply transformations before a file is added to bundle.js
	module: {
		loaders: [
			// Babel loader. Transforms .es6 file from es6->es5 before it's added to bundle.js
			{
				test: /\.es6$/, // include .es6 files
				exclude: /node_modules/, // exclude node_modules
				loader: "babel-loader"
			}
		]
	},

	resolve: {
		// allows require('file') instead of require('file.es6')
		// overrides the default arrray, so we have to include .js files - http://webpack.github.io/docs/configuration.html#resolve-extensions
		extensions: ['', '.js', '.es6']
	}
};


