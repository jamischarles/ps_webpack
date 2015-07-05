This demo shows using a custom loader that we wrote.

Remember that a loader transforms some input. For our example we are reading a JSON file
and removing all the comments from it.

Points of interest:
- js/app.js
- config/config.json
- loaders/strip.js
- webpack.config.js

To test it out, run webpack and check the config obj in build/js/bundle.js.

Pre-reqs:
1) have a package.json
2) $ npm install babel-loader --save-dev
3) $ npm install json-loader --save-dev
4) $ npm install strip-json-comments --save-dev
5) $ npm install


# Then run either
$ webpack
# or
$ webpack-dev-server


More reading:
http://webpack.github.io/docs/how-to-write-a-loader.html
