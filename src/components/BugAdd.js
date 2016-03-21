var React = require('react');
var ReactDOM = require('react-dom');

var BugAdd = React.createClass({
  
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
  },

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
  }
});

module.exports = BugAdd;