var createStore = require("redux").createStore;
var rootReducer = require("../reducers");

function configureStore(initialState) {
  const store = createStore(rootReducer, initialState);

  return store;
}

module.exports = configureStore;