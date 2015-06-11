var path = require('path');

module.exports = {
	// set the base directory for 'entry' prop below. Also, require() will start at this base folder
	context: path.resolve('js'),

	entry: ["./utils", "./app"], // can be an array or a string
	output: {
        // path: __dirname,
		filename: "bundle.js"
	},

	// turn on source maps
	devtool: 'eval-source-map',

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


