// This is the DEV version of config.


var webpack = require('webpack');

// This defines __DEV__ as a global variable which can be used in the files
// definePlugin takes raw strings and inserts them, so you can put strings of JS if you want.
// http://webpack.github.io/docs/list-of-plugins.html#defineplugin
var definePlugin = new webpack.DefinePlugin({
	// we are setting proccess.env.BUILD_ENV to 'false' in the prod config file
	__DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')), // default to true
	// __DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV || 'true')), // tie it to NODE_ENV

	// use another variable. This could be used for feature flags and experimentation.
	__PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false')) // default to false
});




module.exports = {
    entry: ["./utils", "./app"], // can be an array or a string
	output: {
        // path: __dirname,
		filename: "bundle.js"
	},
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
	},

	plugins: [definePlugin]
};


