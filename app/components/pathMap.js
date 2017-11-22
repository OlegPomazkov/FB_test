var React = require('react');

class PathMap extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div 
        className='map'
        onClick={this.props.pathMapClick}>
        { !this.props.isMap ?
        <p className='warning'> 'Click here to load map'</p> : '' }
        <div id='pathMapId' style={ {height: 400, width: 400 } }></div>
      </div>
    );
  }
}

module.exports = PathMap