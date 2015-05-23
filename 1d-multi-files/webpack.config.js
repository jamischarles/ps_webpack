// $ webpack-dev-server      to start it all up
// Changes to this file require that you restart the dev server to inherit the changes.
module.exports = {
    entry: ["./main", "./app"], // can be an array or a string
    output: {
        // path: __dirname,
        filename: "bundle.js" // not needed for dev-server, since output is stored in memory
    }
 };
