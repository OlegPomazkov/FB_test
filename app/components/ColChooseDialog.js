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
      if(prevState.checkboxStatus[checkboxIndex] === 'true') {
        prevState.checkboxStatus[checkboxIndex] = 'false';
      } else {
        prevState.checkboxStatus[checkboxIndex] = 'true';
      }

      return prevState;
    };
    
    this.setState(changeFunction);
  }

  onButtonOkClick (e) {
    var newColsStatusObject;
    var currentStatus = this.state.checkboxStatus;

    newColsStatusObject = this.props.columnsShow.map(
      (item, index) => {
        return {
          name: item.name,
          status: currentStatus[index]
        };  
      });
    this.props.changeColsStatus(newColsStatusObject);
    this.props.toggleVisibility(1);
  }

  onButtonCancelClick () {
    this.setState({ checkboxStatus: this.props.columnsShow.map((item) => item.status)});
    this.props.toggleVisibility(1);
  }

  render() {
    var boundedCheckboxChange = this.onCheckboxChange.bind(this);
    var statusObject = this.state.checkboxStatus;
    var namesObject = this.state.checkboxNames;

    return (
      <div className={this.props.showDialog ? '': 'none'} >
        <ul>
          {
            tableColumns.map(function(item, index){
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
            })
          }
        </ul>
        <button onClick={this.onButtonOkClick.bind(this)}>OK</button>
        <button onClick={this.onButtonCancelClick.bind(this)}>Отмена</button>
      </div>
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
    return bindActionCreators({ toggleVisibility, changeColsStatus }, dispatch)
}

var ColChooseDialog = connect(mapStateToProps, mapDispatchToProps)(ColChooseDialogReact);

module.exports = ColChooseDialog