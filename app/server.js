var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

var PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

require("./routing/htmlRoutes")(app);
require("./routing/apiRoutes")(app);

app.listen(PORT, function () {
    console.log("We are listening on PORT: " + PORT);
})

module.exports = app;