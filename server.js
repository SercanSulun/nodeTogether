//server.js
var express = require('express');
var host = "127.0.0.1";
var port = "8989";

var app = express();
app.listen(port, host);
console.log("Server started on 127.0.0.1:8989");