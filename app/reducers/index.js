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
  placemarks: [],
  lines: [],
  isMap: false
} 

function mainReducer(state = initialState, action) {
  let arr = state.points.map(item => item)
  let placemarks = state.placemarks.map(item => item)
  let lines = state.lines.map(item => item)

  switch (action.type) {

    case 'MAP_APPEARS':     
      return Object.assign({}, state, { 
        pathMap: action.payload.map,
        placemarks: action.payload.placemarks,
        lines: action.payload.lines,
        isMap: true
      });

    case 'ADD_POINT':
      let name = action.payload.name
      let coord = action.payload.coords
      let placemark = action.payload.placemark

      arr.push({name: name, coords: coord})
      placemarks.push(placemark)
      state.pathMap.geoObjects.add(placemarks[placemarks.length - 1])

      if ( arr.length > 1) {
        let line = new window.ymaps.Polyline(
          [arr[arr.length-2].coords,arr[arr.length-1].coords],
          {},{})
        lines.push(line)
        state.pathMap.geoObjects.add(lines[arr.length-2])
      } 
       
      return Object.assign({}, state, { 
        points: arr,
        pathMap: state.pathMap,
        placemarks: placemarks,
        lines: lines
      })

    case 'DELETE_POINT':
      let deletedIndex = action.payload.index;

      if (lines.length) {
        let deletedLine = (deletedIndex === 0) ? deletedIndex : (deletedIndex - 1)
      
        state.pathMap.geoObjects.remove(lines[deletedLine])
        lines.splice(deletedLine, 1) 
        if ((deletedIndex !== (arr.length-1)) && (deletedIndex !== 0))  {
          lines[deletedIndex-1].geometry.setCoordinates([arr[deletedIndex-1].coords, arr[deletedIndex+1].coords])
        }
      }

      arr.splice(deletedIndex, 1)
      state.pathMap.geoObjects.remove(placemarks[deletedIndex])
      placemarks.splice(deletedIndex, 1)

      return Object.assign({}, state, { 
        points: arr,
        pathMap: state.pathMap,
        placemarks: placemarks,
        lines: lines
      })

    case 'CHANGE_POINTS_ORDER':
      var from = action.payload.from
      var to = action.payload.to

      console.log('changed from ', action.payload.from, ' to ', action.payload.to)
      if (from === to ) return Object.assign({}, state) 
      
      if(from < to) to--
      arr.splice(to, 0, arr.splice(from, 1)[0])
      placemarks.splice(to, 0, placemarks.splice(from, 1)[0])

      lines.forEach( item => {state.pathMap.geoObjects.remove(item)})
      lines = []
      for ( let i = 1; i < arr.length; i++) {
        let line = new window.ymaps.Polyline(
          [arr[i-1].coords,arr[i].coords],
          {},{})
        lines.push(line)
        state.pathMap.geoObjects.add(lines[i-1])
      }      

      return Object.assign({}, state, { 
        points: arr,
        pathMap: state.pathMap,
        placemarks: placemarks,
        lines: lines
      })

    default:
      return state;
  }
}

module.exports = mainReducer;
