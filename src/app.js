var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var BugFilter = React.createClass({
  render: function() {
    console.log("Rendering BugFilter");
    return (
      <div>BugFilter expected here!</div>
    )
  }
});

var BugRow = React.createClass({
  render: function() {
    console.log("Rendering BugFilter");
    return (
      <tr>
        <td>{this.props.bug._id}</td>
        <td>{this.props.bug.status}</td>
        <td>{this.props.bug.priority}</td>
        <td>{this.props.bug.owner}</td>
        <td>{this.props.bug.title}</td>
      </tr>
    )
  }
});

var BugTable = React.createClass({
  render: function() {
    var bugRows = this.props.bugs.map(function(bug){
    return <BugRow key={bug._id} bug={bug}/>  
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

  addBug: function(bug){
  	console.log('Adding Bug: ', bug);
    $.ajax({
      type:'POST',
      url:'/api/bugs',
      contentType:'application/json',
      data:JSON.stringify(bug),
      success: function(data){
        var bug = data;
        var bugsModified = this.state.bugs.concat(bug);
        this.setState({bugs: bugsModified});
      }.bind(this),
      error: function(xhr, status, err){
        console.log("Error adding bug: ", err);
      }
    });
  }
});


ReactDOM.render(
<BugList />,
    document.getElementById('main')
);