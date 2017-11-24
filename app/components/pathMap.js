var React = require('react');

class PathMap extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div 
        className='map__container'
        onClick={this.props.pathMapClick}>
        { !this.props.isMap ?
        <p className='map__placeholder'>Карта загружается ... </p> : '' }
        <div style={ {height: 377, width: 400 } }
          id='pathMapId' 
          className='map__map'></div>
      </div>
    );
  }
}

module.exports = PathMap