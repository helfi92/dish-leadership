var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter
	.route('/')
	.all(function(req, res, next){
		res.writeHead(200, {'Content-Type': 'text/plain'});
		next();
	})
	.get(function(req, res, next){
		res.end('Will send all the dishes to you');
	})
	.post(function(req, res, next){
		res.end('Will add the dish ' + req.body.name + ' with details ' + req.body.description);
	})
	.delete(function(req, res, next){
		res.end('Deleting all dishes');
	});
dishRouter
	.route('/:dishId')
	.get(function(req, res, next){
		res.end('Will send details of dish with id: ' + req.params.dishId + ' to you');
	})
	.put(function(req, res, next){
		res.end('id: ' + req.params.dishId + ' Will update dish ' + req.body.name + ' with details ' + req.body.description);
	})
	.delete(function(req, res, next){
		res.end('Will delete dish with id: ' + req.params.dishId);
	});

//app.use('/dishes',dishRouter);

module.exports = dishRouter;