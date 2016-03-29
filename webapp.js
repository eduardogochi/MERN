var express = require('express'),
	bodyParser = require('body-parser'),
	MongoClient = require('mongodb').MongoClient;

var app = express(),
	db;

app.use(express.static('static'));

app.get('/api/bugs', function(req,res){
	db.collection("bugs").find().toArray(function(err, docs){
	console.log("Query String: ", req.query);
	res.json(docs);
	/*
	var filter = {};
	if(req.query.priority){
		filter.priority = req.query.priority;
	}
	if(req.query.status){
		filter.status = req.query.status;
	}
	*/
});

	/*
	db.collection("bugs").find(filter).toArray(function(err, docs){
		res.json(docs)
	});
	*/
});

app.use(bodyParser.json());
app.post('/api/bugs', function(req,res){
	console.log('Req body: ', req.body);
	var newBug = req.body;
	db.collection("bugs").insertOne(newBug, function(err, result){
		var newId = result.insertedId;
		db.collection("bugs").find({_id: newId}).next(function(err, doc){	
			res.json(doc);
			});
	});
});


MongoClient.connect('mongodb://localhost/bugsdb', function(err, dbConnection){
	db = dbConnection;
	var server = app.listen(3000, function(){
		var port = server.address().port;
		console.log('Started server at port ', port);
	});
});