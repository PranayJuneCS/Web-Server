var express = require("express");
var app = express();

var PORT = process.env.PORT || 3000;

var middleware = require("./middleware.js");

app.use(middleware.logger);

app.get("/about", middleware.requireAuthentication, function (req, res) {
	res.send("About us yo woo!");
});

app.use(express.static(__dirname + "/public"));
//console.log(__dirname);

app.listen(PORT, function() {
	console.log("Express server started.");
	console.log("Running on port: " + PORT);
});

//git subtree push --prefix web-server heroku master
//Use from node dir to push to heroku