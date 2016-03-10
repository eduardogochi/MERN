var BugList = React.createClass({
  render: function() {
    return (
      <div>BugList expected here!</div>
    )
  }
});

var BugTable = React.createClass({
  render: function() {
    return (
      <div>BugTable expected here!</div>
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
	    <BugTable />
	    <hr />
	    <BugAdd />
	 </div>,
    document.getElementById('main')
);