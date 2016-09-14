//index.js
var express = require("express");
var app = express();
var motivations = require("motivations");
var pickOne = require("pick-one");

module.exports = app.get('/:motivationID', function(req, res){
	var id = req.params.motivationID;
	res.send(motivations[id]);
});
