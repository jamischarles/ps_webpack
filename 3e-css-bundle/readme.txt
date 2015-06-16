This demo shows generating a separate CSS bundle.

See '<link rel="stylesheet" href="/public/assets/styles.css">' in index.html.

Doesn't inject styles to <style> tag anymore.

It moves every require("style.css") in entry chunks into a separate css output file.
So your styles are no longer inlined into the javascript, but separate in a css bundle file (styles.css).

More reading here:
http://webpack.github.io/docs/stylesheets.html

Note:
Fonts have been removed from bootstrap.css to keep the demo simpler.

Pre-reqs for CSS & Style & Less Loaders:
1) have a package.json
2) $ npm install css-loader --save-dev
3) $ npm install style-loader --save-dev
4) $ npm install less-loader --save-dev
5) $ npm install extract-text-webpack-plugin --save
6) $ npm install


# Then run either
$ webpack
# or
$ webpack-dev-server




