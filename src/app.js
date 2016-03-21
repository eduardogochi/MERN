var BugList = React.createClass({
  getInitialState: function(){
  	return{
  		bugs:[]
  	};
  },
  componentDidMount: function(){
      $.ajax('api/bugs').done(function(data){
          this.setState({bugs:data});
      }.bind(this));
  },
  render: function() {
    return (
    <div>
	    <h1>Bug Tracker</h1>
	    <BugFilter />
	    <hr />
	    <BugTable bugs={this.state.bugs}/>
	    <hr />
	    <BugAdd addBug={this.addBug}/>
	 </div>
    )
  },

  testNewBug: function(){
  	var nextId = this.state.bugs.length + 1;
  	this.addBug({id: nextId, priority: 'P2', status: 'New', owner: 'Sandra', title: 'Warning on module 1'});
  },

  addBug: function(bug){
  	console.log('Adding Bug: ', bug);
  	var bugsModified = this.state.bugs.slice();
  	bugsModified.push(bug);
  	this.setState({bugs: bugsModified});

  },

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
  	console.log("Rendering BugFilter");
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
  	console.log("Rendering BugFilter");
    return (
      <div>BugFilter expected here!</div>
    )
  }
});

var BugAdd = React.createClass({
  render: function() {
    return (
      <div>
      	<form name="BugAdd">
      		<input type="text" name="owner" placeholder="Owner" />
      		<input type="text" name="title" placeholder="Title" />
      		<button onClick={this.handleSubmit}>Add Bug</button>
      	</form>
      </div>
    )
  },

  handleSubmit: function(e){
  	e.preventDefault();
  	var form = document.forms.BugAdd;
  	this.props.addBug({
  		owner: form.owner.value,
  		title: form.title.value,
  		status: "New",
  		priority: "P1"
  	});
  	form.owner.value = "";
  	form.title.value = "";
  }
});

ReactDOM.render(
<BugList />,
    document.getElementById('main')
);