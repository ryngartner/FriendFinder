// Require statements for dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listening on PORT
app.listen(PORT, function () {
    console.log("We are listening on PORT: " + PORT);
})

module.exports = app;