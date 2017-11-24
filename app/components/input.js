var React = require('react');

class Input extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className='input__container'>
        <p className='input__header'>Новая точка маршрута</p>
        <input
          className = 'input__input' 
          type='text' 
          placeholder='Введите наименование' 
          onKeyDown={this.props.addPoint}/>
      </div>  
    );
  }
}

module.exports = Input;
