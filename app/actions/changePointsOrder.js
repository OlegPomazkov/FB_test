var toggleVisibililty = function(data){
  return {
  	type: 'TOGGLE_VISIBILITY',
    payload: data
  };  
};

module.exports = toggleVisibililty;
