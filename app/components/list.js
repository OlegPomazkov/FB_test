var React = require('react');

class List extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    var listItemsTemplate = []
    var bindedDeletePoint = this.props.deletePoint 
    listItemsTemplate = this.props.pathPoints.map(function(item, index){
        return (
          <li key={'list_item_'+index}>
            <p>{ item.name }</p>
            <button
              index={index}
              onClick={bindedDeletePoint}>Удалить</button>
          </li>)
      })

    return(
      <div>
        <p>Текущий маршрут</p>
        { listItemsTemplate.length ? 
          <ul>
            {listItemsTemplate} 
          </ul> :
          <p>У вас пока нет точек на маршруте</p>
        }
      </div>  
    );
  }
}

module.exports = List