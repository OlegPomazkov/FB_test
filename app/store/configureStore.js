var createStore = require("redux").createStore;
var applyMiddleware = require("redux").applyMiddleware;
var createSagaMiddleware = require("redux-saga");

var mainReducer = require("../reducers/index.js");

const sagaMiddleware = createSagaMiddleware.default();

function configureStore() {                             
  const store = createStore(
  	mainReducer,
  	applyMiddleware(sagaMiddleware)
  );   

  return store;
}

module.exports.sagaMiddleware = sagaMiddleware;
module.exports.store = configureStore;