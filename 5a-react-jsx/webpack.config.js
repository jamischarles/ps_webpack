var path = require('path');

module.exports = {
	// set the base directory for 'entry' prop below. Also, require() will start at this base folder
	context: path.resolve('js'), // set at '/js' relative to the project root

    entry: ["./utils", "./app"],
	output: {
		path: path.resolve('build/js/'), // save the generated files in /build/js/ on the server
		publicPath: '/public/assets/js/', // serve that file up at /assets/ on the server
		filename: "bundle.js"
	},

	devServer: {
		// load index.html from /public
		contentBase: 'public'
	},

	// Loaders apply transformations before a file is added to bundle.js
	module: {
		loaders: [
			// Babel loader. Transforms .es6 file from es6->es5 before it's added to bundle.js
			// This loader also transforms jsx.
			{
				// include .es6 files. Doesn't have to be a .es6 file. We do it here for perf reasons so
				// not all js files are unnecessarily compiled.
				test: /\.es6$/,
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


