This demo shows some commmon webpack plugins.


Loaders are like browserify transforms. They transform individual files. Plugins are kind of like Grunt tasks.
Plugins (can) work on the entire bundle. There is an uglify plugin for minifying
the bundle. A banner plugin adds a comment block to the generated bundle.


Points of interest:
- js/app.js
- webpack.config.js (see the .plugins[] array)
- build/bundle.js


Pre-reqs:
1) have a package.json
2) $ npm install babel-loader --save-dev
3) $ npm install timestamp-webpack-plugin --save-dev
5) $ npm install


# Then run either
$ webpack
# or
$ webpack-dev-server


More plugins here:
http://webpack.github.io/docs/list-of-plugins.html
https://www.npmjs.com/search?q=webpack-plugin
