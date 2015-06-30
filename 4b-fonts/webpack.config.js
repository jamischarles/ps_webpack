var path = require('path');
var webpack = require('webpack');


module.exports = {
	entry: './js/app',

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
			// CSS loader loads css file with resolved imports and returns css code
			// Style Add exports of a module as style to DOM (injects it)
			// style loader can inject them into a page.
			{
				test: /\.css$/,
				exclude: /node_modules/,
				// when chaining loaders (via the '!'), loaders are applied from right to left
				// css-loader processes urls, fonts and other resources
				// style-loader then takes the output from css-loader and inlines into a <style> tag.
				loader: "style-loader!css-loader"
			},
			// Any png-image or ttf/eot-font files below or equal to 100K will be converted
			// to inline base64 instead
			// Support png and the webfont (ttf/eot) files. Increase the limit to see data-inlining of the fonts.
			{ test: /\.(png|ttf|eot)$/, loader: 'url-loader?limit=100000' }
		]
	},

	resolve: {
		// allows require('file') instead of require('file.es6')
		// overrides the default arrray, so we have to include .js files - http://webpack.github.io/docs/configuration.html#resolve-extensions
		extensions: ['', '.js', '.es6']
	}
};


