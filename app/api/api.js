function getJSON(callback) {
  let  url = './app/data/smallTestData.json';	
  let xhr = new XMLHttpRequest();

  xhr.onload = function () { 
     callback(this.responseText)
  };
  xhr.open("GET", url, true);
  xhr.send();
}

function getFileData(callback) {
  getJSON(data => callback(JSON.parse(data).content)); // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}

module.exports = getFileData;

