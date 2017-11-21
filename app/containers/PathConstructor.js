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
var movePoint = require("../actions/movePoint.js")

class PathConstructor extends React.Component {
  constructor(props){
    super(props)
  }

  loadMap () {
    if( !(window.ymaps && window.ymaps.Map)) return
    if( this.props.pathMap.getCenter ) return

    var pathMap = new window.ymaps.Map('pathMapId', {
        center: [55.87, 37.56],
        zoom: 14
      })  

    this.props.mapAppears({
      map: pathMap
    })
  }

  addPoint (e) {
    if(e.keyCode !== 13 || !this.props.isMap) return
    let coords = this.props.pathMap.getCenter()
    let iconContent = e.target.value
    let bindedMovePoint = this.movePoint.bind(this)

    e.target.value = ''

    ymaps.geocode(coords).then((res) => {
      let names = [];

      res.geoObjects.each((obj) => {
        names.push(obj.properties.get('name'));
      });
      names.splice(-3)

      let placemark = new window.ymaps.Placemark(
        coords,{ 
          iconContent: iconContent,
          balloonContent:names.reverse().join(', ')
        },{
          preset: 'twirl#blueStretchyIcon',
          draggable: true,
          balloonMaxWidth:'200'
        }  
      )

      placemark.events.add("beforedragstart", function (event) {
        let coords = event.originalEvent.target.geometry.getCoordinates()
        event.originalEvent.target.uniqIndex = 'id_' + coords[0] + '_' + coords[1]
      })

      placemark.events.add("dragend", bindedMovePoint)
    
      this.props.addPoint({
        name: iconContent,
        coords: coords,
        placemark: placemark
      })
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

  movePoint (e) {
    let splitId = e.originalEvent.target.uniqIndex.split('_')
    let oldCoords = [+splitId[1], +splitId[2]]
    let newCoords = e.originalEvent.target.geometry.getCoordinates()
    let coordsArr = this.props.pathPoints.map(item => item.coords)
    let pointIndex = -1
    let bindedMovePoint = this.props.movePoint

    for (let i = 0; i < coordsArr.length; i++) {
      if (coordsArr[i][0] === oldCoords[0] && coordsArr[i][1] === oldCoords[1]) {
        pointIndex = i
        break
      }
    }

    ymaps.geocode(newCoords).then((res) => {
      let names = [];

      res.geoObjects.each((obj) => {
        names.push(obj.properties.get('name'));
      });
      names.splice(-3)

      bindedMovePoint({
        newCoords: newCoords,
        index: pointIndex,
        balloonContent: names.reverse().join(', ') 
      })
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
      changePointsOrder,
      movePoint
    }, dispatch)
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(PathConstructor);
