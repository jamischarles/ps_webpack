/**
 * This is our custom loader file. As you can see it is a normal node.js file that exports a function.
 * It takes input (from a file or another loader output), manipulates it, and then returns that input.
 * The fact that we can leverage any npm module is extremely powerful. We can build a loader for any
 * usecase relatively easily.
 */


// npm module that will strip comments in JSON
var stripComments = require('strip-json-comments');

// source is the input from the file, or the previous loader.
module.exports = function(source) {
	this.cacheable(); // we're supposed to use this if possible.

	// try this for testing
	// console.log('source', source);
	// console.log('strippedSource', stripComments(source));

	return stripComments(source);
};
