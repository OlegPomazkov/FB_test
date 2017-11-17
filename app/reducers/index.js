const initialState = {
  points: [
    {
      name: 'One',
      coords: [55.87, 37.56]
    },
    {
      name: 'Two',
      coords: [55.88, 37.55]
    }
  ],
  pathMap: {},
  path: {},
  isMap: false
} 

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case 'MAP_APPEARS':     
      return Object.assign({}, state, { 
        pathMap: action.payload.map,
        path: action.payload.path,
        isMap: true
      });    
    case 'ADD_POINT':
      var arr = state.points.map(item => item)
      var coords = state.points.map(item => item.coords)
      var coord = action.payload.coords

      arr.lenght ? arr.splice((arr.lenght-1), 0, action.payload) : arr.push(action.payload)
      coords.lenght ? coords.splice((coords.lenght-1), 0, coord) : coords.push(coord)
      state.path.geometry.setCoordinates(coords)

      return Object.assign({}, state, { 
        points: arr,
        path: state.path
      })
    case 'DELETE_POINT':
      var arr = state.points.map(item => item)
      var coords = state.points.map(item => item.coords)
      var deletedIndex = action.payload.index

      arr.splice(deletedIndex, 1)
      coords.splice(deletedIndex, 1)
      state.path.geometry.setCoordinates(coords)

      return Object.assign({}, state, { 
        points: arr,
        path: state.path
      })
    case 'CHANGE_POINTS_ORDER':  
// TODO: Not correct yet !!!!!!!!!!!!!!!!!!!!1        
      return Object.assign({}, state, { showDialog: (action.payload ? 0 : 1)});

    default:
      return state;
  }
}

module.exports = mainReducer;
