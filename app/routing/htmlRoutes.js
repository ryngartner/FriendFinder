var app = require("../../server");
var path = require("path");

module.exports = function(app){
    app.get("/survey", function (req, res){
        res.send(path.join(__dirname, "../public/survey.html"))
    })
    app.get("/home", function (req, res){
        res.send(path.join(__dirname, "../public/home.html"))
    })
}

