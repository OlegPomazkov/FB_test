var React = require('react');
var connect = require("react-redux").connect;
var bindActionCreators = require("redux").bindActionCreators;
var toggleVisibility = require("../actions/DialogVisibilityAction.js");
var {tableColumns, tableHeaders} = require("../data/tableDescription.js"); 

class HeaderReact extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      columns: tableColumns, 
      headers: tableHeaders
    };
  }

  onHeaderClick(e) {
   var data = this.props.showDialog
    this.props.toggleVisibility(data);  
  }

  render() {
    var headerRow1Template = [];
    var headerRow2Template = [];
    var currentTh;
    var numOfColsToMove;
    var numOfColsForColSpan;
    var groupId;

    for(let i = 0; i < tableColumns.length; i++){
      if(tableColumns[i].split('__')[0].split('-')[0] === 'goals') {
        numOfColsToMove = 0;
        numOfColsForColSpan = 0;
        groupId = tableColumns[i].split('__')[0].split('-')[1];
        for(let j = i; j < tableColumns.length; j++){
          if(tableColumns[j].split('__')[0].split('-')[1] === groupId) {
            numOfColsToMove += 1;
            if(this.props.columnsShow[tableColumns[j]]) {
               numOfColsForColSpan += 1;  
            }
          } else {
          	break;
          }
        }	
      	currentTh = (
      	  <th 
            key={'head_item_1_' + i} 
            colSpan={numOfColsForColSpan}
            className={numOfColsForColSpan ? '': 'none'}>
            {tableHeaders[tableColumns[i].split('__')[0]]}
          </th> 
        );
        i += (numOfColsToMove - 1);
      } else {
      	currentTh = (
      	  <th 
            key={'head_item_1_' + i} 
            rowSpan="2"
            className={this.props.columnsShow[tableColumns[i]] ? '': 'none'}>
            {tableHeaders[tableColumns[i]]}
          </th>
        );
      }
      headerRow1Template.push(currentTh);
    }
    for(let i = 0; i < tableColumns.length; i++){
      if(tableColumns[i].split('__')[0].split('-')[0] === 'goals') {
        currentTh = (
      	  <th 
            key={'head_item_2_' + i}
            className={this.props.columnsShow[tableColumns[i]] ? '': 'none'}>
            {tableHeaders[tableColumns[i].split('__')[1]]}
          </th>
        );

        headerRow2Template.push(currentTh);
      }	
    }

    return(
      <thead onClick={this.onHeaderClick.bind(this)}>
        <tr>{headerRow1Template}</tr>
        <tr>{headerRow2Template}</tr>
      </thead>  
    );
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
