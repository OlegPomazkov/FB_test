var React = require('react');

var placeholder = document.createElement("li");
placeholder.className = "placeholder";

class List extends React.Component {
  constructor(props){
    super(props)
  }

  dragStart(e) {
    //debugger
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.dragged);
  }

  dragEnd(e) {
    this.dragged.style.display = 'block';
 //   this.dragged.parentNode.removeChild(placeholder);
    
    // update state
//    var data = this.state.colors;
    var from = Number(this.dragged.closest('li').dataset.id);
    var to = this.over.closest('li') ? Number(this.over.closest('li').dataset.id) : from
//    if(from < to) to--;
    this.props.changePointsOrder({
      from: from,
      to: to
    }) 

//    data.splice(to, 0, data.splice(from, 1)[0]);
//    this.setState({colors: data});
  }

  dragOver(e) {
    e.preventDefault();
    this.dragged.style.display = "none";
    if(e.target.className === 'placeholder') return;
    this.over = e.target;

    console.log('OVER  ', e.target.closest('li'))

    e.target.parentNode.insertBefore(placeholder, e.target);
  }

  render() {
    var listItemsTemplate = []
    var bindedDeletePoint = this.props.deletePoint.bind(this) 
    var bindedDragEnd = this.dragEnd.bind(this) 
    var bindedDragStart = this.dragStart.bind(this)

    listItemsTemplate = this.props.pathPoints.map(function(item, index){
        return (
          <li 
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
      <div>
        <p>Текущий маршрут</p>
        { listItemsTemplate.length ? 
          <ul onDragOver={this.dragOver.bind(this)}>
            {listItemsTemplate} 
          </ul> :
          <p>У вас пока нет точек на маршруте</p>
        }
      </div>  
    );
  }
}

module.exports = List