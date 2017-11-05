var combineReducers = require("redux").combineReducers;
const initialState = require("../data/initialState.js");
var tableColumns = require("../data/tableDescription.js").tableColumns; 

function tableContent(state = initialState, action) {
  if( !state.columnsShow) {
    // TODO: Here to check local storage later !!!
    
    var state = Object.assign({}, state, {columnsShow: {} });
    var columnName;

    for( let i = 0; i < tableColumns.length; i++ ){
      columnName =  tableColumns[i].split('__');
      if (columnName.length === 1 ){
        state.columnsShow[tableColumns[i]] = state.visibility[columnName[0]];
      } else {
        state.columnsShow[tableColumns[i]] = state.visibility[columnName[0]][columnName[1]];
      }
    }
  }
  
  switch (action.type) {
    case 'SET_CONTENT':
      return Object.assign({}, state, { content: action.payload });
    case 'SET_TOTAL':
      return Object.assign({}, state, { total: action.payload });
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
