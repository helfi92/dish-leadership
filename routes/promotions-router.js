var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var promotionsRouter = express.Router();

promotionsRouter.use(bodyParser.json());

promotionsRouter
	.route('/')
	.all(function(req, res, next){
		res.writeHead(200, {'Content-Type': 'text/plain'});
		next();
	})
	.get(function(req, res, next){
		res.end('Will send all the dishes to you');
	})
	.post(function(req, res, next){
		res.end('Will add the promotion ' + req.body.name + ' with details ' + req.body.description);
	})
	.delete(function(req, res, next){
		res.end('Deleting all dishes');
	});
promotionsRouter
	.route('/:promotionId')
	.get(function(req, res, next){
		res.end('Will send details of promotion with id: ' + req.params.promotionId + ' to you');
	})
	.put(function(req, res, next){
		res.end('id: ' + req.params.promotionId + ' Will update promotion ' + req.body.name + ' with details ' + req.body.description);
	})
	.delete(function(req, res, next){
		res.end('Will delete promotion with id: ' + req.params.promotionId);
	});

//app.use('/dishes',promotionsRouter);

module.exports = promotionsRouter;