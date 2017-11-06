var React = require('react');
var getFileData = require("../api/api.js");
var tableColumns = require("../data/tableDescription.js").tableColumns; 

class Row extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    var rowKey = this.props.rowKey;
    var rowTemplate = [];
    var currentTd;
    var groupId;
    var cellDataName = [];
    var goalsNumbers = {};

    this.props.goalsList.forEach((item, index) => goalsNumbers[item.goal_id] = index);
    for(let i = 0; i < tableColumns.length; i++){
      cellDataName = tableColumns[i].split('__');
      if(tableColumns[i].split('__')[0].split('-')[0] === 'goals') {
        groupId = tableColumns[i].split('__')[0].split('-')[1];
        currentTd = (
            <td 
              key={'row_item_' + rowKey + '_' + i}
              className={this.props.columnsShow[tableColumns[i]] ? '': 'none'}>
              {this.props.rowData.goals[goalsNumbers[groupId]][cellDataName[1]]}
            </td>
        );
      } else {
        if (cellDataName.length === 1 ) {
          if(cellDataName[0] === 'is_active'){
            currentTd = (
              <td 
                key={'row_item_' + rowKey + '_' + i}
                className={this.props.columnsShow[tableColumns[i]] ? '': 'none'}>
                  <input 
                    type="checkbox" 
                    checked={this.props.rowData[cellDataName[0]]}/>
              </td>
            );
          } else {
            currentTd = (
              <td 
                key={'row_item_' + rowKey + '_' + i}
                className={this.props.columnsShow[tableColumns[i]] ? '': 'none'}>
                {this.props.rowData[cellDataName[0]]}
              </td>
            );
          }  
        } else {
          currentTd = (
            <td 
              key={'row_item_' + rowKey + '_' + i}
              className={this.props.columnsShow[tableColumns[i]] ? '': 'none'}>
              {this.props.rowData[cellDataName[0]][cellDataName[1]]}
            </td>
          );
        } 
      }
      rowTemplate.push(currentTd);
    }

    return(
      <tr>  
        {rowTemplate}
      </tr>);
    }
}

module.exports = Row