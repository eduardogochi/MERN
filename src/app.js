var bugData = [
  {id: 1, 
  	priority: 'P1', 
  	status:'Open', 
  	owner:'Eduardo', 
  	title:'App crashes on open'
  },
  {id: 2, 
  	priority: 'P2', 
  	status:'New', 
  	owner:'Abraham', 
  	title:'Error 404'
  },
   {id: 3, 
  	priority: 'P3', 
  	status:'Submitted', 
  	owner:'Oscar', 
  	title:'Server unstable'
  },
];

var BugList = React.createClass({
  render: function() {
    return (
      <div>BugList expected here!</div>
    )
  }
});

var BugTable = React.createClass({
  render: function() {
  	var bugRows = this.props.bugs.map(function(bug){
  	return <BugRow key={bug.id} bug={bug}/>	
  	});
    return (
      <table>
      	<thead>
      		<tr>
      			<th>Id</th>
      			<th>Status</th>
      			<th>Priority</th>
      			<th>Owner</th>
      			<th>Title</th>
      		</tr>
      	</thead>
      	<tbody>
      		{bugRows}
      	</tbody>
      </table>
    )
  }
});

var BugRow = React.createClass({
  render: function() {
    return (
      <tr>
      	<td>{this.props.bug.id}</td>
      	<td>{this.props.bug.status}</td>
      	<td>{this.props.bug.priority}</td>
      	<td>{this.props.bug.owner}</td>
      	<td>{this.props.bug.title}</td>
      </tr>
    )
  }
});

var BugFilter = React.createClass({
  render: function() {
    return (
      <div>BugFilter expected here!</div>
    )
  }
});

var BugAdd = React.createClass({
  render: function() {
    return (
      <div>BugAdd expected here!</div>
    )
  }
});

ReactDOM.render(
	<div>
	    <h1>Bug Tracker</h1>
	    <BugFilter />
	    <hr />
	    <BugTable bugs={bugData}/>
	    <hr />
	    <BugAdd />
	 </div>,
    document.getElementById('main')
);