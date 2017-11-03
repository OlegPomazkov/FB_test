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
    { name: "Function 2", status: 'true'},
    { name: "Function 3", status: 'true'}
  ]
};


function tableContent(state = initialState, action) {
  
  console.log('-------->',action.type);

  switch (action.type) {
    case 'SET_CONTENT':
      console.log('-------->',action.payload);
      return Object.assign({}, state, { content: action.payload });
    case 'TOGGLE_VISIBILITY':  
      console.log('-------->',action.payload);

      return Object.assign({}, state, { showDialog: (action.payload ? 0 : 1)});

    default:
      return state;
  }
}

module.exports = tableContent;