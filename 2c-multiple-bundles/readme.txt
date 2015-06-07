This demo shows file splitting so functioality can be lazy loaded.
Instead of generating one bundle.js file it generates a file for each key in the 'entry' object.

In addition, we've automatically extracted the common parts to shared.js.


Pre-reqs for babel:
1) have a package.json
2) $ npm install babel-loader --save-dev
3) $ npm install


# Then run either
$ webpack
# or
$ webpack-dev-server




