var addPoint = function(data){
  return {
  	type: 'ADD_POINT',
    payload: data
  };  
};

module.exports = addPoint;
