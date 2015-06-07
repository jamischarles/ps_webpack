// loaded only on a specific page
// This file is written using es6 features. This will break unless transpiled first by a loader like babel.js
let login = () => {
	console.log('login.es6 required in from app.js in 2b-es6-modules and transformed es6->es5 via babel.js loader');
}

login();



x_a();

function x_a() {
	// used before defined
	console.log('inside');
}

