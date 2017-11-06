var React = require('react');var connect = require("react-redux").connect;
var bindActionCreators = require("redux").bindActionCreators;
var getFileData = require("../api/api.js");
var toggleVisibility = require("../actions/DialogVisibilityAction.js");
var changeColsStatus = require("../actions/ColsStatusAction.js");
var {tableColumns, tableHeaders} = require("../data/tableDescription.js");

class ColChooseDialogReact extends React.Component {
  constructor(props){
    super(props);

    this.state =  { 
      checkboxStatus: this.setCheckboxStatus(),
      checkboxNames: this.setCheckboxNames()
    };
  }  

  setCheckboxStatus() {
    let statusObject = {};

    for ( let key in this.props.columnsShow) {
      statusObject[key] =  this.props.columnsShow[key] ? 'true' : 'false';
    }

    return statusObject;
  }
  
  setCheckboxNames() {
    let namesObject = {};
    let currentName;

    for ( let i = 0; i < tableColumns.length; i++ ) {
      currentName = tableColumns[i].split('__'); 
      if(currentName[0].split('-')[0] === 'goals') {
        namesObject[tableColumns[i]] = tableHeaders[currentName[0]] + ': ' + tableHeaders[currentName[1]];
      } else {
        if (currentName.length === 1) {
          namesObject[tableColumns[i]] = tableHeaders[currentName[0]];
        } else {
          namesObject[tableColumns[i]] = tableHeaders[tableColumns[i]];
        } 
       }
    }

    return namesObject;
  }

  onCheckboxChange (e) {
    var checkboxIndex =  e.target.getAttribute('checkboxindex');

    var changeFunction =function(prevState) {
      if(prevState.checkboxStatus[tableColumns[checkboxIndex]] === 'true') {
        prevState.checkboxStatus[tableColumns[checkboxIndex]] = 'false';
      } else {
        prevState.checkboxStatus[tableColumns[checkboxIndex]] = 'true';
      }

      return prevState;
    };
    
    this.setState(changeFunction);
  }

  onButtonOkClick () {
    var currentStatus = this.state.checkboxStatus;

    var getNewColsStatusAndVisibilityObjects = function() {
      var newColsStatusObject = {};
      var newVisbilityObject = {};
      var keyParts;
  
      for (let key in currentStatus) {
        newColsStatusObject[key] = (currentStatus[key] === 'true') ? true : false;  
      }
      for (let key in newColsStatusObject) {
        keyParts = key.split('__');
        if (keyParts.length === 1) {
          newVisbilityObject[keyParts[0]] = newColsStatusObject[key];
        } else {
          if( !newVisbilityObject[keyParts[0]] ) newVisbilityObject[keyParts[0]] = {};
          newVisbilityObject[keyParts[0]][keyParts[1]] = newColsStatusObject[key];
        }
      }
      return { 
        columnsShow: newColsStatusObject,
        visibility: newVisbilityObject
      };  
    };
    this.props.changeColsStatus(getNewColsStatusAndVisibilityObjects());
    this.props.toggleVisibility(1);
  }

  onButtonCancelClick () {
    this.setState({ checkboxStatus: this.setCheckboxStatus()});
    this.props.toggleVisibility(1);
  }

  render() {
    var boundedCheckboxChange = this.onCheckboxChange.bind(this);
    var statusObject = this.state.checkboxStatus;
    var namesObject = this.state.checkboxNames;
    var currentFilter = this.props.chooseFilter;
    var rowsTemplate;

    rowsTemplate = tableColumns.map(function(item, index){
       if( index < 3 ) return; // Первые 3 столбца видны всегда

      if(item.split('__')[0].split('-')[0] === 'goals') {
        if(item.split('__')[0] !== currentFilter) return;
      } else {
        if(currentFilter !== 'not_goal')  return; 
      }

      var status

      if (statusObject[item] === 'true') {
        status = 'checked';
      } else {
        status = '';
      }

      return (<li key={'column_name_'+index}>
        <input 
          type="checkbox" 
          checked={status}
          checkboxindex = {index}
          onChange={boundedCheckboxChange}/>
         <p>{namesObject[item]}</p>
      </li>);
    });
    if (rowsTemplate.length === 0) return;

    return (
      <div className={'choose-dialog-background ' + (this.props.showDialog ? '': 'none')}> 
        <div className='choose-dialog'>
          <ul>
            { rowsTemplate }
          </ul>
          <button onClick={this.onButtonOkClick.bind(this)}>OK</button>
          <button onClick={this.onButtonCancelClick.bind(this)}>Отмена</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    showDialog: state.showDialog,
    columnsShow: state.columnsShow,
    chooseFilter: state.chooseFilter
  }
} 

function mapDispatchToProps(dispatch) { 
    return bindActionCreators({ toggleVisibility, changeColsStatus }, dispatch)
}

var ColChooseDialog = connect(mapStateToProps, mapDispatchToProps)(ColChooseDialogReact);

module.exports = ColChooseDialog