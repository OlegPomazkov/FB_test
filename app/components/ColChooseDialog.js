var React = require('react');var connect = require("react-redux").connect;
var bindActionCreators = require("redux").bindActionCreators;
var getFileData = require("../api/api.js");
var toggleVisibility = require("../actions/DialogVisibilityAction.js");
var changeColsStatus = require("../actions/ColsStatusAction.js");

class ColChooseDialogReact extends React.Component {
  constructor(props){
    super(props);
    this.state =  { checkboxStatus: this.props.columnsShow.map((item) => item.status)};
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
    }
    
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
    var itemsArray = this.props.columnsShow;
    var boundedCheckboxChange = this.onCheckboxChange.bind(this);
    var statusArray = this.state.checkboxStatus;

    return (
      <div className={this.props.showDialog ? '': 'none'} >
        <ul>
          {
            itemsArray.map(function(item, index){
              var status

              if (statusArray[index] === 'true') {
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
                <p>{item.name}</p>
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