console.log('App loaded');

// load bootstrap since it's a global dep
require("../css/bootstrap.css");

// load the css for the app
require("../css/app.css"); // we can require CSS here because of the loader we set up in the config.

// if we didn't have the css/style loaders in the config, we could inline them here
// when chaining loaders (via the '!'), loaders are applied from right to left
// the filename is read, then
// css-loader processes urls, fonts and other resources, then
// style-loader then takes the output from css-loader and inlines into a <style> tag.
//
// require("style-loader!css-loader!../css/app.css"); //


