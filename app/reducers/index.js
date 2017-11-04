var combineReducers = require("redux").combineReducers;
// var tableContent = require("./tableContent.js");
// module.exports = combineReducers({tableContent});

const initialState =  {
  content: [
    { name: "TEST", 
      data: [
      { f1: "null"},
      { f2: 0},
      { f3: 0}
      ]
    }
  ],
  showDialog: 1,
  columnsShow: [
    { name: "Function 1", status: 'true'},
    { name: "Function 2", status: 'false'},
    { name: "Function 3", status: 'true'}
  ]
};


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