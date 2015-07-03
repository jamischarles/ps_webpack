// This is just a vanilla generated express app.

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// load the routes from /routes folder
app.use('/', routes);



/**
 * *********************************************
 * WEBPACK DEV MIDDLEWARE START
 * *********************************************
 */

// Only load this middleware in dev mode (important).
if (app.get('env') === 'development') {
	var webpackMiddleware = require("webpack-dev-middleware");
	var webpack = require('webpack');

	// use the base settings from the config file
	var config = require('./webpack.config');


	// set up the webpack middleware for all routes
	// 2nd param is middleware specific config options.
	app.use(webpackMiddleware(webpack(config), {
		// public path to bind the middleware to
		// use the same as in webpack
		// The bundle will be generated at '/build/bundle.js' in memory.
		// It won't be generated to the filesystem.
		publicPath: "/build", // required

		// all options optional

		noInfo: false, // display no info to console (only warnings and errors)
		quiet: false, // display nothing to the console

		// switch into lazy mode
		// that means no watching, but recompilation on every request
		lazy: false,

		// watch options (only used for lazy: false)
		watchOptions: {
			aggregateTimeout: 300,
			poll: true
		},

		// custom headers
		headers: { "X-Custom-Header": "yes" },

		stats: {
			colors: true
		}
	}));

}

/**
 * *********************************************
 * WEBPACK DEV MIDDLEWARE END
 * *********************************************
 */


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// fire up the server
var server = app.listen(8000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

module.exports = app;
