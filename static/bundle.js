(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var BugList = React.createClass({
  displayName: 'BugList',

  getInitialState: function () {
    return {
      bugs: []
    };
  },
  componentDidMount: function () {
    $.ajax('api/bugs').done(function (data) {
      this.setState({ bugs: data });
    }.bind(this));
  },
  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Bug Tracker'
      ),
      React.createElement(BugFilter, null),
      React.createElement('hr', null),
      React.createElement(BugTable, { bugs: this.state.bugs }),
      React.createElement('hr', null),
      React.createElement(BugAdd, { addBug: this.addBug })
    );
  },

  testNewBug: function () {
    var nextId = this.state.bugs.length + 1;
    this.addBug({ id: nextId, priority: 'P2', status: 'New', owner: 'Sandra', title: 'Warning on module 1' });
  },

  addBug: function (bug) {
    console.log('Adding Bug: ', bug);
    $.ajax({
      type: 'POST',
      url: '/api/bugs',
      contentType: 'application/json',
      data: JSON.stringify(bug),
      success: function (data) {
        var bug = data;
        var bugsModified = this.state.bugs.concat(bug);
        this.setState({ bugs: bugsModified });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log("Error adding bug: ", err);
      }
    });
  }

});

var BugTable = React.createClass({
  displayName: 'BugTable',

  render: function () {
    var bugRows = this.props.bugs.map(function (bug) {
      return React.createElement(BugRow, { key: bug._id, bug: bug });
    });
    return React.createElement(
      'table',
      null,
      React.createElement(
        'thead',
        null,
        React.createElement(
          'tr',
          null,
          React.createElement(
            'th',
            null,
            'Id'
          ),
          React.createElement(
            'th',
            null,
            'Status'
          ),
          React.createElement(
            'th',
            null,
            'Priority'
          ),
          React.createElement(
            'th',
            null,
            'Owner'
          ),
          React.createElement(
            'th',
            null,
            'Title'
          )
        )
      ),
      React.createElement(
        'tbody',
        null,
        bugRows
      )
    );
  }
});

var BugRow = React.createClass({
  displayName: 'BugRow',

  render: function () {
    console.log("Rendering BugFilter");
    return React.createElement(
      'tr',
      null,
      React.createElement(
        'td',
        null,
        this.props.bug._id
      ),
      React.createElement(
        'td',
        null,
        this.props.bug.status
      ),
      React.createElement(
        'td',
        null,
        this.props.bug.priority
      ),
      React.createElement(
        'td',
        null,
        this.props.bug.owner
      ),
      React.createElement(
        'td',
        null,
        this.props.bug.title
      )
    );
  }
});

var BugFilter = React.createClass({
  displayName: 'BugFilter',

  render: function () {
    console.log("Rendering BugFilter");
    return React.createElement(
      'div',
      null,
      'BugFilter expected here!'
    );
  }
});

var BugAdd = React.createClass({
  displayName: 'BugAdd',

  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'form',
        { name: 'BugAdd' },
        React.createElement('input', { type: 'text', name: 'owner', placeholder: 'Owner' }),
        React.createElement('input', { type: 'text', name: 'title', placeholder: 'Title' }),
        React.createElement(
          'button',
          { onClick: this.handleSubmit },
          'Add Bug'
        )
      )
    );
  },

  handleSubmit: function (e) {
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

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));
},{}]},{},[1]);
