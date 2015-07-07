// This file is for my app only
console.log('App loaded');

// '$' is globally defined by the 'provide' plugin in webpack config.
// Without that, this statement would throw an error.
$('#testDiv').text('jQuery modified content this (see app.js)');


// loads the login.es6 file
require('./login');
