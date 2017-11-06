function getJSON(callback1, callback2) {
  let  url = './app/data/test-data.json';	
  let xhr = new XMLHttpRequest();

  xhr.onload = function () { 
     callback1(this.responseText);
     callback2(this.responseText);
  };
  xhr.open("GET", url, true);
  xhr.send();
}

function getFileData(callback1, callback2) {
  getJSON(data => callback1(JSON.parse(data).content));
  getJSON(data => callback2(JSON.parse(data).total));
}

module.exports = getFileData;

