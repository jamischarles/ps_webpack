This demo shows how to use webpack in dev and prod modes...


It shows 3 features:
1) Create a minified bundle.js that is run through uglify.js
2) Feature flags. Won't execute blocks that are wrapped in 'if (__DEV__)' in prod mode. If flag=false, will be removed with webpack -p flag.
3) Remove console.log() and other undesirables in prod mode


Pre-reqs:
1) have a package.json
2) $ npm install babel-loader --save-dev
3) $ npm install --save-dev strip-loader
4) $ npm install

strip-loader is a loader that allows us to remove certain code (like console.log).


# Generate a bundle ready for prod (minified via uglify)
$ webpack -p

# Start the dev server in prod mode (rare that you'll need this)
$ webpack-dev-server -p


# FIXME: Any point in having this in here...?
# generate bundle in continuous watch mode
$ webpack --watch


# if (__DEV__) {
#   console.warn('Extra logging');
# }


# includes the above
$ BUILD_DEV=1 webpack-dev-server

# removes __DEV__ code
$ BUILD_DEV=0 webpack-dev-server



# TODO:
1) Try to tie it to node_env
2) Try to strip out console.logs

