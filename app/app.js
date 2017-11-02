var ReactDOM = require('react-dom');
var React = require('react');
var redux = require("redux");
var Provider = require("react-redux").Provider;
var configureStore = require("./store/configureStore");
var Table = require('./components/Table.js');

// ------------------------- Рендеринг компонента        --------------------------------  
   
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Table />
  </Provider>,
  document.getElementById("app")
);

// -------------------------- Получение данных           ---------------------------------
var xhr = new XMLHttpRequest();

xhr.open('GET', './app/data/smallTestData.json', true);
xhr.send();

xhr.onreadystatechange = function() {
  if (xhr.readyState != 4) return;
  if (xhr.status != 200) {
    console.log( 'Error: ', xhr.status + ': ' + xhr.statusText );   
  } else {
    var myData = JSON.parse(xhr.responseText);

    if( myData.content ) {
      // ReactDOM.render(
      // 	<Provider store={store}>
      //     <Table content={myData.content}/>
      //   </Provider>,
      //     document.getElementById("app")
      //   );
    }
  }
};
// ---------------------------------------------------------------------------------------
