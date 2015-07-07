var path = require('path');
var webpack = require('webpack');


// for Plugins that are in NPM, they have to be required since they are not included in Webpack.
var TimestampWebpackPlugin = require('timestamp-webpack-plugin');

module.exports = {
	// set the base directory for 'entry' prop below. Also, require() will start at this base folder
	context: path.resolve('js'), // set at '/js' relative to the project root

	entry: ["./utils", "./app"], // can be an array or a string
	output: {
		// where the bundle actually lives
		path: path.resolve('build/js/'), // save the generated files in /build/js/ on the server
		// where the bundle will be served up from on the server
		publicPath: '/public/assets/js/', // serve that file up at /assets/ on the server
		filename: "bundle.js"
	},

	plugins: [
		// This will make these variables globally available in all js files.
		// This can be useful for legacy scripts that assume window.$ instead of requiring jquery.
		// Comment this one out, and see what happens.
		new webpack.ProvidePlugin({
			$: "jquery", // makes $ = require('jquery') available globally in all the scripts.
			jQuery: "jquery",
			"window.jQuery": "jquery"
		}),

		// will run uglifyJS on the bundle that is generated.
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		// Generates a webpack timestamp file in timestamp.json
		new TimestampWebpackPlugin({
			path: path.join(__dirname),
			// default output is timestamp.json
			filename: 'timestamp.json'
		}),
		// Generate a comment banner at the top of bundle files. Useful for version and date info, since this will
		// survive minification.
		new webpack.BannerPlugin("*********************\nGenerated by 9a-builtin-plugins on " + new Date() + "\n*************************\n")
	],

	devServer: {
		// load index.html from /public
		contentBase: 'public'
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
		],

	},

	resolve: {
		// allows require('file') instead of require('file.es6')
		// overrides the default arrray, so we have to include .js files - http://webpack.github.io/docs/configuration.html#resolve-extensions
		extensions: ['', '.js', '.es6']
	}
};
