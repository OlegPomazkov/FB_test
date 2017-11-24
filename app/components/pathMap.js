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
        <p className='map__placeholder'> 'Click here to load map'</p> : '' }
        <div style={ {height: 400, width: 400 } }
          id='pathMapId' 
          className='map__map'></div>
      </div>
    );
  }
}

// style={ {height: 400, width: 400 } }

module.exports = PathMap