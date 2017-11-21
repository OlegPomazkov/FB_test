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

    var placemarks = []
    var lines = []
    var pathMap = new window.ymaps.Map('pathMapId', {
        center: [55.87, 37.56],
        zoom: 12
      })  
    
    this.props.pathPoints.forEach( (item, index) => {
      let placemark = new window.ymaps.Placemark(
        item.coords,{ 
          balloonContent: item.name
        },{
          draggable: true
        })

      placemarks.push(placemark)
      pathMap.geoObjects.add(placemarks[index])

      placemarks[index].events.add("beforedragstart", function (event) {
        let coords = event.originalEvent.target.geometry.getCoordinates()
        event.originalEvent.target.uniqIndex = 'id_' + coords[0] + '_' + coords[1]
      })

      placemarks[index].events.add("dragend", function (event) {
        console.log ('STOPPP!!!', event.originalEvent.target.uniqIndex)
      })
    })

    if (this.props.pathPoints.length > 1) {
      for ( let i = 1; i < this.props.pathPoints.length; i++) {
        let line = new window.ymaps.Polyline(
          [this.props.pathPoints[i-1].coords,this.props.pathPoints[i].coords],
          {},{})
        lines.push(line)
        pathMap.geoObjects.add(lines[i-1])
      }      
    }

    this.props.mapAppears({
      map: pathMap,
      placemarks: placemarks,
      lines: lines
    })
  }

  addPoint (e) {

    console.log( 'e ------------> ', e.keyCoode)

    if (e.keyCoode !== 13) return

    let placemark = new window.ymaps.Placemark(
      this.props.pathMap.getCenter(),{ 
        balloonContent: e.target.value
      },{
        draggable: true
    })

    placemark.events.add("beforedragstart", function (event) {
      let coords = event.originalEvent.target.geometry.getCoordinates()
      event.originalEvent.target.uniqIndex = 'id_' + coords[0] + '_' + coords[1]
    })

    placemark.events.add("dragend", function (event) {
      console.log ('STOPPP!!!', event.originalEvent.target.uniqIndex)
    })
    
    this.props.addPoint({
      name: e.target.value,
      coords: this.props.pathMap.getCenter(),
      placemark: placemark
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
    placemarks: state.placemarks,
    lines: state.lines,
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
