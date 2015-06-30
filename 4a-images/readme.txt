This demo shows Image loaders in action.

It shows using the url-loader to:
1) Require an image from JS, which we then inject into the dom (app.js).
2) Inline a CSS image as a data-uri.

Note:
Fonts have been removed from bootstrap.css to keep the demo simpler.

Pre-reqs for loaders:
1) have a package.json
2) $ npm install url-loader --save-dev
3) $ npm install css-loader --save-dev
4) $ npm install style-loader --save-dev
5) $ npm install



# Then run either
$ webpack
# or
$ webpack-dev-server
