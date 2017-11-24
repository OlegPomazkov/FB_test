var React = require('react');

class List extends React.Component {
  constructor(props){
    super(props)
  }

  dragStart(e) {
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
  }

  dragEnd(e) {
    var from = Number(this.dragged.closest('li').dataset.id);
    var to = this.over.closest('li') ? Number(this.over.closest('li').dataset.id) : from
    this.props.changePointsOrder({
      from: from,
      to: to
    }) 
  }

  dragOver(e) {
    e.preventDefault();
    this.over = e.target;
  }

  render() {
    var listItemsTemplate = []
    var bindedDeletePoint = this.props.deletePoint.bind(this) 
    var bindedDragEnd = this.dragEnd.bind(this) 
    var bindedDragStart = this.dragStart.bind(this)

    listItemsTemplate = this.props.pathPoints.map(function(item, index){
        return (
          <li
            className='list__item' 
            key={'list_item_'+index}
            data-id={index}
            draggable='true'
            onDragEnd={bindedDragEnd}
            onDragStart={bindedDragStart}>
              <p>{ item.name }</p>
              <button
                index={index}
                onClick={bindedDeletePoint}>Удалить</button>
          </li>)
      })

    return(
      <div className='list__container'>
        <p className='list__header'>Текущий маршрут</p>
        { listItemsTemplate.length ? 
          <ul 
            className='list__list'
            onDragOver={this.dragOver.bind(this)}>
            {listItemsTemplate} 
          </ul> :
          <p className='list__placeholder'>У вас пока нет точек на маршруте</p>
        }
      </div>  
    );
  }
}

module.exports = List