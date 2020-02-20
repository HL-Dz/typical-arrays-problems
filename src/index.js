
exports.min = function min (array) {
  if(array === undefined) return 0;
  if(array.length == 0) return 0;

  return array.sort((a,b)=> {return a-b})[0];
}

exports.max = function max (array) {
  if(array === undefined) return 0;
  if(array.length == 0) return 0;
  
  return array.sort((a,b)=> {return b-a})[0];
}

exports.avg = function avg (array) {
  if(array === undefined) return 0;
  if(array.length == 0) return 0;

  return array.reduce((total, elem)=> total +=elem,0) / array.length;
}
