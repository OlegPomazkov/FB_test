var createStore = require("redux").createStore;
var tableContent = require("../reducers/index.js");

function configureStore() {                             //initialState) {
  const store = createStore(tableContent);              //, initialState);

  // if (module.hot) {
  //   module.hot.accept('../reducers', () => {
  //     const nextRootReducer = require('../reducers')
  //     store.replaceReducer(nextRootReducer)
  //   })
  // }

  return store;
}

module.exports = configureStore;