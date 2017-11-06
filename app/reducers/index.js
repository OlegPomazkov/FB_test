var combineReducers = require("redux").combineReducers;
const initialState = require("../data/initialState.js");
var tableColumns = require("../data/tableDescription.js").tableColumns; 

function tableContent(state = initialState, action) {
  if (localStorage.getItem('visibility')){
    state = Object.assign({}, state, {visibility: JSON.parse(localStorage.getItem('visibility'))});
  } else {
    localStorage.setItem('visibility', JSON.stringify(state.visibility)); 
  }
  if( !state.columnsShow) {
    var columnName;
    
    state = Object.assign({}, state, {columnsShow: {} }); 
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
    case 'SET_CHOOSE_FILTER':  
      return Object.assign({}, state, { chooseFilter: action.payload });  
    case 'CHANGE_COLS_STATUS':
      localStorage.setItem('visibility', JSON.stringify(action.payload.visibility));

      return Object.assign({}, state, { 
        columnsShow: action.payload.columnsShow,
        visibility: action.payload.visibility 
      });

    default:
      return state;
  }
}

module.exports = tableContent;
