// This is the PROD version of config.
// We load the dev config, and then add another loader on to it, so the loader will only be used for prod.

var WebpackStrip = require('strip-loader');

// dev config uses this environment variable to set __DEV__ to true/false.
// Here we are setting it to false.
// This will disable all code blocks wrapped in 'if (__DEV__)'  statements
process.env.BUILD_DEV = 'false'; // or 0

// load the dev config
var devConfig = require('./webpack.config.js');


// Strip-loader. Transform that will strip out debug and console.log
var stripLoader = {
	test: [/\.js$/, /\.es6$/], // run on .es6 and .js files
	exclude: /node_modules/,
	loader: WebpackStrip.loader('debug', 'console.log')
};



// add our strip loader to the config
devConfig.module.loaders.push(stripLoader);

// console.log('loaders', devConfig.module.loaders);

// export it so this can be consumed and used
module.exports = devConfig;
