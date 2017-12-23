var combineReducers = require('redux').combineReducers;

var mapReducer = require('../reducers/mapReducer.js');
var errorReducer = require('../reducers/errorReducer.js');

const mainReducer = combineReducers({
  mapReducer,
  errorReducer
});

module.exports = mainReducer;