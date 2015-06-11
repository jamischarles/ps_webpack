This demo shows how to use webpack in dev and prod modes...

Pre-reqs:
1) have a package.json
2) $ npm install babel-loader --save-dev
3) $ npm install strip-loader --save-dev
4) $ npm install

strip-loader is a loader that allows us to remove certain code (like console.log).




It shows 4 features:
1) Generate a bundle ready for prod (minified via uglify)
$ webpack -p

2) Feature flags. Won't execute blocks that are wrapped in 'if (__DEV__)' in prod mode (you have to turn on prod mode).
If flag=false, will be removed with webpack -p flag.

# if (__DEV__) {
#   console.warn('Extra logging');
# }

# Turns on dev mode
$ BUILD_DEV=1 webpack-dev-server
$ BUILD_DEV=1 webpack

# Turns on prod mode, and removes __DEV__ code (see dev config file)
$ BUILD_DEV=0 webpack-dev-server
$ BUILD_DEV=0 webpack

3) Dev vs Prod config files (combine with -p flag to minify)
$ webpack-dev-server --config webpack-production.config.js
$ webpack --config webpack-production.config.js

compare to normal
$ webpack-dev-server

4) Remove console.log() and other undesirables in prod mode (defined in prod config file)
See strip-loader in the production config





# You can start the dev server in prod mode (rare that you'll need this)
$ webpack-dev-server -p
