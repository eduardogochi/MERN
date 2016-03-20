var express = require('express');
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
  owner: 'Abraham',
  title: 'Error 404'
}, 
{ id: 3,
  priority: 'P3',
  status: 'Submitted',
  owner: 'Oscar',
  title: 'Server unstable'
}];

app.get('/api/bugs', function(req,res){
	res.status(200).send(JSON.stringify(bugData));
});


var server = app.listen(3000, function(){
	var port = server.address().port;
	console.log('Started server at port ', port);
});