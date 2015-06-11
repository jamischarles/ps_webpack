// This is global JS provided to all apps.
document.write("1g-prod-mode works.");

// this will be stripped out in prod mode
console.log('logging from the utils.js file...');

var unusedVariable;

function debug(msg) {
	console.warn('DEBUG: ' + msg);
}

// expose the debug function
module.exports = {
	debug: debug
};
