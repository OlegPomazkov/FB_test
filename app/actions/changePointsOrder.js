var changePointsOrder = function(data){
  return {
  	type: 'CHANGE_POINTS_ORDER',
    payload: data
  };  
};

module.exports = changePointsOrder;
