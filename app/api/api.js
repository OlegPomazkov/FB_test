class Api {
  getSmallData() {
  	
    var xhr = new XMLHttpRequest();

    xhr.open('GET', './app/data/smallTestData.json', true);
    xhr.send();

    xhr.onreadystatechange = function() {
      if (xhr.readyState != 4) return;
      if (xhr.status != 200) {
        console.log( 'Error: ', xhr.status + ': ' + xhr.statusText );   
      } else {
        var myData = xhr.responseText;
  
        console.log('Success: ', myData);
      }
    };

    return myData;   	
  }
}

module.exports = Api;


