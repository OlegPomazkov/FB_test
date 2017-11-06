var ReactDOM = require('react-dom');
var React = require('react');
var redux = require("redux");
var Provider = require("react-redux").Provider;
var configureStore = require("./store/configureStore");
var Table = require('./components/Table.js');
   
const store = configureStore();
//
ReactDOM.render(
  <Provider store={store}>
    <Table />
  </Provider>,
  document.getElementById("app")
);
