var ReactDOM = require('react-dom');
var React = require('react');
var redux = require('redux');
var Provider = require('react-redux').Provider;
var configureStore = require('./store/configureStore').store;
var sagaMiddleware = require('./store/configureStore').sagaMiddleware;

var PathConstructor = require('./containers/PathConstructor.js');

var loadMapApiSaga = require("./sagas/loadMapApiSaga.js").loadMapApiSaga;
   
const store = configureStore();

sagaMiddleware.run(loadMapApiSaga);

ReactDOM.render(
  <Provider store={store}>
    <PathConstructor />
  </Provider>,
  document.getElementById('app')
);

store.dispatch({type: 'LOAD_MAP_API'});
