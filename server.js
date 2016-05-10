var http = require('http');
var fs = require('fs');
var path = require('path');
var express = require('express');
var morgan = require('morgan');

var dishRouter = require('./routes/dish-router');
var leadershipRouter = require('./routes/leadership-router');

var app = express();
var hostname = 'localhost';
var port = '8000';


app.use(morgan('dev'));

app.use('/dishes', dishRouter);
app.use('/leadership', leadershipRouter);


app.use(express.static(__dirname + '/public'));

var server = http.createServer(app);
server.listen(port, hostname, function(){
	console.log(`Server running at https://${hostname}:${port}/`);
});