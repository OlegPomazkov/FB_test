var React = require('react');
var connect = require("react-redux").connect
var bindActionCreators = require("redux").bindActionCreators

var Input = require("../components/input.js")
var List = require("../components/list.js")
var PathMap = require("../components/pathMap.js")

var mapAppears = require("../actions/mapAppears.js")
var addPoint = require("../actions/addPoint.js")
var deletePoint = require("../actions/deletePoint.js")
var changePointsOrder =  require("../actions/changePointsOrder.js")

class PathConstructor extends React.Component {
  constructor(props){
    super(props)
  }

  loadMap () {
    if( !(window.ymaps && window.ymaps.Map)) return
    if( this.props.pathMap.getCenter ) return

    var coordsArr = []
    var pathMap = new window.ymaps.Map('pathMapId', {
        center: [55.87, 37.56],
        zoom: 12
      })  
    
    coordsArr = this.props.pathPoints.map( item => item.coords )
    var pathLine = new window.ymaps.Polyline(
      coordsArr, 
      {},
      {draggable: true}
    );
    
    pathMap.geoObjects.add(pathLine)
//    pathLine.geometry.setCoordinates(coordsArr)
    this.props.mapAppears({
      map: pathMap,
      path: pathLine
    })
  }

  addPoint (e) {
    if(e.keyCode !== 13 || !this.props.isMap) return
    this.props.addPoint({
      name: e.target.value,
      coords: this.props.pathMap.getCenter()
    })
  }

  deletePoint (e) {
    this.props.deletePoint({
      index: +e.target.getAttribute('index')
    })
  }

  changePointsOrder (e) {
    this.props.changePointsOrder({
      from: e.from,
      to: e.to
    })
  }

  render() {
    return(
      <div> 
        <Input 
          addPoint={this.addPoint.bind(this)}/>
        <List
          changePointsOrder = {this.changePointsOrder.bind(this)}
          deletePoint = {this.deletePoint.bind(this)}
          pathPoints = {this.props.pathPoints} />
        <PathMap 
          pathMapClick={this.loadMap.bind(this)}
          isMap= { this.props.isMap}/>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    pathMap: state.pathMap,
    path: state.path,
    isMap: state.isMap,
    pathPoints: state.points
  }
} 

function mapDispatchToProps(dispatch) {
  	return bindActionCreators({ 
      mapAppears, 
      addPoint,
      deletePoint,
      changePointsOrder
    }, dispatch)
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(PathConstructor);
