//index.js
var express = require("express");
var app = express();

module.exports = app.get('/', function(req, res){
	res.send("hello <b>world!</b>");
});
