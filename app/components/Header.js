var React = require('react');

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = { items: [ 'Company', 'Feature 1', 'Feature 2', 'Feature 3']};
  }

  render() {
    return(
      <thead>  
        {
         	this.state.items.map(function(item, index){return <th key={'head_item_' + index}>{item}</th>})
        }
      </thead>);
    }
}

module.exports = Header;