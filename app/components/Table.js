var React = require('react');
var Header = require('./Header.js');
var Row = require('./Row.js');
var connect = require("react-redux").connect;
var bindActionCreators = require("redux").bindActionCreators;
var setContent = require("../actions/ContentAction.js");
var getFileData = require("../api/api.js");
 
class Table extends React.Component {

  constructor(props){
    super(props);
  }

  onClick() {
  	// var data =  [
   //      { "name": "ANOTHER", 
   //        "data": [
   //          { "f1": "true"},
   //          { "f2": 1},
   //          { "f3": 1}
   //        ]
   //      }
   //    ];


    getFileData(this.props.setContent);  
  }

  render() {
    var contentArray = this.props.content;
    console.log(contentArray) ;

    return(
      <table border="1" onClick={this.onClick.bind(this)}>  
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
    setContent: (data) => dispatch(setContent(data))
  }
}


module.exports = connect(mapStateToProps, mapDispatchToProps)(Table);