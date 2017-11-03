var React = require('react');var connect = require("react-redux").connect;
var bindActionCreators = require("redux").bindActionCreators;
var getFileData = require("../api/api.js");

class ColChooseDialogReact extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className={this.props.showDialog ? '': 'none'}>
        <h2>Просто посмотреть</h2>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    showDialog: state.showDialog
  }
} 

// function mapDispatchToProps(dispatch) { 
//     return bindActionCreators({ toggleVisibility }, dispatch)
// }


var ColChooseDialog = connect(mapStateToProps)(ColChooseDialogReact);


module.exports = ColChooseDialog