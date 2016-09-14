//server.js
var express = require('express');
var routes = require('./app/index.js');
var host = process.env.HOST || "0.0.0.0";
var port = process.env.PORT || "8989";

var app = express();
app.use(routes);

app.listen(port, host);
console.log("Server started on 127.0.0.1:8989");