var ReactDOM = require('react-dom');
var React = require('react');
var redux = require('redux');
var Provider = require('react-redux').Provider;
var configureStore = require('./store/configureStore');
var PathConstructor = require('./containers/PathConstructor.js');
   
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PathConstructor />
  </Provider>,
  document.getElementById('app')
);
