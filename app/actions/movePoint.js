var movePoint = function(data){
  return {
  	type: 'MOVE_POINT',
    payload: data
  };  
};

module.exports = movePoint;
