var React = require('react');
var connect = require("react-redux").connect;
var bindActionCreators = require("redux").bindActionCreators;
var toggleVisibility = require("../actions/DialogVisibilityAction.js");

class HeaderReact extends React.Component {
  constructor(props){
    super(props);
    this.state = { items: [ 'Company', 'Feature 1', 'Feature 2', 'Feature 3']};
  }

  onHeaderClick(e) {
  	var data = this.props.showDialog
    this.props.toggleVisibility(data);  
  }

  render() {
    return(
      <thead onClick={this.onHeaderClick.bind(this)}>  
        {
         	this.state.items.map(function(item, index){return <th key={'head_item_' + index}>{item}</th>})
        }
      </thead>);
    }
}

function mapStateToProps (state) {
  return {
    showDialog: state.showDialog
  }
} 

function mapDispatchToProps(dispatch) { 
  	return bindActionCreators({ toggleVisibility }, dispatch)
}


var Header = connect(mapStateToProps, mapDispatchToProps)(HeaderReact);
module.exports = Header
