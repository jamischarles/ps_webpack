This demo shows an Express app that uses webpack middleware to auto-reload the webpack bundle.

The important pieces are in app.js, views/index.ejs.

Make a change to one of the JS files to see the bundle reload.

Pre-reqs:
1) have a package.json
2) $ npm install babel-loader --save-dev
3) $ npm install webpack-dev-middleware --save-dev
4) $ npm install express --save
5) $ npm install


# Then start the express dev server
$ npm start
or
$ node app.js


More reading:
https://github.com/webpack/webpack-dev-middleware

