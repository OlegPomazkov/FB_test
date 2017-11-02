var React = require('react');
var Header = require('./Header.js');
var Row = require('./Row.js');
var connect = require("react-redux").connect;
var bindActionCreators = require("redux").bindActionCreators;
var setContent = require("../actions/ContentAction.js");

 
class Table extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    var contentArray = this.props.content;
    console.log(contentArray) ;

    return(
      <table border="1" onClick={this.props.setContent}>  
        <Header/>
       	  {
       	  	contentArray.map(function(item, index){
       	  		return <Row 
       	  		  key={'row_item_' + index} 
       	  		  rowKey={index} 
       	  		  rowData={item}/>})
       	  }
      </table>
    );
  }
}

function mapStateToProps (state) {
  return {
    content: state.content
  }
} 

function mapDispatchToProps(dispatch) {
  return {
    setContent: () => dispatch(setContent)
  }
}


module.exports = connect(mapStateToProps, mapDispatchToProps)(Table);