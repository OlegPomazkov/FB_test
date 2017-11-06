var createStore = require("redux").createStore;
var tableContent = require("../reducers/index.js");

function configureStore() {                             
  const store = createStore(tableContent);              

  return store;
}

module.exports = configureStore;