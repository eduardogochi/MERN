var React = require('react');
var ReactDOM = require('react-dom');

var BugRow = require('./BugRow');

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

module.exports = BugTable;