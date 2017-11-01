// var combineReducers = require("redux").combineReducers;
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


export default function tableContent(state = initialState, action) {
  switch (action.type) {
    case 'something': //не забудьте обновить строку на константу
      return state;
    default:
      return state;
  }
}

module.exports = tableContent;