var combineReducers = require("redux").combineReducers;
const initialState = require("../data/initialState.js");

function tableContent(state = initialState, action) {
  
  switch (action.type) {
    case 'SET_CONTENT':
      return Object.assign({}, state, { content: action.payload });
    case 'TOGGLE_VISIBILITY':  
      return Object.assign({}, state, { showDialog: (action.payload ? 0 : 1)});
    case 'CHANGE_COLS_STATUS':
      return Object.assign({}, state, { columnsShow: action.payload });;

    default:
      return state;
  }
}

module.exports = tableContent;

// var tableContent = require("./tableContent.js");
// module.exports = combineReducers({tableContent});
