var changeColsStatus = function(data){
  return {
  	type: 'CHANGE_COLS_STATUS',
    payload: data
  };  
};

module.exports = changeColsStatus;
