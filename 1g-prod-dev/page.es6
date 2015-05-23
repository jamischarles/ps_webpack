// loaded only on a specific page
// This file is written using es6 features. This will break unless transpiled first by a loader like babel.js
let logIt = () => {
	console.log('page.es6 required in from app.js in 1f-npm-scripts transformed es6->es5 via babel.js loader');
}

logIt();



x_a();

function x_a() {
	// used before defined
	console.log('inside the .es6 file');
}

