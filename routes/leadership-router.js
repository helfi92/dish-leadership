var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var leadershipRouter = express.Router();

leadershipRouter.use(bodyParser.json());

leadershipRouter
	.route('/')
	.all(function(req, res, next){
		res.writeHead(200, {'Content-Type': 'text/plain'});
		next();
	})
	.get(function(req, res, next){
		res.end('Will send all the dishes to you');
	})
	.post(function(req, res, next){
		res.end('Will add the leadership ' + req.body.name + ' with details ' + req.body.description);
	})
	.delete(function(req, res, next){
		res.end('Deleting all dishes');
	});
leadershipRouter
	.route('/:leadershipId')
	.get(function(req, res, next){
		res.end('Will send details of leadership with id: ' + req.params.leadershipId + ' to you');
	})
	.put(function(req, res, next){
		res.end('id: ' + req.params.leadershipId + ' Will update leadership ' + req.body.name + ' with details ' + req.body.description);
	})
	.delete(function(req, res, next){
		res.end('Will delete leadership with id: ' + req.params.leadershipId);
	});


module.exports = leadershipRouter;