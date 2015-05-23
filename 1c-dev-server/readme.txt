# Install webpack-dev-server
$ npm install -g webpack-dev-server

# Start up a webserver at http://localhost:8080/
# It looks for webpack.config.js in the same folder
# "The dev server uses webpack’s watch mode. It also prevents webpack from emitting the resulting files to disk. Instead it keeps and serves the resulting files from memory."
$ webpack-dev-server





# Option 1) - Inline hotloading via websockets (no iframe)
$ webpack-dev-server --inline
# now open http://localhost:8080/

# Option 2) Hotloading with indication (adds the status bar)
$ webpack-dev-server
# Open http://localhost:8080/webpack-dev-server/ for hotloading
# Open http://localhost:8080/ for non-hotloading




# FIXME: These instructions need to be simplified. There's basically two options. Iframe or not. Do we ever want to
not have hot loading? It's really easy to enable.

# TODO:
- explore differences between --hot and --inline. They seem to be similar.
