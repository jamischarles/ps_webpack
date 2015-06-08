# Install webpack-dev-server
$ npm install -g webpack-dev-server

# Start up a webserver at http://localhost:8080/
# It looks for webpack.config.js in the same folder
# "The dev server uses webpack’s watch mode. It also prevents webpack from emitting the resulting files to disk. Instead it keeps and serves the resulting files from memory."
$ webpack-dev-server


# HOTLOADING:
# Open http://localhost:8080/webpack-dev-server/ and make a change to witness hotloading


# DISABLE HOTLOADING:
# Open http://localhost:8080/ if you don't want to use hotloading



# If you don't like the status bar, but still want hotloading, use this:
$ webpack-dev-server --inline
# now open http://localhost:8080/





