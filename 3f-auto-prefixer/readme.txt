This demo shows using the autoprefixer loader.

To keep things simple, we aren't using a CSS bundle.

To verify, compare app.less file with the output in the 2nd <style> tag in index.html.


More reading here:
https://github.com/passy/autoprefixer-loader

Note:
Fonts have been removed from bootstrap.css to keep the demo simpler.

Pre-reqs for CSS & Style & Less Loaders:
1) have a package.json
2) $ npm install css-loader --save-dev
3) $ npm install style-loader --save-dev
4) $ npm install less-loader --save-dev
5) $ npm install autoprefixer-loader --save-dev
6) $ npm install


# Then run either
$ webpack
# or
$ webpack-dev-server




