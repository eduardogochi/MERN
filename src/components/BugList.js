var React = require('react'),
    ReactDOM = require('react-dom'),
    $ = require('jquery');

var BugFilter = require('./BugFilter'),
    BugTable = require('./BugTable'),
    BugAdd = require('./BugAdd');

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
  }

});

module.exports = BugList;