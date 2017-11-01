var React = require('react');
var Header = require('./Header.js');
var Row = require('./Row.js');
 
class Table extends React.Component {
  render() {
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
 
module.exports = Table;