var createStore = require("redux").createStore;
var mainReducer = require("../reducers/index.js");

function configureStore() {                             
  const store = createStore(mainReducer);              

  return store;
}

module.exports = configureStore;