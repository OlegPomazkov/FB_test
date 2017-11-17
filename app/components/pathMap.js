var React = require('react');

class PathMap extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div onClick={this.props.pathMapClick}>
        { !this.props.isMap ?
          'Click here to load map' : '' }
        <div id='pathMapId' style={ {height: 400, width: 400 } }></div>
      </div>
    );
  }
}

module.exports = PathMap