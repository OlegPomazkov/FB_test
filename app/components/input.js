var React = require('react');

class Input extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className='input'>
        <p className='input-header'>Новая точка маршрута</p>
        <input 
          type='text' 
          placeholder='Введите наименование' 
          onKeyDown={this.props.addPoint}/>
      </div>  
    );
  }
}

module.exports = Input
