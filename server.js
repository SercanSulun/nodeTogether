//server.js
var express = require('express');
var routes = require('./app/index.js');
var host = process.env.HOST || "0.0.0.0";
var port = process.env.PORT || "8989";

var app = express();
app.use(routes);

app.listen(port, host);
var messageString = "Server started on "+host+":"+port;
console.log(messageString);