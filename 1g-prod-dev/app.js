var debug = require('./utils').debug;

// This file is for my app only
console.log('App loaded');


// this will be stripped out in prod mode
if (__DEV__) {
	console.warn('WE ARE IN DEV MODE');
}

// this will be stripped out in prod mode
debug('makeFoo called');



// loads the login.es6 file
require('./login');



