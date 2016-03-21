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