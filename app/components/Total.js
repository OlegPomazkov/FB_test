var React = require('react');
var getFileData = require("../api/api.js");
var tableColumns = require("../data/tableDescription.js").tableColumns; 

class Total extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    var rowTemplate = [];
    var currentTd;
    var groupId;
    var cellDataName = [];
    var goalsNumbers = {};
    var specialTotalValue;

    this.props.goalsList.forEach((item, index) => goalsNumbers[item.goal_id] = index);
    for(let i = 0; i < tableColumns.length; i++){
      cellDataName = tableColumns[i].split('__');
      if(tableColumns[i].split('__')[0].split('-')[0] === 'goals') {
        groupId = tableColumns[i].split('__')[0].split('-')[1];
        currentTd = (
            <td 
              key={'total_item_'+ i}
              className={this.props.columnsShow[tableColumns[i]] ? '': 'none'}>
              {this.props.totalData.goals[goalsNumbers[groupId]][cellDataName[1]]}
            </td>
        );
      } else {
        if (cellDataName.length === 1 ) {
          switch(cellDataName[0]) {
            case 'is_active':
              specialTotalValue = false;
              break;
            case 'value':
              specialTotalValue = 'Total';
              break;
            case 'state':
              specialTotalValue = '';
              break;
          }
          currentTd = (
            <td 
              key={'total_item_'+ i}
              className={this.props.columnsShow[tableColumns[i]] ? '': 'none'}>
              {specialTotalValue}
            </td>
          );
        } else {
          currentTd = (
            <td 
              key={'total_item_'+ i}
              className={this.props.columnsShow[tableColumns[i]] ? '': 'none'}>
              {this.props.totalData[cellDataName[0]][cellDataName[1]]}
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

module.exports = Total