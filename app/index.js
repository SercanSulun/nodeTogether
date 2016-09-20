//index.js
var express = require("express");
var app = express();
var motivations = require("./motivationalArray.js");
var pickOne = require("pick-one");
var exphbs = require("express-handlebars");
var catImages = [1, 2, 3, 4, 5, 6, 7, 8];
var callbackCount = 0;

var getPickOne = function (iv_Array){
	var rtn = pickOne(iv_Array);
	if(!rtn) {
		//console.log("innerOppps..!");
		rtn = getPickOne(iv_Array);
	}
	return rtn;
}

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
	//callbackCount++;
	//console.log(callbackCount);
	var motivation = getPickOne(motivations);
	var motivationString =  motivation.quote;
	var motivationPerson = motivation.name;
	var image = getPickOne(catImages);
	res.render('motivation', { motivationString, motivationPerson, image } );
});

module.exports = app;