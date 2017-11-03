var React = require('react');
var ColChooseDialog = require('./ColChooseDialog.js');
var Header = require('./Header.js');
var Row = require('./Row.js');
var connect = require("react-redux").connect;
var bindActionCreators = require("redux").bindActionCreators;
var getFileData = require("../api/api.js");

var setContent = require("../actions/ContentAction.js");
 
class Table extends React.Component {

  constructor(props){
    super(props);
  }

  onTableClick() {
    getFileData(this.props.setContent);  
  }

  render() {
    var contentArray = this.props.content;
   
    return(
      <div>
        <ColChooseDialog />
        <table border="1" onClick={this.onTableClick.bind(this)}>  
          <Header/>
       	    {
       	  	  contentArray.map(function(item, index){
       	  	  return <Row 
       	  	    key={'row_item_' + index} 
       	  	    rowKey={index} 
       	  	    rowData={item}/>})
       	    }
        </table>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    content: state.content,
    showDialog: state.showDialog
  }
} 

function mapDispatchToProps(dispatch) {
  	return bindActionCreators({ setContent }, dispatch)
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Table);