function errorReducer(state = {}, action) {
  switch (action.type) {
    case 'LOAD_MAP_API_ERROR':
      console.log('From ERROR_REDUCER ----> ', action.payload);

      return {...state};
      
    default:
      return state;
  }
}

module.exports = errorReducer;
