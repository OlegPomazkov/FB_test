var React = require('react');
var Header = require('./Header.js');
var Row = require('./Row.js');
var connect = require("react-redux").connect;
 
class Table extends React.Component {
  render() {

    console.log('----------> ', this.props);

    return(
      <table border="1">  
        <Header/>
       	  {
       	  	this.props.content.map(function(item, index){
       	  		return <Row key={'row_item_' + index} rowKey={index} rowData={item}/>})
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

module.exports = connect(mapStateToProps)(Table);