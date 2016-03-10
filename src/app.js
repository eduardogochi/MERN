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
      		<BugRow id={1} priority={"P1"} status={"Open"} owner={"Eduardo"} title={"Something failed"}/>
      		<BugRow id={2} priority={"P2"} status={"New"} owner={"Abraham"} title={"Not working"}/>
      	</tbody>
      </table>
    )
  }
});

var BugRow = React.createClass({
  render: function() {
    return (
      <tr>
      	<td>{this.props.id}</td>
      	<td>{this.props.status}</td>
      	<td>{this.props.priority}</td>
      	<td>{this.props.owner}</td>
      	<td>{this.props.title}</td>
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
	    <BugTable />
	    <hr />
	    <BugAdd />
	 </div>,
    document.getElementById('main')
);