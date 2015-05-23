// $ webpack-dev-server      to start it all up
module.exports = {
    entry: "./main.js",
    output: {
        // path: __dirname,
        filename: "bundle.js" // not needed for dev-server, since output is stored in memory
    }
 };
