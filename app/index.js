//index.js
var express = require("express");
var app = express();
var motivations = require("motivations");
var pickOne = require("pick-one");
var exphbs = require("express-handlebars");
var catImages = [1, 2, 3, 4, 5, 6];
var callbackCount = 0;
app.use(express.static('./app/public'));

app.engine('handlebars',exphbs({
	defaultLayout: 'main',
	layoutsDir: './app/views/layouts'
}));

app.set('views','./app/views');
app.set('view engine','handlebars');

app.get('/:motivationID', function(req, res){
	var id = req.params.motivationID;
	res.render('motivation', { motivationString: motivations[id] } );
});


app.get('/', function(req, res){
	callbackCount++;
	var motivationString = callbackCount+ " : " + pickOne(motivations);
	var image = pickOne(catImages);
	res.render('motivation', { motivationString, image } );
});

module.exports = app;