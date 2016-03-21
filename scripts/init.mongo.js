/*
On windows, install mongodb executable in C:/MongoDB
Create a c:/data/db folder
Add C:/MongoDB to the PATH enviroment variable

On a cmd window, start the MongoDB server by typing c:\MongoDB\bin\mongod
Leave this window open, and open a new cmd to start the mongo shell

To run this script in the mongo shell, type this:
mongo localhost:27017/bugsdb c:\<PATH_TO_YOUR_MERN_PROJECT>\scripts\init.mongo.js
*/


var db = new Mongo().getDB("bugsdb");

db.bugs.remove({});

db.bugs.insert(
[
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
	}
]
);