var path = require('path');




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
			},

			// Our custom 'strip loader', see loaders/strip.js. Loads in json files and strips out comments.
			{
				test: /\.json$/, // include .json files
				exclude: /node_modules/, // exclude node_modules
				// First the strip loader is processed (right to left), THEN the json-loader reads the json file.
				// This syntax allows reference a local loader. This makes testing easy.
				// Next step would be to publish our loader on NPM.
				// The reason this works is that webpack require()s in the modules listed here.
				// path.resolve() allows us to get the absolute local path so we can require the local file.
				loader: "json-loader!" + path.resolve('loaders/strip')
			}
		],

	},

	resolve: {
		// allows require('file') instead of require('file.es6')
		// overrides the default arrray, so we have to include .js files - http://webpack.github.io/docs/configuration.html#resolve-extensions
		extensions: ['', '.js', '.es6']
	}
};
