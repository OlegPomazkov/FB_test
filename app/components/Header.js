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

  render() {
    var headerRow1Template = [];
    var headerRow2Template = [];
    var currentTh;
    var numOfCols;
    var groupId;

    for(let i = 0; i < tableColumns.length; i++){
      if(tableColumns[i].split('__')[0].split('-')[0] === 'goals') {
        numOfCols = 0;
        groupId = tableColumns[i].split('__')[0].split('-')[1];
        for(let j = i; j < tableColumns.length; j++){
          if(tableColumns[j].split('__')[0].split('-')[1] === groupId) {
            numOfCols += 1;
          } else {
          	break;
          }
        }	
      	currentTh = (
      	  <th key={'head_item_1_' + i} colSpan={numOfCols}>
            {tableHeaders[tableColumns[i].split('__')[0]]}
          </th> 
        );
        i += (numOfCols - 1);
      } else {
      	currentTh = (
      	  <th key={'head_item_1_' + i} rowSpan="2">
            {tableHeaders[tableColumns[i]]}
          </th>
        );
      }
      headerRow1Template.push(currentTh);
    }
    for(let i = 0; i < tableColumns.length; i++){
      if(tableColumns[i].split('__')[0].split('-')[0] === 'goals') {
      	currentTh = (
      	  <th key={'head_item_2_' + i}>
            {tableHeaders[tableColumns[i].split('__')[1]]}
          </th>
        );

        headerRow2Template.push(currentTh);
      }	
    }

    return(
      <thead>
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


// class HeaderReact extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = { company: 'Company', items: [ 'Feature 1', 'Feature 2', 'Feature 3']};
//   }

//   onHeaderClick(e) {
//   	var data = this.props.showDialog
//     this.props.toggleVisibility(data);  
//   }

//   render() {
//   	var currentColsStatus = this.props.columnsShow.map((item) => item.status);

//   	var columnsTemplate = this.state.items.map(function(item, index)
//           {return (
//           	<th key={'head_item_' + index}
//           	  className={(currentColsStatus[index] === 'true') ? '': 'none'}>
//           	  {item}
//           	</th>);})
//     return(
//       <tr onClick={this.onHeaderClick.bind(this)}>  
//         <th>{this.state.company}</th>
//         {columnsTemplate}
//       </tr>);
//     }
// }
