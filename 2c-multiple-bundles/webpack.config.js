var path = require('path');
var webpack = require('webpack');

// Move the shared parts of the files into shared.js.
// Try taking this out to see the difference...
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');

module.exports = {
	// set the base directory for 'entry' prop below. Also, require() will start at this base folder
	context: path.resolve('js'), // set at '/js' relative to the project root

	entry: {
		about: './about_page.js', // since we use context above, we don't have to add '/js' here
		home: './home_page.js',
		contact: './contact_page.js'
	},

	output: {
		// where the bundle actually lives
		path: path.resolve('build/js/'), // save the generated files in /build/js/ on the server
		// where the bundle will be served up from on the server
		publicPath: '/public/assets/js/', // serve that file up at /assets/ on the server
		filename: "[name].js"
	},

	// apply the 'commons' plugin
	plugins: [commonsPlugin],

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
		]
	},

	resolve: {
		// allows require('file') instead of require('file.es6')
		// overrides the default arrray, so we have to include .js files - http://webpack.github.io/docs/configuration.html#resolve-extensions
		extensions: ['', '.js', '.es6']
	}
};


