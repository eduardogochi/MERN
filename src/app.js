var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var BugList = require('./components/BugList');

ReactDOM.render(
<BugList />,
    document.getElementById('main')
);