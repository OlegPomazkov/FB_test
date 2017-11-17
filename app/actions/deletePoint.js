var deletePoint = function(data){
  return {
  	type: 'DELETE_POINT',
    payload: data
  };  
};

module.exports = deletePoint;
