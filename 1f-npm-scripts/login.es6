// loaded only on a specific page
// This file is written using es6 features. This will break unless transpiled first by a loader like babel.js
let login = (username, password) => {
  if(username !== 'admin' || password !== 'radical') {
	 console.log('incorrect login');
  }
};

login('admin', 'idunno');

