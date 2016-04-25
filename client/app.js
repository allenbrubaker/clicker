var React = require('react');
var Model = require('./model');
var Root = require('./views/root');

var model = new Model()
model.subject.subscribe(appState => {
  React.render(
    <Root {...appState}/>,
    document.getElementById('app')
  );
});