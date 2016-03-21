var express = require('express'),
	bodyParser = require('body-parser');

var app = express();

app.use(express.static('static'));

var bugData = [
{ id: 1,
  priority: 'P1',
  status: 'Open',
  owner: 'Eduardo',
  title: 'App crashes on open'
}, 
{ id: 2,
  priority: 'P2',
  status: 'New',
  owner: 'Lucas',
  title: 'Error 404'
}, 
{ id: 3,
  priority: 'P3',
  status: 'Submitted',
  owner: 'Abraham',
  title: 'Server unstable'
}];

app.get('/api/bugs', function(req,res){
	//res.status(200).send(JSON.stringify(bugData));
	res.json(bugData);
});

app.use(bodyParser.json());
app.post('/api/bugs', function(req,res){
	console.log('Req body: ', req.body);

	var newBug = req.body;
	newBug.id = bugData.length + 1;
	bugData.push(newBug);
	res.json(newBug);
});


var server = app.listen(3000, function(){
	var port = server.address().port;
	console.log('Started server at port ', port);
});