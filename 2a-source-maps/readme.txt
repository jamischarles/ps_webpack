This demo shows how to use Source Maps with Webpack

# More on how SourceMaps work: http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/

# Install the deps
$ npm install


# Generate bundle.js and bundle.js.map (source map file)
# Look at the last line of bundle.js to see the comment that ties to the map file.
$ webpack -d

# start dev server in prod mode (-p) AND with source map support (-d)
# compare network vs the source tab in devtools
$ webpack-dev-server -p -d
