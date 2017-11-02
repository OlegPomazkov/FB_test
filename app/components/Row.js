var React = require('react');
var getFileData = require("../api/api.js");

class Row extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    var rowKey = this.props.rowKey;
    var dataTemplate;
    var itemValue;

    dataTemplate = this.props.rowData.data.map(
      function(item, index){
        for(let key in item) {
          itemValue = item[key];
        }

        return <td key={'cell_item_' + rowKey +'_' + index}>{itemValue}</td>
      });
  
    return(
      <tr>  
        <td>{ this.props.rowData.name}</td>
        {dataTemplate}
      </tr>);
    }
}

module.exports = Row