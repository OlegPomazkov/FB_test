var React = require('react');
var connect = require("react-redux").connect;
var bindActionCreators = require("redux").bindActionCreators;
var toggleVisibility = require("../actions/DialogVisibilityAction.js");

class HeaderReact extends React.Component {
  constructor(props){
    super(props);
    this.state = { company: 'Company', items: [ 'Feature 1', 'Feature 2', 'Feature 3']};
  }

  onHeaderClick(e) {
  	var data = this.props.showDialog
    this.props.toggleVisibility(data);  
  }

  render() {
  	var currentColsStatus = this.props.columnsShow.map((item) => item.status);

  	var columnsTemplate = this.state.items.map(function(item, index)
          {return (
          	<th key={'head_item_' + index}
          	  className={(currentColsStatus[index] === 'true') ? '': 'none'}>
          	  {item}
          	</th>);})
    return(
      <tr onClick={this.onHeaderClick.bind(this)}>  
        <th>{this.state.company}</th>
        {columnsTemplate}
      </tr>);
    }
}

function mapStateToProps (state) {
  return {
    showDialog: state.showDialog,
    columnsShow: state.columnsShow
  }
} 

function mapDispatchToProps(dispatch) { 
  	return bindActionCreators({ toggleVisibility }, dispatch)
}


var Header = connect(mapStateToProps, mapDispatchToProps)(HeaderReact);
module.exports = Header
