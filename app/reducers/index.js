var combineReducers = require("redux").combineReducers;
// var tableContent = require("./tableContent.js");

// module.exports = combineReducers({tableContent});

const initialState =  {content: [
    { "name": "TEST", 
      "data": [
      { "f1": "null"},
      { "f2": 0},
      { "f3": 0}
      ]
    }
  ]
};


function tableContent(state = initialState, action) {
  
  console.log('-------->',action.type);

  switch (action.type) {
    case 'SET_CONTENT':
      console.log('-------->',action.payload);
      return {content: action.payload } //       return { ...state, content: action.payload }
    default:
      return state;
  }
}

module.exports = tableContent;